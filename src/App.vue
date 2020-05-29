<template>
  <div id="app">
    <Game :player="player" v-on:score="updateScore"></Game>
    <Player v-on:player="updatePlayer" class="text-center welcomeMessage"></Player>
    <Score :score="score" :player="player"></Score>
  </div>
</template>

<script>
import Game from './components/Game'
import Score from './components/Score'
import Player from './components/Player'

export default {
  name: 'App',
  data() {
    return {
      score: 0,
      player: false
    }
  },
  components: {
    Game,
    Score,
    Player
  },
  methods: {
    updateScore(score) {
      this.score = score
    },
    updatePlayer() {
      this.player = true
    }
  }
}
</script>

<style lang="scss">

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    height: 60vh;
    display: block;
  }

  .welcomeMessage {
    margin-top: 1vw;
    font-size: 2vw;
    border: 1px solid red;
  }

</style>
