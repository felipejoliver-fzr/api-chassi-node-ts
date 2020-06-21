import HomeService from '@services/home'

test('it should be ok', () => {
  const home = HomeService.get()

  expect(home).toEqual('Home test get')
})
