import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const RugbyMatchActionMainScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
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
      {/* View 2 */}
      <View style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}>
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RugbyMatchActionAttackScreen');
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
          title={'Attack'}
        />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RugbyMatchActionDefenceScreen');
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
          title={'Defence'}
        />
        {/* Button 3 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RugbyMatchActionKickingScreen');
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
          title={'Kicking'}
        />
        {/* Button 4 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RugbyMatchActionLineOutScrumScreen');
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
          title={'Scrum/Lineout\n'}
        />
        {/* Button 5 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RugbyMatchActionDisciplineScreen');
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
          title={'Discipline'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RugbyMatchActionMainScreen);
