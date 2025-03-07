import React from 'react';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const UpdatedMenuBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: palettes.App.Peoplebit_Turquoise,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          flexDirection: 'row',
          height: 117,
          justifyContent: 'space-between',
          paddingBottom: 20,
          paddingLeft: 30,
          paddingRight: 30,
        },
        dimensions.width
      )}
    >
      {/* Team Tab */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('TeamHomeScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        activeOpacity={0.8}
        disabledOpacity={0.8}
        style={StyleSheet.applyWidth(
          { borderColor: palettes.App.Communical_Yellow_Emoticons },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={palettes.App.Communical_Yellow_Emoticons}
            name={'MaterialIcons/sports-baseball'}
          />
        </View>
      </Touchable>
      {/* Home Tab */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('RootNavigator');
          } catch (err) {
            console.error(err);
          }
        }}
        activeOpacity={0.8}
        disabledOpacity={0.8}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          {/* Home Icon */}
          <Icon
            size={24}
            color={palettes.App.Communical_Yellow_Emoticons}
            name={'Entypo/home'}
          />
        </View>
      </Touchable>
      {/* Profile Tab */}
      <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={palettes.App.Communical_Yellow_Emoticons}
            name={'AntDesign/user'}
          />
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(UpdatedMenuBlock);
