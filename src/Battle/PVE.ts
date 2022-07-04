import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  _player: Fighter;
  _enemies: SimpleFighter[];

  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  fight(): number {
    let winner = 0;
    for (let i = 1; i < 50; i += 1) {
      this.playerAttack();
      if (this._enemies.every((enemie) => enemie.lifePoints < 0)) {
        winner = 1;
        break;
      }
      this.enemiesAttack();
      if (this._player.lifePoints < 0) {
        winner = -1;
        break;
      }
    }
    return winner;
  }

  playerAttack(): void {
    this._enemies.forEach((enemie) => {
      if (enemie.lifePoints > 0) this._player.attack(enemie);
    });
  }

  enemiesAttack(): void {
    this._enemies.forEach((enemie) => {
      if (this._player.lifePoints > 0) enemie.attack(this._player);
    });
  }
}

export default PVE; 