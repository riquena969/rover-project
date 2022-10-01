import readline from "readline";
import { IPlateau } from "../plateau/interfaces/IPlateau";
import PlateauReader from "./PlateauReader";
import RoverReader from "./RoverReader";

describe("RoverReader", () => {
  it("should read rover configuration are valid", async () => {
    const roverReader = new RoverReader(
      {} as readline.Interface,
      {} as IPlateau
    );

    expect(roverReader.checkString("1 2 N")).toBe(true);
    expect(roverReader.checkString("1 2 N 1")).toBe(false);
    expect(roverReader.checkString("N 2 N")).toBe(false);
    expect(roverReader.checkString("1 2")).toBe(false);
    expect(roverReader.checkString("1 2 A")).toBe(false);
  });
});
