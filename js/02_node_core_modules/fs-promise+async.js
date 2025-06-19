const fs = require("fs").promises;
const path = require("path");
// 1-10 fs module by promise

// 1- Create File
const createFile = () => {
    fs.writeFile("file.txt", "Hello from Promises")
        .then(() => {
            console.log("File Created");
        })
        .catch((err) => {
            console.log(err);
        })
}

// 2- Append Data
const appendData = () => {
    fs.appendFile("file.txt", "\nThis is appended data")
        .then(() => {
            console.log("Data Appended");
        })

        .catch((err) => {
            console.log(err);
        })
}

// 3- Overwrite File
const overWrite = () => {
    fs.writeFile("file.txt", "Overwrite Content")
        .then(() => {
            console.log("File Overwritten");
        })
        .catch((err) => {
            console.log(err);
        })
}

// 4-Appended multile lines

const appendMultipleLines = () => {
    fs.appendFile("file1.txt", "\nLine1")
        .then(() => {
            fs.appendFile("file1.txt", "\nLine2")
        })
        .then(() => {
            fs.appendFile("file1.txt", "\nLine3")
        })
        .then(() => {
            console.log("Multiple Lines Appended");
        })
        .catch((err) => {
            console.log(err);
        })
}

// 5- Create folder and file inside it
const createFolder = () => {
    fs.mkdir("myFolder", { recursive: true })
        .then(() => {
            fs.writeFile("myFolder/myFile.txt", "File inside folder")
        })
        .then(() => {
            console.log("Folder and file created");
        })
        .catch((err) => {
            console.log(err);
        })
}

// 6-Read file as utf-8
const readFile = () => {
    fs.readFile("file1.txt", "utf-8")
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        })
}

// 7-Read file as binary
const readBinary = () => {
    fs.readFile("file1.txt")
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        })
}

// 8- Check file exits before reading
const checkFile = () => {
    fs.access("file1.txt")
        .then(() => {
            fs.readFile("file1.txt", "utf-8")
        })
        .catch((err) => {
            console.log(err);
        })
}

// 9- Rename file
const renameFile = () => {
    fs.rename("file1.txt", "file2.txt")
        .then(() => {
            console.log("File renamed");
        })
        .catch((err) => {
            console.log(err);
        })
}

// 10- delete file
const deletFile = () => {
    fs.unlink("file2.txt")
        .then(() => {
            console.log("File deleted");
        })
        .catch((err) => {
            console.log(err);
        })
}

// 10-20 fs module by Async await

// 11- Create folder
const makeFolder = async () => {
    try {
        await fs.mkdir("html")
        console.log("Folder created");
    } catch (err) {
        console.log(err)
    }
}

// 12- File inside folder
const fileinsideFolder = async () => {
    try {
        await fs.writeFile("html/web.html", "Inside folder")
        console.log("File created");
    }
    catch (err) {
        console.log("err")
    }
}

// 13- Read folder content
const readFolder = async () => {
    try {
        const file = await fs.readdir("html")
        console.log(file)
    }
    catch (err) {
        console.log(err)
    }
}

// 14- Delete file in folder
const deleteFile = async () => {
    try {
        await fs.unlink("html/web.html")
        console.log("File Deleted inside folder")
    }
    catch (err) {
        console.log(err)
    }
}

// 15- Delete empty folder
const deleteEmptyFolder = async () => {
    try {
        await fs.rmdir("html")
        console.log("Folder deleted")
    }
    catch (err) {
        console.log(err)
    }
}

// 16- Copy a file
const copyFile = async () => {
    try {
        await fs.copyFile("html/web.html", "html/web2.html")
        console.log("File copied")
    }
    catch (err) {
        console.log(err)
    }
}

// 17- check permission
const checkPermission = async () => {
    try {
        await fs.access("html/web.html", fs.constants.R_OK | fs.constants.W_OK | fs.constants.X)
        console.log("file is readble")
    }
    catch (err) {
        console.log(err)
    }
}

// 18- Write JSON object
const writeJson = async () => {
    try {
        const data = {
            name: "John",
            age: 30
        };
        await fs.writeFile("data.json", JSON.stringify(data));
        console.log("JSON written");
    } catch (err) {
        console.log(err);
    }
};

// 19- Read JSON object
const readJson = async () => {
    try {
        const data = await fs.readFile("data.json", "utf-8");
        console.log(JSON.parse(data));
    } catch (err) {
        console.log(err);
    }
};

// 20- Append current date/time
const appendDateTime = async () => {
    try {
        const now = new Date().toLocaleString();
        await fs.appendFile("file3.txt", `\n${now}`);
        console.log("Date and time appended");
    } catch (err) {
        console.log(err);
    }
};

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