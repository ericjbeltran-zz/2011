<?php 
	$emailTo = 'testmail@templatesquare.com';
	$subject = 'Genesis Contact Form';
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$url=$_REQUEST['url'];
	$msg=$_REQUEST['msg'];
	
	$body = "Name: $name \n\nEmail: $email \n\nUrl: $url \n\nMessage: $msg";
	$headers = 'From: '.$name.' <'.$email.'>' . "\r\n" . 'Reply-To: ' . $email;
	
	mail($emailTo, $subject, $body, $headers);
?>