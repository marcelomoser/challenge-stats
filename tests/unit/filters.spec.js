import { reactionContentToEmoji, formatDate } from "../../src/lib/filters"

describe('Vue Filters', () => {
  describe('Date & Time', () => {
    it('should format date from now', () => {
      const date = new Date()
      date.setDate(date.getDate() - 2) // menos dois dias
      expect(formatDate(date)).toBe('há 2 dias')
    })
  })

  describe('Emoji Filters', () => {
    it('should return the thumbs up emoji when reaction content is "THUMBS_UP"', () => {
      expect(reactionContentToEmoji('THUMBS_UP')).toBe('👍')
    })
    it('should return the thumbs up emoji when reaction content is "THUMBS_DOWN"', () => {
      expect(reactionContentToEmoji('THUMBS_DOWN')).toBe('👎')
    })
    it('should return the thumbs up emoji when reaction content is "EYES"', () => {
      expect(reactionContentToEmoji('EYES')).toBe('👀')
    })
    it('should return the thumbs up emoji when reaction content is "ROCKET"', () => {
      expect(reactionContentToEmoji('ROCKET')).toBe('🚀')
    })
    it('should return the thumbs up emoji when reaction content is "LAUGH"', () => {
      expect(reactionContentToEmoji('LAUGH')).toBe('😂')
    })
    it('should return the thumbs up emoji when reaction content is "CONFUSED"', () => {
      expect(reactionContentToEmoji('CONFUSED')).toBe('😕')
    })
    it('should return the thumbs up emoji when reaction content is "HOORAY"', () => {
      expect(reactionContentToEmoji('HOORAY')).toBe('🎉')
    })
  })
})
