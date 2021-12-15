export default class Team {
  constructor(...rest) {
    this.member = rest;
  }

  * [Symbol.iterator]() {
    for (const item of this.member) {
      yield item;
    }
  }
}
