import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private firstCharacter: Character,
    private secondCharacter: Character,
  ) {
    super(firstCharacter);
  }

  override fight() {
    console.log(`ola ${this.firstCharacter}`);
    return 1;
  }
} 