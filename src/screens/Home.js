import React from 'react';

import CustomView from '../components/CustomView';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';

import {V_2} from '../styles/Spacing';

function Home({navigation}) {
  return (
    <CustomView type="middleAllContainer">
      <CustomText text="Home Screen." type="basic" />
      <CustomButton
        onPress={() => navigation.goBack()}
        type="secondaryBtn"
        text="Go Back!"
        textType="primaryText"
        marginTop={V_2}
      />
    </CustomView>
  );
}

export default Home;
