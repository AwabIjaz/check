import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../styles';
import {V_40, V_70} from '../../styles/Spacing';

const base = {
  alignItems: 'center',
  justifyContent: 'center',
};
const main = {
  ...base,
  width: Layout.scaleWidth(343),
  height: Layout.scaleHeight(52),
  borderTopRightRadius: 8,
  borderBottomLeftRadius: 8,
};
const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: V_40,
    paddingBottom: V_70,
  },
  primaryBtn: {
    ...main,
    backgroundColor: Colors.PRIMARY,
  },
  secondaryBtn: {
    ...main,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
  },
});

export default styles;
