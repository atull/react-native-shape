import React from 'react';
import { View, StyleSheet } from 'react-native';

const { SHAPE_DIMENSION, SHAPE_COLOR } = require('./Constants');

export const Rectangle = ({ color=SHAPE_COLOR, scale=1, rotate=0 }) => (
  <View style={[styles.rectangle, { backgroundColor: color, transform: [{ scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  rectangle: {
    width: SHAPE_DIMENSION * 2,
    height: SHAPE_DIMENSION,
  },
});
