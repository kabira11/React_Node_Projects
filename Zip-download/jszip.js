var JSZip = require("jszip");
var JSZipUtils = require('jszip-utils')
var express = require('express');
var FileSaver = require('file-saver');
var app = express();
var fs = require('fs');

var zip = new JSZip();



app.get('/zip', function(req, res, next){

    var fileName = ["test250mb2.txt", "test250mb3.txt", "test250mb4.txt"];
    var data = ["https://s3.amazonaws.com/dev.static.surgesend.com/3100350036003500320036003000330037003400350035003000300074006500730074003200350030006D00620032002E00740078007400.txt?response-content-disposition=attachment%3B%20filename%3D%22test250mb2.txt%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASDPWCZPFY4KAZH7D%2F20190828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190828T050104Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10000&X-Amz-Signature=18293ca71efe1f85404f74162ea3f2b6053c4708d88752fa0faa12cc8a807cd1"
    , "https://s3.amazonaws.com/dev.static.surgesend.com/3100350036003500320036003000340036003500340033003200390074006500730074003200350030006D00620033002E00740078007400.txt?response-content-disposition=attachment%3B%20filename%3D%22test250mb3.txt%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASDPWCZPFY4KAZH7D%2F20190828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190828T050105Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10000&X-Amz-Signature=d7aeccaa17044e1070d1dc71432112f46226a34ad08ddab2dd117a646fa293c1"
    ,"https://s3.amazonaws.com/dev.static.surgesend.com/3100350036003500320036003000350034003800390039003300330074006500730074003200350030006D00620034002E00740078007400.txt?response-content-disposition=attachment%3B%20filename%3D%22test250mb4.txt%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASDPWCZPFY4KAZH7D%2F20190828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190828T050106Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10000&X-Amz-Signature=48296999865dd1ba3aee1194055ad30ba815b34a4391fb7c314c6e7abaca92ca"]
    
    
    
    makeZip(data,fileName);
    function makeZip(data,fileName){
        var length = data.length;
        var count = 0;
        
        data.forEach(function(url){
            // loading a file and add it in a zip file
              console.log(url);
              JSZipUtils.getBinaryContent(url, function (err, data) {
                 if(err) {
                        console.log(err.response);
                    throw err; // or handle the error
                 }
    //			     console.log(data);
    //			     console.log(count);
    //			     console.log(zip.file(fileName[count], data, {binary:true
    //			    	 ,
    //			    	    compression: "DEFLATE",
    //			    	    compressionOptions: {
    //			    	        level: 6 // force a compression and a compression level for this file
    //			    	    }	 
    //			     }));
                 zip.file(fileName[count], data, {binary:true})
                 count++;
                 console.log(count);
                 if (count == length) {
                       zip.generateAsync({type: 'nodebuffer'
    //			  	    	 ,
    //			  	       compression: "DEFLATE"
                             }).then(function (nodebuffer) { // 1) generate the zip file
                          console.log(nodebuffer);
                          FileSaver.saveAs(nodebuffer, "TestZip.zip"); 
                            var today = new Date();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            console.log(time);
                                                    // 2) trigger the download
    //			  	        var a = document.createElement("a");
    //			  	        document.body.appendChild(a);
    //			  	        a.style = "display: none";
    //			  	        var url = window.URL.createObjectURL(blob);
    //			  	      	console.log("url");
    //			  	        console.log(url);
    //			  	        a.href = url;
    //			  	        a.download = "test.zip";
    //			  	        a.click();
    //			  	        window.URL.revokeObjectURL(url);
    //			  	    	 console.log(blob);
                           FSProgress.hide();
                            }, function (err) {
                                console.log("errror")
                            });
    
                 }
              });
            });
    
    }



});







var server = app.listen(4004, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('S3 Proxy app listening at http://%s:%s', host, port);
});