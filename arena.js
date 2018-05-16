class Arena{
  constructor(name){
    this.name = this.capitalize(name)
    this.gladiators = []
  }
  capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  addGladiator(gladiator){
    if(this.gladiators.length < 2){
      this.gladiators.push(gladiator)
      if(this.gladiators.length === 2){
        this.fight()
      }
    }
  }
  fight(){
    let glad1 = this.gladiators[0]
    let glad2 = this.gladiators[1]
    if(this.gladiators[0].weapon === 'Trident'){
      console.log(this.gladiators[0].name + ' wins!')
    }
  }
}

module.exports = Arena
