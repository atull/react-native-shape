import React from 'react';
import { View, StyleSheet } from 'react-native';

const { SHAPE_DIMENSION, SHAPE_COLOR } = require('./Constants');

export const Square = ({ color=SHAPE_COLOR, scale=1, rotate=0 }) => (
  <View style={[styles.square, { backgroundColor: color, transform: [{ scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  square: {
    width: SHAPE_DIMENSION,
    height: SHAPE_DIMENSION,
  },
});
