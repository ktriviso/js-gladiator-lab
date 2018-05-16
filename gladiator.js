class Gladiator {
  constructor (name, weapon) {
      this.name = name
      this.weapon = this.checkForWeapon(weapon)
  }
  checkForWeapon(weapon) {
      if(weapon === 'trident' || weapon === 'club' || weapon === 'spear'){
          return weapon
      }else{
          return 'wrong weapon choice!'
      }
  }
}

module.exports = Gladiator

let krista = new Gladiator('krista', 'club')
console.log(krista)
