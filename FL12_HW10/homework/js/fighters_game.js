

class Fighter {
    constructor(myFighter) {
        this.name = myFighter.name;
        this.damage = myFighter.damage;
        this.hp = myFighter.hp;
        this.strength = myFighter.strength;
        this.agility = myFighter.agility;
        this.wins = 0;
        this.losses = 0;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage
    }

    getStrength() {
        return this.strength
    }

    getAgility() {
        return this.agility
    }

    getHealth() {
        return this.hp
    }

    attack(fighter) {
        let result
        let randomAttack = Math.random();
        let probabilityAttack = (100 - fighter.getAgility() - fighter.getStrength()) / 100
        if (randomAttack > probabilityAttack){
            fighter.dealDamage(this)
            result = `${this.name} makes ${this.damage} damage to ${fighter.getName()}`
        } else {
            result = `${this.name} attack missed`
        }
        return result
    }

    logCombatHistory() {
        return `Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses}`
    }

    heal(points) {
        this.hp += points
        if (this.hp > 100 ) {
            this.hp = 100;
        }
        return this.hp
    }

    dealDamage(fighter) {
        this.hp -= fighter.getDamage()
        if (this.hp < 0) {
            this.hp = 0
        }
        return this.hp
    }

    addWin() {
        this.wins += 1
        return this.wins
    }

    addLoss() {
        this.losses += 1
        return this.losses
    }
}

function battle(fighter1, fighter2) {
    
    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight`)
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight`)
    } else {
        for (let i = 1; i !== 0; i++) {
            let attack1 = fighter1.attack(fighter2);
            let attack2 = fighter2.attack(fighter1);
            if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
                i = -1
            }
            console.log(attack1);
            console.log(attack2);
        }
        if (fighter2.getHealth() === 0) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} has won!`);
        } else if (fighter1.getHealth() === 0) {
            fighter2.addWin();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} has won!`);
        } 
    }
 
}




