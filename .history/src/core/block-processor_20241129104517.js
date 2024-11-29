/*!
 * This code is belongs to Pawvan
 * 
 * 
 * Rules:
 * 1. You can use, modify, and distribute this code freely for non-commercial purposes.
 * 2. Attribution must be provided in any derived works.
 * 3. You may not use this code in any project that violates any laws.
 * 4. No warranty is provided. Use this code at your own risk.
 * 5. If you make any changes, you must document them.
 * 6. Commercial use requires explicit permission from the author.
 * 7. Redistribution of the code must include authors notice.
 * 8. You cannot sublicense or sell this code.
 * 9. You may not use this code in any harmful or malicious way.
 *10. For more details, please contact: [pawanpediredla@gmail.com]
 */


 function splitIntoBlocks(image,blockSize=8){
const blocks =[]
const width = image[0].length;
const height = image.length;
for (let y = 0; y < height; y += blockSize) {
    for (let x = 0; x < width; x += blockSize) {
   const block =[]
   for (let by = 0; by < blockSize; by++) {
    const row=[]
    for (let bx = 0; bx < blockSize; bx++) {
        if (y + by < height && x + bx < width) {
            row.push(image[y + by][x + bx]);
          }
    }
block.push(row);

}
   
    }}
 }
