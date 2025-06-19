
# Node.js File System (fs) Module - 20 Practice Examples (Promise + Async/Await)

## 📁 Required Modules

```js
const fs = require("fs").promises;
const path = require("path");
```

## 🔷 1–10: Promise-based Examples

### 1. Create File

```js
const createFile = () => {
    fs.writeFile("file.txt", "Hello from Promises")
        .then(() => console.log("File Created"))
        .catch((err) => console.log(err));
};
```

### 2. Append Data

```js
const appendData = () => {
    fs.appendFile("file.txt", "\nThis is appended data")
        .then(() => console.log("Data Appended"))
        .catch((err) => console.log(err));
};
```

### 3. Overwrite File

```js
const overWrite = () => {
    fs.writeFile("file.txt", "Overwrite Content")
        .then(() => console.log("File Overwritten"))
        .catch((err) => console.log(err));
};
```

### 4. Append Multiple Lines

```js
const appendMultipleLines = () => {
    fs.appendFile("file1.txt", "\nLine1")
        .then(() => fs.appendFile("file1.txt", "\nLine2"))
        .then(() => fs.appendFile("file1.txt", "\nLine3"))
        .then(() => console.log("Multiple Lines Appended"))
        .catch((err) => console.log(err));
};
```

### 5. Create Folder and File Inside

```js
const createFolder = () => {
    fs.mkdir("myFolder", { recursive: true })
        .then(() => fs.writeFile("myFolder/myFile.txt", "File inside folder"))
        .then(() => console.log("Folder and file created"))
        .catch((err) => console.log(err));
};
```

### 6. Read File (UTF-8)

```js
const readFile = () => {
    fs.readFile("file1.txt", "utf-8")
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
```

### 7. Read File (Binary)

```js
const readBinary = () => {
    fs.readFile("file1.txt")
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
```

### 8. Check File Before Reading

```js
const checkFile = () => {
    fs.access("file1.txt")
        .then(() => fs.readFile("file1.txt", "utf-8"))
        .catch((err) => console.log(err));
};
```

### 9. Rename File

```js
const renameFile = () => {
    fs.rename("file1.txt", "file2.txt")
        .then(() => console.log("File renamed"))
        .catch((err) => console.log(err));
};
```

### 10. Delete File

```js
const deletFile = () => {
    fs.unlink("file2.txt")
        .then(() => console.log("File deleted"))
        .catch((err) => console.log(err));
};
```

## 🔷 11–20: Async/Await-based Examples

### 11. Create Folder

```js
const makeFolder = async () => {
    try {
        await fs.mkdir("html");
        console.log("Folder created");
    } catch (err) {
        console.log(err);
    }
};
```

### 12. File Inside Folder

```js
const fileinsideFolder = async () => {
    try {
        await fs.writeFile("html/web.html", "Inside folder");
        console.log("File created");
    } catch (err) {
        console.log(err);
    }
};
```

### 13. Read Folder Content

```js
const readFolder = async () => {
    try {
        const file = await fs.readdir("html");
        console.log(file);
    } catch (err) {
        console.log(err);
    }
};
```

### 14. Delete File in Folder

```js
const deleteFile = async () => {
    try {
        await fs.unlink("html/web.html");
        console.log("File Deleted inside folder");
    } catch (err) {
        console.log(err);
    }
};
```

### 15. Delete Empty Folder

```js
const deleteEmptyFolder = async () => {
    try {
        await fs.rmdir("html");
        console.log("Folder deleted");
    } catch (err) {
        console.log(err);
    }
};
```

### 16. Copy File

```js
const copyFile = async () => {
    try {
        await fs.copyFile("html/web.html", "html/web2.html");
        console.log("File copied");
    } catch (err) {
        console.log(err);
    }
};
```

### 17. Check Permissions

```js
const checkPermission = async () => {
    try {
        await fs.access("html/web.html", fs.constants.R_OK | fs.constants.W_OK);
        console.log("file is readable");
    } catch (err) {
        console.log(err);
    }
};
```

### 18. Write JSON

```js
const writeJson = async () => {
    try {
        const data = { name: "John", age: 30 };
        await fs.writeFile("data.json", JSON.stringify(data));
        console.log("JSON written");
    } catch (err) {
        console.log(err);
    }
};
```

### 19. Read JSON

```js
const readJson = async () => {
    try {
        const data = await fs.readFile("data.json", "utf-8");
        console.log(JSON.parse(data));
    } catch (err) {
        console.log(err);
    }
};
```

### 20. Append Current Date

```js
const appendDateTime = async () => {
    try {
        const now = new Date().toLocaleString();
        await fs.appendFile("file3.txt", `\n${now}`);
        console.log("Date and time appended");
    } catch (err) {
        console.log(err);
    }
};
```
