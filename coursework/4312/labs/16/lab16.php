<!--
  Zachary Deere
  CS 4312
  Lab 16
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Lab 16</title>
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
</head>
<body>
<?php
  /* -------------------  Function: ParseFormElements ----- */
  function parseFormElements($name)
  {
    if (strcasecmp($_SERVER['REQUEST_METHOD'], "get") == 0)
    {
      if (strstr($_SERVER['QUERY_STRING'], $name) != NULL)
        if ($_GET[$name] == NULL)
          errorMsg("variable " . $name . " is empty");
        else
          return htmlspecialchars($_GET[$name]);
      else
        errorMsg("variable " . $name . " is missing");
    }
 
    elseif (strcasecmp($_SERVER['REQUEST_METHOD'], "post") == 0)
    {
      if ($_POST[$name] == NULL)
        errorMsg("variable " . $name . " is empty");
      else
        return htmlspecialchars($_POST[$name]);
    }
 
    else
      errorMsg("unknown REQUEST_METHOD");
  }
  
  function errorMsg($msg)
  {
    echo "<p>Your form results could not be processed because "
       . $msg . ".</p>\n";
    writeClosing();
    exit(1);
  }
 
  echo "<p>Zachary Deere - CS 4312 - Lab 16<br /></p>\n";
 
  $year = parseFormElements("year");
  $month = parseFormElements("month");
  $day = parseFormElements("day");
  if (!preg_match("/^[0-9]{1,4}$/", $year))
    errorMsg("the value entered for the year, namely, $year is invalid");

  if (!preg_match("/^([1-9]|1[0-2])$/", $month))
    errorMsg("the value entered for the month, namely, $month is invalid");

  if (!preg_match("/^([1-9]|[1-2][0-9]|3[0-1])$/", $day))
    errorMsg("the value entered for the day, namely, $day is invalid");
 
  // Ensure the year is in the Gregorian calendar
  if ($year <= 1582)
    errorMsg("the value entered for the year, namely, $year is less than 1583".
    " and this algorithm only produces correct results for years in the Gregorian".
    " calendar");
 
  date_default_timezone_set('America/Chicago');
  $myTimeArray = getdate();
  
    if ($year == 1752 && $month == 9 && $day > 2 && $day < 14)
			errorMsg("there was no day $day in month $month of year $year");
  
    if (($month == 4 || $month == 6 || $month == 9 || $month == 11) && $day > 30) {
        echo "Your form results could not be processed because ";
        if ($year < $myTimeArray['year'])
            echo "there was ";
        else if ($year == $myTimeArray['year'])
            echo "there is ";
        else
            echo "there will be ";
        echo "no day 31 in month $month of year $year.";
        goto end;
    }
  
  if ($year % 400 == 0 || ($year % 4 == 0 && $year % 100 != 0))
  {
    if ($month == 2 && $day > 29) {
        echo "Your form results could not be processed because ";
        if ($year < $myTimeArray['year'])
            echo "there was ";
        else if ($year == $myTimeArray['year'])
            echo "there is ";
        else
            echo "there will be ";
        echo "no day $day in month $month of year $year.";
        goto end;
    }
  } else {
    if ($month == 2 && $day > 28) {
        echo "Your form results could not be processed because ";
        if ($year < $myTimeArray['year'])
            echo "there was ";
        else if ($year == $myTimeArray['year'])
            echo "there is ";
        else
            echo "there will be ";
        echo "no day $day in month $month of year $year.";
        goto end;
    }
  }
  
  echo "<p>For the date $month/$day/$year, the day number ";
 
  
  if ($year % 400 == 0 || ($year % 4 == 0 && $year % 100 != 0))
  {
    $K = 1;
    $N = floor((275 * $month) / 9) - $K * floor(($month + 9)/12) + $day - 30;
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
    $N = floor((275 * $month) / 9) - $K * floor(($month + 9)/12) + $day - 30;
    if ($year < $myTimeArray['year'])
      echo "was ";
    else if ($year == $myTimeArray['year'])
      echo "is ";
    else
      echo "will be ";
  }
  if ($year == 1752 && $month == 9 && $day > 3 || $year == 1752 && $month > 9) {
        $N = $N - 11;
  }
  echo "$N.<br /></p>\n";
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