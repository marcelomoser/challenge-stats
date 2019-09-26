<template>
  <div>
    <img :src="author.avatarUrl" :alt="author.login" height="40" width="40">
    <p>
      <a :href="author.url">@{{ author.login }}</a> enviou uma pull
      request que alterou {{ pullRequest.changedFiles }} arquivos.
    </p>
    <div>
      <ReactionList :reactions="reactions" />
      Vote nesta pull request <a :href="pullRequest.permalink">clicando aqui</a>
    </div>
  </div>
</template>

<script>
import ReactionList from '@/components/reaction/ReactionList'

export default {
  components: {
    ReactionList
  },
  props: {
    pullRequest: {
      type: Object,
      required: true
    }
  },
  computed: {
    author(){
      return this.pullRequest.author
    },
    reactions(){
      return this.pullRequest.reactions
    }
  }
}
</script>
