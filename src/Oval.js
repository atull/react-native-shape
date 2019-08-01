import React from 'react';
import { View, StyleSheet } from 'react-native';

const SHAPE_DIMENSION = require('./Constants').SHAPE_DIMENSION;

export const Oval = ({ color='#1e90ff', scale=1, rotate=0 }) => (
  <View style={[styles.oval, { backgroundColor: color, transform: [{ scaleX: 2 }, { scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  oval: {
    width: SHAPE_DIMENSION,
    height: SHAPE_DIMENSION,
    borderRadius: SHAPE_DIMENSION/2,
  },
});
