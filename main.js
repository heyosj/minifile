const fs = require('fs');

function miniFile(filePath) {
	const regex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
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
		let removedWhiteSpace = fileContent.replace(/\s/g, ' ');
		const noComments = removedWhiteSpace.replace(regex, '$1');
		const folderName = './minifiedFiles';

		if (!fs.existsSync(folderName)) {
			fs.mkdirSync(folderName);
		}

		fs.writeFile(`${folderName}/${filename}.min.${fileType}`, noComments, function (err) {
			if (err) throw err;
			console.log(`The deed is done for file type: ${fileType}`);
		});
	});
}

miniFile('./test-files/test.js');
miniFile('./test-files/test.css');
