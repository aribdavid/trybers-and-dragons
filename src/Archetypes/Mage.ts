import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static archetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.archetypeInstances += 1;
  }

  static override createdArchetypeInstances(): number {
    return Mage.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}