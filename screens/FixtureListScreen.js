import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  Spacer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import formatCurrency from '../global-functions/formatCurrency';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const FixtureListScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const formatCurrency = value => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(value);
  };

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
      <ShootrSupabaseDBAPIApi.FetchFixtureListGetByHomeTeamGET
        TeamID={Constants['TeamID']}
      >
        {({ loading, error, data, refetchFixtureListGetByHomeTeam }) => {
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
              listKey={'Fetch->List'}
              nestedScrollEnabled={false}
              numColumns={1}
              onEndReachedThreshold={0.5}
              pagingEnabled={false}
              renderItem={({ item, index }) => {
                const listData = item;
                return (
                  <>
                    <Touchable>
                      <Surface
                        elevation={3}
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: palettes.App.Peoplebit_Turquoise,
                            borderRadius: 12,
                            paddingBottom: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { alignItems: 'center', flexDirection: 'row' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                size={24}
                                color={palettes.App.Communical_Yellow_Emoticons}
                                name={'Entypo/location-pin'}
                              />
                              <Text
                                accessible={true}
                                selectable={false}
                                ellipsizeMode={'tail'}
                                numberOfLines={1}
                                style={StyleSheet.applyWidth(
                                  {
                                    color:
                                      palettes.App.Communical_Yellow_Emoticons,
                                    fontFamily: 'System',
                                    fontSize: 12,
                                    fontWeight: '400',
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.Location}
                              </Text>
                            </View>

                            <Text
                              accessible={true}
                              selectable={false}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                {
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'System',
                                  fontSize: 20,
                                  fontWeight: '600',
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.HomeTeam}
                              {' v '}
                              {listData?.Opposition}
                            </Text>
                            <Spacer left={8} right={8} bottom={3} top={3} />
                            <Text
                              accessible={true}
                              selectable={false}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                {
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'System',
                                  fontSize: 16,
                                  fontWeight: '600',
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.MatchType}
                            </Text>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderRadius: 8,
                                marginLeft: 8,
                                overflow: 'hidden',
                              },
                              dimensions.width
                            )}
                          >
                            <Image
                              resizeMode={'cover'}
                              source={imageSource(
                                Images['screenshot20240826at115609']
                              )}
                              style={StyleSheet.applyWidth(
                                { height: 80, width: 80 },
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        <Spacer left={8} right={8} bottom={6} top={6} />
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Icon
                              color={palettes.App.Communical_Yellow_Emoticons}
                              name={
                                'MaterialCommunityIcons/clock-time-three-outline'
                              }
                              size={18}
                            />
                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                {
                                  alignSelf: 'center',
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'System',
                                  fontSize: 12,
                                  fontWeight: '600',
                                  marginLeft: 6,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.Time}
                              {'\n'}
                            </Text>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                alignSelf: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              color={palettes.App.Communical_Yellow_Emoticons}
                              name={'Foundation/calendar'}
                              size={20}
                            />
                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                {
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'System',
                                  fontSize: 12,
                                  fontWeight: '600',
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.Date}
                            </Text>
                            <Button
                              accessible={true}
                              iconPosition={'left'}
                              onPress={() => {
                                try {
                                  setGlobalVariableValue({
                                    key: 'Opposition',
                                    value: listData?.Opposition,
                                  });
                                  setGlobalVariableValue({
                                    key: 'MatchID',
                                    value:
                                      Constants['HomeTeam'] +
                                      listData?.Opposition +
                                      listData?.Date,
                                  });
                                  setGlobalVariableValue({
                                    key: 'MatchType',
                                    value: listData?.MatchType,
                                  });
                                  setGlobalVariableValue({
                                    key: 'Venue',
                                    value: listData?.Location,
                                  });
                                  if (Constants['SportValue'] === 2) {
                                    navigation.navigate('GAATeamListScreen');
                                  } else {
                                  }

                                  if (Constants['SportValue'] === 1) {
                                    navigation.navigate(
                                      'SoccerChooseYourFormationScreen'
                                    );
                                  } else {
                                  }

                                  if (Constants['SportValue'] === 3) {
                                    navigation.navigate('RugbyTeamListScreen');
                                  } else {
                                  }
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              {...GlobalStyles.ButtonStyles(theme)['Button']
                                .props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ButtonStyles(theme)['Button']
                                    .style,
                                  {
                                    backgroundColor:
                                      palettes.App.Communical_Yellow_Emoticons,
                                    color: palettes.App.Peoplebit_Turquoise,
                                    marginLeft: 10,
                                    position: 'relative',
                                  }
                                ),
                                dimensions.width
                              )}
                              title={'Start Match'}
                            />
                          </View>
                        </View>
                      </Surface>
                      <View
                        style={StyleSheet.applyWidth(
                          { borderRadius: 12 },
                          dimensions.width
                        )}
                      />
                    </Touchable>
                    <Spacer left={8} right={8} bottom={12} top={12} />
                  </>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              snapToAlignment={'start'}
              style={StyleSheet.applyWidth(
                {
                  paddingBottom: 24,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 24,
                },
                dimensions.width
              )}
            />
          );
        }}
      </ShootrSupabaseDBAPIApi.FetchFixtureListGetByHomeTeamGET>
    </ScreenContainer>
  );
};

export default withTheme(FixtureListScreen);
