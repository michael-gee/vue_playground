<template lang="html">
  <div class="container">
    <div class="player-scores">

      <transition
        appear
        enter-active-class="animated fadeIn">
        <div class="user">
          <h2>YOU</h2>
          <div class="healthbar">
            <div class="current-health" :style="{width: userHealth + '%'}">{{ userHealth }}</div>
          </div>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn">
        <div class="monster">
          <h2>MONSTER</h2>
          <div class="healthbar">
            <div class="current-health" :style="{width: monsterHealth + '%'}">{{ monsterHealth }}</div>
          </div>
        </div>
      </transition>

    </div><!-- PLAYER SCORES DIV END -->

    <transition
      appear
      enter-active-class="animated fadeIn">

      <div class="button-bar">
        <button v-if="!gameIsActive" id="start-button" @click="startGame()">Start Game</button>

        <template v-else>
          <button id="attack-button" @click="gameAction('attack')">Attack</button>
          <button id="sp-attack-button" @click="gameAction('special-attack')">Special Attack</button>
          <button id="heal-button" @click="gameAction('heal')">Heal</button>
          <button id="reset-button" @click="reset()">Reset</button>
        </template>
      </div>
    </transition>

    <transition
      enter-active-class="animated fadeIn">
      <div class="status-section" v-if="gameIsActive">
        <transition-group
          enter-active-class="animated fadeInDown"
          leave-active-class="animated fadeOut"
          mode="in-out">
          <div v-for="(result, index) in gameLog" class="game-status" :key="index">
            {{ result }}
          </div>
        </transition-group>
      </div>
    </transition>

  </div><!-- CONTAINER DIV END -->
</template>

<script>
  export default {
    data() {
      return {
        userHealth: 100,
        monsterHealth: 100,
        gameIsActive: false,
        gameLog: []
      }
    },
    computed: {
      healthCheck() {
        return this.monsterHealth > 0 && this.userHealth > 0;
      }
    },

    methods: {
      startGame() {
        this.gameIsActive = true;
      },

      gameAction(method) {
        var userAction = Math.max(Math.floor(Math.random() * 10) + 1, 3),
            userMessage = `PLAYER HITS MONSTER FOR ${userAction}`,
            monsterAction = Math.max(Math.floor(Math.random() * 10) + 1, 3),
            monsterMessage = `MONSTER HITS PLAYER FOR ${monsterAction}`;
        if(method === 'attack') {
          this.monsterHealth -= userAction;
        }else if(method === 'special-attack') {
          userAction = Math.max(Math.floor(Math.random() * 10) + 1, 5);
          this.monsterHealth -= userAction;
          userMessage = `PLAYER HITS MONSTER FOR ${userAction}`;
        }else if(method === 'heal') {
          userMessage = `PLAYER HEALS HIMSELF FOR 10`;
          this.userHealth += 10;
        }

        this.userHealth -= monsterAction;
        this.printActions(userMessage, monsterMessage);

        if(this.healthCheck === false){
          if(this.userHealth <= 0){
            alert('The Monster has defeated you! Click "Start Game" to play another round!');
          }else if(this.monsterHealth <= 0){
            alert('You have defeated the monster! Click "Start Game" to play another round!');
          }
          this.reset();
        }
      },

      printActions(userM, monsterM) {
        if(this.gameLog.length >= 20){
          this.gameLog.splice(18, 2);
        }
        this.gameLog.unshift(userM, monsterM);
      },

      reset() {
        this.userHealth = 100;
        this.monsterHealth = 100;
        this.gameLog = [];
        this.gameIsActive = false;
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;
  }

  .user, .monster {
    width: 50%;
    float: left;
    text-align: center;
    margin-bottom: 50px;
  }
    h2 {
      font-size: 3.5em;
      margin-bottom: 15px;
    }
    .healthbar {
      background-color: lightgray;
      width: 90%;
      margin: 0 auto;
      border-radius: 5px;
    }
    .current-health {
      color: white;
      max-width: 100%;
      font-size: 2em;
      background-color: green;
      padding: 20px 0;
    }

  .button-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    clear: both;
    padding: 25px 0;
    margin-bottom: 50px;
    border-radius: 5px;
    border: 3px solid #eee;
    -webkit-box-shadow: 0 10px 6px -6px #eee;
       -moz-box-shadow: 0 10px 6px -6px #eee;
            box-shadow: 0 10px 6px -6px #eee;
  }
    button {
      font-size: 2.5em;
      padding: 10px 25px;
      border-radius: 5px;
      cursor: pointer;
      margin: 0 25px;
    }
    #start-button {
      background-color: #08aa08;
    }
      #start-button:hover {
        background-color: #08dd08;
      }
    #attack-button {
      background-color: #ff8080;
    }
      #attack-button:hover {
        background-color: #ff1a1a;
      }
    #sp-attack-button {
      background-color: #ffc14d;
    }
      #sp-attack-button:hover {
        background-color: #ffa500;
      }
    #heal-button {
      background-color: #08aa08;
      padding-left: 35px;
      padding-right: 35px;
    }
      #heal-button:hover {
        background-color: #33ff33;
      }
    #reset-button {
      background-color: white;
      color: gray;
      border: 1px solid lightgray;
    }
      #reset-button:hover {
        background-color: lightgray;
        color: white;
      }


  .status-section {
    width: 100%;
    padding: 25px 0;
    border-radius: 5px;
    border: 3px solid #eee;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: bold;
    -webkit-box-shadow: 0 10px 6px -6px #eee;
       -moz-box-shadow: 0 10px 6px -6px #eee;
            box-shadow: 0 10px 6px -6px #eee;
  }
    .game-status {
      text-align: center;
      width: 90%;
      padding: 5px 0;
      margin: 5px auto;
    }
    .game-status:nth-child(odd) {
      background-color: #ffb3b3;
      color: red;
    }
    .game-status:nth-child(even) {
      background-color: #bdcbf5;
      color: blue;
    }
</style>
