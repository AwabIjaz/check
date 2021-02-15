import React from 'react';
import PropTypes from 'prop-types';
import {Image, ImageBackground, StyleSheet} from 'react-native';

import {Layout} from '../styles';

const CustomImage = ({width, height, source, style, type, children, ...rest}) =>
  type !== 'backgroundImage' ? (
    <Image
      source={source}
      style={[
        {width: Layout.scaleWidth(width), height: Layout.scaleWidth(height)},
        styles[type],
        style,
      ]}
      {...rest}
    />
  ) : (
    <ImageBackground source={source} style={styles.backgroundImage} {...rest}>
      {children}
    </ImageBackground>
  );

const styles = StyleSheet.create({
  basic: {
    resizeMode: 'contain',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
});

CustomImage.propTypes = {
  source: Image.propTypes.source.isRequired,
  type: PropTypes.string,
};
CustomImage.defaultProps = {
  type: 'basic',
};

export default CustomImage;
