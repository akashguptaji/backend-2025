// ✅ path module
import * as path from "path";

// ✅ fileURLToPath from url module (for __filename)
import { fileURLToPath } from "url";

// ✅ dirname from path
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Use Cases
console.log("File Name", path.basename(__filename));
console.log("Directory Name", path.basename(__dirname));
console.log("Extension Name", path.extname(__filename));

const joinPath= path.join(__dirname, "files", "file1.txt");
console.log("Join Path", joinPath);

const parsed= path.parse(__filename);
console.log("Parsed path with Object", parsed);
