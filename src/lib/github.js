import axios from 'axios'

export const fetchPullRequestByLabel = label => {
  return axios({
    method: 'post',
    headers: {
      Authorization: `token e0c8ebe25d1d10944adb77b2f8967a5deeb56caf`
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
