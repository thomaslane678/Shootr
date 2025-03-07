import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
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

const defaultProps = { EventID: null };

const EventAttendanceScreen = props => {
  const { theme } = props;
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
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image 2'].props}
          source={imageSource(Images['ShootrBigLogoTransparent'])}
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
          {'Confirm Attendance'}
        </Text>
        {/* Spacer 2 */}
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
                        EventID: Constants['TrainingID'],
                        EventName: Constants['ChosenEvent'],
                        PlayerID: Constants['Username'],
                        PlayerName: Constants['Name'],
                        TeamID: Constants['TeamID'],
                      }
                    )
                  )?.json;
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
                        EventID: Constants['TrainingID'],
                        EventName: Constants['ChosenEvent'],
                        PlayerID: Constants['Username'],
                        PlayerName: Constants['Name'],
                        TeamID: Constants['TeamID'],
                      }
                    )
                  )?.json;
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
      </View>
      {/* Spacer 3 */}
      <Spacer bottom={8} left={8} right={8} top={8} />
      {/* View 5 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', justifyContent: 'space-around' },
          dimensions.width
        )}
      >
        {/* Attending */}
        <View style={StyleSheet.applyWidth({ width: 150 }, dimensions.width)}>
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                { fontFamily: 'Inter_600SemiBold', fontSize: 24 }
              ),
              dimensions.width
            )}
          >
            {'Attending'}
          </Text>

          <ShootrSupabaseDBAPIApi.FetchEventAttendanceGetGET
            Attendance={'Attending'}
            EventID={Constants['TrainingID']}
            TeamID={Constants['TeamID']}
          >
            {({ loading, error, data, refetchEventAttendanceGet }) => {
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
                  listKey={'View 5->Attending->Fetch->List'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  pagingEnabled={false}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: palettes.App.Peoplebit_Turquoise,
                            flexDirection: 'row',
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={24}
                          color={palettes.App.Communical_Yellow_Emoticons}
                          name={'AntDesign/check'}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'].style,
                              {
                                alignSelf: 'center',
                                color: palettes.App.Communical_Yellow_Emoticons,
                                fontFamily: 'Inter_600SemiBold',
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {listData?.PlayerName}
                        </Text>
                      </View>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  snapToAlignment={'start'}
                />
              );
            }}
          </ShootrSupabaseDBAPIApi.FetchEventAttendanceGetGET>
        </View>
        {/* Absent */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'flex-start',
              alignItems: 'flex-start',
              width: 150,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                { fontFamily: 'Inter_600SemiBold', fontSize: 24 }
              ),
              dimensions.width
            )}
          >
            {'Absent'}
          </Text>

          <ShootrSupabaseDBAPIApi.FetchEventAttendanceGetGET
            Attendance={'Absent'}
            EventID={Constants['TrainingID']}
            TeamID={Constants['TeamID']}
          >
            {({ loading, error, data, refetchEventAttendanceGet }) => {
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
                  listKey={'View 5->Absent->Fetch->List'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  pagingEnabled={false}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: palettes.App.Peoplebit_Turquoise,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            width: 150,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={24}
                          color={palettes.App.Communical_Yellow_Emoticons}
                          name={'Foundation/x-circle'}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'].style,
                              {
                                color: palettes.App.Communical_Yellow_Emoticons,
                                fontFamily: 'Inter_600SemiBold',
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {listData?.PlayerName}
                        </Text>
                      </View>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  snapToAlignment={'start'}
                />
              );
            }}
          </ShootrSupabaseDBAPIApi.FetchEventAttendanceGetGET>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(EventAttendanceScreen);
