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
function dct2D(input) {
    const N = input.length; // Assuming input is a square matrix
    let result = new Array(N);

    // Initialize result matrix with zeroes
    for (let i = 0; i < N; i++) {
        result[i] = new Array(N).fill(0);
    }

    // Perform DCT transformation
    for (let u = 0; u < N; u++) {
        for (let v = 0; v < N; v++) {
            let sum = 0;

            
            for (let x = 0; x < N; x++) {
                for (let y = 0; y < N; y++) {
                    sum += input[x][y] *
                        Math.cos(((2 * x + 1) * u * Math.PI) / (2 * N)) *
                        Math.cos(((2 * y + 1) * v * Math.PI) / (2 * N));
                }
            }

            
            result[u][v] = sum;
        }
    }

    return result;
}

module.exports{
    dct2D
}