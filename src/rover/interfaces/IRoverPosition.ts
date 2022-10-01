import { IGrid } from "../../interfaces/IGrid";
import { Direction } from "../types/Direction";

export interface IRoverPosition extends IGrid {
  facedTo: Direction;
}
