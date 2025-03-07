import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const GAAMatchActionOppositionScreen = props => {
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
                  value: 'Opposition Goal',
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
            title={'Opposition Goal'}
          />
          {/* Button 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Opposition Free Scored',
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
            title={'Opposition\nFree Scored'}
          />
          {/* Button 3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Opposition Penalty Goal',
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
                  marginTop: 30,
                }
              ),
              dimensions.width
            )}
            title={'Opposition\nPenalty Goal'}
          />
          {/* Button 4 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Opposition Penalty Point',
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
            title={'Opposition\nPenalty Point'}
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
                  value: 'Opposition Point',
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
            title={'Opposition Point'}
          />
          {/* Button 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Opposition Free Missed',
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
            title={'Opposition\nFree Missed'}
          />
          {/* Button 4 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Opposition Penalty Point',
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
                  marginTop: 30,
                }
              ),
              dimensions.width
            )}
            title={'Opposition\nPenalty Post'}
          />
          {/* Button 3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Opposition Penalty Wide',
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
            title={'Opposition\nPenalty Wide'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(GAAMatchActionOppositionScreen);
