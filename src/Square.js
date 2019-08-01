import React from 'react';
import { View, StyleSheet } from 'react-native';

const SHAPE_DIMENSION = require('./Constants').SHAPE_DIMENSION;

export const Square = ({ color='#1e90ff', scale=1, rotate=0 }) => (
  <View style={[styles.square, { backgroundColor: color, transform: [{ scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  square: {
    width: SHAPE_DIMENSION,
    height: SHAPE_DIMENSION,
  },
});
