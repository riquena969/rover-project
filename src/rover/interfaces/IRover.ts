import { IPlateau } from "../../plateau/interfaces/IPlateau";
import { Movement } from "../types/Movement";
import { IRoverPosition } from "./IRoverPosition";

export interface IRover {
  plateau: IPlateau;
  position: IRoverPosition;

  move(direction: Movement): IRover;
}
