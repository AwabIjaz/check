import React from 'react';

import CustomView from '../components/CustomView';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';

import {V_2} from '../styles/Spacing';

function Login({navigation}) {
  return (
    <CustomView type="middleAllContainer">
      <CustomText text="Login Screen!" type="secondaryText" />
      <CustomButton
        onPress={() => navigation.navigate('Main')}
        type="primaryBtn"
        text="Next"
        textType="primaryText"
        marginTop={V_2}
      />
    </CustomView>
  );
}

export default Login;
