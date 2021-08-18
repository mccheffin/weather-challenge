# AirDNA Front End Code Exercise

Hey there! We'd like you to work on a simple React app that fetches and displays the weather forecast from an API based on a user's search. The API doesn't support CORS, so you'll find it [proxied](https://create-react-app.dev/docs/proxying-api-requests-in-development) through create-react-app. You can hit the API by making a request to `/api/...`.
The API you'll be using can be referenced here: [MetaWeather](https://www.metaweather.com/api/)

There are 2 endpoints you'll need:

- **Location Search** - Finds a location from a search string
  - GET `/api/location/search/?query=${query}`
- **Location** - Returns location information and a 5-day forecast from a location ID
  - GET `/api/location/${locationId}/`

The temperature comes back from the API in celsius. You'll find a conversion function in `src/utils/conversions`

Here's a list of priorities for you. Please don't spend more than 2-3 hours. We're looking for how you approach problems, architect the app, and organize your code. We're not as concerned with a 100% polished UI.

1. Working location search and fetching of weather data
2. Handle errors within the UI (for example, search returns no results)
3. Extended forecast in UI
4. Visual styles

When you have completed this please push to a repo on Github (or Gitlab) and either send us a public link or add `@ndstephens` as a collaborator if you'd rather make the repository private.