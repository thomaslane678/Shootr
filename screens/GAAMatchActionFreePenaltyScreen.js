import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const GAAMatchActionFreePenaltyScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Communial_Icon_BG },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.App.Communial_Icon_BG,
            flexDirection: 'row',
            height: '50%',
            justifyContent: 'space-around',
          },
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
        >
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Free Won',
                });
                navigation.navigate('GAAMatchActionPlayerSelectScreen');
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
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                }
              ),
              dimensions.width
            )}
            title={'Free Won'}
          />
          {/* Button 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Penalty Won',
                });
                navigation.navigate('GAAMatchActionPlayerSelectScreen');
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
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Penalty Won'}
          />
          {/* Button 3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Mark Won',
                });
                navigation.navigate('GAAMatchActionPlayerSelectScreen');
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
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Mark Won'}
          />
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
        >
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Free Conceded',
                });
                navigation.navigate('GAAMatchActionPlayerSelectScreen');
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
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                }
              ),
              dimensions.width
            )}
            title={'Free Conceded'}
          />
          {/* Button 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Penalty Conceded',
                });
                navigation.navigate('GAAMatchActionPlayerSelectScreen');
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
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Penalty Conceded'}
          />
          {/* Button 3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Mark Conceded',
                });
                navigation.navigate('GAAMatchActionPlayerSelectScreen');
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
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Mark Conceded'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(GAAMatchActionFreePenaltyScreen);
