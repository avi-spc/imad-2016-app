var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var content={
    query:'mysqli_query("insert into Login values($Username,$Password)")',
    User:'$_POST["user"]',
    Pass:'$_POST["pass"]',
    co:`    <html>
    
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
</html>`
};
function createCon(data){
    var query=data.query;
    var User=data.User;
    var Pass=data.Pass;
var con=`<?php
    if(isset($_POST['sub']))
    {
    $Username=${User}
    $Password=${Pass}
    
    $conn=mysqli_connect("localhost:5432","avi-spc","db-avi-spc-65624","avi-spc");
    if(${query})
    {
    echo"Valus stored successfully";
		}
    else{
    echo"Failed";
    }
    
    }
    ?>
`;
    return con;
}
app.get('/ui/reg.html', function (req, res) {
  res.send(createCon(content));
    
});
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/reg.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'reg.html'));
});
app.get('/ui/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});
app.get('/ui/products.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'products.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
