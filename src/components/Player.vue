<template>
  <div>
    <span v-html="welcomeMessage" v-hide></span>
    <form v-hide @submit.prevent="setPlayer">
      <input name="player" placeholder="Entrez votre pseudo" v-border:red/>
      <button type="submit">Jouer</button>
    </form>
  </div>

</template>

<script>

export default {
  name: 'Player',
  data: function () {
    return {
      player: '',
      welcomeMessage: ''
    }
  },
  updated: function () {
    this.welcomeMessage = `Bonjour <span class="player">${this.player}</span> ! `
  },
  methods: {
    setPlayer: function (event) {
      let playerName = event.target[0].value

      if(!playerName) {
        alert('Merci de renseigner votre pseudo')

        return
      }

      this.player = playerName
    }
  },
  directives: {
    border: function (el, binding){
      el.style.borderColor = binding.arg
    },
    hide: function(el, binding, vnode) {
      let isForm = vnode.tag === 'form'
      let player = vnode.context.player
      if(isForm) {
        el.style.display = player ? 'none' : 'block'
      }else{
        el.style.display = player ? 'block' : 'none'
      }

    }
  }
}

</script>

<style lang="scss" scoped>


</style>