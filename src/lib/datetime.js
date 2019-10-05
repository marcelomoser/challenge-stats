import dayjs from 'dayjs'
import ptbr from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)


export default date => {
  const deadline = dayjs(date)

  if(deadline.isAfter(dayjs()))
    return deadline.locale(ptbr).fromNow()
  return deadline.locale(ptbr).format('DD [de] MMMM [de] YYYY [às] HH:mm')
}