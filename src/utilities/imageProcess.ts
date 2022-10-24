import sharp from "sharp";
import path from "path";

const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<void> => {
  fileName = fileName ? fileName : "";
  width = !width || isNaN(width) ? 200 : width;
  height = !height || isNaN(height) ? 200 : height;

  const fullDir = "./assets/full",
    thumpDir = "./assets/thump",
    fileThump = `${width}_${height}_${fileName}`,
    filePath = path.join(fullDir, fileName);

  await sharp(filePath)
    .resize(width, height)
    .toFile(path.join(thumpDir, fileThump));
};

export default resizeImage;
