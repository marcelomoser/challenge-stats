<template>
  <div v-if="reactions && reactions.totalCount > 0">
    <p>Esta pull request recebeu {{ reactions.totalCount }} votos </p>
    <div>
      <p>Votantes:</p>
      <Reaction
        v-for="reaction in reactions.nodes"
        :key="reaction.id"
        :reaction="reaction" />
    </div>
  </div>
  <div v-else>Ninguém votou nessa pull request ainda</div>
</template>

<script>
import Reaction from '@/components/reaction/Reaction'

export default {
  components: {
    Reaction
  },
  props: {
    reactions: {
      type: Object,
      required: true
    }
  }
}
</script>
