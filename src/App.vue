<template>
  <div id="app">
    <Game></Game>
    <Player></Player>
    <Score></Score>

  </div>
</template>

<script>
import Game from './components/Game'
import Score from './components/Score'
import Player from './components/Player'

export default {
  name: 'App',
  components: {
    Game,
    Score,
    Player
  }
}
</script>

<style>

@import '../reset.scss';





  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    display: block;
  }
</style>
