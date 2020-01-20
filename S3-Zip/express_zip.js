var app = require('express')();
var zip = require('express-zip');

app.get('/download', function(req, res) {
  res.zip([
    { path: "https://s3.amazonaws.com/dev.static.surgesend.com/pankaj/3100350036003500360037003200390034003500380036003100350074006500730074003100300030006D00620032002E00740078007400.txt?response-content-disposition=attachment%3B%20filename%3D%22test100mb2.txt%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASDPWCZPFY4KAZH7D%2F20190829%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190829T051439Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10000&X-Amz-Signature=ea72f197e62caf9dd0089b659a0422b6aa7a4f16be813c36ce3fc981621616b1", name: 'test12.txt' },
    { path: "https://s3.amazonaws.com/dev.static.surgesend.com/pankaj/3100350036003500360037003200390038003200350039003400320074006500730074003100300030006D00620033002E00740078007400.txt?response-content-disposition=attachment%3B%20filename%3D%22test100mb3.txt%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASDPWCZPFY4KAZH7D%2F20190829%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190829T051440Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10000&X-Amz-Signature=9e4b72cd6ae944528b727dee385b3e19c2e657ab53d52ea92509242d8b1fcb9e", name: 'test13.txt' }
  ]);
});

app.listen(3000,() => {
    console.log("port number")
});