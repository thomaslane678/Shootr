import React from 'react';
import { Button, Divider, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const AdvancedAnalyticsRugbyWelcomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const shootrSupabaseDBAPIUpdateSportCodePATCH =
    ShootrSupabaseDBAPIApi.useUpdateSportCodePATCH();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { height: '100%', width: '100%' },
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { alignSelf: 'center', height: 150, justifyContent: 'center' },
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
                { height: 150, width: 150 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Text */}
        <View>
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                {
                  alignSelf: 'center',
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 18,
                }
              ),
              dimensions.width
            )}
          >
            {'Thank you for signing up!'}
          </Text>
          <Divider
            color={theme.colors.border.base}
            {...GlobalStyles.DividerStyles(theme)['Divider'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.DividerStyles(theme)['Divider'].style,
                { height: 5 }
              ),
              dimensions.width
            )}
          />
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                { alignSelf: 'center', textAlign: 'center' }
              ),
              dimensions.width
            )}
          >
            {
              'You now have access to your own personal dashboard and GeoPitch tracking - best of luck!'
            }
          </Text>
        </View>
        <Divider
          color={theme.colors.border.base}
          {...GlobalStyles.DividerStyles(theme)['Divider'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.DividerStyles(theme)['Divider'].style,
              { height: 10 }
            ),
            dimensions.width
          )}
        />
        <View>
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIUpdateSportCodePATCH.mutateAsync({
                      AccountStatus: Constants['AccountStatus'],
                      Grade: Constants['Grade'],
                      Location: Constants['Location'],
                      Position: Constants['Position'],
                      Role: 'Premium',
                      RoleCode: Constants['AccountType'],
                      Sport: Constants['Sport'],
                      SportCode: 8,
                      Team: Constants['HomeTeam'],
                      TeamID: Constants['TeamID'],
                      Username: Constants['Username'],
                      name: Constants['Name'],
                    })
                  )?.json;
                  navigation.navigate('RugbyUserProfileScreen');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            title={'Get Started'}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontFamily: 'Inter_600SemiBold',
                  marginLeft: 30,
                  marginRight: 30,
                }
              ),
              dimensions.width
            )}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AdvancedAnalyticsRugbyWelcomeScreen);
