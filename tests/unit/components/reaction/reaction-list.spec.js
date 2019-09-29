import { shallowMount } from '@vue/test-utils'
import ReactionList from '@/components/reaction/ReactionList'

describe('Reaction List', () => {
  it('should render a simple message when "reactions" prop is undefined', () => {
    const reactions = {}
    const component = shallowMount(ReactionList, { propsData: { reactions }})
    expect(component.text()).toBe('Ninguém votou nesse pull request ainda')
  })
  it('should render a simple message when "reactions" total count is zero', () => {
    const reactions = { totalCount: 0 }
    const component = shallowMount(ReactionList, { propsData: { reactions }})
    expect(component.text()).toBe('Ninguém votou nesse pull request ainda')
  })
  it('should render the reaction total count when "reactions" prop has one element', () => {
    const reactions = {
      totalCount: 1,
      nodes: [
        {user: { login: 'gituser'}}
      ]
    }
    const component = shallowMount(ReactionList, { propsData: { reactions }})
    expect(component.find('p.total-reactions').text()).toBe('Este pull request recebeu 1 voto')
  })
  it('should render the reaction total count when "reactions" prop has more than one element', () => {
    const reactions = {
      totalCount: 2,
      nodes: [
        {user: { login: 'gituser'}},
        {user: { login: 'gituser'}}
      ]
    }
    const component = shallowMount(ReactionList, { propsData: { reactions }})
    expect(component.find('p.total-reactions').text()).toBe('Este pull request recebeu 2 votos')
  })
  it('should render the reaction unique count correctly when there is one user with multiple reactions', () => {
    const reactions = {
      totalCount: 3,
      nodes: [
        {user: { login: 'gituser'}},
        {user: { login: 'gituser'}},
        {user: { login: 'gituser'}}
      ]
    }
    const component = shallowMount(ReactionList, { propsData: { reactions }})
    expect(component.find('p.unique-reactions').text()).toBe('Votantes únicos: 1')
  })
  it('should render the reaction unique count correctly when there is reactions from different users', () => {
    const reactions = {
      totalCount: 2,
      nodes: [
        {user: { login: 'gituser'}},
        {user: { login: 'gituser2'}}
      ]
    }
    const component = shallowMount(ReactionList, { propsData: { reactions }})
    expect(component.find('p.unique-reactions').text()).toBe('Votantes únicos: 2')
  })
})
