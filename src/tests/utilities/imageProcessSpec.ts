import resizeImage from "../../utilities/imageProcess";

describe("test image processing", function (): void {
  it("should throw error if file is undefined", async function (): Promise<void> {
    expect(resizeImage("", 200, 200)).toThrow;
  });

  it("should throw erro if width or height is NAN", async function (): Promise<void> {
    expect(resizeImage("file", NaN, NaN)).toThrow;
  });
});
