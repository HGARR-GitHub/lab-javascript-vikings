// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health
    this.strength = strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health = this.health-damage
  }
}

// Viking
class Viking extends Soldier{

  constructor (name, health, strength){
    super(health,strength)
    this.name = name
    this.health = health
    this.strength = strength
  }

  receiveDamage(damage){
    this.health = this.health - damage
    if (this.health>0){
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return `Odin Owns You All!`
  }

}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){
    super(health,strength)
    this.health = health
    this.strength = strength
  }

  receiveDamage(damage){
    this.health = this.health - damage
    if (this.health>0){
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {

  constructor (){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    const rndSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const rndViking = Math.floor(Math.random() * this.vikingArmy.length)
    const result = this.saxonArmy[rndSaxon].receiveDamage(this.vikingArmy[rndViking].strength)

    //remove dead saxon from the army
    if (this.saxonArmy[rndSaxon].health <= 0){
      this.saxonArmy.splice(rndSaxon,1)
    }
    return result
  }


  saxonAttack(){
    const rndViking = Math.floor(Math.random() * this.vikingArmy.length)
    const rndSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    const result = this.vikingArmy[rndViking].receiveDamage(this.saxonArmy[rndSaxon].strength)

    //remove dead saxon from the army
    if (this.vikingArmy[rndViking].health <= 0){
      this.vikingArmy.splice(rndViking,1)
    }
    return result
  }

  showStatus(){

    if (!this.saxonArmy.length){
      return "Vikings have won the war of the century!"
    }

    if (!this.vikingArmy.length){
      return "Saxons have fought for their lives and survive another day..."
    }

    if (this.saxonArmy.length>0 || this.vikingArmy.length>0){
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}
