import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static archetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.archetypeInstances += 1;
  }

  static override createdArchetypeInstances(): number {
    return Ranger.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}