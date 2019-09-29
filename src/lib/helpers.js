export const uniqueReactionsByUserLogin = reactions => {
  return [... new Set(reactions.nodes.map(reaction => reaction.user.login))]
}
