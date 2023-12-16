import fs from "fs/promises";

export async function writeFileOnServer(filePath, content) {
  try {
    const jsonString = JSON.stringify(content, null, 2);
    await fs.writeFile(filePath, jsonString);
    console.log(`File written successfully to: ${filePath}`);
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
  }
}
