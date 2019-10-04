<style src="./winner-list.styl" lang="stylus" scoped></style>

<template>
  <div v-if="winners.length === 0">Este evento não ainda possui vencedores divulgados</div>
  <div v-else>
    <winner
      v-for="winner in winnerlist"
      :key="winner.position"
      :winner="winner"
      :title="winner.position + 'º colocado'"
    />
  </div>
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
