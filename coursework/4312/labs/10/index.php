<!--
     Zachary Deere 
     CS 4312
     Lab 10
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 10</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>
<body>
	<div>
	<?php
	
	function convertNumber($number) {
		list($integer, $fraction) = explode(".", (string) $number);
		$output = "";
		if ($integer{0} == "0") {
			$output .= "zero";
		} else {
			$integer = str_pad($integer, 36, "0", STR_PAD_LEFT);
			$group   = rtrim(chunk_split($integer, 3, " "), " ");
			$groups  = explode(" ", $group);
			$groups2 = array();
			foreach ($groups as $g) {
				$groups2[] = convertThreeDigit($g{0}, $g{1}, $g{2});
			}
			for ($z = 0; $z < count($groups2); $z++) {
				if ($groups2[$z] != "") {
					$output .= $groups2[$z] . convertGroup(11 - $z) . (
							$z < 11
							&& !array_search('', array_slice($groups2, $z + 1, -1))
							&& $groups2[11] != ''
							&& $groups[11]{0} == '0'
								? " "
								: " "
					);
				}
			}
		$output = rtrim($output, ", ");
	}

		if ($fraction > 0) {
			$output .= " point";
			for ($i = 0; $i < strlen($fraction); $i++) {
				$output .= " " . convertDigit($fraction{$i});
			}
		}
		return $output;
	}

	function convertGroup($index) {
		switch ($index) {
			case 4:
				return " trillion";
			case 3:
				return " billion";
			case 2:
				return " million";
			case 1:
				return " thousand";
			case 0:
				return "";
		}
	}
	
	function convertThreeDigit($digit1, $digit2, $digit3) {
		$buffer = "";
	
		if ($digit1 == "0" && $digit2 == "0" && $digit3 == "0") {
			return "";
		}
		
		if ($digit1 != "0") {
			$buffer .= convertDigit($digit1) . " hundred";
			if ($digit2 != "0" || $digit3 != "0") {
				$buffer .= " ";
			}
		}
		
		if ($digit2 != "0") {
			$buffer .= convertTwoDigit($digit2, $digit3);
		} else if ($digit3 != "0") {
			$buffer .= convertDigit($digit3);
		}
		
		return $buffer;
	}
	
	function convertTwoDigit($digit1, $digit2) {
		if ($digit2 == "0") {
			switch ($digit1) {
				case "1":
					return "ten";
				case "2":
					return "twenty";
				case "3":
					return "thirty";
				case "4":
					return "forty";
				case "5":
					return "fifty";
				case "6":
					return "sixty";
				case "7":
					return "seventy";
				case "8":
					return "eighty";
				case "9":
					return "ninety";
			}
		} else if ($digit1 == "1") {
			switch ($digit2) {
				case "1":
					return "eleven";
				case "2":
					return "twelve";
				case "3":
					return "thirteen";
				case "4":
					return "fourteen";
				case "5":
					return "fifteen";
				case "6":
					return "sixteen";
				case "7":
					return "seventeen";
				case "8":
					return "eighteen";
				case "9":
					return "nineteen";
			}
		} else {
			$temp = convertDigit($digit2);
			switch ($digit1) {
				case "2":
					return "twenty $temp";
				case "3":
					return "thirty $temp";
				case "4":
					return "forty $temp";
				case "5":
					return "fifty $temp";
				case "6":
					return "sixty $temp";
				case "7":
					return "seventy $temp";
				case "8":
					return "eighty $temp";
				case "9":
					return "ninety $temp";
			}
		}
	}
	
	function convertDigit($digit) {
		switch ($digit) {
			case "0":
				return "zero";
			case "1":
				return "one";
			case "2":
				return "two";
			case "3":
				return "three";
			case "4":
				return "four";
			case "5":
				return "five";
			case "6":
				return "six";
			case "7":
				return "seven";
			case "8":
				return "eight";
			case "9":
				return "nine";
		}
	}

		echo "Zachary Deere - CS 4312 - Lab 10<br /><br />";
		
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
		
		// echo count($myArgvArray) . "<br />";
		
		$number = $myArgvArray[0];
		$startingAcctNum = $accNum;
	
		if (count($myArgvArray) != 1 || strlen($number) < 1)
		{
			echo "This script expects one argument.<br />\n";
			goto end;
		}
		
		if (strlen($number) > 12) {
			echo "This script expects a number with 12 or fewer digits.<br />\n";
			goto end;
		}
		
		if (!is_numeric($number)) {
			echo "This script expects a numeric argument.";
			goto end;
		}
		echo "$number = ";
		echo convertNumber("$number");

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