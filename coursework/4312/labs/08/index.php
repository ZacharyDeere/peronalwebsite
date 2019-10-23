<!--
  Zachary Deere
  CS 4312
  Lab 08
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Lab 08</title>

<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
</head>
<body>
<div>
<?php
  echo "Your Name - CS 4312 - Lab 08<br /><br />\n";
 
  function lookUpTable($number) {
    switch ($number) {
      case 0:
        echo "A";
        break;
      case 1: 
        echo "B";
        break;
      case 2:
        echo "C";
        break;
      case 3:
        echo "D";
        break;
      case 4:
        echo "E";
        break;
      case 5:
        echo "F";
        break;
      case 6:
        echo "G";
        break;
      case 7:
        echo "H";
        break;
      case 8:
        echo "I";
        break;
      case 9:
        echo "J";
        break;
      case 10:
        echo "K";
        break;
      case 11:
        echo "L";
        break;
      case 12:
        echo "M";
        break;
      case 13:
        echo "N";
        break;
      case 14:
        echo "O";
        break;
      case 15:
        echo "P";
        break;
      case 16:
        echo "Q";
        break;
      case 17:
        echo "R";
        break;
      case 18:
        echo "S";
        break;
      case 19:
        echo "T";
        break;
      case 20:
        echo "U";
        break;
      case 21:
        echo "V";
        break;
      case 22:
        echo "W";
        break;
      case 23:
        echo "X";
        break;
      case 24:
        echo "Y";
        break;
      case 25:
        echo "Z";
        break;
      case 26:
        echo "a";
        break;
      case 27:
        echo "b";
        break;
      case 28:
        echo "c";
        break;
      case 29:
        echo "d";
        break;
      case 30:
        echo "e";
        break;
      case 31:
        echo "f";
        break;
      case 32:
        echo "g";
        break;
      case 33:
        echo "h";
        break;
      case 34:
        echo "i";
        break;
      case 35:
        echo "j";
        break;
      case 36:
        echo "k";
        break;
      case 37:
        echo "l";
        break;
      case 38:
        echo "m";
        break;
      case 39:
        echo "n";
        break;
      case 40:
        echo "o";
        break;
      case 41:
        echo "p";
        break;
      case 42:
        echo "q";
        break;
      case 43:
        echo "r";
        break;
      case 44:
        echo "s";
        break;
      case 45:
        echo "t";
        break;
      case 46:
        echo "u";
        break;
      case 47:
        echo "v";
        break;
      case 48:
        echo "w";
        break;
      case 49:
        echo "x";
        break;
      case 50:
        echo "y";
        break;
      case 51:
        echo "z";
        break;
      case 52:
        echo "0";
        break;
      case 53:
        echo "1";
        break;
      case 54:
        echo "2";
        break;
      case 55:
        echo "3";
        break;
      case 56:
        echo "4";
        break;
      case 57:
        echo "5";
        break;
      case 58:
        echo "6";
        break;
      case 59:
        echo "7";
        break;
      case 60:
        echo "8";
        break;
      case 61:
        echo "9";
        break;
      case 62:
        echo "+";
        break;
      case 63:
        echo "/";
        break;
    }
  }
  
  function stringToBinary($string) {
            $binary = 0;
            $data = unpack('H*', $string);
            $binary .= base_convert($data[1], 16, 2);
        
        return $binary;    
    }
    
    function encodeString($string) {
        $binaryNumber = stringToBinary($string);
        // echo "$binaryNumber";
        // echo "<br />";
        // $newString;
        // echo "$newChar";
        while (!empty($binaryNumber)) {
            $sixBinary = substr($binaryNumber, 0, 6);
             // echo "$sixBinary" . "<br />";
            // while (strlen($sixBinary) < 6) {
                // $sixBinary .= 0;
            // }
            $tempDecimal = bindec($sixBinary);
            
            // echo "$tempDecimal";
            // echo lookUpTable($tempDecimal);
            lookUpTable($tempDecimal);
            $binaryNumber = substr($binaryNumber, 6);
        }
        return;
        // echo "<br />";
        // echo "$octNumber";
        // echo bindec($newChar);
    }

 
  // Obtain the data following the ? in the URL via which the page was
  // accessed.
  $argv = $_SERVER['QUERY_STRING'];
 
  // Decode any occurrences of %## in the given string. For example, if URLs
  // contain spaces when sent to a server, they are transformed into
  // %20. The two characters following % are considered hexadecimal
  // values and represent the character's ASCII code. 20 hex is equal to
  // 32 decimal, the ASCII representation for a space character.
  $argv = urldecode($argv);
 
  if (strlen($argv) == 0)
  {
    echo "This script expects an argument with a length of at least " .
         "one.<br />\n";
    goto end;
  }
 
  echo "For the input string<br />\n";
  echo "\n";
  echo "<pre>\n";
  echo $argv . "\n";
  echo "</pre>\n";
  echo "<p>\n";
  echo "the base64 encoded string is<br />\n";
  echo "</p>\n";
 
  // echo base64url_encode($argv);
  // echo stringToBinary($argv);
  // echo "<br />";
  echo "<pre\n>";
  echo encodeString($argv);
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
 
</body>
</html>