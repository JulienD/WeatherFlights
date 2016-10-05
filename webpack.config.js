var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Search: 'app/components/Search.jsx',
      SearchLocationCityForm: 'app/components/SearchLocationCityForm.jsx',
      SearchLocationGeoForm: 'app/components/SearchLocationGeoForm.jsx',
      SearchRestAirportForm: 'app/components/SearchRestAirportForm.jsx',
      SearchDepartureAirportForm: 'app/components/SearchDepartureAirportForm.jsx',
      SearchDestinationAirportForm: 'app/components/SearchDestinationAirportForm.jsx',
      SearchFlightForm: 'app/components/SearchFlightForm.jsx',
      About: 'app/components/About.jsx',
      RestAirport: 'app/api/RestAirport.jsx',
      SocketAirport: 'app/api/SocketAirport.jsx',
      SocketDestinationAirport: 'app/api/SocketDestinationAirport.jsx',
      applicationStyles: 'app/styles/app.scss',
      foundationStyles: 'app/styles/foundation.css'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.json$/, loader: "json-loader" },
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
