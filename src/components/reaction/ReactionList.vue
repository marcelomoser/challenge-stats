<template>
  <div v-if="reactions && reactions.totalCount > 0">
    <p class="total-reactions">Este pull request recebeu {{ votes }}</p>
    <p class="unique-reactions">Votantes únicos: {{ uniqueReactions.length }}</p>
    <div>
      <Reaction
        v-for="reaction in reactions.nodes"
        :key="reaction.id"
        :reaction="reaction" />
    </div>
  </div>
  <div v-else>Ninguém votou nesse pull request ainda</div>
</template>

<script>
import { uniqueReactionsByUserLogin } from '@/lib/helpers'
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
  },
  computed: {
    uniqueReactions(){
      return uniqueReactionsByUserLogin(this.reactions)
    },
    votes(){
      const reactions = this.reactions.totalCount
      return `${reactions} vot${reactions === 1 ? 'o': 'os'}`
    }
  }
}
</script>
