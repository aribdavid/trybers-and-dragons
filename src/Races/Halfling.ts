import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(points) {
    this._maxLifePoints = points;
  }
} 