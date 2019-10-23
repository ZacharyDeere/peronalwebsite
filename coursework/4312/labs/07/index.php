<!--
     Zachary Deere 
     CS 4312
     Lab 07
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 07</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>

<body>
	<div>
    <?php
        function primeFactors($num) {
            echo "$num = ";
            $factor = 2;
            while ($num > 1) {
                if ($num % $factor == 0) {
                    echo " $factor";
                    $num /= $factor;
                    $power = 1;
                    while ($num % $factor == 0) {
                        $num /= $factor;
                        $power = $power + 1;
                    }
                    echo "<sup>$power</sup>";
        
                    if ($num != 1)
                        echo " * ";
                } else {
                    $factor = $factor + 1;
                }
            }
        }
    
        echo "Zachary Deere - CS 4312 - Lab 07<br /><br />\n";
        
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
        
        if (count($myArgvArray) != 1 || empty($argv))
        {
            echo "This script expects one argument.<br />\n";
            goto end;
        }
        
        $num = $myArgvArray[0];
        
        if (!is_numeric($num)) {
            echo "This script expects a numeric argument.";
            goto end;
        }
        
        if ($num < 2) {
            echo "This script expects a numeric argument greater than 1.";
            goto end;
        }
        
        primeFactors($num);
        
        echo "<br />";
        
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