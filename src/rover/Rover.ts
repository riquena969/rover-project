import { IPlateau } from "../plateau/interfaces/IPlateau";
import { IRover } from "./interfaces/IRover";
import { IRoverPosition } from "./interfaces/IRoverPosition";
import { Direction } from "./types/Direction";
import { Movement } from "./types/Movement";

export default class Rover implements IRover {
  plateau: IPlateau;
  position: IRoverPosition;

  private directions: Direction[] = ["N", "E", "S", "W"];
  private movements: { [key in Direction]: { x: number; y: number } } = {
    N: { x: 0, y: 1 },
    E: { x: 1, y: 0 },
    S: { x: 0, y: -1 },
    W: { x: -1, y: 0 },
  };

  constructor(plateau: IPlateau, position: IRoverPosition) {
    if (position.x < 0 || position.y < 0) {
      throw new Error("Rover position cannot be negative");
    }

    if (position.x > plateau.width || position.y > plateau.height) {
      throw new Error("Rover position cannot be greater than plateau size");
    }

    this.plateau = plateau;
    this.position = position;
  }

  move(direction: Movement): IRover {
    if (direction === "M") {
      return this.moveForward();
    }

    return this.turn(direction);
  }

  private turn(dir: "L" | "R"): IRover {
    const currentDirectionIndex = this.directions.indexOf(
      this.position.facedTo
    );

    const newDirectionIndex =
      dir === "L" ? currentDirectionIndex - 1 : currentDirectionIndex + 1;

    const newDirection = this.directions[(newDirectionIndex + 4) % 4];

    this.position.facedTo = newDirection;

    return this;
  }

  private moveForward(): IRover {
    const { x, y } = this.movements[this.position.facedTo];

    const newX = this.position.x + x;
    const newY = this.position.y + y;

    if (
      newX < 0 ||
      newY < 0 ||
      newX > this.plateau.width ||
      newY > this.plateau.height
    ) {
      return this;
    }

    this.position.x = newX;
    this.position.y = newY;

    return this;
  }
}
