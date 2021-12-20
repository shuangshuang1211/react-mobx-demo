import { action, makeObservable, observable } from "mobx"

class AppleStore {
  constructor (apple) {
    this.id = apple.id;
    this.isEated = apple.isEated;
    this.title = apple.title;
    this.weight = apple.weight;

    makeObservable(this, {
      title: observable,
      isEated: observable,
      updateIsEated: action,
    })
  }

  updateIsEated () {
    this.isEated = !this.isEated;
  }
}

export default AppleStore;