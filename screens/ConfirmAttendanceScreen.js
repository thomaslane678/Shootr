import React from 'react';
import {
  Button,
  ExpoImage,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ConfirmAttendanceScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const shootrSupabaseDBAPIEventAttendancePostPOST =
    ShootrSupabaseDBAPIApi.useEventAttendancePostPOST();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', height: 200, justifyContent: 'center' },
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
          {...GlobalStyles.ExpoImageStyles(theme)['Image 4'].props}
          source={imageSource(Images['shootrredesigninappimage'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ExpoImageStyles(theme)['Image 4'].style,
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
          {'Confirm Attendance'}
        </Text>

        <ShootrSupabaseDBAPIApi.FetchEventsListEventIDGET
          EventID={'FerrybankGymSession2024-02-14'}
          TeamID={'FerrybankSeniorHurling'}
        >
          {({ loading, error, data, refetchEventsListEventID }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlatList
                data={fetchData}
                decelerationRate={'normal'}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ??
                  listData?.uuid ??
                  index?.toString() ??
                  JSON.stringify(listData)
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'View 2->Fetch->List'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                pagingEnabled={false}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Spacer 2 */}
                      <Spacer bottom={8} left={8} right={8} top={8} />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={palettes.App.Communical_Yellow_Emoticons}
                          name={'Ionicons/barbell-outline'}
                          size={36}
                        />
                        {/* Text 2 */}
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
                                fontSize: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {listData?.Event}
                        </Text>
                      </View>
                      <Spacer bottom={8} left={8} right={8} top={8} />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={24}
                          color={palettes.App.Communical_Yellow_Emoticons}
                          name={'FontAwesome/map-pin'}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text 2'].style,
                            dimensions.width
                          )}
                        >
                          {listData?.Location}
                        </Text>
                        {/* Icon 2 */}
                        <Icon
                          size={24}
                          color={palettes.App.Communical_Yellow_Emoticons}
                          name={'Ionicons/time-sharp'}
                        />
                        {/* Text 2 */}
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text 2'].style,
                            dimensions.width
                          )}
                        >
                          {listData?.Time}
                        </Text>
                        {/* Icon 3 */}
                        <Icon
                          size={24}
                          color={palettes.App.Communical_Yellow_Emoticons}
                          name={'FontAwesome/calendar-check-o'}
                        />
                        {/* Text 3 */}
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Text 2'].style,
                            dimensions.width
                          )}
                        >
                          {listData?.Date}
                        </Text>
                      </View>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                snapToAlignment={'start'}
              />
            );
          }}
        </ShootrSupabaseDBAPIApi.FetchEventsListEventIDGET>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Spacer 3 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 40, marginRight: 40 },
            dimensions.width
          )}
        >
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIEventAttendancePostPOST.mutateAsync(
                      {
                        Attendance: 'Attending',
                        EventID: Constants['EventID'],
                        EventName: Constants['ChosenEvent'],
                        PlayerID: Constants['Username'],
                        PlayerName: Constants['Name'],
                        TeamID: Constants['TeamID'],
                      }
                    )
                  )?.json;
                  navigation.navigate('TeamHomeScreen');
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
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontFamily: 'Inter_600SemiBold',
                }
              ),
              dimensions.width
            )}
            title={'Attending'}
          />
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Button 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIEventAttendancePostPOST.mutateAsync(
                      {
                        Attendance: 'Absent',
                        EventID: Constants['EventID'],
                        EventName: Constants['ChosenEvent'],
                        PlayerID: Constants['Username'],
                        PlayerName: Constants['Name'],
                        TeamID: Constants['TeamID'],
                      }
                    )
                  )?.json;
                  navigation.navigate('TeamHomeScreen');
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
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontFamily: 'Inter_600SemiBold',
                }
              ),
              dimensions.width
            )}
            title={'Not Attending'}
          />
        </View>
        {/* Spacer 4 */}
        <Spacer left={8} right={8} bottom={100} top={250} />
      </View>
      {/* Final Menu */}
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
        <Touchable
          onPress={() => {
            try {
              if (Constants['SportValue'] === 2) {
                navigation.navigate('GAAUserProfileBasicScreen');
              } else {
              }

              if (Constants['SportValue'] === 1) {
                navigation.navigate('SoccerUserProfileBasicScreen');
              } else {
              }

              if (Constants['SportValue'] === 3) {
                navigation.navigate('RugbyUserProfileBasicScreen');
              } else {
              }

              if (Constants['SportValue'] === 6) {
                navigation.navigate('SoccerUserProfileScreen');
              } else {
              }

              if (Constants['SportValue'] === 7) {
                navigation.navigate('GAAUserProfileScreen');
              } else {
              }

              if (Constants['SportValue'] === 8) {
                navigation.navigate('RugbyUserProfileScreen');
              } else {
              }
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

export default withTheme(ConfirmAttendanceScreen);
