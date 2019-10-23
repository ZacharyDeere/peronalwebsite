<!--
     Zachary Deere 
     CS 4312
     Lab 13
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 13</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>
<body>
	<div>
	<?php
		echo "Zachary Deere - CS 4312 - Lab 13<br /><br />";
		
		// Obtain the data following the ? in the URL via which the page was
		// accessed.
		$argv = $_SERVER['QUERY_STRING'];
		
		// Replace all occurrences of %20 with a space character. If URLs
		// contain spaces when sent to a server, they are transformed into
		// %20. The two characters following % are considered hexadecimal
		// values and represent the character's ASCII code. 20 hex is equal to
		// 32 decimal, the ASCII representation for a space character.
		$argv = str_replace("%20"," ",$argv);
		
		// Use the builtin function trim to remove leading and trailing
		// whitespace characters.
		$argv = trim($argv);
		
		// Use the builtin function preg_split to tokenize the string $argv,
		// using the space character as a delimiter.  The delimiter can consist
		// of a single space or multiple spaces.  This function returns an
		// array of the split string $argv.
		$myArgvArray = preg_split("/ +/", $argv);
		
		if (count($myArgvArray) != 1 ||
			(count($myArgvArray) == 1 && strlen($myArgvArray[0]) == 0))
		{
			echo "This script expects one argument.<br />\n";
			goto end;
		}
		
		$ssNumber = $myArgvArray[0];
		
		if (!is_numeric($ssNumber))
		{
			echo "This script expects a numeric argument.<br />\n";
			goto end;
		}
		
		if (preg_match("/^[0-9]{9}$/", $ssNumber) === 0)
		{
			echo "This script expects a number with 9 digits.<br />\n";
			goto end;
		}
        
        if (substr($ssNumber, 0, 1) == 0 && substr($ssNumber, 1, 1) == 0 && substr($ssNumber, 2, 1) == 0) {
            echo $ssNumber . " is invalid";
            goto end;
        }
        
		$pattern  = "/^";
		$pattern .= "([0-9]{3})";
		$pattern .= "([0-9][1-9])";
		$pattern .= "([0-9]{3}[1-9])";
		$pattern .= "$/";
		
		if (preg_match($pattern, $ssNumber, $matches))
		{
			echo $ssNumber, " is valid";
			$first = $matches[1];
			$middle = $matches[2];
			$last = $matches[3];
			echo " and formatted as $first-$middle-$last.";
		}
		else
		{
			echo $ssNumber, " is invalid";
		}
		
		echo "<br />\n";
		
		end:
	?>
	</div>
	
	<p>
		<a href="http://validator.w3.org/check?uri=referer">
		  <img src="http://www.w3.org/Icons/valid-xhtml10"
		   alt="Valid XHTML 1.0 Strict" height="31" width="88" />
		</a>
	</p>
</body></html>