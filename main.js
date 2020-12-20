const fs = require('fs');

// 1. READ FILE
function readFile(filePath) {
	fs.readFile(`${filePath}`, 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(data);
	});
}
// 2. REMOVE WHITESPACE AND COMMENTS
// 3. WRITE NEW FILE WITH ALL THE SPACES AND COMMENTS REMOVED

readFile('./test-files/test.js');
