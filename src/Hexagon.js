import React from 'react';
import { View, StyleSheet } from 'react-native';

const { SHAPE_DIMENSION, SHAPE_COLOR } = require('./Constants');

export const Hexagon = ({ color=SHAPE_COLOR, scale=1, rotate=0 }) => (
  <View style={[styles.hexagon, { transform: [{ scale }, { rotate: `${rotate}deg` }] }]}>
    <View style={[styles.hexagonInner, { backgroundColor: color }]} />
    <View style={[styles.hexagonBefore, { borderBottomColor: color }]} />
    <View style={[styles.hexagonAfter, { borderTopColor: color }]} />
  </View>
);

const styles = StyleSheet.create({
  hexagon: {
    width: SHAPE_DIMENSION,
    height: SHAPE_DIMENSION/2,
  },
  hexagonInner: {
    width: SHAPE_DIMENSION,
    height: SHAPE_DIMENSION/2,
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -SHAPE_DIMENSION/2,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: SHAPE_DIMENSION/2,
    borderLeftColor: 'transparent',
    borderRightWidth: SHAPE_DIMENSION/2,
    borderRightColor: 'transparent',
    borderTopWidth: SHAPE_DIMENSION/2,
  },
  hexagonBefore: {
    position: 'absolute',
    top: -SHAPE_DIMENSION/2,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: SHAPE_DIMENSION/2,
    borderLeftColor: 'transparent',
    borderRightWidth: SHAPE_DIMENSION/2,
    borderRightColor: 'transparent',
    borderBottomWidth: SHAPE_DIMENSION/2,
  }
});
