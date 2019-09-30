<style src="./reaction-list.styl" lang="stylus" scoped></style>

<template>
  <div class="reaction-list" v-if="reactions && reactions.totalCount > 0">
    <div class="reaction-list__counter">
      <p class="reaction-list__counter__total"
         title="Nº total de reações no pull request (contabilizando reações duplicadas).">
        Reações<br>
        <span>{{ reactions.totalCount }}</span>
      </p>
      <p class="reaction-list__counter__unique"
        title="Este é o número de reações únicas por usuário.">
        Reações Únicas<br>
        <span>{{ uniqueReactions.length }}</span>
      </p>
    </div>
    <div class="reaction-list__users">
      <Reaction
        v-for="reaction in reactions.nodes"
        :key="reaction.id"
        :reaction="reaction" />
    </div>
  </div>
  <div class="reaction-list" v-else>Ninguém votou nesse pull request ainda</div>
</template>

<script>
import { uniqueReactionsByUserLogin } from '@/lib/helpers'
import Reaction from '@/components/reaction/Reaction'

export default {
  components: { Reaction },
  props: {
    reactions: { type: Object, required: true }
  },
  computed: {
    uniqueReactions(){
      return uniqueReactionsByUserLogin(this.reactions)
    }
  }
}
</script>
