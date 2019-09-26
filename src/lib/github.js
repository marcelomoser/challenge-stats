import axios from 'axios'

export const fetchPullRequestByLabel = label => {
  return axios({
    method: 'post',
    headers: {
      Authorization: `token b0db4ceebabad6c12dc1a296d0ed3f40aa0afd22`
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
