import React from 'react';
import { Button, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SlicersBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
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
            title={'All Courses'}
          />
          {/* Active */}
          <Button
            accessible={true}
            iconPosition={'left'}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App['Custom Color'],
                borderBottomWidth: 2,
                borderColor: theme.colors.text.medium,
                borderRadius: 0,
                color: palettes.Brand['Light Inverse'],
                fontFamily: 'System',
                fontWeight: '400',
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'All Courses'}
          />
        </View>

        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* ProgressActive */}
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
            title={'In Progress'}
          />
          {/* Progress */}
          <Button
            accessible={true}
            iconPosition={'left'}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App['Custom Color'],
                borderBottomWidth: 2,
                borderColor: theme.colors.text.medium,
                borderRadius: 0,
                color: palettes.Brand['Light Inverse'],
                fontFamily: 'System',
                fontWeight: '400',
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'In Progress'}
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
            title={'Completed'}
          />
          {/* Completed */}
          <Button
            accessible={true}
            iconPosition={'left'}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App['Custom Color'],
                borderBottomWidth: 2,
                borderColor: theme.colors.text.medium,
                borderRadius: 0,
                color: palettes.Brand['Light Inverse'],
                fontFamily: 'System',
                fontWeight: '400',
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Completed'}
          />
        </View>
      </View>
    </View>
  );
};

export default withTheme(SlicersBlock);
