import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static archetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.archetypeInstances += 1;
  }

  static override createdArchetypeInstances(): number {
    return Necromancer.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}