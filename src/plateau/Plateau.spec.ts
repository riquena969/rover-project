import Plateau from "./Plateau";

describe("Plateau", () => {
  it("should create a plateau with the given boundaries", () => {
    const plateau = new Plateau({ x: 5, y: 5 });

    expect(plateau.width).toBe(5);
    expect(plateau.height).toBe(5);
  });

  it("should throw an error if the boundaries are not valid", () => {
    expect(() => new Plateau({ x: 0, y: 5 })).toThrowError();
    expect(() => new Plateau({ x: 5, y: 0 })).toThrowError();
    expect(() => new Plateau({ x: -1, y: 5 })).toThrowError();
    expect(() => new Plateau({ x: 5, y: -1 })).toThrowError();
  });
});
