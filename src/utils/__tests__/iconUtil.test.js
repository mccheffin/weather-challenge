import { getWeatherIcon, weatherIcons } from "../iconUtil";

test('Check if util returns null on error', () => {
  const iconErrorString = getWeatherIcon('adf');
  expect(iconErrorString).toBe(null);
  const iconErrorNumber = getWeatherIcon(2);
  expect(iconErrorNumber).toBe(null);
})

test('Check if util returns icon', () => {
  const lightRainIcon = getWeatherIcon('lr');
  expect(lightRainIcon).toBe(weatherIcons.lr);
  const heavyRainIcon = getWeatherIcon('hr');
  expect(heavyRainIcon).toBe(weatherIcons.hr);
  const clearIcon = getWeatherIcon('c');
  expect(clearIcon).toBe(weatherIcons.c);
  const snowIcon = getWeatherIcon('sn');
  expect(snowIcon).toBe(weatherIcons.sn);
  const sleetIcon = getWeatherIcon('sl');
  expect(sleetIcon).toBe(weatherIcons.sl);
  const showersIcon = getWeatherIcon('s');
  expect(showersIcon).toBe(weatherIcons.s);
  const heavyCloudsIcon = getWeatherIcon('hc');
  expect(heavyCloudsIcon).toBe(weatherIcons.hc);
  const lightCloudsIcon = getWeatherIcon('lc');
  expect(lightCloudsIcon).toBe(weatherIcons.lc);
  const hailIcon = getWeatherIcon('h');
  expect(hailIcon).toBe(weatherIcons.h);
})