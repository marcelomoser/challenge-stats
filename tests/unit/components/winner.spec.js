import { mount } from '@vue/test-utils'
import Winner from '@/components/winner/Winner'

describe('Winner', () => {
  it(`should render the winner position and GitHub profile url`, () => {
    const winner = { position: 1, login: 'gituser' }
    const component = mount(Winner, { propsData: { winner }})

    expect(component.text()).toBe('@gituser')

    const anchor = component.find('a')
    expect(anchor.attributes('data-position')).toBe('1')
    expect(anchor.attributes('href')).toBe('https://github.com/gituser')
  })
})