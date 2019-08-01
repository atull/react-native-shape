import React from 'react';
import { View, StyleSheet } from 'react-native';

const { SHAPE_DIMENSION, SHAPE_COLOR } = require('./Constants');

export const Circle = ({ color=SHAPE_COLOR, scale=1, rotate=0 }) => (
  <View style={[styles.circle, { backgroundColor: color, transform: [{ scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  circle: {
    width: SHAPE_DIMENSION,
    height: SHAPE_DIMENSION,
    borderRadius: SHAPE_DIMENSION/2,
  },
});
