const fs = require('fs');

function miniReader(filePath) {
	fs.readFile(`${filePath}`, 'utf-8', (err, fileContent) => {
		if (err) {
			console.log(err);
			return;
		}
		const removedWhiteSpace = fileContent.replace(/\s/g, '');

		fs.writeFile('./minified-files/min.js', removedWhiteSpace, function (err) {
			if (err) throw err;
			console.log('minified!');
		});
	});
}

// 3. WRITE NEW FILE WITH ALL THE SPACES AND COMMENTS REMOVED

miniReader('./test-files/test.js');

// needs to name the new file what the old file was named but with min in it
// comment out old js and css file in html and add the min versions
// remove comments
