<?php 
	extract($_POST);
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);

	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'notquion@gmail.com';
	$mail->Password = 'veccjmollmqgeejr';
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;

	$mail->setFrom($email);
	$mail->addAddress('notquion@gmail.com');

	$mail->isHTML(true);

	$mail->Subject = "Portfolio Message";
	$mail->Body = $body;

	if($mail->send()){
		echo "Success";
	} else {
		echo "Fail";
	} 
?>