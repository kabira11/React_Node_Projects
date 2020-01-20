
var express = require('express');
var app = express();
const fs = require('fs')
const join = require('path').join
const s3Zip = require('s3-zip')
 
const region = 'us-east-1'
const bucket = 'dev.static.surgesend.com'
const folder = 'pankaj/'
// const file1 = 'Image A.png'
// const file2 = 'Image B.png'
const file3 = '3100350036003500360037003200390034003500380036003100350074006500730074003100300030006D00620032002E00740078007400.txt'
const file4 = '3100350036003500360037003200390038003200350039003400320074006500730074003100300030006D00620033002E00740078007400.txt'
 
// const output = fs.createWriteStream(join(__dirname, 'Test.zip'))
 
app.get('/download', (req, res) => {
    console.log(req)
  s3Zip.archive({ region: region, bucket: bucket}, folder, [file3, file4]).pipe(res)
})


var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('S3 Proxy app listening at http://%s:%s', host, port);
});
