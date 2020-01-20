var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res, next){
    res.send('You did not say the magic word');
});


app.get('/s3Proxy', function(req, res, next){
    // download the file via aws s3 here
    var fileKey ='pankaj/3100350036003500360037003200390034003500380036003100350074006500730074003100300030006D00620032002E00740078007400.txt';
    // console.log(req)

    console.log('Trying to download file', fileKey);
    // res.send({"ok":fileKey});
    var AWS = require('aws-sdk');
    AWS.config.update(
      {
        accessKeyId: "AKIASDPWCZPFY4KAZH7D",
        secretAccessKey: "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",
        region: "us-east-1"
      }
    );
    var s3 = new AWS.S3();
    var options = {
        Bucket    : 'dev.static.surgesend.com',
        Key    : fileKey,
    };

    res.attachment("test.txt");
    var fileStream = s3.getObject(options).createReadStream();
    console.log(fileStream);
    fileStream.pipe(res);
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('S3 Proxy app listening at http://%s:%s', host, port);
});