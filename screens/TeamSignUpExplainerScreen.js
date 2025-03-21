import React from 'react';
import {
  Button,
  ExpoImage,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const TeamSignUpExplainerScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', height: 150 },
          dimensions.width
        )}
      >
        <ExpoImage
          allowDownscaling={true}
          cachePolicy={'disk'}
          contentPosition={'center'}
          resizeMode={'cover'}
          transitionDuration={300}
          transitionEffect={'cross-dissolve'}
          transitionTiming={'ease-in-out'}
          {...GlobalStyles.ExpoImageStyles(theme)['Image (default)'].props}
          source={imageSource(Images['shootrredesigninappimage'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ExpoImageStyles(theme)['Image (default)'].style,
              { height: 150, width: 150 }
            ),
            dimensions.width
          )}
        />
      </View>

      <View style={StyleSheet.applyWidth({ height: 200 }, dimensions.width)}>
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              { alignSelf: 'center', fontFamily: 'Inter_600SemiBold' }
            ),
            dimensions.width
          )}
        >
          {'How Shootr Works'}
        </Text>
        {/* Text 3 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              { alignSelf: 'center', textAlign: 'center' }
            ),
            dimensions.width
          )}
        >
          {
            "You'll notice a lot of empty screens for now - this bit is up to you! "
          }
        </Text>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Text 2 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              { alignSelf: 'center', textAlign: 'center' }
            ),
            dimensions.width
          )}
        >
          {
            'Use the + button on the Team Home Screen to begin adding Fixtures & Events, and watch it go from there\nEnjoy!'
          }
        </Text>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Spacer 3 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
      </View>
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', height: 200 },
          dimensions.width
        )}
      >
        <ExpoImage
          allowDownscaling={true}
          cachePolicy={'disk'}
          contentPosition={'center'}
          resizeMode={'cover'}
          transitionDuration={300}
          transitionEffect={'cross-dissolve'}
          transitionTiming={'ease-in-out'}
          {...GlobalStyles.ExpoImageStyles(theme)['Image (default)'].props}
          source={imageSource(Images['shootrexplainerimage'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ExpoImageStyles(theme)['Image (default)'].style,
              { height: 200, width: 200 }
            ),
            dimensions.width
          )}
        />
      </View>
      {/* View 4 */}
      <View style={StyleSheet.applyWidth({ height: 100 }, dimensions.width)}>
        {/* Text 3 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              { alignSelf: 'center', textAlign: 'center' }
            ),
            dimensions.width
          )}
        >
          {
            'Please note only Admins can add and delete Fixtures & Events\nFollow the link below to set up your personal account now'
          }
        </Text>
        <Spacer bottom={8} left={8} right={8} top={8} />
      </View>
      {/* View 2 */}
      <View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('SignUpScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              theme.typography.button,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                marginLeft: 40,
                marginRight: 40,
              }
            ),
            dimensions.width
          )}
          title={'Create Your Profile'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TeamSignUpExplainerScreen);
