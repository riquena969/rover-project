import Plateau from "../plateau/Plateau";
import { IRoverPosition } from "./interfaces/IRoverPosition";
import Rover from "./Rover";

describe("Rover", () => {
  it("should throw an error if the rover position is negative", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: -1,
      y: 0,
      facedTo: "N",
    };

    expect(() => new Rover(plateau, position)).toThrowError(
      "Rover position cannot be negative"
    );
  });

  it("should throw an error if the rover position is greater than plateau size", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 6,
      y: 0,
      facedTo: "N",
    };

    expect(() => new Rover(plateau, position)).toThrowError(
      "Rover position cannot be greater than plateau size"
    );
  });

  it("should move forward when faced to north", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "N",
    };

    const rover = new Rover(plateau, position);

    rover.move("M");

    expect(rover.position).toEqual({
      x: 0,
      y: 1,
      facedTo: "N",
    });
  });

  it("should move forward when faced to east", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "E",
    };

    const rover = new Rover(plateau, position);

    rover.move("M");

    expect(rover.position).toEqual({
      x: 1,
      y: 0,
      facedTo: "E",
    });
  });

  it("should move forward when faced to south", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 1,
      facedTo: "S",
    };

    const rover = new Rover(plateau, position);

    rover.move("M");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "S",
    });
  });

  it("should move forward when faced to west", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 1,
      y: 0,
      facedTo: "W",
    };

    const rover = new Rover(plateau, position);

    rover.move("M");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "W",
    });
  });

  it("should not move forward when faced to north and the rover is at the top of the plateau", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 5,
      facedTo: "N",
    };

    const rover = new Rover(plateau, position);

    rover.move("M");

    expect(rover.position).toEqual({
      x: 0,
      y: 5,
      facedTo: "N",
    });
  });

  it("should not move forward when faced to east and the rover is at the right of the plateau", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 5,
      y: 0,
      facedTo: "E",
    };

    const rover = new Rover(plateau, position);

    rover.move("M");

    expect(rover.position).toEqual({
      x: 5,
      y: 0,
      facedTo: "E",
    });
  });

  it("should not move forward when faced to south and the rover is at the bottom of the plateau", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "S",
    };

    const rover = new Rover(plateau, position);

    rover.move("M");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "S",
    });
  });

  it("should not move forward when faced to west and the rover is at the left of the plateau", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "W",
    };

    const rover = new Rover(plateau, position);

    rover.move("M");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "W",
    });
  });

  it("should turn left when faced to north", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "N",
    };

    const rover = new Rover(plateau, position);

    rover.move("L");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "W",
    });
  });

  it("should turn left when faced to east", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "E",
    };

    const rover = new Rover(plateau, position);

    rover.move("L");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "N",
    });
  });

  it("should turn left when faced to south", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "S",
    };

    const rover = new Rover(plateau, position);

    rover.move("L");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "E",
    });
  });

  it("should turn left when faced to west", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "W",
    };

    const rover = new Rover(plateau, position);

    rover.move("L");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "S",
    });
  });

  it("should turn right when faced to north", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "N",
    };

    const rover = new Rover(plateau, position);

    rover.move("R");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "E",
    });
  });

  it("should turn right when faced to east", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "E",
    };

    const rover = new Rover(plateau, position);

    rover.move("R");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "S",
    });
  });

  it("should turn right when faced to south", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "S",
    };

    const rover = new Rover(plateau, position);

    rover.move("R");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "W",
    });
  });

  it("should turn right when faced to west", () => {
    const plateau = new Plateau({ x: 5, y: 5 });
    const position: IRoverPosition = {
      x: 0,
      y: 0,
      facedTo: "W",
    };

    const rover = new Rover(plateau, position);

    rover.move("R");

    expect(rover.position).toEqual({
      x: 0,
      y: 0,
      facedTo: "N",
    });
  });
});
