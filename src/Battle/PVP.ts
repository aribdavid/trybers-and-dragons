import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _enemy: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this._enemy = enemy;
  }

  fight(): number {
    while (this._enemy.lifePoints !== -1 && this.player.lifePoints !== -1) {
      this.player.attack(this._enemy);
      this._enemy.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP; 