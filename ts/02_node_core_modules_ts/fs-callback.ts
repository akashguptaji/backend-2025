import * as fs from "fs";


// 1. Create File
const createFile = (): void => {
    fs.writeFile("file1.txt", "Hello from Callback", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("File created");
    });
};

// 2. Append Data
const appendData = (): void => {
    fs.appendFile("file1.txt", "\nThis is appended text", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("Data appended");
    });
};

// 3. Overwrite File
const overwriteFile = (): void => {
    fs.writeFile("file1.txt", "Overwritten Content", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("File overwritten");
    });
};

// 4. Append Multiple Lines
const appendMultipleLines = (): void => {
    fs.appendFile("file1.txt", "\nLine 1", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        fs.appendFile("file1.txt", "\nLine 2", (err: NodeJS.ErrnoException | null): void => {
            if (err) throw err;
            fs.appendFile("file1.txt", "\nLine 3", (err: NodeJS.ErrnoException | null): void => {
                if (err) throw err;
                console.log("3 lines appended");
            });
        });
    });
};

// 5. Create Folder + File Inside
const createFolder = (): void => {
    fs.mkdir("myFolder", { recursive: true }, (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        fs.writeFile("myFolder/nested.txt", "File inside folder", (err: NodeJS.ErrnoException | null): void => {
            if (err) throw err;
            console.log("File created inside folder");
        });
    });
};

// 6. Read File as UTF-8
const readFile = (): void => {
    fs.readFile("file1.txt", "utf-8", (err: NodeJS.ErrnoException | null, data: string): void => {
        if (err) throw err;
        console.log(data);
    });
};

// 7. Read File as Binary
const readBinary = (): void => {
    fs.readFile("file1.txt", (err: NodeJS.ErrnoException | null, data: Buffer): void => {
        if (err) throw err;
        console.log(data);
    });
};

// 8. Safe Read
const safeRead = (): void => {
    fs.access("file1.txt", fs.constants.F_OK, (err: NodeJS.ErrnoException | null): void => {
        if (err) {
            console.log("file does not exist");
        } else {
            fs.readFile("file1.txt", "utf-8", (err: NodeJS.ErrnoException | null, data: string): void => {
                if (err) throw err;
                console.log(data);
            });
        }
    });
};

// 9. Rename File
const renameFile = (): void => {
    fs.rename("file1.txt", "file2.txt", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("File renamed");
    });
};

// 10. Delete File
const deleteFile = (): void => {
    fs.unlink("file2.txt", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("File deleted");
    });
};

// 11. Create Folder
const makeFolder = (): void => {
    fs.mkdir("html", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("Folder created");
    });
};

// 12. File Inside Folder
const fileInFolder = (): void => {
    fs.writeFile("html/web.html", "Inside folder", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("File created inside folder");
    });
};

// 13. Read Folder
const readFolder = (): void => {
    fs.readdir("html", (err: NodeJS.ErrnoException | null, files: string[]): void => {
        if (err) throw err;
        console.log(files);
    });
};

// 14. Delete File from Folder
const deleteFileFromFolder = (): void => {
    fs.unlink("html/web.html", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("File deleted from folder");
    });
};

// 15. Delete Empty Folder
const deleteFolder = (): void => {
    fs.rmdir("html", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("Folder deleted");
    });
};

// 16. Copy File
const copyFile = (): void => {
    fs.copyFile("file3.txt", "file4.txt", (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("File copied");
    });
};

// 17. Check Access
const checkAccess = (): void => {
    fs.access("file3.txt", fs.constants.R_OK, (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("File is readable");
    });
};

// 18. Write JSON Object
interface Person {
    name: string;
    age: number;
}
const writeJson = (): void => {
    const data: Person = {
        name: "John",
        age: 30
    };
    fs.writeFile("data.json", JSON.stringify(data), (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("JSON written");
    });
};

// 19. Read JSON Object
const readJson = (): void => {
    fs.readFile("data.json", "utf-8", (err: NodeJS.ErrnoException | null, data: string): void => {
        if (err) throw err;
        const parsed: Person = JSON.parse(data);
        console.log(parsed);
    });
};

// 20. Append Date/Time
const appendDateTime = (): void => {
    const now: string = new Date().toLocaleString();
    fs.appendFile("file3.txt", `\\n${now}`, (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log("Date and time appended");
    });
};
