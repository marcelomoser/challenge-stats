<template>
  <div v-if="pullRequests && pullRequests.totalCount > 0">
    <p>Participações: {{ pullRequests.totalCount }}</p>
    <PullRequest
      v-for="pullRequest in pullRequests.nodes"
      :key="pullRequest.id"
      :pullRequest="pullRequest" />
  </div>
  <div v-else>Nenhuma pull request foi enviada para essa versão do evento</div>
</template>

<script>
import PullRequest from '@/components/pullrequest/PullRequest'

export default {
  components: {
    PullRequest
  },
  props: {
    repository: {
      type: Object,
      required: true
    }
  },
  computed: {
    pullRequests(){
      return this.repository.pullRequests
    }
  }
}
</script>
