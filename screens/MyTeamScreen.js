import React from 'react';
import {
  Divider,
  ScreenContainer,
  SimpleStyleFlatList,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const MyTeamScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        {/* Description */}
        <Text
          accessible={true}
          selectable={false}
          numberOfLines={2}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.medium,
              fontFamily: 'System',
              fontWeight: '200',
              marginTop: 12,
              textAlign: 'center',
              textTransform: 'uppercase',
            },
            dimensions.width
          )}
        >
          {Constants['HomeTeam']}
        </Text>
        <Divider
          color={theme.colors.text.light}
          height={1}
          style={StyleSheet.applyWidth(
            { height: 1, marginLeft: 32, marginRight: 32, marginTop: 14 },
            dimensions.width
          )}
        />
        <ShootrSupabaseDBAPIApi.FetchUserListByTeamIDGET
          TeamID={Constants['TeamID']}
        >
          {({ loading, error, data, refetchUserListByTeamID }) => {
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
                listKey={'View->Fetch->List'}
                nestedScrollEnabled={false}
                onEndReachedThreshold={0.5}
                pagingEnabled={false}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.App.Peoplebit_Turquoise,
                          marginLeft: 4,
                          marginRight: 4,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: palettes.App.Peoplebit_Turquoise,
                            marginBottom: 4,
                            marginLeft: 4,
                            marginRight: 4,
                            marginTop: 4,
                          },
                          dimensions.width
                        )}
                      >
                        <Touchable
                          onPress={() => {
                            try {
                              undefined;
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: palettes.App.Peoplebit_Turquoise,
                              borderBottomWidth: 1,
                              borderColor: theme.colors.border.brand,
                              borderLeftWidth: 1,
                              borderRadius: 6,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              justifyContent: 'center',
                              paddingBottom: 16,
                              paddingTop: 16,
                              width: 100,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Profile */}
                          <Image
                            resizeMode={'cover'}
                            source={
                              imageSource(Images['shootrredesigninappimage']) ??
                              imageSource(`${Constants['UserPic']}`)
                            }
                            style={StyleSheet.applyWidth(
                              {
                                alignSelf: 'center',
                                borderRadius: 6,
                                height: 60,
                                opacity: 0.85,
                                width: 60,
                              },
                              dimensions.width
                            )}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { alignContent: 'center', alignSelf: 'center' },
                              dimensions.width
                            )}
                          >
                            {/* Name */}
                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(theme.typography.subtitle1, {
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'Inter_500Medium',
                                  textAlign: 'center',
                                }),
                                dimensions.width
                              )}
                            >
                              {listData?.Name}
                            </Text>
                            {/* Team Name */}
                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(theme.typography.caption, {
                                  color: theme.colors.text.light,
                                  textAlign: 'center',
                                }),
                                dimensions.width
                              )}
                            >
                              {listData?.Position}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                snapToAlignment={'start'}
                numColumns={3}
                style={StyleSheet.applyWidth(
                  { alignItems: 'flex-start', alignSelf: 'center' },
                  dimensions.width
                )}
              />
            );
          }}
        </ShootrSupabaseDBAPIApi.FetchUserListByTeamIDGET>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MyTeamScreen);
