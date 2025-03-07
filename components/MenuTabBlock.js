import React from 'react';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const MenuTabBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors.border.brand,
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
            color={theme.colors.text.medium}
            name={'MaterialIcons/sports-baseball'}
            style={StyleSheet.applyWidth(
              { backgroundColor: theme.colors.border.brand },
              dimensions.width
            )}
          />
        </View>
      </Touchable>
      {/* Home Tab */}
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
            color={theme.colors.branding.primary}
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
            color={theme.colors.text.medium}
            name={'AntDesign/user'}
          />
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(MenuTabBlock);
