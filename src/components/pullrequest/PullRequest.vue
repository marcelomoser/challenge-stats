<style src="./pull-request.styl" lang="stylus" scoped></style>

<template>
  <div class="pull-request">
    <div class="pull-request__details">
      <img
        class="pull-request__details__avatar"
        :src="author.avatarUrl"
        :alt="author.login"
        :title="'@' + author.login">
      <p>
        <a :href="author.url">@{{ author.login }}</a>
        enviou sua participação {{ pullRequest.createdAt | toTextFromNow }}.
      </p>
      <p class="pull-request__details__vote">
        Vote nesse pull request
        <a :href="pullRequest.permalink">clicando aqui</a>.
      </p>
    </div>
    <ReactionList :reactions="reactions" />
  </div>
</template>

<script>
import ReactionList from '@/components/reaction/ReactionList'

export default {
  components: { ReactionList },
  props: {
    pullRequest: { type: Object, required: true }
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
