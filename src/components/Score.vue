<template>

  <div class="score" v-if="player">
    {{ score }}
  </div>

</template>

<script>

export default {
  name: 'Score',
  props: ['score', 'player']
}
</script>

<style lang="scss" scoped>

  .score {
    display: block;
    text-align: center;
    margin: 2vw auto;
    height: 5vw;
    width: 10vw;
    font-size: 3vw;
    font-weight: bold;
    color: $yellow;
    background-color: $secondary-blue;
    padding-top: 1vw;
  }

</style>