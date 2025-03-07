import React from 'react';
import { Button, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SoccerChooseYourFormationScreen = props => {
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
                key: 'Formation',
                value: 442,
              });
              navigation.navigate('SoccerTeamListScreen');
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
          title={'4-4-2'}
        />
        <Spacer left={8} right={8} bottom={16} top={16} />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Formation',
                value: 4231,
              });
              navigation.navigate('SoccerTeamListScreen');
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
          title={'4-2-3-1'}
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
                key: 'Formation',
                value: 433,
              });
              navigation.navigate('SoccerTeamListScreen');
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
          title={'4-3-3'}
        />
        {/* Spacer 3 */}
        <Spacer left={8} right={8} bottom={16} top={16} />
        {/* Button 4 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Formation',
                value: 352,
              });
              navigation.navigate('SoccerTeamListScreen');
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
          title={'3-5-2'}
        />
        {/* Spacer 4 */}
        <Spacer left={8} right={8} bottom={16} top={16} />
        {/* Button 5 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Formation',
                value: 541,
              });
              navigation.navigate('SoccerTeamListScreen');
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
          title={'5-4-1'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SoccerChooseYourFormationScreen);
