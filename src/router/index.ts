import Express, { Router } from "express";
import resizeImage from "../utilities/imageProcess";
import fs from "fs";
import path from "path";

const routes = Router();

routes.get(
  "/api/images",
  async (req: Express.Request, res: Express.Response): Promise<void> => {
    const { filename, width, height } = req.query,
      thumpDir = path.resolve("assets/thump/"),
      fullDir = "./assets/full",
      fullFileName = filename + ".jpg";

    if (!width || isNaN(Number(width)) || Number(width) < 0) {
      res.send("Width value is not correct");
      return;
    } else if (!height || isNaN(Number(height)) || Number(height) < 0) {
      res.send("height value is not correct");
      return;
    }

    const fileThump = `${width}_${height}_${fullFileName}`,
      fullPath = path.join(fullDir, !filename ? "" : fullFileName),
      thumpPath = path.join(thumpDir, fileThump);

    if (!fs.existsSync(fullPath) || !filename) {
      res.send("File is not exist");
    } else {
      if (!fs.existsSync(thumpPath)) {
        await resizeImage(fullFileName, Number(width), Number(height));
      }
      res.sendFile(thumpPath);
    }
  }
);

export default routes;
