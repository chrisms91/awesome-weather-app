import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00c6fb', '#005bea'],
    title: 'Raining like a MF',
    subtitle: 'For more info, look outside',
    icon: 'weather-pouring'
  },
  Clear: {
    colors: ['#fef253', '#ff7300'],
    title: 'Sunny as FFFFFUDGE',
    subtitle: 'Go get your ass burnt',
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors: ['#00ecbc', '#007adf'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outside of the house',
    icon: 'weather-lightning'
  },
  Clouds: {
    colors: ['#d7d2cc', '#304352'],
    title: 'Clouds',
    subtitle: 'I know, friggin boring',
    icon: 'weather-cloudy'
  },
  Snow: {
    colors: ['#7de2fc', '#b9b6e5'],
    title: 'Cold as balls',
    subtitle: 'Do you want to build a snowman? Fuck no.',
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors: ['#89f7fe', '#66a6ff'],
    title: 'Drizzle',
    subtitle: 'Its like raining, but gay 🏳️‍🌈',
    icon: 'weather-hail'
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Haze',
    subtitle: "Don't know what that is 💩",
    icon: 'weather-hail'
  },
  Mist: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Mist',
    subtitle: "It's like you have no glasses on",
    icon: 'weather-fog'
  },
  Fog: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Fog',
    subtitle: 'I miss my clear blue sky..😭',
    icon: 'weather-fog'
  },
  Smoke: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Smoke',
    subtitle: 'Fire Fire Fire 🚒',
    icon: 'weather-fog'
  }
};

function Weather({ temp, weatherName }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <StatusBar hidden={true} />
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />

        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 100
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    marginBottom: 24,
    fontSize: 24,
    color: 'white'
  },
  temp: {
    fontSize: 38,
    color: 'white'
  },
  icon: {
    marginTop: 200
  }
});
