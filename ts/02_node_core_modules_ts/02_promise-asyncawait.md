# FS Module - Promise & Async/Await (TypeScript)

This file contains 20 practical examples of using Node.js `fs/promises` module with both **Promise chaining** and **Async/Await**, written in **TypeScript**.

### 📦 File Structure
- `fs-promise.ts` (1-10 using `.then().catch()`)
- `fs-async.ts` (11-20 using `async/await`)

### ✅ Covered Functions

1. Create File
2. Append Data
3. Overwrite File
4. Append Multiple Lines
5. Create Folder and File inside it
6. Read File (utf-8)
7. Read File (binary)
8. Check File Existence before Reading
9. Rename File
10. Delete File
11. Create Folder
12. File Inside Folder
13. Read Folder Content
14. Delete File from Folder
15. Delete Empty Folder
16. Copy a File
17. Check File Permissions
18. Write JSON Object
19. Read JSON Object
20. Append Current Date/Time

### 🛠️ Notes

- All examples use `import * as fs from "fs/promises"`.
- Proper typings like `(): Promise<void>` and error types `catch(err: any)` used.
- Best practices for modular Node.js development with TypeScript.