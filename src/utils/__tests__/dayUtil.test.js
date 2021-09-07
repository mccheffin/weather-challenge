import { getNameOfDay } from '../dayUtil';

test('Checks if the function works for each day of the week', () => {
  const monday = getNameOfDay('2021-09-06');
  expect(monday).toBe("Monday");
  const tuesday = getNameOfDay('2021-09-07');
  expect(tuesday).toBe("Tuesday");
  const wednesday = getNameOfDay('2021-09-08');
  expect(wednesday).toBe("Wednesday");
  const thursday = getNameOfDay('2021-09-09');
  expect(thursday).toBe("Thursday");
  const friday = getNameOfDay('2021-09-10');
  expect(friday).toBe("Friday");
  const saturday = getNameOfDay('2021-09-11');
  expect(saturday).toBe("Saturday");
  const sunday = getNameOfDay('2021-09-12');
  expect(sunday).toBe("Sunday");
})

test('Tests for error condition', async () => {
  const error = getNameOfDay('20210906');
  expect(error).toBe(null);
})


