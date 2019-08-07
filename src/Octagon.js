import React from 'react';
import { View, StyleSheet } from 'react-native';

const { SHAPE_DIMENSION, SHAPE_COLOR } = require('./Constants');

export const Octagon = ({ color=SHAPE_COLOR, scale=1, rotate=0 }) => (
  <View style={[styles.octagon, { transform: [{ scale }, { rotate: `${rotate}deg` }] }]}>
    <View style={[styles.octagonUp, styles.octagonBar, { backgroundColor: color }]} />
    <View style={[styles.octagonFlat, styles.octagonBar, { backgroundColor: color }]} />
    <View style={[styles.octagonLeft, styles.octagonBar, { backgroundColor: color }]} />
    <View style={[styles.octagonRight, styles.octagonBar, { backgroundColor: color }]} />
  </View>
);

const styles = StyleSheet.create({
  octagon: {},
  octagonBar: {
    width: SHAPE_DIMENSION * 0.42,
    height: SHAPE_DIMENSION,
  },
  octagonUp: {},
  octagonFlat: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [
      {rotate: '90deg'}
    ]
  },
  octagonLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [
      {rotate: '-45deg'}
    ]
  },
  octagonRight: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: [
      {rotate: '45deg'}
    ]
  }
});
