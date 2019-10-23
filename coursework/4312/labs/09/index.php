<!--
     Zachary Deere 
     CS 4312
     Lab 09
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 09</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>
<body>
	<div>
    <?php
	
		function validity($num) {
			if ($num % 10 == 0) {
				printf("%8s", "Valid");
			} else {
				printf("%8s", "Invalid");
			}
			return;
		}
        
        echo "Zachary Deere - CS 4312 - Lab 09<br /><br />";
        
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
		
		$accNum = $myArgvArray[0];
		$startingAcctNum = $accNum;
	
        if (count($myArgvArray) != 1 || strlen($accNum) < 1)
        {
            echo "This script expects one argument.<br />\n";
            goto end;
        }
        
		if (strlen($accNum) > 16) {
			echo "This script expects an account number with 16 or fewer digits.<br />\n";
			goto end;
		}
		
		if (!is_numeric($accNum)) {
			echo "This script expects a numeric argument.";
			goto end;
		}
		
		
		$sum = 0;
		if  (strlen($accNum)% 2 == 0) {
			$oddEvenSwitch = false;
		} else {
			$oddEvenSwitch = true;
		}
		
		while (!empty($accNum)) {
			if ($oddEvenSwitch == true) {
				$sum += substr($accNum, 0, 1);
				$accNum = substr($accNum, 1);
				$oddEvenSwitch = false;
			} else {
				$tempSum = substr($accNum, 0, 1);
				$tempSum = $tempSum * 2;
				if ($tempSum > 9) {
					$tempSum2 = (floor($tempSum / 10)) + ($tempSum % 10);
					$sum += $tempSum2;
				} else {
					$sum += $tempSum;
				}
				$accNum = substr($accNum, 1);
				$oddEvenSwitch = true;
			}
		}
		echo "<pre>";
		echo "--------------------------------------";
		echo "<br /><br />";
		printf("%16s", "Account Number");
		echo "   ";
		printf("%8s", "Luhn Sum");
		echo "   ";
		printf("%8s", "Validity");
		echo "<br /><br />";
		echo "--------------------------------------";
		echo "<br /><br />";
		printf("%16d",$startingAcctNum);
		echo "   ";
		printf("%8d", $sum);
		echo "   ";
		validity($sum);
		echo "<br /><br />";
		echo "--------------------------------------<br />";
		echo "</pre>";
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