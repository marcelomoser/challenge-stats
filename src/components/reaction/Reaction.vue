<style src="./reaction.styl" lang="stylus" scoped></style>

<template>
  <div class="reaction">
    <img class="reaction__user-avatar" :src="user.avatarUrl" :alt="user.login">
    <div class="reaction__info">
      <p>
        <a :href="user.url">@{{ user.login }}</a>
        reagiu a este pull request com {{ reaction.content | toEmoji }}
        {{ reaction.createdAt | toTextFromNow }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactionContentToEmoji } from '@/lib/filters'

export default {
  props: {
    reaction: { type: Object, required: true }
  },
  computed: {
    user(){
      return this.reaction.user
    }
  },
  filters: {
    toEmoji(content){
      return reactionContentToEmoji(content)
    }
  }
}
</script>
