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
    // Check if 'data' is defined and has content
    if (!data || data.length === 0) {
      console.error('No image data provided to convertImageToYCbCr');
      return;
    }
    
    const width = 256;  
    const height = data.length / width;
    
    const yCbCrImage = [];
    
    for (let i = 0; i < data.length; i += 4) {
      let r = data[i];
      let g = data[i + 1];
      let b = data[i + 2];
  
     
     
     
