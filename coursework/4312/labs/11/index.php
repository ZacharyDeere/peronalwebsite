<!--
     Zachary Deere 
     CS 4312
     Lab 11
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 11</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>
<body>
	<div>
	<?php
		echo "Zachary Deere - CS 4312 - Lab 11<br /><br />";
		
		$email = array(
			"jsmith123@example.org",
			"john.smith.mail@example.org",
			"john.smith@example.org",
			"john.smith@example",
			"jsmith123@mail.example.org");


		foreach ($email as $emailAddress){
			echo "The email address &ldquo;" . $emailAddress . "&rdquo; ";
			if (preg_match("/^(([A-Za-z]+\d+)|" .
			"([A-Za-z]+\.[A-Za-z]+))" .
			"@((mail\.)?)example\.org$/i",
			$emailAddress)==1)
				echo " is a valid e-mail address.<br />";
			else
				echo " is not a valid e-mail address.<br />";
		}
	?>
	</div>
	
	<p>
		<a href="http://validator.w3.org/check?uri=referer">
		  <img src="http://www.w3.org/Icons/valid-xhtml10"
		   alt="Valid XHTML 1.0 Strict" height="31" width="88" />
		</a>
	</p>
</body></html>