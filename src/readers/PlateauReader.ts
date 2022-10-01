import readline from "readline";
import { IPlateau } from "../plateau/interfaces/IPlateau";
import Plateau from "../plateau/Plateau";
import IReader from "./interfaces/IReader";

export default class PlateauReader implements IReader<IPlateau> {
  constructor(private rl: readline.Interface) {}

  async read(): Promise<IPlateau> {
    let plateau: IPlateau | null = null;

    while (!plateau) {
      const plateauDimensions: string = await new Promise((resolve) => {
        this.rl.question(
          "Please, inform plateau dimensions: ",
          (plateauDimensions) => {
            resolve(plateauDimensions);
          }
        );
      });

      if (!this.checkString(plateauDimensions)) {
        console.log("Invalid plateau dimensions!");
        continue;
      }
      const [x, y] = plateauDimensions
        .split(" ")
        .map((value) => parseInt(value));

      plateau = new Plateau({ x, y });
    }

    return plateau;
  }

  checkString(string: string): boolean {
    return /^\d+ \d+$/.test(string);
  }
}
