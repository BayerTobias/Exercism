export interface PlanetData {
  name: string;
  orbitalPeriod: number;
}

export class Planet {
  name: string;
  orbitalPeriod: number;

  constructor(data: PlanetData) {
    this.name = data.name;
    this.orbitalPeriod = data.orbitalPeriod;
  }
}

const PLANETS = [
  new Planet({ name: "mercury", orbitalPeriod: 0.2408467 }),
  new Planet({ name: "venus", orbitalPeriod: 0.61519726 }),
  new Planet({ name: "earth", orbitalPeriod: 1.0 }),
  new Planet({ name: "mars", orbitalPeriod: 1.8808158 }),
  new Planet({ name: "jupiter", orbitalPeriod: 11.862615 }),
  new Planet({ name: "saturn", orbitalPeriod: 29.447498 }),
  new Planet({ name: "uranus", orbitalPeriod: 84.016846 }),
  new Planet({ name: "neptune", orbitalPeriod: 164.79132 }),
];

export function age(planet: string, seconds: number): number {
  const searchedPlanet = PLANETS.find((pla) => pla.name === planet);

  if (!searchedPlanet) throw new Error("Invalid planet name");

  return Math.round((seconds / 31557600 / searchedPlanet.orbitalPeriod) * 100) / 100;
}
