#!/usr/bin/env node

var Q = require('q'),
	FS = require('fs'),
	PB = require('progress'),
	AWS = require('aws-sdk'),
	conf = new require('../config')();


AWS.config.update(conf.aws_credentials);
var s3 = new AWS.S3();

function downloadFile(filename) {
	var deferred = Q.defer(),
		output = conf.inputFolder + filename,
		stream = FS.createWriteStream(output),
		params = {
			Bucket: conf.S3bucket,
			Key: filename
		};
	var bar;
	s3.getObject(params)
		.on('httpHeaders', function (statusCode, headers, resp) {
			var len = parseInt(headers['content-length'], 10);
			bar = new PB('  ' + filename + ': [:bar] :percent :etas', {
				complete: '=',
				incomplete: ' ',
				width: 20,
				total: len
			});
		})
		.on('httpData', function (chunk) {
			stream.write(chunk);
			bar.tick(chunk.length);
		})
		.on('httpDone', function (response) {
			if (response.error) {
				deferred.reject(response.error);
			} else {
				deferred.resolve(output);
			}
			stream.end();
		})
		.send();
	return deferred.promise;
}

module.exports = {
	'getFiles': function (files) {
		return Q.all(files.map(downloadFile));
	}
};

// *********** --------------------- *********** //
// *********** example usage: app.js *********** //
// *********** --------------------- *********** //
// #!/usr/bin/env node

// var Q = require('q'),
// fileAPI = require('./lib/file'),
// filenames = [
// 	'files/one.pdf',
// 	'files/two.pdf',
// 	'files/three.ppt',
// 	'files/four.ppt'
// ];

// fileAPI.getFiles(filenames)
// .then(console.log)
// .fail(function (error) {
// 	console.error('Error: ' + error.statusCode + ' - ' + error.message);
// });
// *********** // example usage: app.js *********** //

// *********** -------------- *********** //
// *********** example output *********** //
// *********** -------------- *********** //
//  files/one.pdf: [===================] 100% 0.0s
//  files/two.pdf: [===================] 100% 0.0s
//  files/three.ppt: [===================] 100% 0.0s
//  conversions/four.ppt: [===================] 100% 0.0s
// *********** // example output *********** //