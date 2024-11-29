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

 function rgbToYCbCr(R,G,B){
const Y=0.299 * R + 0.587 * G + 0.114 * B;  // Luminance (Y)
const Cb =-0.168736 * R - 0.331264 * G + 0.5 * B + 128;  // Chrominance (Cb)
const Cr = 0.5 * R - 0.418688 * G - 0.081312 * B + 128;  // Chrominance (Cr)
return  {
    Y,Cb,Cr
}
 }
 export {
    rgbToYCbCr
 };