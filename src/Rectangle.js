import React from 'react';
import { View, StyleSheet } from 'react-native';

const SHAPE_DIMENSION = require('./Constants').SHAPE_DIMENSION;

export const Rectangle = ({ color='#1e90ff', scale=1, rotate=0 }) => (
  <View style={[styles.rectangle, { backgroundColor: color, transform: [{ scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  rectangle: {
    width: SHAPE_DIMENSION * 2,
    height: SHAPE_DIMENSION,
  },
});
