import React, {useRef, useState} from 'react';

import CustomView from '../components/CustomView';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import {
  ScrollableInputsView,
  DisplayInputs,
} from '../components/SharedComponents';

import {V_16, V_32, V_70} from '../styles/Spacing';
import {AUTH_INPUTS} from '../utils/constants';
import {fieldsFilled} from '../utils/helperFunctions';

function SignUp({navigation}) {
  const [state, setState] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [focusLabel, setFocusLabel] = useState('');
  const inputRef = useRef();

  const handleChange = (name, value) => {
    setState((prevState) => ({...prevState, [name]: value}));
  };

  return (
    <>
      <ScrollableInputsView>
        <CustomView marginTop={V_32} marginBottom={V_70}>
          <CustomText text="Sign Up" type="titleSmall" />
        </CustomView>
        <DisplayInputs
          inputArray={AUTH_INPUTS}
          state={state}
          handleChange={handleChange}
          inputRef={inputRef}
          focusLabel={focusLabel}
          setFocusLabel={setFocusLabel}
        />
        <CustomButton
          type="primaryBtn"
          text="Continue"
          textType="whiteText"
          marginTop={V_32}
          marginBottom={V_32}
          shadow
          inactive={!fieldsFilled(state)}
        />
        <CustomButton
          text="Already Have an Account? - Log In"
          textType="primaryText"
          onPress={() => navigation.goBack()}
          marginBottom={V_16}
        />
      </ScrollableInputsView>
    </>
  );
}

export default SignUp;
