import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Circle = ({ color='#1e90ff', scale=1, rotate=0 }) => (
  <View style={[styles.circle, { backgroundColor: color, transform: [{ scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
});
