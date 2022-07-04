import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity = 0;
  private _energy: Energy;
  teste = 'ola';

  constructor(name: string) {
    const ramdomDexterity = getRandomInt(1, 10);
    this._dexterity = ramdomDexterity;
    this._race = new Elf(name, ramdomDexterity);
    this._archetype = new Mage(name);
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this.archetype.energyType, amount: getRandomInt(1, 10),
    };
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  special(enemy: Fighter): void {
    this._strength += 10;
    this.attack(enemy);
    this._strength -= 10;
  }

  levelUp(): void {
    this.maxLifePoints += getRandomInt(1, 10);
    if (this.maxLifePoints > this._race.maxLifePoints) {
      this.maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this.maxLifePoints;

    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {  
    if (attackPoints > 0) this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this.lifePoints;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }
} 