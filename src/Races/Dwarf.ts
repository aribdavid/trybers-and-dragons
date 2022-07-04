import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(points) {
    this._maxLifePoints = points;
  }
}