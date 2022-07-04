import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special = 0; 
  private _cost = 0;
  constructor(
    private _name: string,
  ) {}

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  get name(): string {
    return this._name;
  }
} 