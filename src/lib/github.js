import axios from 'axios'

export const fetchPullRequestByLabel = label => {
  return axios({
    method: 'post',
    headers: {
      Authorization: `token b6ee5aebbb472e8729a37d3ee88772b1b7f5a7d5`
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
