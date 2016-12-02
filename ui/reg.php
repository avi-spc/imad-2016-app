<!DOCTYPE html>
<html>
    <?php
    if(isset($_POST['sub']))
    {
    $Username=$_POST['user'];
    $Password=$_POST['pass'];
    
    $conn=mysqli_connect("localhost:5432","avi-spc","db-avi-spc-65624","avi-spc");
	mysqli_query("create table login(Username varchar(40),Password varchar(15))");
    if(mysqli_query("insert into login values('$Username','$Password')"))
    {
    echo"Valus stored successfully";
		}
    else{
    echo"Failed";
    }
    
    }
    ?>
    <head>
        <title>Register</title>
    </head>
        <body>
        <form action='reg.php' method='POST'>
            Username:<input type='text' name='user' /><br>
            Password:<input type='password' name='pass' /><br>
            <input type='submit' name='sub' value='Submit' />
        </form>
        </body>
</html>
