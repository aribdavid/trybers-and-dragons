import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static archetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.archetypeInstances += 1;
  }

  static override createdArchetypeInstances(): number {
    return Warrior.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}