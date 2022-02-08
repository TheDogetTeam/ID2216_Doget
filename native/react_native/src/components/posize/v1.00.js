/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { generate, parse, Rules } from './rules.v1.00';

// posize version v1.00.2

// debug mode (draw border)
const Debug = false;

const ParamsReg = /\s*,\s*/g;
const SpaceReg = /\s+/;

// export for test
export const genStyles = (vs, isHorizontal) => {
  switch (vs.length) {
    case 1:
      return generate(vs[0], isHorizontal);

    case 3: {
      const type = vs.map((v) => v[0]).join(',');
      return Rules[type](vs, isHorizontal);
    }

    case 5: {
      const [a, b, center, c, d] = vs;
      const styles = genStyles([b, center, c], isHorizontal);
      const start = generate(a, isHorizontal);
      const end = generate(d, isHorizontal);

      return [start, ...styles, end];
    }

    default:
      throw Error('genStyles not support');
  }
};

const FlexView = (props) => {
  const { x, y, debug, centerStyle } = props;

  const border = debug || Debug ? styles.border : null;
  const isHorizontal = !!x;
  const values = (x || y).replace(ParamsReg, ',').split(SpaceReg);
  const vs = parse(values);
  const row = isHorizontal ? null : styles.row;

  switch (values.length) {
    case 1: {
      const style = genStyles(vs, isHorizontal);

      return (
        <View style={[style, row, border, centerStyle]} pointerEvents="box-none">
          {props.children}
        </View>
      );
    }

    case 3: {
      const [a, center, b] = genStyles(vs, isHorizontal);

      return (
        <>
          <View style={[a, border]} pointerEvents="none"/>
          <View style={[center, row, centerStyle]} pointerEvents="box-none">
            {props.children}
          </View>
          <View style={[b, border]} pointerEvents="none"/>
        </>
      );
    }

    case 5: {
      const [a, b, center, c, d] = genStyles(vs, isHorizontal);

      return (
        <>
          <View style={[a, border]} pointerEvents="none"/>
          <View style={[b, border]} pointerEvents="none"/>
          <View style={[center, row, centerStyle]} pointerEvents="box-none">
            {props.children}
          </View>
          <View style={[c, border]} pointerEvents="none"/>
          <View style={[d, border]} pointerEvents="none"/>
        </>
      );
    }

    default:
      throw Error('FlexView not support');
  }
};

const Posize = (props) => {
  const {
    x = '1fr',
    y = '1fr',
    absolute = false,
    zIndex = undefined,
    display = undefined,
    trackStyle = undefined,
    areaStyle = undefined,
    debug = false,
    children
  } = props;

  const style = [
    { zIndex, flexGrow: 1, display: display === 'none' ? 'none' : undefined },
    absolute ? styles.absolute : styles.relative,
    trackStyle
  ];

  return (
    <View style={style} pointerEvents="box-none">
      <FlexView debug={debug} y={y}>
        <FlexView debug={debug} x={x} centerStyle={areaStyle}>
          {children}
        </FlexView>
      </FlexView>
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  relative: {
    position: 'relative'
  },
  row: {
    flexDirection: 'row'
  },
  border: {
    borderColor: '#ff0000',
    borderWidth: 1
  }
});

export default Posize;

/**
 * it's optional container
 */
const Container = ({ element, children, elementProps }) => {
  if (element) {
    const ep = elementProps || {};
    const style = {
      flex: 1,
      ...(ep.style || {})
    };
    return React.createElement(element, { ...ep, style }, children);
  }
  return children;
};

export const Px = ({
                     id,
                     x,
                     y,
                     absolute,
                     zIndex,
                     trackStyle,
                     areaStyle,
                     children,
                     debug,
                     container,
                     containerProps,
                     ...props
                   }) => {
  const posizeProps = { name: id, x, y, absolute, zIndex, trackStyle, areaStyle, debug };
  return (
    <Posize {...posizeProps}>
      <Container element={container} elementProps={containerProps}>
        <View id={id} {...props}>
          {children}
        </View>
      </Container>
    </Posize>
  );
};

Px.View = Px;

Px.Image = ({
              id, x, y, absolute, zIndex, trackStyle, areaStyle, children, debug, container, containerProps, ...props
            }) => {
  const posizeProps = { name: id, x, y, absolute, zIndex, trackStyle, areaStyle, debug };
  return (
    <Posize {...posizeProps}>
      <Container element={container} elementProps={containerProps}>
        <Image id={id} {...props} />
      </Container>
    </Posize>
  );
};

Px.ImageBackground = ({
                        id,
                        x,
                        y,
                        absolute,
                        zIndex,
                        trackStyle,
                        areaStyle,
                        children,
                        debug,
                        container,
                        containerProps,
                        ...props
                      }) => {
  const posizeProps = { name: id, x, y, absolute, zIndex, trackStyle, areaStyle, debug };
  return (
    <Posize {...posizeProps}>
      <Container element={container} elementProps={containerProps}>
        <ImageBackground id={id} {...props}>
          {children}
        </ImageBackground>
      </Container>
    </Posize>
  );
};

Px.Pressable = ({
                  id,
                  x,
                  y,
                  absolute,
                  zIndex,
                  trackStyle,
                  areaStyle,
                  children,
                  debug,
                  container,
                  containerProps,
                  ...props
                }) => {
  const posizeProps = { name: id, x, y, absolute, zIndex, trackStyle, areaStyle, debug };
  return (
    <Posize {...posizeProps}>
      <Container element={container} elementProps={containerProps}>
        <Pressable id={id} {...props}>
          {children}
        </Pressable>
      </Container>
    </Posize>
  );
};
