import GameSavingLoader from '../GameSavingLoader.js';
// import GameSaving from '../GameSaving.js';

test('GameSavingLoader.load returns object', async () => {
  const saving = await GameSavingLoader.load();

  expect(saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
