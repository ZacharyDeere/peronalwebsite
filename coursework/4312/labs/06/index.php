<!--
     Zachary Deere 
     CS 4312
     Lab 06
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 06</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>

<body>
	<div>
    <?php
    
        // Function dayOfWeek takes three arguments, each representing the
        // month, day and year of a date.  The function returns r which
        // represents the value of the day that corresponds to the date.
        function dayOfWeek($month, $day, $year)
        {
            if ($month == 1) {
                $a = 11;
                $year = $year - 1;
            }  else if ($month == 2) {
                $a = 12;
                $year = $year - 1;
            } else {
                $a = $month - 2;
            }
            
            $b = $day;
            $c = $year % 100;
            $d = floor($year / 100);
            
            $w = floor((13 * $a - 1) / 5);
            $x = floor($c / 4);
            $y = floor($d / 4);
            $z = $w + $x + $y + $b + $c - (2 * $d);
            $r = $z % 7;
            
            return $r;
        }
        
        // Function printDayOfWeek takes one arguments, that represents
        // the value of a day.  The function returns nothing but echos
        // the correct day depending on the value of r.
        function printDayOfWeek($r)
        {
            switch ($r) {
                case 0:
                    echo "Sunday";
                    break;
                case 1:
                case -6:
                    echo "Monday";
                    break;
                case 2:
                case -5:
                    echo "Tuesday";
                    break;
                case 3:
                case -4:
                    echo "Wednesday";
                    break;
                case 4:
                case -3:
                    echo "Thursday";
                    break;
                case 5:
                case -2:
                    echo "Friday";
                    break;
                case 6:
                case -1:
                    echo "Saturday";
                    break;
            }
            return;
        }
        
        echo "Zachary Deere - CS 4312 - Lab 06<br /><br />\n";
        
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
        
        if (count($myArgvArray) != 3)
        {
            echo "This script expects three arguments separated by spaces.<br />\n";
            goto end;
        }
        
        $month = $myArgvArray[0];
        $day = $myArgvArray[1];
        $year = $myArgvArray[2];
        
		if (!is_numeric($month)) {
			echo "This script expects the month to be numeric.";
			goto end;
		}
		if (!is_numeric($day)) {
			echo "This script expects the day to be numeric.";
			goto end;
		}
		if (!is_numeric($year)) {
			echo "This script expects the year to be numeric.";
			goto end;
		}
		
        printDayOfWeek(dayOfWeek($month, $day, $year));
        
        echo ", $month/$day/$year<br />";
        
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