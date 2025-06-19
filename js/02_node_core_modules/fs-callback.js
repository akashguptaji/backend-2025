//fs callback practice

const fs = require("fs");
const path = require("path");

//1- Create file using writeFile
const createFile = () => {
    fs.writeFile("file1.txt", "Hello from Callback", (err) => {
        if (err) throw err;
        console.log("File created")
    })
}


//2- Append data using appendFile
const appendData = () => {
    fs.appendFile("file1.txt", "\nThis is appended text", (err) => {
        if (err) throw err;
        console.log("Data appended");
    })
}

//3-Overwrite file using writeFile again
const overwriteFile = () => {
    fs.writeFile("file1.txt", "Overwritten Content", (err) => {
        if (err) throw err;
        console.log("File overwritten");
    })
}


//4- Append 3 lines sequently
const appendmultipleLines = () => {
    fs.appendFile("file1.txt", "\nLine 1", (err) => {
        if (err) throw err;
        console.log("Line 1 appended");
        fs.appendFile("file1.txt", "\nLine 2", (err) => {
            if (err) throw err;
            console.log("Line 2 appended");
            fs.appendFile("file1.txt", "\nLine 3", (err) => {
                if (err) throw err;
                console.log("Line 3 appended");
            })
        })
    })
}

//5- Create file inside new folder
const createFolder = () => {
    fs.mkdir("myFolder", { recursive: true }, (err) => {
        if (err) throw err;
        console.log("Folder created");
        fs.writeFile("myFolder/nested.txt", "File inside of folder", (err) => {
            if (err) throw err;
            console.log("File created inside folder");
        })
    })
}

//6- Read file with utf-8
const readFile = () => {
    fs.readFile("file1.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log(data);
    })
}

//7- Read file with binary
const readBinary = () => {
    fs.readFile("file1.txt", (err, data) => {
        if (err) throw err;
        console.log(data);
    })
}

//8- Check if file exits before reading

const safeRead = () => {
    fs.access("file1.txt", fs.constants.F_OK, (err) => {
        if (err) {

            console.log("file does not exit");
        } else {
            fs.readFile("file1.txt", "utf-8", (err, data) => {
                if (err) throw err;
                console.log(data);
            })
        }
    }
    )
}

//9- Rename fie
const renameFile = () => {
    fs.rename("file1.txt", "file2.txt", (err) => {
        if (err) throw err;
        console.log("File renamed");
    })
}

//10- Delete File
const deleteFile = () => {
    fs.unlink("file2.txt", (err) => {
        if (err) throw err;
        console.log("File deleted");
    })
}
//11- Create folder
const makeFolder = () => {
    fs.mkdir("html", (err) => {
        if (err) throw err;
        console.log("Folder created");
    })
}

//12- File inside folder
const fileinFolder = () => {
    fs.writeFile("html/web.html", "Inside folder", (err) => {
        if (err) throw err;
        console.log("File created inside folder");
    })
}

//13- Read folder content
const readFolder = () => {
    fs.readdir("html", (err, files) => {
        if (err) throw err;
        console.log(files);
    })
}
//14- Delete file in folder
const deleteFilefromFolder = () => {
    fs.unlink("html/web.html", (err) => {
        if (err) throw err;
        console.log("file deleted inside folder");
    })
}

//15- delete empty folder
const deleteFolder = () => {
    fs.rmdir("html", (err) => {
        if (err) throw err;
        console.log("Folder deleted");
    })
}

// 16- Copy a file
const copyFile = () => {
    fs.copyFile("file2.txt", "file3.txt", (err) => {
        if (err) throw err;
        console.log("File copied");
    })
}

// 17- check permission
const checkAccess = () => {
    fs.access("file3.txt", fs.constants.R_OK, (err) => {
        if (err) throw err;
        console.log("File is readable");
    })
}

// 18- Write json object
const writeJson = () => {
    const data = {
        name: "John",
        age: 30,
    }
    fs.writeFile("data.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log("json written")
    })
}

// 19- Read json object
const readJson = () => {
    fs.readFile("data.json", (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data))
    })
}

//   20- Append current date/time

const appendDateTime = () => {
    const now = new Date().toLocaleString();
    fs.appendFile("file3.txt", now, (err) => {
        if (err) throw err;
        console.log("Date and time appended");

    }
    )
}

// 🔽 Call functions here
createFile();
appendData();
overwriteFile();
appendmultipleLines();
createFolder();
readFile();
readBinary();
safeRead();
renameFile();
deleteFile();
makeFolder();
fileinFolder();
readFolder();
deleteFilefromFolder();
deleteFolder();
copyFile();
checkAccess();
writeJson();
readJson();
appendDateTime();








