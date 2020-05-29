<template>

  <div>
    <span class="welcomeMessage" v-html="welcomeMessage" :class="{ hide: !player }"></span>
    <form @submit.prevent="setPlayer" :class="{ hide: player }">
      <input name="player" placeholder="Enter your name" />
      <button type="submit">Play</button>
        <div class="rules" :class="{ hide: player }">
          <div class="rules__container">
            <div class="rules__title">
              <p>Rules</p>
            </div>
            <div class="rules__rounds">
              <div class="round__1 round"></div>
              <div class="round__cmd">click : +1 </div>
              <div class="round__2 round"></div>
              <div class="round__cmd">click : +1 </div>
              <div class="round__3 round"></div>
              <div class="round__cmd">Ctrl + click : +3</div>
            </div>
          </div>
        </div>
    </form>
  </div>

</template>

<script>

export default {
  name: 'Player',
  data() {
    return {
      player: '',
      welcomeMessage: ''
    }
  },
  updated() {
    this.welcomeMessage = `Hi <span class="player">${this.player}</span> ! `
  },
  methods: {
    setPlayer(event) {
      let playerName = event.target[0].value

      if(!playerName) {
        alert('Merci de renseigner votre pseudo')

        return
      }

      this.player = playerName
      this.$emit('player')
    }
  },
}
</script>

<style lang="scss" scoped>

.hide {
  display: none;
}

.welcomeMessage {
  font-size: 2vw;
  color: $primary-blue;
  font-weight: bold;
}

.round {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}

.round__1 {
    background: $pink;
}
.round__2 {
    background: $secondary-blue;
}
.round__3 {
    background: $yellow;
}

.rules {
  margin-top: 1vw;
  display: flex;
  justify-content: center;
  color: $tertiary-blue;
  font-size: 2vw;
  font-weight: bold;

  .rules__title {
    margin-bottom: 2vw;
    color: $tertiary-blue;
    font-weight: bold;
    font-size: 2vw;
  }

  .rules__rounds{
    display: flex;
    width: 50vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

</style>