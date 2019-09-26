<template>
  <div class="challenge-info">
    <div class="version">{{ challenge.version }}</div>
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

<style scoped>
.challenge-info,
.challenge-info .version,
.challenge-info .details {
  display: flex
}

.challenge-info {
  border: 1px solid red;
  margin: 1vh 1vw;
  border-radius: 10px;
  flex-flow: column
}
.challenge-info .version {
  background-color: #eb007d;
  color: #fff;
  font-weight: bold;
  font-size: 2em;
  align-items: center;
  justify-content: center;
  width: 50px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  user-select: none
}
.challenge-info .details {
  flex-flow: column wrap;
  padding: 1vh 2.5%;
  width: 100%
}

.challenge-info .details h2,
.challenge-info .details .deadline {
  color: #eb007d
}

.challenge-info .details .description {
  margin: 10px 0
}
</style>

