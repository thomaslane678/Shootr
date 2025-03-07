import React from 'react';
import { Button, Icon, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const MatchSlicersBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const formatCurrency = value => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(value);
  };

  return (
    <View>
      {/* Slicers */}
      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 24, paddingRight: 24 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderRadius: 64,
              flexDirection: 'row',
              paddingBottom: 2,
              paddingLeft: 2,
              paddingRight: 2,
              paddingTop: 2,
            },
            dimensions.width
          )}
        >
          <Touchable>
            <Icon
              size={24}
              name={'AntDesign/arrowleft'}
              style={StyleSheet.applyWidth({ left: -20 }, dimensions.width)}
            />
          </Touchable>

          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* AllActive */}
            <Button
              accessible={true}
              iconPosition={'left'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App['Custom Color'],
                  borderBottomWidth: 2,
                  borderColor: palettes.App['Custom Color_2'],
                  borderRadius: 0,
                  fontFamily: 'System',
                  fontWeight: '400',
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Matches'}
            />
          </View>

          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* CompletedActive */}
            <Button
              accessible={true}
              iconPosition={'left'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App['Custom Color'],
                  borderBottomWidth: 2,
                  borderColor: palettes.App['Custom Color_2'],
                  borderRadius: 0,
                  fontFamily: 'System',
                  fontWeight: '400',
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Results'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(MatchSlicersBlock);
