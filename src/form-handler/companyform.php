<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://www.taishin-keibi.co.jp',
    'https://taishin-keibi.co.jp',
];

if ($origin && in_array($origin, $allowed, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Vary: Origin");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

/* ---------- Helpers ---------- */
function json_out(int $status, array $data): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function post(string $key): string {
    return trim((string)($_POST[$key] ?? ''));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    json_out(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$BASE = '/home/xs861809/tglobalexpansion.co.jp'; 
$config = require $BASE . '/mailer/config.mail.php';

require $BASE . '/mailer/PHPMailer/src/Exception.php';
require $BASE . '/mailer/PHPMailer/src/PHPMailer.php';
require $BASE . '/mailer/PHPMailer/src/SMTP.php';

/* ---------- Determine Form Type ---------- */
$formType = post('formType'); // 'company' or 'jobseeker'

/* ---------- Validation & Data Prep ---------- */
$email = post('email');
$agreeToTerms = post('agreeToTerms');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_out(400, ['ok' => false, 'error' => 'Invalid email address.']);
}

if ($agreeToTerms !== 'true' && $agreeToTerms !== '1' && $agreeToTerms !== 'on') {
    json_out(400, ['ok' => false, 'error' => 'You must agree to the privacy policy.']);
}

$mail = new PHPMailer(true);
$subject = "";
$body = "";
$replyToName = "";

if ($formType === 'jobseeker') {
    /* ---------- Job Seeker Logic ---------- */
    $name           = post('name');
    $nameEn         = post('nameEn');
    $phone          = post('phone');
    $nationality    = post('nationality');
    $currentLoc     = post('currentLocation');
    $jpLevel        = post('japaneseLevel');
    $jlpt           = post('jlpt');
    $jobType        = post('desiredJobType');
    $desiredLoc     = post('desiredLocation');
    $experience     = post('experience');
    $education      = post('education');
    $skills         = post('skills');
    $message        = post('message');

    if ($name === '' || $phone === '' || $nationality === '') {
        json_out(400, ['ok' => false, 'error' => 'Please fill in the required fields.']);
    }

    $replyToName = $name;
    $subject = "Job Seeker Registration: {$name} ({$nationality})";
    
    $body = "--- New Job Seeker Registration ---\n\n" .
            "Name: {$name} ({$nameEn})\n" .
            "Email: {$email}\n" .
            "Phone: {$phone}\n" .
            "Nationality: {$nationality}\n" .
            "Current Location: {$currentLoc}\n\n" .
            "Japanese Level: {$jpLevel} (JLPT: {$jlpt})\n" .
            "Desired Job: {$jobType}\n" .
            "Desired Location: {$desiredLoc}\n" .
            "Experience: {$experience}\n" .
            "Education: {$education}\n" .
            "Skills: {$skills}\n\n" .
            "Message:\n{$message}\n";

    // Handle Attachments
    if (!empty($_FILES)) {
        foreach ($_FILES as $file) {
            if ($file['error'] === UPLOAD_ERR_OK) {
                $mail->addAttachment($file['tmp_name'], $file['name']);
            }
        }
    }

} else {
    /* ---------- Company Logic ---------- */
    $companyName    = post('companyName');
    $companyNameEn  = post('companyNameEn');
    $department     = post('department');
    $representative = post('representative');
    $phone          = post('phone');
    $address        = post('address');
    $employees      = post('employees');
    $industry       = post('industry');
    $inquiryType    = post('inquiryType');
    $message        = post('message');

    if ($companyName === '' || $representative === '' || $message === '') {
        json_out(400, ['ok' => false, 'error' => 'Required fields are missing.']);
    }

    $replyToName = $representative;
    $subject = "Business Inquiry: {$companyName} ({$inquiryType})";

    $body = "--- New Business Inquiry Notification ---\n\n" .
            "Company Name: {$companyName} ({$companyNameEn})\n" .
            "Representative: {$representative}\n" .
            "Department: {$department}\n" .
            "Email: {$email}\n" .
            "Phone: {$phone}\n" .
            "Address: {$address}\n\n" .
            "Industry: {$industry}\n" .
            "Employees: {$employees}\n" .
            "Inquiry Type: {$inquiryType}\n\n" .
            "Message:\n{$message}\n";
}

/* ---------- PHPMailer Configuration ---------- */
try {
    $mail->isSMTP();
    $mail->Host       = (string)$config['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = (string)$config['username'];
    $mail->Password   = (string)$config['password'];
    $mail->Port       = (int)$config['port'];
    $mail->CharSet    = 'UTF-8';

    $secure = strtolower((string)($config['secure'] ?? 'ssl'));
    $mail->SMTPSecure = ($secure === 'tls') 
        ? PHPMailer::ENCRYPTION_STARTTLS 
        : PHPMailer::ENCRYPTION_SMTPS;

    $mail->setFrom((string)$config['from_email'], (string)$config['from_name']);
    $mail->addAddress((string)$config['to']);
    $mail->addReplyTo($email, $replyToName);
    
    $mail->Subject = $subject;
    $mail->Body    = $body;

    $mail->send();

    json_out(200, ['ok' => true, 'message' => 'Sent successfully.']);
    
} catch (Exception $e) {
    json_out(500, ['ok' => false, 'error' => $mail->ErrorInfo ?: 'Mailer error occurred.']);
}