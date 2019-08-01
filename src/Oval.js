import React from 'react';
import { View, StyleSheet } from 'react-native';

const { SHAPE_DIMENSION, SHAPE_COLOR } = require('./Constants');

export const Oval = ({ color=SHAPE_COLOR, scale=1, rotate=0 }) => (
  <View style={[styles.oval, { backgroundColor: color, transform: [{ scaleX: 2 }, { scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  oval: {
    width: SHAPE_DIMENSION,
    height: SHAPE_DIMENSION,
    borderRadius: SHAPE_DIMENSION/2,
  },
});
