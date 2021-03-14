import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

interface Props {
  onPress: () => void;
  label: (() => React.ReactNode) | string;
  containerStyle?: ViewStyle | ViewStyle[];
  touchableStyle?: ViewStyle;
  labelStyle?: TextStyle;
  testID?: string;
  iconName?: string;
}

const TooltipMenuItem = ({
  onPress,
  containerStyle,
  touchableStyle,
  label,
  labelStyle,
  testID,
  iconName
}: Props) => (
  <View style={containerStyle} testID={testID}>
    <TouchableOpacity
      style={[styles.container, touchableStyle]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
					name={iconName}
					size={25}
					style={{ color: 'white' }}
			/>
      {typeof label === 'function' ? (
        label()
      ) : (
        <Text style={[labelStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  </View>
);

TooltipMenuItem.defaultProps = {
  labelStyle: null,
  containerStyle: null,
  touchableStyle: null,
  testID: undefined,
};

export default TooltipMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
});
