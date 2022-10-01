import readline from "readline";
import { IPlateau } from "./plateau/interfaces/IPlateau";
import CommandReader from "./readers/CommandReader";
import PlateauReader from "./readers/PlateauReader";
import RoverReader from "./readers/RoverReader";
import { IRover } from "./rover/interfaces/IRover";
import { Movement } from "./rover/types/Movement";

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const plateauReader = new PlateauReader(rl);

  const plateau: IPlateau = await plateauReader.read();

  const roverReader = new RoverReader(rl, plateau);
  const commandReader = new CommandReader(rl);

  let rovers: IRover[] = [];
  let commands: string[] = [];
  let readMoreRovers: boolean = true;

  while (readMoreRovers) {
    rovers.push(await roverReader.read());
    commands.push(await commandReader.read());

    readMoreRovers =
      (await new Promise((resolve) => {
        rl.question("Do you want to add another rover? (y/n): ", (answer) => {
          resolve(answer);
        });
      })) === "y";
  }

  console.log("\nRovers final positions:");
  rovers.forEach((rover, index) => {
    commands[index]
      .split("")
      .forEach((command) => rover.move(command as Movement));

    console.log(
      `Rover ${index + 1} position: ${rover.position.x} ${rover.position.y} ${
        rover.position.facedTo
      }`
    );
  });

  rl.close();
}

main();
