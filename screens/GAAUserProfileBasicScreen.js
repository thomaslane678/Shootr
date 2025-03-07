import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  SimpleStyleScrollView,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const GAAUserProfileBasicScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Communial_Icon_BG },
        dimensions.width
      )}
    >
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { height: '150%', opacity: 1 },
          dimensions.width
        )}
      >
        {/* Player Bio */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 30 },
            dimensions.width
          )}
        >
          {/* About */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                marginLeft: 20,
                marginRight: 20,
                paddingBottom: 20,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Top Section */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['ShootrBigLogoTransparent'])}
                style={StyleSheet.applyWidth(
                  { height: 168, width: 120 },
                  dimensions.width
                )}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, marginLeft: 20 },
                  dimensions.width
                )}
              >
                {/* Name */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 17,
                      marginBottom: 6,
                    },
                    dimensions.width
                  )}
                >
                  {Constants['Name']}
                </Text>
                {/* Speciality */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_400Regular',
                      opacity: 0.5,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {Constants['HomeTeam']}
                </Text>
                {/* Rating */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'auto',
                      flexDirection: 'row',
                      marginTop: 18,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.App.Communical_Yellow_Emoticons}
                    name={'FontAwesome/star'}
                    size={20}
                    style={StyleSheet.applyWidth(
                      { backgroundColor: palettes.App.Peoplebit_Turquoise },
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { marginLeft: 15 },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.App.Communical_Yellow_Emoticons,
                          fontFamily: 'Inter_300Light',
                          opacity: 0.5,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {'Position'}
                    </Text>

                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'auto',
                          color: palettes.App.Communical_Yellow_Emoticons,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 15,
                          marginTop: 4,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {Constants['Position']}
                    </Text>
                  </View>
                </View>
                {/* Location */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginTop: 18,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.App.Communical_Yellow_Emoticons}
                    name={'Ionicons/location-outline'}
                    size={25}
                    style={StyleSheet.applyWidth(
                      { height: 24, width: 24 },
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { marginLeft: 15 },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.App.Communical_Yellow_Emoticons,
                          fontFamily: 'Inter_300Light',
                          opacity: 0.5,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {Constants['Location']}
                    </Text>

                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.App.Communical_Yellow_Emoticons,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 15,
                          marginTop: 4,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {Constants['Grade']}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Player Stats Dashboard */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'column',
              justifyContent: 'space-around',
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.App.NFT_TIME_Black,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
              }),
              dimensions.width
            )}
          >
            {'Player Dashboard'}
          </Text>
          {/* Spacer 4 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                { fontFamily: 'Inter_600SemiBold', textAlign: 'center' }
              ),
              dimensions.width
            )}
          >
            {
              'Want to see your own Dashboard just like the Team Stats view, and track your own actions using our GeoPitch technology? Sign up below to access our Advanced Analytics and unlock your full potential!'
            }
          </Text>
        </View>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('AdvancedAnalyticsSignUpScreen');
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
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Advanced Analytics'}
        />
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('AddNewTeamIDScreen');
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
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Add New TeamID'}
        />
      </SimpleStyleScrollView>
      {/* Menu Tab */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.App.Peoplebit_Turquoise,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            flexDirection: 'row',
            height: 117,
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
          },
          dimensions.width
        )}
      >
        {/* Team Tab */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('TeamHomeScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
          style={StyleSheet.applyWidth(
            { borderColor: palettes.App.Communical_Yellow_Emoticons },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={palettes.App.Communical_Yellow_Emoticons}
              name={'MaterialIcons/sports-baseball'}
            />
          </View>
        </Touchable>
        {/* Home Tab */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('HomeScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            {/* Home Icon */}
            <Icon
              size={24}
              color={palettes.App.Communical_Yellow_Emoticons}
              name={'Entypo/home'}
            />
          </View>
        </Touchable>
        {/* Profile Tab */}
        <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={palettes.App.Communical_Yellow_Emoticons}
              name={'AntDesign/user'}
            />
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(GAAUserProfileBasicScreen);
