<template>
  <div>
    <p>Posição: {{ winner.position }}</p>
    <a :href="'https://github.com/' + winner.login">@{{ winner.login }}</a>
  </div>
</template>

<script>
export default {
  props: {
    winner: {
      type: Object,
      required: true
    }
  }
}
</script>
