import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleScrollView,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SettingsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            alignSelf: 'auto',
            height: '100%',
            justifyContent: 'center',
            marginTop: 50,
          },
          dimensions.width
        )}
      >
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Update Profile'}
        />
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Change Password'}
        />
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Button 3 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Add New TeamID'}
        />
        {/* Spacer 3 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Button 4 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Privacy Policy'}
        />
        {/* Spacer 4 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Button 5 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Help'}
        />
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SettingsScreen);
