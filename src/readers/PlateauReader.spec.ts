import readline from "readline";
import PlateauReader from "./PlateauReader";

describe("PlateauReader", () => {
  it("should read plateau dimensions are valid", async () => {
    const plateauReader = new PlateauReader({} as readline.Interface);

    expect(plateauReader.checkString("5 5")).toBe(true);
    expect(plateauReader.checkString("5 5 5")).toBe(false);
    expect(plateauReader.checkString("55")).toBe(false);
    expect(plateauReader.checkString("5A B")).toBe(false);
  });
});
