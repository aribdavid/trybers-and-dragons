import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(points) {
    this._maxLifePoints = points;
  }
} 