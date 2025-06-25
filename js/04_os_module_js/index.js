const os =require ("os");
// 1- Plateform
console.log("Plateform : ",  os.platform());

// 2- Architecture
console.log("Architecure : ", os.arch());

// 3- CPU Info
console.log("CPU Info :", os.cpus());

// 4- Free Memory
console.log("Free Memory", os.freemem());

// 5- Total Memeory
console.log("Total Memory", os.totalmem());

// 6- Uptime
console.log("Uptime", os.uptime());

// 7- Hostname
console.log("Hostname", os.hostname());

// 8- Home Directory

console.log("Home Directory", os.homedir());

// 9- Temp Fir
console.log("Temp dir", os.tmpdir());

// 10- User Info
console.log("User Info", os.userInfo());
