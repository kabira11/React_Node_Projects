var express = require('express')
var JSZip = require("jszip");
var FileSaver = require('file-saver');
var server = express()
var path = require('path');
var port = 5010

server.listen(port,function(){
    console.log('hiii')
})

server.get('/',(req,res)=>{
    
  var zip = new JSZip();
  zip.file("hello.txt", "Hello World\n");
  var messages = zip.folder("messages");
  messages.file("message.txt","Hello World, This is message form wapgee!");
  zip.generateAsync({type:"nodebuffer"})
    .then(function(zip) {
    saveAs(zip, "archive.zip");
  }).catch(function(err){
        console.log(err)
  });
    return res.send({
        "ok" : true
    })
})