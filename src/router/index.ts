import { Router } from "express";
import resizeImage from "../utilities/imageProcess";
import fs from "fs";
import path from "path";

const routes = Router();

routes.get("/api/images", async (req, res) => {
  const { filename, width, height } = req.query,
    thumpDir = path.resolve("assets/thump/"),
    fullDir = "./assets/full",
    fileThump = `${!width || isNaN(Number(width)) ? 200 : width}_${
      !height || isNaN(Number(height)) ? 200 : height
    }_${filename}`,
    fullPath = path.join(fullDir, !filename ? "" : (filename as string)),
    thumpPath = path.join(thumpDir, fileThump);
  if (!fs.existsSync(fullPath) || !filename) {
    res.send("File is not exist");
  } else {
    if (!fs.existsSync(thumpPath)) {
      await resizeImage(filename as string, Number(width), Number(height));
    }
    res.sendFile(thumpPath);
  }
});

export default routes;
