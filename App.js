import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from './Weather';
import {
  REACT_APP_OPEN_WEATHER_API_KEY,
  REACT_APP_GEOCODIO_API_KEY
} from 'react-native-dotenv';

const GEOCODIO_BASE_URL = 'https://api.geocod.io/v1.3/';

export default class App extends Component {
  state = {
    isLoaded: false,
    temperature: null,
    name: null,
    city: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
        this._getAddress(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  _getAddress = (lat, lon) => {
    const url = `${GEOCODIO_BASE_URL}reverse?q=${lat},${lon}&api_key=${REACT_APP_GEOCODIO_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          city: json.results[0].address_components.city
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  };

  _getWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${REACT_APP_OPEN_WEATHER_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  };

  render() {
    const { isLoaded, error, temperature, name, city } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <Weather
            temp={Math.ceil(temperature - 273.15)}
            weatherName={name}
            cityName={city}
          />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 60
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  }
});
