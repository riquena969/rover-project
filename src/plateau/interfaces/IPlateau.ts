import { IPlateauBoundaries } from "./IPlateauBoundaries";

export interface IPlateau {
  boundaries: IPlateauBoundaries;

  get width(): number;
  get height(): number;
}
