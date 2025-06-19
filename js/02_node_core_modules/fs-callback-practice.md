
# 📁 Node.js FS Module Practice (Callback Style)

This file includes **20 practice examples** using Node.js `fs` module with **callback-based syntax**.

---

## 🔧 Modules Used:

```js
const fs = require("fs");
const path = require("path");
```

---

## 📂 List of Practice Operations:

### 1. Create a File
```js
fs.writeFile("file1.txt", "Hello from Callback", callback);
```

### 2. Append Data to File
```js
fs.appendFile("file1.txt", "\nThis is appended text", callback);
```

### 3. Overwrite File
```js
fs.writeFile("file1.txt", "Overwritten Content", callback);
```

### 4. Append Multiple Lines Sequentially
```js
fs.appendFile(..., () => {
  fs.appendFile(..., () => {
    fs.appendFile(...);
  });
});
```

### 5. Create a Folder and File Inside It
```js
fs.mkdir("myFolder", { recursive: true }, () => {
  fs.writeFile("myFolder/nested.txt", "File inside folder");
});
```

### 6. Read File with UTF-8 Encoding
```js
fs.readFile("file1.txt", "utf-8", callback);
```

### 7. Read File as Binary
```js
fs.readFile("file1.txt", callback);
```

### 8. Check File Existence Before Reading
```js
fs.access("file1.txt", fs.constants.F_OK, () => {
  fs.readFile("file1.txt", "utf-8");
});
```

### 9. Rename a File
```js
fs.rename("file1.txt", "file2.txt", callback);
```

### 10. Delete a File
```js
fs.unlink("file2.txt", callback);
```

### 11. Create a New Folder
```js
fs.mkdir("html", callback);
```

### 12. Create File Inside Folder
```js
fs.writeFile("html/web.html", "Inside folder", callback);
```

### 13. Read Folder Content
```js
fs.readdir("html", callback);
```

### 14. Delete File Inside Folder
```js
fs.unlink("html/web.html", callback);
```

### 15. Delete Empty Folder
```js
fs.rmdir("html", callback);
```

### 16. Copy a File
```js
fs.copyFile("file2.txt", "file3.txt", callback);
```

### 17. Check File Permissions
```js
fs.access("file3.txt", fs.constants.R_OK, callback);
```

### 18. Write JSON Object to File
```js
fs.writeFile("data.json", JSON.stringify({ name: "John", age: 30 }), callback);
```

### 19. Read and Parse JSON File
```js
fs.readFile("data.json", callback);
```

### 20. Append Current Date/Time
```js
fs.appendFile("file3.txt", new Date().toLocaleString(), callback);
```

---

## 🧪 Usage

You can call individual functions to test:

```js
createFile();
// appendData();
// readFile();
// ...
```

---

## 📌 Notes

- This practice is built using **callback-based** APIs.
- Avoid calling all functions at once to prevent conflicts.
- Ideal for understanding **callback chaining**, **nested structures**, and file operations.

---

## 🏁 Next Steps

- Practice the same 20 tasks using:
  - ✅ Promises
  - ✅ Async/Await
  - 🔜 TypeScript

---

**Happy Coding! 🚀**
