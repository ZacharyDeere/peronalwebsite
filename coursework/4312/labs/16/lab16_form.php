<!--
     Zachary Deere 
     CS 4312
     Lab 16
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

<title>CS 4312 Lab 16</title>

<!-- Import Biography CSS stylesheet -->
<link href="style.css" rel="stylesheet" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></head>
<body>
	<p>
        This form allows a user to enter a month, day, and year.  The
        associated PHP application determines the day number of the given
        date.
    </p>
 
    <form action="lab16.php" method="post">
        <p>
            Select the month
        </p>
        <table>
        <?php
            $monthNames = array("January", "February", "March", "April", "May",
                                "June", "July", "August", "September",
                                "October", "November", "December");
            
            foreach ($monthNames as $i => $month)
            {
                if ($i % 4 == 0)
                echo "<tr>\n";
            
                echo "<td><input type=\"radio\" name=\"month\" value=\"", $i + 1, "\"";
                if ($i == 0)
                echo " checked=\"checked\"";
                echo " />$month</td>\n";
                if (($i + 1) % 4 == 0)
                echo"</tr>\n";
            }
        ?>
        </table>
        
        <hr />
        
        <p>
        Select the day of the month
        <select size="1" name="day">
        <?php
            for ($i = 1; $i<=31; ++$i)
            {
                echo "<option";
                if ($i == 1)
                echo " selected=\"selected\"";
                echo ">$i</option>\n";
            }
        ?>
        </select>
        </p>
        
        <hr />
        
        <p>
            Enter the year
            <input type="text" name="year" size="4" maxlength="4" /><br /><br />
            <input type="reset"  value="Clear This Form" />
            <input type="submit" name="Submit" value="Submit This Form" />
        </p>
    </form>
	
	<p>
		<a href="http://validator.w3.org/check?uri=referer">
		  <img src="http://www.w3.org/Icons/valid-xhtml10"
		   alt="Valid XHTML 1.0 Strict" height="31" width="88" />
		</a>
	</p>
</body></html>