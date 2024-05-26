export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  }
]

export const apiKey = '08e0416228d4074ba2ce3d2a16a42a6a';





// latitude: 30.253104401838186, longitude: -97.75026206953008 // Austin
// latitude: 48.98188710614726, longitude: 4.021667539562239 // Alize
// latitude: 25.723027725729516, longitude: -100.26879856557636 // Nuevo Leon

const staticCoordinates = {
  latitude: 25.723027725729516, longitude: -100.26879856557636
  ,
}



export let coordinates = staticCoordinates;



/* ------------------------------------------------------------------------------------ */
/*                                       test area                                      */
/* ------------------------------------------------------------------------------------ */

export function getGeoCoordinates(){
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej)
  })
}


/* ------------------------------------------------------------------------------------ */
/*                                       test area                                      */
/* ------------------------------------------------------------------------------------ */



export const weatherOptions = [
  {
    day: true,
    condition: 'clear',
    url: new URL('../assets/day/clear.svg', import.meta.url).href,
  },
  {
    day: true,
    condition: 'clouds',
    url: new URL('../assets/day/clouds.svg', import.meta.url).href,
  },
  {
    day: true,
    condition: 'fog',
    url: new URL('../assets/day/fog.svg', import.meta.url).href,
  },
  {
    day: true,
    condition: 'rain',
    url: new URL('../assets/day/rain.svg', import.meta.url).href,
  },
  {
    day: true,
    condition: 'snow',
    url: new URL('../assets/day/snow.svg', import.meta.url).href,
  },
  {
    day: true,
    condition: 'thunderstorm',
    url: new URL('../assets/day/thunderstorm.svg', import.meta.url).href,
  },
  {
    day: false,
    condition: 'clear',
    url: new URL('../assets/night/clear.svg', import.meta.url).href,
  },
  {
    day: false,
    condition: 'clouds',
    url: new URL('../assets/night/clouds.svg', import.meta.url).href,
  },
  {
    day: false,
    condition: 'fog',
    url: new URL('../assets/night/fog.svg', import.meta.url).href,
  },
  {
    day: false,
    condition: 'rain',
    url: new URL('../assets/night/rain.svg', import.meta.url).href,
  },
  {
    day: false,
    condition: 'snow',
    url: new URL('../assets/night/snow.svg', import.meta.url).href,
  },
  {
    day: false,
    condition: 'thunderstorm',
    url: new URL('../assets/night/thunderstorm.svg', import.meta.url).href,
  },
]

export const defaultWeatherOptions = [
  {
    day: true,
    condition: 'day',
    url: new URL('../assets/day/default.svg', import.meta.url).href
  },
  {
    day: false,
    condition: 'night',
    url: new URL('../assets/night/default.svg', import.meta.url).href
  },
]