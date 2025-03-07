import React from 'react';
import { Button, Icon, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const ChooseYourGoalScreen = props => {
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
        >
          <Icon
            color={palettes.App.Communical_Yellow_Emoticons}
            name={'Ionicons/chevron-up-sharp'}
            size={64}
            style={StyleSheet.applyWidth(
              { height: 50, width: 50 },
              dimensions.width
            )}
          />
        </View>
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Goal',
                value: 'Top',
              });
              if (Constants['SportValue']) {
                navigation.navigate('GAAMatchScreenTopGoalScreen');
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
          title={'Attack This Goal'}
        />
        <Spacer left={8} right={8} bottom={16} top={16} />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Goal',
                value: 'Bottom',
              });
              navigation.navigate('GAAMatchScreenBottomGoalScreen');
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
          title={'Attack This Goal'}
        />
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { alignSelf: 'center' },
            dimensions.width
          )}
        >
          {/* Icon 2 */}
          <Icon
            color={palettes.App.Communical_Yellow_Emoticons}
            name={'Ionicons/chevron-down-sharp'}
            size={64}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ChooseYourGoalScreen);
