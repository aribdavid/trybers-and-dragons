import Fighter from '../Fighter';
import Monster from '../Monster';

abstract class Battle {
  constructor(protected player: Fighter | Monster) { }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
