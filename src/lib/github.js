import axios from 'axios'

export const fetchPullRequestByLabel = label => {
  return axios({
    method: 'post',
    headers: {
      Authorization: `token ${process.env.VUE_APP_GH_TOKEN || ''}`
    },
    url: 'https://api.github.com/graphql',
    data: {
      query: `
      query {
        repository(owner:"codigofalado" name: "desafio333"){
          pullRequests(labels: ["${label}"] last: 100){
            totalCount
            nodes {
              id
              title
              createdAt
              permalink
              author {
                login
                url
                avatarUrl
              }
              reactions(last: 50){
                totalCount
                nodes {
                  content
                  createdAt
                  user {
                    avatarUrl
                    id
                    login
                    url
                  }
                }
              }
            }
          }
        }
      }
      `
    }
  }).then(response => response.data)
}
