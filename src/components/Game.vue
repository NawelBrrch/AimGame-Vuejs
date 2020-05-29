<template>

  <div class="content">
    <div class="game" @click.exact="clickOnInterface" :class="{wait: !player || stopped}">
      <span class="time" v-if="!stopped">{{time}}</span>
      <span class="gameOver" v-if="player && stopped">Game over</span>
      <span v-if="player && !stopped" class="round"  :style="roundStyle" :class="{bonus: bonusActivated, badColor: badColorActivated}" @click.exact.stop="clickOnRound" @click.ctrl.stop="bonus"></span>
    </div>
    <div class="log">
      <p v-for="item in collection" :key="item.id">
        {{item.message}} 
      </p>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'Game',
  props: ['player'],
  data() {
    return {
      click: 0,
      time: 0,
      roundStyle: {
        height: '50px',
        width: '50px',
        margin: '20% 20%'
      },
      bonusActivated: false,
      badColorActivated: false,
      collection: [],
      stopped: true
    }
  },
  created() {
    document.onkeydown = this.start
  },
  watch: {
    click() {
      this.updateRound()
      this.$emit('score', this.click)
    },
    player(){
      this.stopped = false
      this.time = 20
      let self = this

      setInterval(() => {
        self.updateTime()
        }, 1000)
      }
  },
  methods: {
    updateTime() {
      if(this.time === 0) {
        this.stopped = true
      }

      if (!this.stopped) {
        this.time--
      }
    },
    clickOnRound() {
      this.updateClick(true)
      setTimeout(this.updateRound, 1000)
      this.addLog(`WELL DONE ! `)
    },
    bonus() {
      if (this.bonusActivated){
        this.updateClick(true)
        this.click++
        this.addLog(`PERFECT ! `)
      }else{
        this.updateClick()
        this.addLog(`MISSED ! `)
      }
    },
    clickOnInterface() {
      this.updateClick()
      this.addLog(` MISSED ! `)

    },
    updateClick: function (increment) {
      if (!this.player || this.stopped) {
        return
      }

      if (increment) {
        this.click++
      } else {
        this.click--
      }
    },
    updateRound() {

      let size = Math.random() * (100 - 10) + 10
      let top = Math.random() * (35 - 5) + 5
      let left = Math.random() * (80 - 5) + 5


      this.badColorActivated = size < 40
      this.bonusActivated = size > 80

      this.roundStyle.height = this.roundStyle.width = `${size}px`
      this.roundStyle.margin =  `${top}% ${left}%`
    },
    addLog: function(message) {
      if (!this.player || this.stopped) {
        return
      }
      this.collection.unshift({message: message})
    }
  }
}

</script>


<style lang="scss" scoped>

.content {
  height: 80vh;
}

.log {
  width: 100vw;
  height: 4vw;
  background-color: $tertiary-blue;
  display: block;
  overflow: hidden;
  font-weight: bold;
  font-size: 2vw;

  p{
    padding: 10px;
    font-size: 2vw;
    color: $yellow;
    padding-top: 1vw;
    text-align: center;
    letter-spacing: 1.5px;
  }
}

.game {
  width: 100vw;
  height: 89%;
  background: $primary-blue;
  opacity: 1;
  transition: opacity 1s;

  .round {
    background: $pink;
    border-radius: 100%;
    position: absolute;
    transition: width 2s, height 2s, margin 0.5s;
  }

  .wait {
    opacity: 0.3;
  }

  .bonus {
    background-color: $yellow;
  }

  .badColor {
    background-color: $secondary-blue;
  }
  
}

.time {
  position: absolute;
  font-size: 10vw;
  font-weight: bolder;
  padding-left: 5vw;
  color: $white;
  opacity: 0.5;
  border: 2px solid red;
}

.gameOver {
  display: block;
  width: 37vw;
  margin: 0 auto;
  padding-top: 15vw;
  font-size: 7vw;
  font-weight: bolder;
  color: $yellow;
  opacity: 1;
}
</style>

