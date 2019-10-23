<!--
     Zachary Deere 
     CS 4312
     Lab 03
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 03</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>

<body>

	<div>
    <?php
	echo "Zachary Deere - CS 4312 - Lab 03<br /><br />\n";
        $number = $_SERVER['QUERY_STRING'];
        echo "$number" .
		(is_numeric($number)
		?	(round($number) % 2 == 0)
			? " is even"
			: " is not even"
		:	" is not numeric");
		
		echo "" .
		($number == round($number)
		? ""
		: " after being rounded");
    ?>
    </div>
	
    <p>
		<a href="http://validator.w3.org/check?uri=referer">
		  <img src="http://www.w3.org/Icons/valid-xhtml10"
		   alt="Valid XHTML 1.0 Strict" height="31" width="88" />
		</a>
	</p>
</body></html>