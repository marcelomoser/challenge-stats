<style src="./challenge.styl" lang="stylus" scoped></style>

<template>
  <div class="challenge">
    <div class="challenge__details">
      <div class="challenge__details__header">
        <h2>{{ challenge.title }}</h2>
        <p :title="challenge.deadline">
          <strong>Deadline:</strong>
          {{ challenge.deadline | toTextFromNow }}
        </p>
        <p title="Nº de participantes">
          <strong>Participantes:</strong>
          {{ participants }}
        </p>
      </div>
      <p class="challenge__details__description">
        {{ challenge.small_description }}
      </p>
    </div>
    <div class="challenge__winners">
      <WinnerList :winners="challenge.winners" />
      <PullRequestList :repository="challenge.repository" />
    </div>
  </div>
</template>

<script>
import WinnerList from '@/components/winner/WinnerList'
import PullRequestList from '@/components/pullrequest/PullRequestList'

export default {
  components: { WinnerList, PullRequestList },
  props: {
    challenge: { type: Object, required: true },
  },
  computed: {
    participants(){
      return this.challenge.repository.pullRequests.nodes.length
    }
  }
}
</script>
