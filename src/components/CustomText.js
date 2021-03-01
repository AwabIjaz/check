import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {Typography, Colors, Layout} from '../styles';

const CustomText = ({
  text,
  type,
  bold,
  center,
  textWidth,
  style,
  chidren,
  ...rest
}) => (
  <Text
    style={[
      styles[type],
      bold && Typography.FONT_BOLD,
      center && {textAlign: 'center'},
      textWidth && {width: Layout.scaleWidth(textWidth)},
      style,
    ]}
    {...rest}>
    {text}
    {chidren}
  </Text>
);

const textBase = {
  fontSize: Typography.FONT_SIZE_17,
  ...Typography.FONT_REGULAR,
  color: Colors.BLACK,
};
const errorTextBase = {
  ...textBase,
  color: Colors.ERROR,
};
const styles = StyleSheet.create({
  basic: {
    ...textBase,
  },
  primaryText: {
    ...textBase,
    color: Colors.PRIMARY,
  },
  secondaryText: {
    ...textBase,
    color: Colors.SECONDARY,
  },
  whiteText: {
    ...textBase,
    color: Colors.WHITE,
  },
  errorText: {
    ...errorTextBase,
    fontSize: Typography.FONT_SIZE_12,
  title: {
    ...textBase,
    fontSize: Typography.FONT_SIZE_38,
  },
  titleSmall: {
    ...textBase,
    fontSize: Typography.FONT_SIZE_26,
  },
});

CustomText.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  bold: PropTypes.bool,
  center: PropTypes.bool,
  textWidth: PropTypes.number,
};
CustomText.defaultProps = {
  type: 'basic',
};

export default CustomText;
