import { makeObservable, observable, flow, computed } from "mobx"
import AppleStore from './AppleStore'

class AppleListStore {
  constructor () {
    this.apples = [];
    this.isPicking = false;

    makeObservable(this, {
      apples: observable,
      isPicking: observable,
      addOneApple: flow,
      appleInfo: computed,
      unEatedApples: computed,
    })
    this.pickApple();
  }

  awaitPick () {
    setTimeout(() => {
      this.pickApple();
      this.isPicking = false;
    }, 2000);
  }

  *addOneApple () {
    this.isPicking = true;
    yield this.awaitPick();
  }

  pickApple () {
    const lastApple = this.apples[this.apples.length - 1];
    const currId = lastApple ? lastApple.id + 1 : 1;
    this.apples.push(new AppleStore({
      id: currId,
      title: `红苹果 - ${currId}号`,
      weight: Math.floor(Math.random() * 100),
      isEated: false,
    }))
  }
  get appleInfo () {
    return this.apples.reduce((acc, apple) => {
      if (apple.isEated) {
        acc.eatedCount += 1;
        acc.eatedWeight += apple.weight;
      } else {
        acc.unEatedCount += 1;
        acc.unEatedWeight += apple.weight;
      }
      return acc;
    }, {
      eatedCount: 0,
      eatedWeight: 0,
      unEatedCount: 0,
      unEatedWeight: 0,
    })
  }
  get unEatedApples () {
    return this.apples.filter((apple) => !apple.isEated)
  }
}

export default AppleListStore;