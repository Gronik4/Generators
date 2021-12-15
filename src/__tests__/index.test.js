import Team from '../index';

test('Testing Generator', () => {
  const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const daem = {
    name: 'Демон',
    type: 'Daemon',
    health: 40,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const end = { done: true, value: undefined };
  const team = [...new Team(char, daem, end)];
  const expected = [char, daem, end];
  for (let i = 0; i < team.length; i += 1) {
    expect(team[i]).toEqual(expected[i]);
  }
});
