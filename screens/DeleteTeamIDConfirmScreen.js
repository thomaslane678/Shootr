import React from 'react';
import { Button, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { EventID: null };

const DeleteTeamIDConfirmScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const shootrSupabaseDBAPIDeleteUserlistByTeamIDDELETE =
    ShootrSupabaseDBAPIApi.useDeleteUserlistByTeamIDDELETE();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', height: 200, justifyContent: 'center' },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image 2'].props}
          source={imageSource(Images['shootrredesigninappimage'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ImageStyles(theme)['Image 2'].style,
              { height: 200, width: 200 }
            ),
            dimensions.width
          )}
        />
      </View>
      {/* View 2 */}
      <View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'].style, {
              alignSelf: 'center',
              fontFamily: 'Inter_600SemiBold',
              fontSize: 30,
            }),
            dimensions.width
          )}
        >
          {'Delete TeamID'}
        </Text>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Text 3 */}
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
          {Constants['SelectedTeamID']}
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
              { alignSelf: 'center', fontFamily: 'Inter_400Regular' }
            ),
            dimensions.width
          )}
        >
          {'Are You Sure?'}
        </Text>
      </View>
      {/* Spacer 3 */}
      <Spacer bottom={8} left={8} right={8} top={8} />
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: 40, marginRight: 40 },
          dimensions.width
        )}
      >
        <Spacer bottom={8} left={8} right={8} top={8} />
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIDeleteUserlistByTeamIDDELETE.mutateAsync(
                    {
                      TeamID: Constants['SelectedTeamID'],
                      Username: Constants['Username'],
                    }
                  )
                )?.json;

                showAlertUtil({
                  title: 'TeamID Deleted',
                  message: 'TeamID Deleted Successfully',
                  buttonText: 'Okay',
                });

                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              theme.typography.button,
              { backgroundColor: palettes.App.NFT_TIME_Red }
            ),
            dimensions.width
          )}
          title={'Delete Event'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(DeleteTeamIDConfirmScreen);
