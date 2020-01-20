var S3Zipper = require ('aws-s3-zipper');

var config ={
      accessKeyId: 'AKIASDPWCZPFY4KAZH7D',
      secretAccessKey: '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',
      region: "us-east-1",
      bucket: 'dev.static.surgesend.com'
};


var zipper = new S3Zipper(config);
// zipper.filterOutFiles = files; //files is the set of files selected by User


zipper.zipToFile ({
    s3FolderName: 'pankaj/'
    , startKey: null // could keep null
    , zipFileName: './myLocalFile.zip'
    , recursive: true
}
,function(err,result){
    if(err)
        console.error(err);
    else{
        var lastFile = result.zippedFiles[result.zippedFiles.length-1];
        if(lastFile)
            console.log('last key ', lastFile.Key); // next time start from here
    }
});