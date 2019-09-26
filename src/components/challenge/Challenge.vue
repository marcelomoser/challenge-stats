<template>
  <div class="challenge-info">
    <div class="details">
      <h2>{{ challenge.title }}</h2>
      <p class="description">{{ challenge.small_description }}</p>
      <p><strong class="deadline">Deadline:</strong> {{ challenge.deadline | toTextFromNow }}</p>
    </div>
    <div>
      <WinnerList :winners="challenge.winners" />
      <PullRequestList :repository="challenge.repository" />
    </div>
  </div>
</template>

<script>
import WinnerList from '@/components/winner/WinnerList'
import PullRequestList from '@/components/pullrequest/PullRequestList'

export default {
  components: {
    WinnerList,
    PullRequestList
  },
  props: {
    challenge: {
      type: Object,
      required: true
    }
  }
}
</script>
