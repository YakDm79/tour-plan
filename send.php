<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$subscribe = $_POST['subscribe'];

// в зависимости от пришедшей формы формируем сообщение:
if(isset($_POST['subscribe'])){
    // если есть что-то в $_POST['email']
    $title = "Новая подписка Tour Plan";
    $body = 'User mail: ' . $_POST['subscribe'];
    
} else {
    // если нет, отправлена форма с телефоном и пр.
    $title = "Новое обращение Tour Plan";
    $body = "
    <h2>Новое письмо</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    "
    
;}


// Формирование самого письма
// $title = "Новое обращение Tour Plan";
// $body = "
// <h2>Новое письмо</h2>
// <b>Имя:</b> $name<br>
// <b>Телефон:</b> $phone<br><br>
// <b>Электронный адрес:</b> $email<br><br>
// <b>Сообщение:</b><br>$message
// ";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'yakdm.web@gmail.com'; // Логин на почте
    $mail->Password   = 'kqcpfncvhkuwziai'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('yakdm.web@gmail.com', 'Дмитрий Яковлев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('gav1@yandex.ru');  
    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// header('Location: thankyou.html');

if(isset($_POST['subscribe'])){
    // если есть что-то в $_POST['email']
    header('Location: email.html');
    
} else {
    // если нет, отправлена форма с телефоном и пр.
    header('Location: thankyou.html');
    
;}