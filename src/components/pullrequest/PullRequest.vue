<template>
  <div class="pull-request">
    <div>
      <img
        class="pull-request__user-avatar"
        :src="author.avatarUrl"
        :alt="author.login"
        :title="'@' + author.login">
      <p class="pull-request__signed">
        <a :href="author.url">@{{ author.login }}</a>
        enviou sua participação {{ pullRequest.createdAt | toTextFromNow }}.
      </p>
      <p class="pull-request__vote">
        Vote nesse pull request
        <a :href="pullRequest.permalink">clicando aqui</a>.
      </p>
    </div>
    <reactions :reactions="reactions" />
  </div>
</template>

<script>
import Reactions from '@/components/reaction/Reactions'

export default {
  components: { Reactions },
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