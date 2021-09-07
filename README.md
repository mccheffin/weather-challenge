# AirDNA Front End Code Exercise

Hey there! We'd like you to work on a simple React app that fetches the weather forecast based on a user's location search input and displays the forecast in the UI. The API doesn't support CORS, so you'll find it [proxied](https://create-react-app.dev/docs/proxying-api-requests-in-development) through create-react-app. You can hit the API by making a request to `/api/...`.
The API you'll be using can be referenced here: [MetaWeather](https://www.metaweather.com/api/)

There are 2 endpoints you'll need:

- **Location Search** - Finds a location from a search string
  - GET `/api/location/search/?query=${query}`
- **Location** - Returns location information and a 5-day forecast from a location ID
  - GET `/api/location/${locationId}/`

The temperature comes back from the API in celsius. You'll find a conversion function in `src/utils/conversions`

Please don't spend more than 2-3 hours. We're looking for how you approach problems, architect a feature, and write production-grade code.  The UI should be responsive and use modern CSS practices, but doesn't need to be visually impressive. Some priorities:

1. Working location search and fetching of weather data
2. Handle errors within the code and UI (for example, search returns no results)
3. Extended forecast displayed in UI

When you have completed this please push to a repo on Github (or Gitlab) and either send us a public link or add `ndstephens` as a collaborator if you'd rather make the repository private.

## My Solution

The first thing I did was clarify what was needed in the project and what the acceptance criteria are.  Learning that this did not need to be deployed and what is show on the screen is more or less up to me I took it as an opportunity to build a app that could be useful for me.  

The only things I really care about in a weather service are the current temperature, todays high and low tempatures, and the weekly forcast of weather and tempatures. So I ran with that and made an applicaiton that did just that.