const fs = require('fs');
// 1. READ FILE
function miniReader(filePath) {
	fs.readFile(`${filePath}`, 'utf-8', (err, fileContent) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(fileContent);
	});
}
// 2. REMOVE WHITESPACE AND COMMENTS
// 3. WRITE NEW FILE WITH ALL THE SPACES AND COMMENTS REMOVED

miniReader('./test-files/test.js');
