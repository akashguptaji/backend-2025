// ✅ TypeScript - fs module practice (10 Promise-based + 10 Async/Await)

import * as fs from "fs/promises";
import * as path from "path";

// -----------------------------
// 🔹 1-10: Using Promise then/catch
// -----------------------------

// 1. Create File
const createFile = (): void => {
  fs.writeFile("file.txt", "Hello from Promise")
    .then(() => console.log("File created"))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};

// 2. Append Data
const appendData = (): void => {
  fs.appendFile("file.txt", "\nAppended Line")
    .then(() => console.log("Data Appended"))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};

// 3. Overwrite File
const overwriteFile = (): void => {
  fs.writeFile("file.txt", "Overwritten Content")
    .then(() => console.log("File Overwritten"))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};

// 4. Append Multiple Lines
const appendMultipleLines = (): void => {
  fs.appendFile("file.txt", "\nLine 1")
    .then(() => fs.appendFile("file.txt", "\nLine 2"))
    .then(() => fs.appendFile("file.txt", "\nLine 3"))
    .then(() => console.log("Multiple lines appended"))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};

// 5. Create Folder and File Inside
const createFolderWithFile = (): void => {
  fs.mkdir("myFolder", { recursive: true })
    .then(() => fs.writeFile("myFolder/note.txt", "Inside folder"))
    .then(() => console.log("Folder and file created"))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};

// 6. Read file as text
const readText = (): void => {
  fs.readFile("file.txt", "utf-8")
    .then((data) => console.log(data))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};

// 7. Read file as binary
const readBinary = (): void => {
  fs.readFile("file.txt")
    .then((data) => console.log(data))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};

// 8. Check and read file
const checkAndRead = (): void => {
  fs.access("file.txt")
    .then(() => fs.readFile("file.txt", "utf-8"))
    .then((data) => console.log(data))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};

// 9. Rename file
const renameFile = (): void => {
  fs.rename("file.txt", "renamed.txt")
    .then(() => console.log("File renamed"))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};

// 10. Delete file
const deleteFile = (): void => {
  fs.unlink("renamed.txt")
    .then(() => console.log("File deleted"))
    .catch((err: NodeJS.ErrnoException | null) => console.log(err));
};


// -----------------------------
// 🔸 11-20: Using Async/Await
// -----------------------------

// 11. Create folder
const createFolder = async (): Promise<void> => {
  try {
    await fs.mkdir("asyncFolder", { recursive: true });
    console.log("Folder created");
  } catch (err: any) {
    console.log(err);
  }
};

// 12. Create file in folder
const fileInFolder = async (): Promise<void> => {
  try {
    await fs.writeFile("asyncFolder/info.txt", "This is async file");
    console.log("File created");
  } catch (err: any) {
    console.log(err);
  }
};

// 13. Read folder contents
const readFolder = async (): Promise<void> => {
  try {
    const files = await fs.readdir("asyncFolder");
    console.log(files);
  } catch (err: any) {
    console.log(err);
  }
};

// 14. Delete file in folder
const deleteFileInFolder = async (): Promise<void> => {
  try {
    await fs.unlink("asyncFolder/info.txt");
    console.log("File deleted inside folder");
  } catch (err: any) {
    console.log(err);
  }
};

// 15. Delete folder
const deleteFolder = async (): Promise<void> => {
  try {
    await fs.rmdir("asyncFolder");
    console.log("Folder deleted");
  } catch (err: any) {
    console.log(err);
  }
};

// 16. Copy file
const copyFile = async (): Promise<void> => {
  try {
    await fs.copyFile("file.txt", "copy.txt");
    console.log("File copied");
  } catch (err: any) {
    console.log(err);
  }
};

// 17. Check permission
const checkPermission = async (): Promise<void> => {
  try {
    await fs.access("file.txt", fs.constants.R_OK | fs.constants.W_OK);
    console.log("File is accessible");
  } catch (err: any) {
    console.log(err);
  }
};

// 18. Write JSON file
const writeJson = async (): Promise<void> => {
  try {
    const user = { name: "Akash", role: "Dev" };
    await fs.writeFile("user.json", JSON.stringify(user));
    console.log("JSON written");
  } catch (err: any) {
    console.log(err);
  }
};

// 19. Read JSON file
const readJson = async (): Promise<void> => {
  try {
    const content = await fs.readFile("user.json", "utf-8");
    const parsed = JSON.parse(content);
    console.log(parsed);
  } catch (err: any) {
    console.log(err);
  }
};

// 20. Append current date
const appendDate = async (): Promise<void> => {
  try {
    const now = new Date().toLocaleString();
    await fs.appendFile("log.txt", `\n${now}`);
    console.log("Date appended");
  } catch (err: any) {
    console.log(err);
  }
};
