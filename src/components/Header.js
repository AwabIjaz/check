import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StatusBar, Platform, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomImage from './CustomImage';
import CustomButton from './CustomButton';

import {Colors, Layout, Typography} from '../styles';
import {ARROW_BACK_ICON} from '../utils/constants';
import {H_16} from '../styles/Spacing';

export const Header = ({
  title,
  left,
  onPress,
  color,
  right,
  onPressRight,
  rightIcon,
  ...rest
}) => {
  const navigation = useNavigation();
  const getBackgroundColor = () => (color ? color : Colors.PRIMARY);
  return (
    <>
      {Platform.OS === 'ios' && (
        <View
          style={[styles.headerBuffer, {backgroundColor: getBackgroundColor()}]}
        />
      )}
      <View style={[styles.header, {backgroundColor: getBackgroundColor()}]}>
        <StatusBar
          backgroundColor={getBackgroundColor()}
          barStyle="light-content"
        />
        {left && (
          <CustomButton
            onPress={onPress ? onPress : () => navigation.goBack()}
            containerStyle={[styles.fixedHeaderButton, {left: 0}]}>
            <CustomImage
              source={ARROW_BACK_ICON}
              width={28}
              height={28}
              style={{left: H_16}}
            />
          </CustomButton>
        )}
        {title && <Text style={styles.headerText}>{title}</Text>}
        {right && (
          <CustomButton
            onPress={onPressRight ? onPressRight : () => navigation.goBack()}
            containerStyle={[styles.fixedHeaderButton, {right: 0}]}
            {...rest}>
            {rightIcon && (
              <CustomImage
                source={rightIcon}
                width={28}
                height={28}
                style={{right: H_16}}
              />
            )}
          </CustomButton>
        )}
      </View>
    </>
  );
};

const headerBase = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: Layout.scaleHeight(56),
  backgroundColor: Colors.PRIMARY,
};
const headerButtonBase = {
  height: '100%',
  justifyContent: 'center',
};
const styles = StyleSheet.create({
  header: {
    ...headerBase,
  },
  headerText: {
    fontSize: Typography.FONT_SIZE_20,
    ...Typography.FONT_BOLD,
    color: Colors.WHITE,
    textAlign: 'center',
  },
  fixedHeaderButton: {
    ...headerButtonBase,
    position: 'absolute',
  },
  headerBuffer: {
    height: Layout.scaleHeight(32),
    backgroundColor: Colors.PRIMARY,
  },
});

Header.propTypes = {
  title: PropTypes.string,
  left: PropTypes.bool,
  onPress: PropTypes.func,
  color: PropTypes.string,
  right: PropTypes.bool,
  onPressRight: PropTypes.func,
};
