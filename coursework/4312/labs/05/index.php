<!--
     Zachary Deere 
     CS 4312
     Lab 05
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 05</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>

<body>
	<div>
    <?php
        // Function isTriangle takes three arguments, each representing the
        // length of a side of a triangle.  The function returns true if the
        // arguments represent the lengths of the sides of a triangle and false
        // otherwise.
        function isTriangle($side1, $side2, $side3)
        {
            if ((($side1 + $side2) > $side3) && (($side2 + $side3) > $side1) && (($side1 + $side3) > $side2)) {
                return true;
            } else {
                return false;
            }
        }
        
        // Function isEquilateral takes three arguments, each representing the
        // length of a side of a triangle.  The function returns true if the
        // three sides represent a triangle and are equal and false otherwise.
        function isEquilateral($side1, $side2, $side3)
        {
            if ($side1 == $side2 && $side2 == $side3) {
                return true;
            } else {
                return false;
            }
        }
        
        // Function isIsosceles takes three arguments, each representing the
        // length of a side of a triangle.  The function returns true if the
        // three sides represent a triangle and at least two are equal and
        // false otherwise. 
        function isIsosceles($side1, $side2, $side3)
        {
            if (($side1 == $side2 || $side2 == $side3 || $side1 == $side3)) {
                return true;
            } else {
                return false;
            }
        }
        
        // Function isScalene takes three arguments, each representing the
        // length of a side of a triangle.  The function returns true if the
        // three sides represent a triangle and no two are equal and
        // false otherwise. 
        function isScalene($side1, $side2, $side3)
        {
            if ($side1 != $side2 && $side2 != $side3 && $side1 != $side3) {
                return true;
            } else {
                return false;
            }
        }
        
        echo "Zachary Deere - CS 4312 - Lab 05<br /><br />\n";
        
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
        
        $side1 = $myArgvArray[0];
        $side2 = $myArgvArray[1];
        $side3 = $myArgvArray[2];
        
		if (!is_numeric($side1)) {
			echo "This script expects the first side to be numeric.";
			goto end;
		}
		if (!is_numeric($side2)) {
			echo "This script expects the second side to be numeric.";
			goto end;
		}
		if (!is_numeric($side3)) {
			echo "This script expects the third side to be numeric.";
			goto end;
		}
		
        echo "Lengths: $side1, $side2, $side3<br />";
        
        if (isTriangle($side1, $side2, $side3)) {
            echo "Triangle: YES<br />";
            if (isEquilateral($side1, $side2, $side3)) {
                echo "Equilateral: YES<br />";
            } else {
                echo "Equilateral: NO<br />";
            }
            
            if (isIsosceles($side1, $side2, $side3)) {
                echo "Isosceles: YES<br />";
            } else {
                echo "Isosceles: NO<br />";
            }
            
            if (isScalene($side1, $side2, $side3)) {
                echo "Scalene: YES<br />";
            } else {
                echo "Scalene: NO<br />";
            }
        } else {
            echo "Triangle: NO<br />";
        }
        
        
        
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