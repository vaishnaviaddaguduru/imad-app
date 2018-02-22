var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'Article one|vaishnavi',
    heading:'Article one',
    date:'feb 21 ,2018',
    content:` <p>this is first paragraph in this content i am going to explain something</p>
    
    <p>this is first paragraph in this content i am going to explain something</p>
    
    <p>this is first paragraph in this content i am going to explain something</p>`
};
function createTemplate(data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTempate=`<html>
      <head>
         <title>
           ${title}
         </title>  
          <link href="/ui/style.css" rel="stylesheet" />
      </head>
    <body>
          <div>
              <a href="/">home</a>
          </div>
          <hr>
       <div class='container'>
            ${heading}
          <div>
              ${date}
          </div>
          <div>
           ${content}
          </div> 
      </div>
    </body>  
    </html>
    `;
    return Template;
}    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-two', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-one', function (req, res) {
   res.send(createTemplate(articleOne));
});
app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-three1.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
