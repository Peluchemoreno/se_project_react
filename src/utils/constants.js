export const apiKey = "08e0416228d4074ba2ce3d2a16a42a6a";

// latitude: 30.253104401838186, longitude: -97.75026206953008 // Austin
// latitude: 48.98188710614726, longitude: 4.021667539562239 // Alize
// latitude: 25.723027725729516, longitude: -100.26879856557636 // Nuevo Leon

const staticCoordinates = {
  latitude: 25.723027725729516,
  longitude: -100.26879856557636,
};

export let coordinates = staticCoordinates;

/* ------------------------------------------------------------------------------------ */
/*                                       test area                                      */
/* ------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------ */
/*                                       test area                                      */
/* ------------------------------------------------------------------------------------ */

export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/clouds.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/day/fog.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/day/thunderstorm.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/night/clouds.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/night/fog.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/rain.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snow.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/night/thunderstorm.svg", import.meta.url).href,
  },
];

export const defaultWeatherOptions = [
  {
    day: true,
    condition: "day",
    url: new URL("../assets/day/default.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "night",
    url: new URL("../assets/night/default.svg", import.meta.url).href,
  },
];
