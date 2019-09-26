import dayjs from 'dayjs'
import ptbr from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

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

export const formatDate = date => {
  return dayjs(date).locale(ptbr).fromNow()
}
