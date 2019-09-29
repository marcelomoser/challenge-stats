import { uniqueReactionsByUserLogin } from '@/lib/helpers'

describe('Helpers', () => {
  describe('Unique reactions by user login', () => {
    it('should remove duplicated user login from reaction list', () => {
      const user = { login: 'gituser' }
      const reactions = { nodes: [{ user }, { user }, { user }] }
      expect(uniqueReactionsByUserLogin(reactions)).toEqual(['gituser'])
    })
  })
})
