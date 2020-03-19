module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
  /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '<d9137fa9185735f158e482e7a1682a5b>',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '<d9137fa9185735f158e482e7a1682a5b>',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
    } 
    
  ]
}