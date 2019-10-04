<style src="./winner.styl" lang="stylus" scoped></style>

<template>
  <a :data-position="winner.position" :href="'https://github.com/' + winner.login">
    @{{ winner.login }}
  </a>
</template>

<script>
export default {
  props: {
    winner: { type: Object, required: true }
  }
}
</script>
