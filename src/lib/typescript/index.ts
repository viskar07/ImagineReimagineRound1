export type Coordinate = { x: number; y: number };

export type Mouse = {
    position: Coordinate;
    decimal: Coordinate;
    multiplier: Coordinate;
    offset: Coordinate;
    modifiedPosition: Coordinate;
  };