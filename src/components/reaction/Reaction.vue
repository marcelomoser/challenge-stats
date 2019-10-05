<template>
  <div>
    <img
      :src="reaction.user.avatarUrl"
      :alt="reaction.user.login"
      :title="reaction.user.login"
    >
    <div>
      <a :href="reaction.user.url">@{{ reaction.user.login }}</a>
      reagiu com {{ reaction.content | toEmoji }} {{ reaction.createdAt | toTextFromNow }}
    </div>
  </div>
</template>

<script>
import reactionContentToEmoji from '@/lib/emoji'

export default {
  props: {
    reaction: { type: Object, required: true }
  },
  filters: {
    toEmoji(content){
      return reactionContentToEmoji(content)
    }
  }
}
</script>
