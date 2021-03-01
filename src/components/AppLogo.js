import React from 'react';
import PropTypes from 'prop-types';

import CustomView from './CustomView';
import CustomImage from './CustomImage';
import {StyleSheet} from 'react-native';
import {V_32} from '../styles/Spacing';
import {APP_LOGO} from '../utils/constants';

const AppLogo = ({backgroundColor}) => (
  <CustomView
    type="middleXContainer"
    style={[
      styles.appLogo,
      backgroundColor && {backgroundColor: backgroundColor},
    ]}>
    <CustomImage source={APP_LOGO} width={200} height={80} />
  </CustomView>
);

const styles = StyleSheet.create({
  appLogo: {
    flex: 0,
    marginTop: V_32,
  },
});

AppLogo.propTypes = {
  backgroundColor: PropTypes.string,
};

export default AppLogo;
