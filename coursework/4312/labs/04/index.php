<!--
     Zachary Deere 
     CS 4312
     Lab 04
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 04</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>

<body>
	<div>
    <?php
	echo "Zachary Deere - CS 4312 - Lab 04<br /><br />\n";
        $number = $_SERVER['QUERY_STRING'];
		if (is_numeric($number)) {	
			echo "Easter Sunday:";
			$a = $number % 19;
			$b = floor($number / 100);
			$c = $number % 100;
			$d = floor($b / 4);
			$e = $b % 4;
			$f = floor(($b +  8) / 25);
			$g = floor(($b - $f + 1) / 3);
			$h = ((19 * $a) + $b - $d - $g + 15) % 30;
			$i = floor($c / 4);
			$k = $c % 4;
			$l = ((32 + (2 * $e) + (2 * $i) - $h - $k)) % 7;
			$m = floor(($a + (11 * $h) + (22 * $l)) / 451);
			$n = floor((($h + $l - (7 * $m) + 114)) / 31);
			$p = (($h + $l - (7 * $m) + 114)) % 31;
			$p = $p + 1;
			if ($n == 3){
				echo " March";
			} else { 
				echo " April";
			}
			echo " $p, $number";
		} else {
			echo "$number is not numeric";
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