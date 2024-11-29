/*!
 * This code is belongs to Pawvan
 * 
 * 
 * Rules:
 * 1. You can use, modify, and distribute this code freely for non-comm
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

 import { loadImageData } from './image-processing/image-loader';
 import { convertImageToYCbCr } from './image-processing/ycbcr-converter.js';
 import { splitIntoBlocks } from './core/block-processor';
 import { dct2D } from './core/dct.js';
 import { quantizeBlock } from './core/quantization';
 import { generateHuffmanTable } from './encoding/huffman';
 import { createJPEGHeader } from './encoding/jpeg-file.js';


loadImageData('image.jpg',(imageData)=>{
    const yCbCrImage  = convertImageToYCbCr(imageData)
    const blocks = splitIntoBlocks(yCbCrImage);
    const processedBlocks = blocks.map(block => {
      const dctResult = dct2D(block); 
      return quantizeBlock(dctResult);})
    generateHuffmanTable()
    createJPEGHeader()   
    console.log('JPEG encoding complete');

    })