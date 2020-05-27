<template>

  <div class="game" @click.exact="clickOnInterface">
    <span class="round"  :style="roundStyle" :class="{bonus: bonusActivated}" @click.exact.stop="clickOnRound" @click.ctrl.stop="bonus"></span>
  </div>
  
</template>

<script>

export default {
  name: 'Game',
  data: function () {
    return {
      click: 0,
      roundStyle: {
        height: '50px',
        width: '50px',
        margin: '20% 20%'
      },
      bonusActivated: false
    }
  },
  created: function() {
    document.onkeydown = this.start
  },
  watch: {
    click: function () {
      this.updateRound()

    }
  },
  methods: {
    clickOnRound: function () {
      this.click++
    },
    bonus: function () {
      if (this.bonusActivated){
        console.log('bonus')
      }else{
        console.log('????')
      }
    },
    clickOnInterface: function () {
      this.click++

    },
    start: function() {
      if (event.key === 'Enter') {
        console.log('START GAME')

      }
    },
    updateRound: function () {

      let size = Math.random() * (100 - 10) + 10
      let top = Math.random() * (60 - 5) + 5
      let left = Math.random() * (70 - 5) + 5

      this.bonusActivated = size > 80

      this.roundStyle.height = this.roundStyle.width = `${size}px`
      this.roundStyle.margin =  `${top}% ${left}%`
    }
  }
}

</script>


<style lang="scss" scoped>

.game {
  width: 100%;
  height: 60%;
  background: lightseagreen;

  .round {
    background: darkblue;
    border-radius: 100%;
    position: absolute;
  }

  .bonus {
    background-color: red;
  }
  
}

</style>

