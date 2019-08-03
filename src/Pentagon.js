import React from 'react';
import { View, StyleSheet } from 'react-native';

const { SHAPE_DIMENSION, SHAPE_COLOR } = require('./Constants');

export const Pentagon = ({ color=SHAPE_COLOR, scale=1, rotate=0 }) => (
  <View style={[styles.pentagon, { transform: [{ scale }, { rotate: `${rotate}deg` }] }]}>
    <View style={[styles.pentagonInner, { borderBottomColor: color, borderTopColor: color }]} />
    <View style={[styles.pentagonBefore, { borderBottomColor: color }]} />
  </View>
);

const styles = StyleSheet.create({
  pentagon: {
    backgroundColor: 'transparent'
  },
  pentagonInner: {
    width: SHAPE_DIMENSION*2,
    height: SHAPE_DIMENSION*2,
    borderBottomWidth: 0,
    borderLeftColor: 'transparent',
    borderLeftWidth: SHAPE_DIMENSION/2,
    borderRightColor: 'transparent',
    borderRightWidth: SHAPE_DIMENSION/2,
    borderTopWidth: SHAPE_DIMENSION
  },
  pentagonBefore: {
    position: 'absolute',
    height: 0,
    width: 0,
    top: -SHAPE_DIMENSION*2,
    left: 0,
    borderStyle: 'solid',
    borderBottomWidth: SHAPE_DIMENSION*2,
    borderLeftColor: 'transparent',
    borderLeftWidth: SHAPE_DIMENSION,
    borderRightColor: 'transparent',
    borderRightWidth: SHAPE_DIMENSION,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
  }
});
