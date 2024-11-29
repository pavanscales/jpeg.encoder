import { loadImageData } from './image-processing/image-loader.js';
import { convertImageToYCbCr } from './image-processing/ycbcr-converter.js';
import { splitIntoBlocks } from './core/block-processor.js';
import { dct2D } from './core/dct.js';
import { quantizeBlock } from './core/quantization.js';
import { generateHuffmanTable } from './encoding/huffaman.js';  
import { createJPEGHeader } from './encoding/jpeg-file.js';

loadImageData('./assests/hi.jpg', (imageData) => {
    const yCbCrImage = convertImageToYCbCr(imageData);

    const blocks = splitIntoBlocks(yCbCrImage.yCbCrData, yCbCrImage.width, yCbCrImage.height);

    const processedBlocks = blocks.map(block => {
        const dctResult = dct2D(block); 
        return quantizeBlock(dctResult);
    });

    generateHuffmanTable(processedBlocks);  

    createJPEGHeader();

    console.log('JPEG encoding complete');
});
