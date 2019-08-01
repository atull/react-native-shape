# React Native Shape

Custom shapes for React Native apps

This library is truly an inspiration from [The shape of CSS](https://css-tricks.com/the-shapes-of-css/) and the example assets for demonstrating this library are been used from an article on [CodeDaily](https://codedaily.io/tutorials/22/The-Shapes-of-React-Native).

## Demo

![demo](./assets/cWR7FKh.gif)

## Installation

```bash
npm install react-native-shape
```

## Example Usage

```js
import React from 'react';
import { View } from 'react-native';
import { Circle, Triangle } from 'react-native-shape';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Circle />
        <Triangle color="red" scale={1.2} rotate={45} />
      </View>
    );
  }
}
```

## Shapes Supporting
Currently, this library is supporting only 5 basic shapes mentioned below.
```bash
Square, Rectangle, Circle, Oval & Triangle
```

## License

MIT
