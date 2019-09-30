<style src="./challenge-list.styl" lang="stylus" scoped></style>

<template>
  <div class="container" v-if="status.loaded && challenges.length > 0">
    <Challenge v-for="(challenge, index) in challenges" :key="index" :challenge="challenge" />
  </div>
  <div class="container" v-else>{{ status.message }}</div>
</template>

<script>
import Challenge from '@/components/challenge/Challenge'

export default {
  components: { Challenge },
  props: {
    challenges: { type: Array, required: true },
    status: { type: Object, required: true }
  }
}
</script>
