import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native-paper';

import CustomView from './CustomView';
import CustomImage from './CustomImage';
import CustomText from './CustomText';

import {Typography, Colors, Layout} from '../styles';
import {NA, H_14, V_18} from '../styles/Spacing';
import {ERROR_ICON} from '../utils/constants';

const CustomTextInput = ({
  label,
  value,
  errorMsg,
  errorTextWidth,
  info,
  focused,
  error,
  marginTop,
  marginBottom,
  passedRef,
  focusNext,
  getFocus,
  maskedInput,
  staticText,
  style,
  ...rest
}) => {
  const conditionalProps = {};
  if (maskedInput && getFocus) {
    conditionalProps.refInput = (ref) => {
      passedRef.current = ref;
    };
  } else if (getFocus) {
    conditionalProps.ref = passedRef;
  }
  return (
    <>
      <CustomView marginTop={marginTop} marginBottom={marginBottom}>
        <TextInput
          theme={{
            colors: {
              primary: value && error ? Colors.ERROR : Colors.PRIMARY,
              placeholder:
                value && error
                  ? Colors.ERROR
                  : focused
                  ? Colors.PRIMARY
                  : Colors.GRAY_DARK,
              background: Colors.WHITE,
              text: Colors.BLACK,
            },
          }}
          mode="outlined"
          style={[styles.input, style]}
          label={label}
          value={value}
          onSubmitEditing={
            focusNext ? () => passedRef.current.focus() : undefined
          }
          returnKeyType={focusNext ? 'next' : 'done'}
          {...conditionalProps}
          {...rest}
        />
        {value && error ? (
          <CustomImage
            source={ERROR_ICON}
            width={20}
            height={20}
            style={styles.icon}
          />
        ) : null}
      </CustomView>
      {value && error ? (
        <CustomText
          text={errorMsg}
          type="errorText"
          textWidth={errorTextWidth}
        />
      ) : (
        info && <CustomText text={info} type="infoText" textWidth={343} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: Layout.scaleWidth(343),
    //height: Layout.scaleHeight(56),
    fontSize: Typography.FONT_SIZE_17,
    ...Typography.FONT_REGULAR,
  },
  icon: {
    position: 'absolute',
    right: H_14,
    bottom: V_18,
    zIndex: 2,
  },
});

CustomTextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorMsg: PropTypes.string,
  errorTextWidth: PropTypes.number,
  info: PropTypes.string,
  focused: PropTypes.bool,
  error: PropTypes.bool,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  focusNext: PropTypes.bool,
  getFocus: PropTypes.bool,
  maskedInput: PropTypes.bool,
  staticText: PropTypes.string,
};
CustomTextInput.defaultProps = {
  marginTop: NA,
  marginBottom: NA,
};

export default CustomTextInput;
