<template>
  <div>
    <ChallengeList :challenges="challenges" :status="status" />
  </div>
</template>

<script>
import challengesJson from '@/challenges.json'
import { fetchPullRequestByLabel } from '@/lib/github'
import ChallengeList from '@/components/challenge/ChallengeList'

export default {
  components: {
    ChallengeList
  },
  data(){
    return {
      challenges: [],
      status: {
        loaded: false,
        message: 'Buscando informações relacionadas aos eventos'
      }
    }
  },
  async created(){

    let array = []
    try {
      for(const challenge of challengesJson){
        const response = await fetchPullRequestByLabel(challenge['pull_request_label'])

        if('message' in response)
          throw Error(response.message)

        array.push({
          ...challenge,
          ...response.data
        })
      }
      this.status.message = ''
    } catch(err){
      this.status.message = `Falha ao buscar informações dos eventos: ${err}`
    }
    this.challenges = array.reverse()
    this.status.loaded = true
  }
}
</script>

<style>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI Light' /* Mudar depois */
  }

  ::selection {
    background-color: #e66aab;
    color: #fff
  }

  html, body {
    height: 100%
  }

  a {
    color: #eb007d;
    text-decoration: none
  }
</style>
