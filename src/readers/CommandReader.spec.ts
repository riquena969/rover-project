import readline from "readline";
import CommandReader from "./CommandReader";

describe("CommandReader", () => {
  it("shoul verify if the command is valid", () => {
    const commandReader = new CommandReader({} as readline.Interface);

    expect(commandReader.checkString("LMLMLMLMM")).toBe(true);
    expect(commandReader.checkString("MMRMMRMRRM")).toBe(true);
    expect(commandReader.checkString("LMLMLMLMM1")).toBe(false);
    expect(commandReader.checkString("LMLMLMLMM ")).toBe(false);
    expect(commandReader.checkString("LMLMLMLMM 1")).toBe(false);
  });
});
