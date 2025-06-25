const path= require("path");

// 1-File name with extension
console.log("File Name", path.basename(__filename));

// 2-Folder Name (Current dir)
console.log("Folder Name", path.basename(__dirname));

// 3- Extension Name
console.log("Extension Name", path.extname(__filename));

// 4-Join Path
const joinPath= path.join(__dirname, "files" , "file1.txt");
console.log("Join Path", joinPath);

// 5- Parse full path
const parsed= path.parse(__filename);
console.log(parsed);