import React from 'react';
import { View, StyleSheet } from 'react-native';

const { SHAPE_DIMENSION, SHAPE_COLOR } = require('./Constants');

export const Trapezoid = ({ color=SHAPE_COLOR, scale=1, rotate=0 }) => (
  <View style={[styles.trapezoid, { borderBottomColor: color, transform: [{ scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  trapezoid: {
    width: SHAPE_DIMENSION*2,
    height: SHAPE_DIMENSION*2,
    borderBottomWidth: SHAPE_DIMENSION,
    borderLeftWidth: SHAPE_DIMENSION/2,
    borderLeftColor: 'transparent',
    borderRightWidth: SHAPE_DIMENSION/2,
    borderRightColor: 'transparent',
    borderStyle: 'solid'
  },
});
