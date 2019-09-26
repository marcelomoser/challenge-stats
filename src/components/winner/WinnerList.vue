<template>
  <div v-if="winners && winners.length > 0">
    <Winner v-for="winner in winnerlist" :key="winner.position" :winner="winner" />
  </div>
  <div v-else>Este evento ainda não possui vencedores</div>
</template>

<script>
import Winner from '@/components/winner/Winner'

export default {
  components: {
    Winner
  },
  props: {
    winners: {
      type: Array,
      required: true
    }
  },
  computed: {
    winnerlist(){
      return this.winners.map((winner, index) => ({
        position: index + 1,
        login: winner
      }))
    }
  }
}
</script>
