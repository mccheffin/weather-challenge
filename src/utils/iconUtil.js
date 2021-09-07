import ClearIcon from '../img/clear_icon.svg';
import LightCloudsIcon from '../img/light_clouds_icon.svg';
import HeavyCloudsIcon from '../img/heavy_clouds_icon.svg';
import HailIcon from '../img/hail_icon.svg';
import LightningIcon from '../img/lightning_icon.svg';
import RainIcon from '../img/rain_icon.svg';
import Heavy_Rain_Icon from '../img/heavy_rain_icon.svg';
import ShowersIcon from '../img/showers_icon.svg';
import SleetIcon from '../img/sleet_icon.svg';
import SnowIcon from '../img/snow_icon.svg';

export const weatherIcons = {
  sn: SnowIcon,
  sl: SleetIcon,
  h: HailIcon,
  t: LightningIcon,
  hr: Heavy_Rain_Icon,
  lr: RainIcon,
  s: ShowersIcon,
  hc: HeavyCloudsIcon,
  lc: LightCloudsIcon,
  c: ClearIcon
}

export const getWeatherIcon = (icon_code) => {
  if(!(icon_code in weatherIcons)){
    return null
  }
  return weatherIcons[icon_code];
}