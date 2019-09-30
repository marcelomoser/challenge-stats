<style src="./winner-list.styl" lang="stylus" scoped></style>

<template>
  <div class="winners-list" v-if="winners && winners.length > 0">
    <Winner
      v-for="winner in winnerlist"
      :key="winner.position"
      :winner="winner"
      :title="winner.position + 'º colocado'"/>
  </div>
  <div class="winners-list" v-else>Este evento ainda não possui vencedores divulgados</div>
</template>

<script>
import Winner from '@/components/winner/Winner'

export default {
  components: { Winner },
  props: {
    winners: { type: Array, required: true }
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
