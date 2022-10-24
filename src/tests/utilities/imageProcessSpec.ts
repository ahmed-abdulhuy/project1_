import resizeImage from "../../utilities/imageProcess";

describe("test image processing", function () {
  it("should throw error if file is undefined", async function () {
    expect(resizeImage("", 200, 200)).toThrow;
  });

  it("should throw erro if width or height is NAN", async function () {
    expect(resizeImage("file", NaN, NaN)).toThrow;
  });
});
