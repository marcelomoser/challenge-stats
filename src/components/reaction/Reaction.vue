<style src="./reaction.styl" lang="stylus" scoped></style>

<template>
  <div>
    <div>
      <img :src="user.avatarUrl" :alt="user.login" height="40" width="40">
    </div>
    <div>
      <p>
        <a :href="user.url">@{{ user.login }}</a>
        reagiu a esta pull com {{ reaction.content | toEmoji }}
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
