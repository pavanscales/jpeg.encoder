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

import { rgbToYCbCr } from "../core/color-space.js";

export function convertImageToYCbCr(data) {
    if (!data || data.length === 0) {
      console.error('Invalid image data in convertImageToYCbCr');
      return [];
    }
  
    const width = 256;  // Ensure this is correct based on your image
    const height = data.length / (width * 4);  // RGBA means 4 bytes per pixel
  
    const yCbCrImage = [];
    for (let i = 0; i < data.length; i += 4) {
      let r = data[i];
      let g = data[i + 1];
      let b = data[i + 2];
  
      let y = 0.299 * r + 0.587 * g + 0.114 * b;
      let cb = -0.169 * r - 0.331 * g + 0.499 * b + 128;
      let cr = 0.499 * r - 0.419 * g - 0.0813 * b + 128;
  
      if (i / 4 % width === 0) yCbCrImage.push([]);  
  
      yCbCrImage[Math.floor(i / (4 * width))].push([y, cb, cr]);
    }
  
    console.log('YCbCr Image:', yCbCrImage);  
    return yCbCrImage;
  }
  

  
  
  
  
  
  
  
  
  
  
  

    
    
    
  
     
     
     
