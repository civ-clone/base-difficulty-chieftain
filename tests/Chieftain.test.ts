import Difficulty from '@civ-clone/core-difficulty/Difficulty';
import Chieftain from '../Chieftain';
import { expect } from 'chai';

describe('Chieftain', (): void => {
  it('is a difficulty at level 0', (): void => {
    expect(Object.prototype.isPrototypeOf.call(Difficulty, Chieftain)).true;
    expect(Chieftain.level()).equal(0);
    expect(Chieftain.name).equal('Chieftain');
  });
});
