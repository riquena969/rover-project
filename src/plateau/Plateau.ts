import { IPlateau } from "./interfaces/IPlateau";
import { IPlateauBoundaries } from "./interfaces/IPlateauBoundaries";

export default class Plateau implements IPlateau {
  boundaries: IPlateauBoundaries;

  constructor(boundaries: IPlateauBoundaries) {
    if (boundaries.x <= 0 || boundaries.y <= 0) {
      throw new Error("Invalid plateau boundaries");
    }

    this.boundaries = boundaries;
  }

  get width(): number {
    return this.boundaries.x;
  }

  get height(): number {
    return this.boundaries.y;
  }
}
