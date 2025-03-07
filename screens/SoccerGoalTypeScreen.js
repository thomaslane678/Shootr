import React from 'react';
import { Button, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SoccerGoalTypeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* View 2 */}
      <View style={StyleSheet.applyWidth({ height: 200 }, dimensions.width)} />
      <View
        style={StyleSheet.applyWidth(
          { alignSelf: 'stretch', height: 400 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignSelf: 'center' },
            dimensions.width
          )}
        />
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Goal Type',
                value: 'Right Foot',
              });
              if (Constants['Formation'] === 442) {
                navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
              } else {
              }

              if (Constants['Formation'] === 433) {
                navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
              } else {
              }

              if (Constants['Formation'] === 352) {
                navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
              } else {
              }

              if (Constants['Formation'] === 4231) {
                navigation.navigate('SoccerMatchActionPlayerSelect4231Screen');
              } else {
              }

              if (Constants['Formation'] === 541) {
                navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
              } else {
              }
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                marginLeft: 40,
                marginRight: 40,
              }
            ),
            dimensions.width
          )}
          title={'Right Foot'}
        />
        <Spacer left={8} right={8} bottom={16} top={16} />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Goal Type',
                value: 'Left Foot',
              });
              if (Constants['Formation'] === 442) {
                navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
              } else {
              }

              if (Constants['Formation'] === 433) {
                navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
              } else {
              }

              if (Constants['Formation'] === 352) {
                navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
              } else {
              }

              if (Constants['Formation'] === 4231) {
                navigation.navigate('SoccerMatchActionPlayerSelect4231Screen');
              } else {
              }

              if (Constants['Formation'] === 541) {
                navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
              } else {
              }
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                marginLeft: 40,
                marginRight: 40,
              }
            ),
            dimensions.width
          )}
          title={'Left Foot'}
        />
        {/* Spacer 2 */}
        <Spacer left={8} right={8} bottom={16} top={16} />
        {/* Button 3 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Goal Type',
                value: 'Header',
              });
              if (Constants['Formation'] === 442) {
                navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
              } else {
              }

              if (Constants['Formation'] === 433) {
                navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
              } else {
              }

              if (Constants['Formation'] === 352) {
                navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
              } else {
              }

              if (Constants['Formation'] === 4231) {
                navigation.navigate('SoccerMatchActionPlayerSelect4231Screen');
              } else {
              }

              if (Constants['Formation'] === 541) {
                navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
              } else {
              }
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                marginLeft: 40,
                marginRight: 40,
              }
            ),
            dimensions.width
          )}
          title={'Header'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SoccerGoalTypeScreen);
