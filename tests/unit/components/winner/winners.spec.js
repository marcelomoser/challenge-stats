import { mount, shallowMount } from '@vue/test-utils'
import Winners from '@/components/winner/Winners'

describe('Winners', () => {

  it('should render a simple message when winners are not specified', () => {
    const winners = []
    const component = mount(Winners, { propsData: { winners }})

    expect(component.is(Winners)).toBe(true)
    expect(component.text()).toBe('Este evento não ainda possui vencedores divulgados')
  })

  it('should render the winners as component children when it is specified', () => {
    const winners = [
      { position: 1, login: 'gituser' },
      { position: 2, login: 'anothergituser' }
    ]
    const component = shallowMount(Winners, {
      propsData: { winners }
    })
    expect(component.is(Winners)).toBe(true)
    expect(component.findAll('winner-stub').length).toBe(2)
    expect(component.find('winner-stub:first-of-type')
      .attributes('title'))
      .toBe('1º colocado')
    expect(component.find('winner-stub:last-of-type')
      .attributes('title'))
      .toBe('2º colocado')
  })
})