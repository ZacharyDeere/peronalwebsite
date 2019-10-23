<!--
  Zachary Deere
  CS 4312
  Lab 18
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Lab 18</title>
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
</head>
<body>
<?php
    function parseFormElements($name) {
        if (strcasecmp($_SERVER['REQUEST_METHOD'], "get") == 0) {
            if (strstr($_SERVER['QUERY_STRING'], $name) != NULL)
                if ($_GET[$name] == NULL)
                    errorMsg("variable " . $name . " is empty");
                else
                    return htmlspecialchars($_GET[$name]);
            else
                errorMsg("variable " . $name . " is missing");
        } elseif (strcasecmp($_SERVER['REQUEST_METHOD'], "post") == 0) {
            if ($_POST[$name] == NULL)
                errorMsg("variable " . $name . " is empty");
            else
                return htmlspecialchars($_POST[$name]);
        }
        else
            errorMsg("unknown REQUEST_METHOD");
    }
		
		function errorMsg($msg) {
			echo "<p>Your form results could not be processed because "
			   . $msg . ".</p>\n";
			writeClosing();
			exit(1);
		}

        echo "<p>Zachary Deere - CS 4312 - Lab 18<br /></p>";
        
		$year = parseFormElements("year");
        $N = parseFormElements("dayNumber");
        
		if (!preg_match("/^[0-9]{1,4}$/", $year))
            errorMsg("the value entered for the year, namely, $year is invalid");

        if (!preg_match("/^[0-9]+$/", $N))
            errorMsg("the value entered for the day number, namely, $N is invalid");
        
        if ($N < 1 || (($year % 400 == 0 || ($year % 4 == 0 && $year % 100 != 0) == true) && $N > 366) || (($year % 400 == 0 || ($year % 4 == 0 && $year % 100 != 0) == false) && $N > 365)) {
            errorMsg(" there was no day number $N in year $year");
        }

        if ($year <= 1582)
            errorMsg("the value entered for the year, namely, $year is less than 1583".
            " and this algorithm only produces correct results for years in the Gregorian".
            " calendar");
        
        date_default_timezone_set('America/Chicago');
        $myTimeArray = getdate();
        
        echo "<p>The date corresponding to a day number of $N in the year $year ";
        
        
        if ($year % 400 == 0 || ($year % 4 == 0 && $year % 100 != 0))
        {
            $K = 1;
            if ($N < 32) {
                $M = 1;
            } else {
                $M = floor(floor(9 * ($K + $N)) / 275 + 0.98);
            }
            $D = $N - floor((275 * $M) / 9) + $K * floor(($M + 9) / 12) + 30;
            if ($year < $myTimeArray['year'])
            echo "was ";
            else if ($year == $myTimeArray['year'])
            echo "is ";
            else
            echo "will be ";
        }
        else
        {
            $K = 2;
            if ($N < 32) {
                $M = 1;
            } else {
                $M = floor(floor(9 * ($K + $N)) / 275 + 0.98);
            }
            $D = $N - floor((275 * $M) / 9) + $K * floor(($M + 9) / 12) + 30;
            if ($year < $myTimeArray['year'])
            echo "was ";
            else if ($year == $myTimeArray['year'])
            echo "is ";
            else
            echo "will be ";
        }
        
        if (($year == 1752 && $M == 9 && $D >= 3) || ($year == 1752 && $M > 9)) {
            $D = $D + 11;
            if (($M == 9 || $M == 11) && $D > 30) {
                $M++;
                $D = $D - 30;
            } else if ($M == 10 && $D > 31) {
                $M++;
                $D = $D - 31;
            }
        }
        
        switch ($M) {
            case 1:
                   echo "January";
                   break;
            case 2:
                   echo "February";
                   break;
            case 3:
                   echo "March";
                   break;
            case 4:
                   echo "April";
                   break;
            case 5:
                   echo "May";
                   break;
            case 6:
                   echo "June";
                   break;
            case 7:
                   echo "July";
                   break;
            case 8:
                   echo "August";
                   break;
            case 9:
                   echo "September";
                   break;
            case 10:
                   echo "October";
                   break;
            case 11:
                   echo "November";
                   break;
            case 12:
                   echo "December";
                   break;
        }
        
        echo " $D.<br /></p>\n";
        end:
        writeClosing();
?>
 
<?php
  /* -------------------  Function: writeClosing ---------- */
  function writeClosing()
  {
?>
<p>
<a href="http://validator.w3.org/check?uri=referer">
  <img src="http://www.w3.org/Icons/valid-xhtml10"
   alt="Valid XHTML 1.0 Strict" height="31" width="88" />
</a>
</p>
 
</body>
</html>
<?php
  }
?>