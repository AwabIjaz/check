import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../styles';

const base = {
  alignItems: 'center',
  justifyContent: 'center',
};
const main = {
  ...base,
  width: Layout.scaleWidth(343),
  height: Layout.scaleHeight(48),
  borderTopRightRadius: 8,
  borderBottomLeftRadius: 8,
};
const styles = StyleSheet.create({
  primaryBtn: {
    ...main,
    backgroundColor: Colors.PRIMARY,
  },
  secondaryBtn: {
    ...main,
    backgroundColor: Colors.SECONDARY,
  },
});

export default styles;
