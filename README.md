
---

# JPEG Encoder/Decoder

This project is a high-performance, from-scratch **JPEG Encoder/Decoder** written in JavaScript. It implements the entire JPEG compression pipeline, including image loading, color space conversion, discrete cosine transform (DCT), quantization, Huffman coding, and file construction. The project aims to educate and demonstrate the inner workings of the JPEG format while providing a robust utility for working with compressed image data.

## 🚀 Features

- **Complete JPEG Encoding Pipeline**:
  - Convert images from RGB to YCbCr color space.
  - Apply Discrete Cosine Transform (DCT) to image blocks.
  - Quantize the DCT coefficients to reduce data.
  - Encode the quantized data using Huffman coding.
  - Assemble the JPEG file with appropriate headers and compressed data.

- **JPEG Decoding** (Planned for Future Updates):
  - Decode JPEG files by parsing headers and Huffman tables.
  - Reverse the quantization and inverse DCT to recover original image data.
  - Convert YCbCr back to RGB for image display.

- **Modular Architecture**:
  - Each step of the JPEG encoding process is divided into small, reusable modules (image processing, DCT, quantization, Huffman coding, etc.).

## 🏗️ Project Structure

The project is organized into the following directories:

```
jpeg-encoder/
├── src/
│   ├── image-processing/              # Image loading, color space conversion
│   │   ├── image-loader.js           # Loads and processes input images
│   │   ├── ycbcr-converter.js        # Converts RGB to YCbCr
│   ├── core/                          # Core processing modules
│   │   ├── block-processor.js        # Splits image into 8x8 blocks
│   │   ├── dct.js                    # 2D Discrete Cosine Transform (DCT)
│   │   ├── quantization.js           # Quantizes DCT coefficients
│   ├── encoding/                     # JPEG-specific encoding routines
│   │   ├── huffman.js                # Huffman encoding and table generation
│   │   ├── jpeg-file.js              # Creates JPEG file headers and assembles output
│   └── index.js                      # Entry point for running encoding
├── assets/                           # Test images for encoding
├── docs/                             # Documentation (e.g., architecture, design decisions)
├── test/                             # Unit tests for core functionality
└── package.json                      # Project dependencies and scripts
```

## 🛠️ Installation

### Prerequisites

- **Node.js** (v16.x or higher)
- **npm** (Node Package Manager)

### Step-by-Step Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pawvan/jpeg_encoder.git
   cd jpeg-encoder
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Install Sharp** for image processing:
   Sharp is used to load and manipulate images.
   ```bash
   npm install sharp
   ```

4. **Test the setup**:
   Ensure everything is set up correctly by running:
   ```bash
   node src/index.js
   ```

## ⚙️ Usage

### Encoding an Image to JPEG

To encode an image to a JPEG file:

1. **Prepare an input image**:
   Place an image (e.g., `image.jpg`) in the root directory or the `assets/` folder.

2. **Run the encoding process**:
   ```bash
   node src/index.js
   ```

3. The script will process the image and output a JPEG file with the encoded data.

### Example of JPEG Encoding

Here’s an example of encoding an image (`image.jpg`) to a JPEG file:

```js
import { loadImageData } from './image-processing/image-loader';
import { convertImageToYCbCr } from './image-processing/ycbcr-converter';
import { splitIntoBlocks } from './core/block-processor';
import { dct2D } from './core/dct';
import { quantizeBlock } from './core/quantization';
import { generateHuffmanTable } from './encoding/huffman';
import { createJPEGHeader } from './encoding/jpeg-file';

// Process the image
loadImageData('image.jpg', (imageData) => {
  const yCbCrImage = convertImageToYCbCr(imageData);
  const blocks = splitIntoBlocks(yCbCrImage);

  const processedBlocks = blocks.map(block => {
    const dctResult = dct2D(block);
    return quantizeBlock(dctResult);
  });

  generateHuffmanTable(processedBlocks);
  createJPEGHeader(processedBlocks);

  console.log('JPEG encoding complete');
});
```

### Decoding a JPEG File (Planned)

A future update will include decoding functionality to read JPEG files, reverse the transformations (Huffman decoding, DCT, etc.), and display the image.

## 📈 Testing

We use **unit tests** to ensure each module works correctly. The tests are located in the `test/` directory.

To run the tests:

```bash
npm test
```

### Example Test:

```js
import { dct2D } from '../src/core/dct';

test('Discrete Cosine Transform (DCT) works on a block', () => {
  const block = [[12, 15, 10, 7, 5, 3, 2, 1], ...];
  const result = dct2D(block);
  expect(result).toEqual(expectedDCTResult);
});
```

## 🎯 Roadmap

1. **JPEG Decoding**: Implement the decoding pipeline (inverse DCT, Huffman decoding, etc.).
2. **Optimization**: Improve the performance of block processing and Huffman coding.
3. **Compression Ratio Improvements**: Experiment with different quantization tables and Huffman code tables to improve compression ratio.

## 🤝 Contributing

Contributions are welcome! If you want to contribute to this project, please fork the repository, make your changes, and create a pull request.

### How to Contribute

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/my-new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Create a new Pull Request.

Please ensure that your code follows the existing style, includes unit tests, and does not break the build.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📚 Resources

- **JPEG Specification**: [ISO/IEC 10918-1](https://www.iso.org/standard/19368.html)
- **Huffman Coding**: [Wikipedia - Huffman Coding](https://en.wikipedia.org/wiki/Huffman_coding)
- **Discrete Cosine Transform (DCT)**: [Wikipedia - DCT](https://en.wikipedia.org/wiki/Discrete_cosine_transform)

## **Contact**

If you have any questions or feedback about this project, feel free to reach out:

- **Email**: pawanpediredla@gmail.com
- **GitHub**: [github.com/pawvan/jpeg_encoder](https://github.com/pawvan/jpeg_encoder.git)

---

