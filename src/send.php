<?php
$to = "mnataniel2001@gmail.com";
$subject = "Обратная связь";
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = "Имя: $name\nТелефон: $phone";
$headers = "From: mnataniel2001@gmail.com\r\n" .
           "Reply-To: mnataniel2001@gmail.com\r\n" .
           "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);

echo "Ваше сообщение было успешно отправлено!";
?>
