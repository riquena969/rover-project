import readline from "readline";
import IReader from "./interfaces/IReader";

export default class CommandReader implements IReader<string> {
  constructor(private rl: readline.Interface) {}

  async read(): Promise<string> {
    let roverCommands: string | null = null;

    while (!roverCommands) {
      roverCommands = (await new Promise((resolve) => {
        this.rl.question("Please, inform rover commands: ", (roverCommands) => {
          resolve(roverCommands);
        });
      })) as string;

      if (!this.checkString(roverCommands)) {
        console.log("Invalid rover commands!");
        roverCommands = null;
        continue;
      }
    }

    return roverCommands;
  }

  checkString(string: string): boolean {
    return /^[LRM]+$/.test(string);
  }
}
