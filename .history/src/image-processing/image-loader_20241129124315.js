/*!
 * This code is belongs to Pawvan
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
 * 
 *
 * For more details, please contact: [pawanpediredla@gmail.com]
 */


import fs from 'fs';









import sharp from 'sharp';

export function loadImageData(imagePath, callback) {
  sharp(imagePath)
    .raw()
    .toBuffer()
    .then((data) => {
      // Log the data to check if it was loaded properly
      console.log('Loaded Image Data:', data);

      // Check if the data is loaded and has the expected dimensions
      if (!data || data.length === 0) {
        console.error('Error: Image data is empty or undefined.');
        return;
      }

      
      const width = 256;  
      const height = data.length / (width * 4); // 4 channels (RGBA)
      
      const imageData = [];
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];  

        imageData.push([r, g, b, a]);
      }

      callback(imageData); 
    })
    .catch((err) => {
      console.error('Error loading image:', err);
    });
}

  






