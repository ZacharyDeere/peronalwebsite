<!--
  Zachary Deere
  CS 4312
  Lab 19
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Lab 19</title>
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
        
        function findSolutions($wordArr, $dictionary, $size, $length) {
            for ($i = 0; $i < $size; $i++) {
			$str = rtrim($dictionary[$i],"!");
			$str = rtrim($dictionary[$i],"%");
			$str = trim($str);
			$strArr = str_split($str);
			sort($strArr);
				
			if ($strArr == $wordArr)
				$wordsArr[] = $str;
            }
            return $wordsArr;
        }

        echo "<p>Zachary Deere - CS 4312 - Lab 19<br /></p>";
        
		$word = strtolower(parseFormElements("word"));
        
		if (!preg_match("/^.{4,7}$/", $word))
			errorMsg("words must be at least four and at most seven letters long");
		
		if (!preg_match("/^[a-zA-Z]{4,7}$/", $word))
			errorMsg("words must be only letters");

        $dictionary = file("/usr/local/4312/data/19/2of12inf.txt");
        
		$length = strlen($word);
		$size = count($dictionary);
		
		$wordArr = str_split($word);
		sort($wordArr);
		
		$wordsArr = findSolutions($wordArr, $dictionary, $size, $length);
		
		$word = strtoupper($word);
		
		echo "<p>For the Jumble word \n<strong>\n<span style=\"font-family: " . 
		     "'courier-new', courier; font-size: medium\">\n$word</span></strong>, \n";
		$totalSolutions = count($wordsArr);
		if ($totalSolutions > 0) {
			echo $totalSolutions, " solution";
            if ($totalSolutions == 1) {
                echo " was found.</p>\n";
            } else {
                echo "s were found.</p>\n";
            }
			echo "<pre><strong><span style=\"font-family: 'courier-new', courier; font-size: medium\">\n";
			for ($i = 0; $i < $totalSolutions; $i++) {
				$wordsArr[$i] = strtoupper($wordsArr[$i]);
				echo $i + 1 . ". $wordsArr[$i]<br />";
			}
			echo "</span></strong>\n</pre>";
		} else {
			echo "no solutions were found.";
		}
		
		writeClosing();
?>
 
<?php
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