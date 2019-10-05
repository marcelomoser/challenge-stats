export const reactionContentToEmoji = content => {
  return {
    'THUMBS_UP': '👍',
    'THUMBS_DOWN': '👎',
    'EYES': '👀',
    'HEART': '❤️',
    'ROCKET': '🚀',
    'LAUGH': '😂',
    'CONFUSED': '😕',
    'HOORAY': '🎉'
  }[content]
}