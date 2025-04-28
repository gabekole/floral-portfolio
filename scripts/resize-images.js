// scripts/resize-images.js
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public/resized');

const sizes = [400, 800, 1200];

function isImage(file) {
    return /\.(jpe?g|png|webp)$/i.test(file);
}

async function resizeImage(filePath, outputBase) {
    for (const width of sizes) {
        const baseName = path.basename(filePath, path.extname(filePath));
        const outputPath = path.join(outputBase, `${width}_${baseName}.jpg`);
        
        await sharp(filePath)
        .rotate(0) // Prevents auto-rotation
        .resize(width)
        .jpeg({ quality: 80 })
        .withMetadata() // Keep original metadata (optional, but safe)
        .toFile(outputPath);
    }
}

async function processFolder(folder) {
    const entries = fs.readdirSync(folder, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(folder, entry.name);
        const relativePath = path.relative(inputDir, folder);
        const outputSubDir = path.join(outputDir, relativePath);
        
        if (entry.isDirectory()) {
            fs.mkdirSync(outputSubDir, { recursive: true });
            await processFolder(fullPath);
        } else if (entry.isFile() && isImage(entry.name)) {
            fs.mkdirSync(outputSubDir, { recursive: true });
            await resizeImage(fullPath, outputSubDir);
        }
    }
}

(async () => {
    fs.rmSync(outputDir, { recursive: true, force: true });
    await processFolder(inputDir);
    console.log('✅ Images resized and converted to JPG!');
})();
