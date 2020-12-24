const fs = require('fs');

function miniReader(filePath) {
	const files = filePath.split('/');
	let filename;
	let fileType;

	files.forEach((file) => {
		if (file.includes('.js') || file.includes('.css')) {
			const splitFileName = file.split('.');
			filename = splitFileName[0];
			fileType = splitFileName[1];
		}
	});

	fs.readFile(`${filePath}`, 'utf-8', (err, fileContent) => {
		if (err) {
			console.log(err);
			return;
		}
		const removedWhiteSpace = fileContent.replace(/\s/g, '');

		fs.writeFile(`./minified-files/${filename}.min.${fileType}`, removedWhiteSpace, function (err) {
			if (err) throw err;
			console.log('minified!');
		});
	});
}

miniReader('./test-files/test.js');

// needs to name the new file what the old file was named but with min in it
// comment out old js and css file in html and add the min versions
// remove comments
