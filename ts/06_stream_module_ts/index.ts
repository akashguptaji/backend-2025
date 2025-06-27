// ✅ Node.js के modules import कर रहे हैं
import * as fs from "fs";
import * as path from "path";

// ✅ File path create कर रहे हैं (Absolute path)
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

// ✅ Readable Stream बना रहे हैं
const readableStream: fs.ReadStream = fs.createReadStream(inputFilePath, { encoding: "utf-8" });

// ✅ Writable Stream बना रहे हैं
const writableStream: fs.WriteStream = fs.createWriteStream(outputFilePath);

// ✅ Stream के 'data' event पर data को write कर रहे हैं
readableStream.on("data", (chunk: string | Buffer) => {
    console.log("✅ Chunk Received:", chunk);
    writableStream.write(chunk);
});

// ✅ Stream के 'end' event पर
readableStream.on("end", () => {
    console.log("✅ Reading Finished and File Writing Done");
});

// ✅ Stream के 'error' event पर
readableStream.on("error", (err: NodeJS.ErrnoException) => {
    console.error("❌ Error आया:", err);
});
