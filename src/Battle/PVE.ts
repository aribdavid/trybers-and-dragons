import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  _monsters: SimpleFighter[];
  // _player2: Fighter;
  constructor(player1: Fighter, monsters: SimpleFighter[]) {
    super(player1);
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((monster: SimpleFighter) => {
      this.player.attack(monster);
      this.player.attack(monster);
      this.player.attack(monster);
      monster.attack(this.player);
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;