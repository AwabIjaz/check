import React from 'react';
import {Platform} from 'react-native';
//import TextInputMask from 'react-native-text-input-mask';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import CustomTextInput from './CustomTextInput';
import CustomView from './CustomView';

import {V_30} from '../styles/Spacing';
import {Layout, Colors} from '../styles';

export const DisplayInputs = ({
  inputArray,
  sliceEnd,
  state,
  handleChange,
  inputRef,
  focusLabel,
  setFocusLabel,
  disableAllowed,
  style,
}) =>
  inputArray.slice(0, sliceEnd).map((input, index) => {
    const inputProps = {
      key: index,
      label: input.label,
      value: state[input.name],
      onChangeText: (val) => handleChange(input.name, val),
      keyboardType: input.keyboardType,
      maxLength: input.maxLength,
      passedRef: inputRef,
      style: style,
    };
    input.top && (inputProps.marginTop = input.top);
    input.bottom && (inputProps.marginBottom = input.bottom);
    input.info && (inputProps.info = input.info);
    input.left && (inputProps.paddingLeft = input.left);
    input.staticText && (inputProps.staticText = input.staticText);
    input.label === focusLabel && (inputProps.getFocus = true);
    input.secureTextEntry &&
      (inputProps.secureTextEntry = input.secureTextEntry);
    if (index !== inputArray.length - 1 && !input.multiline) {
      inputProps.focusNext = true;
      inputProps.onFocus = () => setFocusLabel(inputArray[index + 1].label);
    }
    /* if (input.mask) {
      inputProps.render = (props) => (
        <TextInputMask {...props} mask={input.mask} />
      );
      inputProps.maskedInput = true;
    } */
    if (disableAllowed) {
      inputProps.editable = input.editable;
    }
    if (input.style) {
      inputProps.style = {...style, ...input.style};
    }
    return <CustomTextInput {...inputProps} />;
  });

export const ScrollableInputsView = ({
  children,
  containerStyle,
  contentContainerStyle,
  extraHeight,
  ...rest
}) => (
  <CustomView type="basic" style={containerStyle} {...rest}>
    <KeyboardAwareScrollView
      extraHeight={extraHeight}
      //enableOnAndroid={true}
      scrollEnabled={true}
      enableAutomaticScroll={true}
      extraScrollHeight={V_30}
      style={{width: '100%'}}
      contentContainerStyle={[
        {flexGrow: 1, alignItems: 'center'},
        contentContainerStyle,
      ]}
      keyboardShouldPersistTaps="handled">
      {children}
    </KeyboardAwareScrollView>
  </CustomView>
);

export const TopBuffer = ({backgroundColor}) =>
  Platform.OS === 'ios' && (
    <CustomView
      style={{
        height: Layout.scaleHeight(32),
        backgroundColor: backgroundColor ? backgroundColor : Colors.WHITE,
      }}
    />
  );
