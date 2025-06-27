// ✅ Step 1: Node.js का fs module import कर रहे हैं
const fs = require('fs');

// ✅ Step 2: Readable Stream बना रहे हैं (Source File को पढ़ने के लिए)
const readableStream = fs.createReadStream('input.txt', 'utf8');

// ✅ Step 3: Writable Stream बना रहे हैं (Target File में लिखने के लिए)
const writableStream = fs.createWriteStream('output.txt');

// ✅ Step 4: readableStream पर 'data' event listen कर रहे हैं
// जब-जब नया Data Chunk आएगा, ये चलेगा
readableStream.on('data', (chunk) => {
    console.log('नया Chunk आया:', chunk); // ✅ हर Chunk का Content Console में दिखेगा
    writableStream.write(chunk);           // ✅ उसी Chunk को Output File में लिख देंगे
});

// ✅ Step 5: जब पूरा Reading खत्म हो जाए तो 'end' event fire होगा
readableStream.on('end', () => {
    console.log('Reading पूरा हो गया ✅');
});

// ✅ Step 6: अगर Reading में कोई Error आए तो 'error' event से पकड़ लेंगे
readableStream.on('error', (err) => {
    console.log('Error आया:', err);
});

// ✅ Step 7: Writable Stream का भी 'finish' Event Handle कर सकते हो (optional)
writableStream.on('finish', () => {
    console.log('Writing भी पूरा हो गया ✅');
});

// ✅ Step 8: Extra - readableStream को writableStream से direct Pipe करना (Best Practice)
// readableStream.pipe(writableStream);

// ✅ Pipe का मतलब: जो Read हो रहा है वो सीधे Write में जाएगा, manual .write() की जरूरत नहीं होगी
