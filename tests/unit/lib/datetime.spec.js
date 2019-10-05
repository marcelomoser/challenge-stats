import formatDatetimeText from '@/lib/datetime'

describe('Datetime', () => {

  it(`should return the formatted datetime when date is after deadline`, () => {
    const date = new Date()
    date.setDate(date.getDate() + 2)
    expect(formatDatetimeText(date)).toBe('em 2 dias')
  })

  it(`should return the formatted datetime text when date is before deadline`, () => {
    const date = new Date('2019-08-24T17:00:00')
    expect(formatDatetimeText(date)).toBe('24 de Agosto de 2019 às 17:00')
  })

})