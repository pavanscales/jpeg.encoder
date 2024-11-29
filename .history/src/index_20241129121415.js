
import { loadImageData } from './image-processing/image-loader.js';
import { convertImageToYCbCr } from './image-processing/ycbcr-converter.js';
import { splitIntoBlocks } from './core/block-processor.js';
import { dct2D } from './core/dct.js';
import { quantizeBlock } from './core/quantization.js';
import { generateHuffmanTable } from './encoding/huffman.js';  +
import { createJPEGHeader } from './encoding/jpeg-file.js';

// Load an image, process it, and apply the transformations
loadImageData('image.jpg', (imageData) => {
    // Convert the image to YCbCr color space
    const yCbCrImage = convertImageToYCbCr(imageData);

    // Split the image into 8x8 blocks
    const blocks = splitIntoBlocks(yCbCrImage.yCbCrData, yCbCrImage.width, yCbCrImage.height);

    const processedBlocks = blocks.map(block => {
        const dctResult = dct2D(block); 
        return quantizeBlock(dctResult);
    });

    // Generate the Huffman Table (for encoding)
    generateHuffmanTable(processedBlocks);  // Ensure this function is called with arguments

    // Create the JPEG Header (you may want to add the actual JPEG creation logic)
    createJPEGHeader();

    console.log('JPEG encoding complete');
});
