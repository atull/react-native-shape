import React from 'react';
import { View, StyleSheet } from 'react-native';

const DefaultDimension = require('./Constants').SHAPE_DIMENSION;
const SHAPE_DIMENSION = DefaultDimension/2;
const SHAPE_COLOR = require('./Constants').SHAPE_COLOR;

export const Triangle = ({ color=SHAPE_COLOR, scale=1, rotate=0 }) => (
  <View style={[styles.triangle, { backgroundColor: color, transform: [{ scale }, { rotate: `${rotate}deg` }] }]} />
);

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: SHAPE_DIMENSION,
    borderRightWidth: SHAPE_DIMENSION,
    borderBottomWidth: SHAPE_DIMENSION * 3,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});
