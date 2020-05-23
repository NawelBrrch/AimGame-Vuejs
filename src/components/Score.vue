<template>
  <div class="score">
    {{score ? 'Votre score : ' + score : 'Appuyez sur entrée pour démarrer'}}
  </div>

</template>

<script>
export default {
  name: 'Score',
  data: function() {
    return {
      score: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>