import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Circle = ({ color:string = '#1e90ff' }) => (
  <View style={[styles.shape, { backgroundColor: color }]} />
);

const styles = StyleSheet.create({
  shape: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
});
