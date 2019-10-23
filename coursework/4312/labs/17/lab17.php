<!--
  Zachary Deere
  CS 4312
  Lab 17
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Lab 17</title>
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
        
		function swap(&$x,&$y) {
			$temp = $x;
			$x = $y;
			$y = $temp;
			return;
		}
        
        function reverse(&$array, $i, $j) {
			while($i < $j) {
				swap($array[$i++], $array[$j--]);
			}
			return;
		}
        
        // From Data Structures:
        // bool nextPermutation(vector<T>& v) {
        // bool isPerm = false;
        // typename vector<T>::iterator i, j;
        // for (i = v.end() - 2; i >= v.begin(); i--)
            // if (*i < *(i+1)) {
                // isPerm = true;
                // break;
            // }
		// if(!isPerm) {
				// reverse(i+1,v.end());
				// return false; 
		// }
        // for (j = v.end() - 1; j >= v.begin(); j--)
            // if (*j > *i) {break;}
        // swap(*i,*j);
        // reverse(i+1,v.end());
        // return true;
        //}
        function nextPermFunct(&$array) {
			global $end;
			$isPerm = FALSE;
            
			for ($i = $end - 2; $i >= 0; --$i) {
				if ($array[$i] < $array[$i + 1]) {
					$isPerm = TRUE;
					break;
				}
			}
			
			if (!$isPerm)
				return FALSE;
			
			for ($j = $end - 1; $j >= 0; --$j)
				if ($array[$j] > $array[$i]) {
					break;
                }
			swap($array[$i], $array[$j]);
			reverse($array, $i + 1, $end - 1);
			return TRUE;
		}

        echo "<p>Zachary Deere - CS 4312 - Lab 17<br /></p>";
        
		$word = strtoupper(parseFormElements("word"));
        
		if (!preg_match("/^.{4,7}$/", $word))
			errorMsg("words must be at least four and at most seven letters long");
		
		if (!preg_match("/^[a-zA-Z]{4,7}$/", $word))
			errorMsg("words must be only letters");

		$array = str_split($word);
		$end = count($array);
		sort($array);
		echo "<pre><strong><span style=\"font-family: 'courier-new', courier;\">\n";
		
		$nextPerm = true;
		$n = 1;
		$pad_len = 2;
		
		$offset = 1;
		for ($i = 1; $i <= strlen($word); $i++) {
			$offset = $offset * $i;
		}
		
		while ($offset != 0) {
			$offset = floor($offset / 10);
			$pad_len++;
		}
		
		while ($nextPerm) {
			echo str_pad("$n. ", $pad_len, ' ', STR_PAD_LEFT);
			$word = implode('',$array);
			echo "$word</br>";
			$nextPerm = nextPermFunct($array);
			++$n;
		}
        echo "</pre></strong></span>";
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