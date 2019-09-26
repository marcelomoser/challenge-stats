import axios from 'axios'

export const fetchPullRequestByLabel = label => {
  return axios({
    method: 'post',
    headers: {
      Authorization: `token 2e21da0beec285860a600101dd08a3867e5f810a`
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
              changedFiles
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
  }).then(response => response.data.data)
}
