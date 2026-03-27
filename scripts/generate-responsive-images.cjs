const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = 'assets/images';
const images = [
    'IMG006_MOSAICO_HORIZONTAL.webp',
    'IMG003_VET_MULHER.webp',
    'IMG001_DOG_FIAPO.webp',
    'IMG005_GATO.webp'
];

const sizes = [480, 1020];
const formats = ['avif', 'webp'];

async function generate() {
    for (const imgName of images) {
        const inputPath = path.join(imagesDir, imgName);
        if (!fs.existsSync(inputPath)) {
            console.log(`Skipping ${imgName}, not found.`);
            continue;
        }

        const baseName = imgName.split('.')[0];

        for (const format of formats) {
            for (const size of sizes) {
                const outName = `${baseName}-${size}w.${format}`;
                const outputPath = path.join(imagesDir, outName);
                
                console.log(`Generating ${outputPath}...`);
                await sharp(inputPath)
                    .resize(size)
                    .toFormat(format, { quality: 60 })
                    .toFile(outputPath);
            }
        }
    }
    console.log('Responsive images generated successfully!');
}

generate().catch(console.error);
