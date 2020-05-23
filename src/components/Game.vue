<template>

  <div class="game" @click.exact="clickOnInterface">
    <span class="round" ref="round" @click.exact.stop="clickOnRound" @click.ctrl.stop="bonus"></span>
  </div>
  
</template>

<script>

export default {
  name: 'Game',
  data: function () {
    return {click: 0}

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
    bonus: function (event) {
      console.log('bonus')
      console.log(event)
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
      let element = this.$refs.round

      let size = Math.random() * (100 - 10) + 10
      let top = Math.random() * (60 - 5) + 5
      let left = Math.random() * (60 - 5) + 5

      element.style.height = element.style.width = `${size}px`
      element.style.margin =  `${top}% ${left}%`
    }
  }
}

</script>


<style lang="scss" scoped>

.game {
  width: 100%;
  height: 50%;
  background: lightseagreen;

  .round {
    height: 50px; 
    width: 50px;
    background: darkblue;
    border-radius: 100%;
    position: absolute;
    margin: 20%;
  }
  

}

</style>

