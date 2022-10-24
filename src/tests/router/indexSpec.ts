import supertest from "supertest";
import app from "../../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
  const correctFileName = "encenadaport.jpg",
    rowngFileNaem = "fail.png",
    width = 200,
    height = 200;

  it("gets the api endpoint", async () => {
    const response = await request.get(
      `/api/images?fileName=${correctFileName}&width=${width}&height=${height}`
    );
    expect(response.status).toBe(200);
  });

  it("use not exist file name", async () => {
    const response = await request.get(
      `/api/images?fileName=${rowngFileNaem}&width=${width}&height=${height}`
    );
    expect(response.status).toBe(200);
    expect(response.text).toEqual("File is not exist");
  });

  it("fileName unexist", async () => {
    const response = await request.get(
      `/api/images?width=${width}&height=${height}`
    );
    expect(response.status).toBe(200);
    expect(response.text).toEqual("File is not exist");
  });
});
