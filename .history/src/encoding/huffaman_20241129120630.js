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

 const huffmanTableDC = {
    0: '00',
    1: '01',
    2: '10',
    3: '11',
  };
  
  const huffmanTableAC = {
    0: '111111110000',
    1: '111111110001',
    2: '111111110010',
    
  };
  
 export function encodeHuffmanDC(value) {
    return huffmanTableDC[value] || '1010'; 
  }
  
  export  function encodeHuffmanAC(value) {
    return huffmanTableAC[value] || '0000';s
  }
  


