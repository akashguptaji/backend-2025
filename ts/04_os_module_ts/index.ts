// ✅ OS Module Example in TypeScript

import * as os from "os";

// 1️⃣ - Platform (Operating System)
console.log("Platform:", os.platform());

// 2️⃣ - CPU Architecture
console.log("CPU Architecture:", os.arch());

// 3️⃣ - Number of CPU Cores
console.log("CPU Cores:", os.cpus().length);

// 4️⃣ - Free Memory (in bytes)
console.log("Free Memory:", os.freemem());

// 5️⃣ - Total Memory (in bytes)
console.log("Total Memory:", os.totalmem());

// 6️⃣ - Home Directory
console.log("Home Directory:", os.homedir());

// 7️⃣ - Hostname
console.log("Hostname:", os.hostname());

// 8️⃣ - Temporary Directory
console.log("Temp Directory:", os.tmpdir());

// 9️⃣ - User Info
console.log("User Info:", os.userInfo());
