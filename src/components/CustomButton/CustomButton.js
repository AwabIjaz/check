import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';

import styles from './btnStyles';
import {Layout} from '../../styles';
import {NA} from '../../styles/Spacing';

const CustomButton = ({
  type,
  text,
  textType,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  onPress,
  disabled,
  noShadow,
  style,
  children,
}) => (
  <TouchableOpacity
    style={[
      styles[type],
      Layout.margin(marginTop, marginRight, marginBottom, marginLeft),
      !noShadow && Layout.boxShadow('#00000044'),
      disabled,
      style,
    ]}
    onPress={onPress}
    disabled={disabled}>
    {text && <CustomText text={text} type={textType} />}
    {children}
  </TouchableOpacity>
);

CustomButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  textType: PropTypes.string,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  noShadow: PropTypes.bool,
};
CustomButton.defaultProps = {
  marginTop: NA,
  marginRight: NA,
  marginBottom: NA,
  marginLeft: NA,
  disabled: false,
};

export default CustomButton;
