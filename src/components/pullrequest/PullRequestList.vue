<style src="./pull-request-list.styl" lang="stylus" scoped></style>

<template>
  <div class="pull-requests" v-if="pullRequests && pullRequests.totalCount > 0">
    <PullRequest
      v-for="pullRequest in pullRequests.nodes"
      :key="pullRequest.id"
      :pullRequest="pullRequest" />
  </div>
  <div class="pull-requests" v-else>Nenhuma pull request foi enviada para essa edição do evento</div>
</template>

<script>
import PullRequest from '@/components/pullrequest/PullRequest'

export default {
  components: { PullRequest },
  props: {
    repository: { type: Object, required: true }
  },
  computed: {
    pullRequests(){
      return this.repository.pullRequests
    }
  }
}
</script>
