import React from 'react';
import {
  Icon,
  IconButton,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleKeyboardAwareScrollView,
  Spacer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import isEven from '../global-functions/isEven';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const MessagesScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [textInputValue, setTextInputValue] = React.useState('');
  const isEven = value => {
    return value % 2 === 0;
  };
  const shootrSupabaseDBAPIMessageListPostPOST =
    ShootrSupabaseDBAPIApi.useMessageListPostPOST();
  const shootrSupabaseDBAPINotificationsPostPOST =
    ShootrSupabaseDBAPIApi.useNotificationsPostPOST();

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
      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        style={StyleSheet.applyWidth(
          { flex: 1, height: 650 },
          dimensions.width
        )}
      >
        <SimpleStyleKeyboardAwareScrollView
          enableAutomaticScroll={false}
          enableOnAndroid={false}
          enableResetScrollToCoords={false}
          keyboardShouldPersistTaps={'never'}
          showsVerticalScrollIndicator={true}
          viewIsInsideTabBar={false}
          style={StyleSheet.applyWidth(
            {
              height: '100%',
              paddingBottom: 16,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 16,
            },
            dimensions.width
          )}
        >
          <ShootrSupabaseDBAPIApi.FetchMessagesGetGET
            TeamID={Constants['TeamID']}
          >
            {({ loading, error, data, refetchMessagesGet }) => {
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
                  listKey={
                    'Keyboard Aware Scroll View->Keyboard Aware Scroll View->Fetch->List'
                  }
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  pagingEnabled={false}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <>
                        <>
                          {!isEven(listData?.userId) ? null : (
                            <View
                              style={StyleSheet.applyWidth(
                                { alignItems: 'flex-start' },
                                dimensions.width
                              )}
                            >
                              <>
                                {!isEven(listData?.userId) ? null : (
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignSelf: 'auto',
                                        backgroundColor:
                                          palettes.App.Peoplebit_Turquoise,
                                        borderBottomLeftRadius: 12,
                                        borderBottomRightRadius: 12,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                        paddingBottom: 12,
                                        paddingLeft: 12,
                                        paddingRight: 12,
                                        paddingTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'flex-start',
                                          color:
                                            palettes.App
                                              .Communical_Yellow_Emoticons,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.Message}
                                    </Text>
                                  </View>
                                )}
                              </>
                              {/* View 2 */}
                              <View>
                                <Icon
                                  color={palettes.App.Peoplebit_Turquoise}
                                  name={'Ionicons/caret-down'}
                                  size={32}
                                  style={StyleSheet.applyWidth(
                                    { marginLeft: 12, marginTop: -12 },
                                    dimensions.width
                                  )}
                                />
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.medium,
                                      fontSize: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.Message}
                                </Text>
                              </View>
                            </View>
                          )}
                        </>
                        <>
                          {isEven(listData?.userId) ? null : (
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignContent: 'flex-start',
                                  alignItems: 'flex-end',
                                  alignSelf: 'auto',
                                },
                                dimensions.width
                              )}
                            >
                              <>
                                {isEven(listData?.userId) ? null : (
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.App
                                            .Communical_Yellow_Emoticons,
                                        borderBottomLeftRadius: 12,
                                        borderBottomRightRadius: 12,
                                        borderRadius: 20,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                        paddingBottom: 12,
                                        paddingLeft: 12,
                                        paddingRight: 12,
                                        paddingTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color:
                                            palettes.App.Peoplebit_Turquoise,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.Message}
                                    </Text>
                                  </View>
                                )}
                              </>
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.text.medium,
                                    fontSize: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.PlayerName}
                              </Text>
                            </View>
                          )}
                        </>
                        <Spacer bottom={8} left={8} right={8} top={8} />
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  snapToAlignment={'start'}
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                />
              );
            }}
          </ShootrSupabaseDBAPIApi.FetchMessagesGetGET>
        </SimpleStyleKeyboardAwareScrollView>
      </SimpleStyleKeyboardAwareScrollView>
      {/* Text Input Bottom */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.App.Peoplebit_Turquoise,
            borderColor: theme.colors.border.brand,
            borderTopWidth: 1,
            flexDirection: 'row',
            paddingBottom: 24,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { backgroundColor: palettes.App.Communial_Icon_BG, flex: 1 },
            dimensions.width
          )}
        >
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter a value...'}
            webShowOutline={true}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                paddingBottom: 12,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 12,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        <IconButton
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMessageListPostPOST.mutateAsync({
                    FillerText: textInputValue,
                    Name: Constants['Name'],
                    TeamID: Constants['TeamID'],
                    TeamName: Constants['HomeTeam'],
                    UserID: Constants['Username'],
                  })
                )?.json;
                (
                  await shootrSupabaseDBAPINotificationsPostPOST.mutateAsync({
                    Createdby: Constants['Name'],
                    Notification: 'New Message',
                    TeamID: Constants['TeamID'],
                    TeamName: Constants['HomeTeam'],
                    date: new Date(),
                  })
                )?.json;
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          size={32}
          color={palettes.App.Communical_Yellow_Emoticons}
          icon={'Feather/send'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MessagesScreen);
