import readline from "readline";
import { IPlateau } from "../plateau/interfaces/IPlateau";
import { IRover } from "../rover/interfaces/IRover";
import { Direction } from "../rover/types/Direction";
import Rover from "../rover/Rover";
import IReader from "./interfaces/IReader";

export default class RoverReader implements IReader<IRover> {
  constructor(private rl: readline.Interface, private plateau: IPlateau) {}

  async read(): Promise<IRover> {
    let rover: IRover | null = null;

    while (!rover) {
      const roverPosition: string = await new Promise((resolve) => {
        this.rl.question("Please, inform rover position: ", (roverPosition) => {
          resolve(roverPosition);
        });
      });

      if (!this.checkString(roverPosition)) {
        console.log("Invalid rover position!");
        continue;
      }
      const [x, y, facedTo] = roverPosition.split(" ");

      rover = new Rover(this.plateau, {
        x: parseInt(x),
        y: parseInt(y),
        facedTo: facedTo as Direction,
      });
    }

    return rover;
  }

  checkString(string: string): boolean {
    return /^\d+ \d+ [NSEW]$/.test(string);
  }
}
