import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.racesInstances += 1;
  }

  static override createdRacesInstances(): number {
    return Elf.racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(points) {
    this._maxLifePoints = points;
  }
} 