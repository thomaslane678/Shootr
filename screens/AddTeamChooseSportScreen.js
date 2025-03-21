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

const AddTeamChooseSportScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* View 2 */}
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
      <Spacer bottom={8} left={8} right={8} top={8} />
      {/* View 3 */}
      <View>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              {
                alignSelf: 'center',
                fontFamily: 'Inter_600SemiBold',
                fontSize: 30,
              }
            ),
            dimensions.width
          )}
        >
          {'Choose Sport'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              {
                alignSelf: 'center',
                fontFamily: 'Inter_600SemiBold',
                fontSize: 15,
                textAlign: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {'Welcome to Shootr - first choose your sport to begin'}
        </Text>
        <Spacer bottom={8} left={8} right={8} top={8} />
      </View>

      <View
        style={StyleSheet.applyWidth(
          { height: 200, justifyContent: 'space-around' },
          dimensions.width
        )}
      >
        {/* Button 3 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Sport',
                value: 'Football',
              });
              setGlobalVariableValue({
                key: 'SportValue',
                value: 1,
              });
              navigation.navigate('AddTeamScreen');
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
                borderRadius: 20,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                height: 40,
                marginLeft: 30,
                marginRight: 30,
              }
            ),
            dimensions.width
          )}
          title={'Soccer'}
        />
        {/* Button 4 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Sport',
                value: 'Rugby',
              });
              setGlobalVariableValue({
                key: 'SportValue',
                value: 3,
              });
              navigation.navigate('AddTeamScreen');
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
                borderRadius: 20,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                height: 40,
                marginLeft: 30,
                marginRight: 30,
              }
            ),
            dimensions.width
          )}
          title={'Rugby Union'}
        />
        {/* Button 5 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Sport',
                value: 'GAA',
              });
              setGlobalVariableValue({
                key: 'SportValue',
                value: 2,
              });
              navigation.navigate('AddTeamScreen');
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
                borderRadius: 20,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                height: 40,
                marginLeft: 30,
                marginRight: 30,
              }
            ),
            dimensions.width
          )}
          title={'GAA'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AddTeamChooseSportScreen);
