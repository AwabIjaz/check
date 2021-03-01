import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {Layout, Colors} from '../styles';
import {NA} from '../styles/Spacing';

const CustomView = ({
  style,
  type,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  rightItems,
  width,
  height,
  noFlex,
  children,
  ...rest
}) => (
  <View
    style={[
      styles[type],
      Layout.margin(marginTop, marginRight, marginBottom, marginLeft),
      width && {width: Layout.scaleWidth(width)},
      height && {height: Layout.scaleWidth(height)},
      rightItems && {alignItems: 'flex-end'},
      noFlex && {flex: 0},
      style,
    ]}
    {...rest}>
    {children}
  </View>
);

const base = {
  flex: 1,
  backgroundColor: Colors.WHITE,
};
const middleX = {
  alignItems: 'center',
};
const middleY = {
  justifyContent: 'center',
};
const horizontalBase = {
  flexDirection: 'row',
  backgroundColor: Colors.WHITE,
};
const styles = StyleSheet.create({
  basic: {
    ...base,
  },
  middleXContainer: {
    ...base,
    ...middleX,
  },
  middleYContainer: {
    ...base,
    ...middleY,
  },
  middleAllContainer: {
    ...base,
    ...middleX,
    ...middleY,
  },
  middleSelfContainer: {
    alignSelf: 'center',
  },
  horizontal: {
    ...horizontalBase,
    ...middleX,
  },
  horizontalSpace: {
    ...horizontalBase,
    ...middleX,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
});

CustomView.propTypes = {
  type: PropTypes.string,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  rightItems: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  noFlex: PropTypes.bool,
};
CustomView.defaultProps = {
  marginTop: NA,
  marginRight: NA,
  marginBottom: NA,
  marginLeft: NA,
};

export default CustomView;
