<!--
     Zachary Deere 
     CS 4312
     Lab 12
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 12</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>
<body>
	<div>
	<?php

		echo "Zachary Deere - CS 4312 - Lab 12<br /><br />";
		
		// Obtain the data following the ? in the URL via which the page was
		// accessed.
		$argv = $_SERVER['QUERY_STRING'];
		
		// Replace all occurrences of %20 with a space character. If URLs
		// contain spaces when sent to a server, they are transformed into
		// %20. The two characters following % are considered hexadecimal
		// values and represent the character's ASCII code. 20 hex is equal to
		// 32 decimal, the ASCII representation for a space character.
		$argv = str_replace("%20"," ",$argv);
        
		// Use the builtin function preg_split to tokenize the string $argv,
		// using the space character as a delimiter.  The delimiter can consist
		// of a single space or multiple spaces.  This function returns an
		// array of the split string $argv.
		
		$password = $argv;
        if (preg_match("/[0-9]/", $password)) {
           $isNumber = true;
        } else {
           $isNumber = false;
        }
        
        if (preg_match("/[a-z]/", $password)) {
           $isLower = true;
        } else {
           $isLower = false;
        }
        
        if (preg_match("/[A-Z]/", $password)) {
           $isUpper = true;
        } else {
           $isUpper = false;
        }
        
        if (preg_match("/\\s/", $password) || empty($password)) {
           $isSpace = false;
        } else {
           $isSpace = true;
        }
        
        if (preg_match("/[^a-zA-Z0-9]/", $password)) {
           $isSpecial = true;
        } else {
           $isSpecial = false;
        }
        
		if (strlen($password) >= 8 && strlen($password) <= 16)
		{
           $isLength = true;
		} else {
           $isLength = false;
        }
        
        if ($isNumber && $isLower && $isUpper && $isSpace && $isSpecial && $isLength) {
            echo "$password is a strong password.";
        } else {
            echo "$password is not a strong password.<br /><br />";
            echo "
            <table border='1' cellpadding='3' cellspacing='3'>
                <tbody>
                    <tr>
                        <th>Status</th>
                        <th align='left'>Reason</th>
                    </tr>
                    <tr>
                        <td align='center'>". ($isNumber ? "Yes" : "No" )."</td>
                        <td>Has at least one number</td>
                    </tr>
                    <tr>
                        <td align='center'>". ($isLower ? "Yes" : "No" )."</td>
                        <td>Has at least one lowercase letter</td>
                    </tr>
                    <tr>
                        <td align='center'>". ($isUpper ? "Yes" : "No" )."</td>
                        <td>Has at least one uppercase letter</td>
                    </tr>
                    <tr>
                        <td align='center'>". ($isSpace ? "Yes" : "No" )."</td>
                        <td>Has no spaces</td>
                    </tr>
                    <tr>
                        <td align='center'>". ($isSpecial ? "Yes" : "No" )."</td>
                        <td>Has at least one character that is not a letter or number</td>
                    </tr>
                    <tr>
                        <td align='center'>". ($isLength ? "Yes" : "No" )."</td>
                        <td>8 ≤ length ≤ 16</td>
                    </tr>
                </tbody>
            </table>";
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