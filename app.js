new Vue({
    el: '#game',
    data: {
        endGame: false,
        newGame: false,
        startedGame : false,
        playerHealth: 100,
        monsterHealth: 100,
        messageEndGame: "",
        battleLog: []
    },
    computed: {
        playerLowHealth(){ 
            return this.playerHealth <= 20
        },
        monsterLowHealth(){
             return this.monsterHealth <= 20
        },
    },
    methods: {
        surrender(){            
            this.newGame = !this.newGame;
            this.endGame = false;
            this.startedGame = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.battleLog = [];
        },
        attack(){
            this.startedGame = true;

            let playerDamage = Math.floor((Math.random() * 12) + 1);
            let monsterDamage = Math.floor((Math.random() * 9) + 1);

            this.playerHealth -= playerDamage;
            this.monsterHealth -= monsterDamage;            

            this.battleLog.unshift("Monstro atingiu jogador com " + playerDamage)
            this.battleLog.unshift("Jogador atingiu monstro com " + monsterDamage)

            this.verifyEndGame();
        },
        specialAttack(){
            this.startedGame = true;

            let playerDamage = Math.floor((Math.random() * 12) + 1);
            let monsterDamage = Math.floor((Math.random() * 15) + 1);

            this.playerHealth -= playerDamage;
            this.monsterHealth -= monsterDamage;

            this.battleLog.unshift("Monstro atingiu jogador com " + playerDamage)
            this.battleLog.unshift("Jogador atingiu monstro com " + monsterDamage)

            this.verifyEndGame();
        },
        heal(){
            this.startedGame = true;

            let playerDamage = Math.floor((Math.random() * 12) + 1);
            let playerHeal = Math.floor((Math.random() * 12) + 1);

            this.playerHealth -= playerDamage;
            this.playerHealth += playerHeal;

            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
            
            this.battleLog.unshift("Monstro atingiu jogador com " + playerDamage)
            this.battleLog.unshift("Jogador ganhou força de " + playerHeal)

            this.verifyEndGame();
        },        
        verifyEndGame(){            
            if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                this.endGame = true;
                this.newGame = true;
                this.messageEndGame = "Você perdeu!!! :("
            }
            else if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                this.endGame = true;
                this.newGame = true;
                this.messageEndGame = "Você ganhou!!! :)"
            }
        }
    }    
});