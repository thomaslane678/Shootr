import React from 'react';
import {
  ScreenContainer,
  SimpleStyleFlashList,
  SimpleStyleScrollView,
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
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { UNL: null };

const ChooseTeamScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
    >
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth({ height: '200%' }, dimensions.width)}
      >
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        <ShootrSupabaseDBAPIApi.FetchUserListGetGET
          username={Constants['Username']}
        >
          {({ loading, error, data, refetchUserListGet }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlashList
                data={fetchData}
                estimatedItemSize={50}
                horizontal={false}
                inverted={false}
                keyExtractor={(flashListData, index) =>
                  flashListData?.id ??
                  flashListData?.uuid ??
                  index?.toString() ??
                  JSON.stringify(flashListData)
                }
                listKey={'Scroll View->Fetch->FlashList'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const flashListData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          setGlobalVariableValue({
                            key: 'TeamID',
                            value: flashListData?.TeamID,
                          });
                          setGlobalVariableValue({
                            key: 'Name',
                            value: flashListData?.Name,
                          });
                          setGlobalVariableValue({
                            key: 'HomeTeam',
                            value: flashListData?.Team,
                          });
                          setGlobalVariableValue({
                            key: 'Location',
                            value: flashListData?.Location,
                          });
                          setGlobalVariableValue({
                            key: 'Grade',
                            value: flashListData?.Grade,
                          });
                          setGlobalVariableValue({
                            key: 'Sport',
                            value: flashListData?.Sport,
                          });
                          setGlobalVariableValue({
                            key: 'Position',
                            value: flashListData?.Position,
                          });
                          setGlobalVariableValue({
                            key: 'SportValue',
                            value: flashListData?.SportCode,
                          });
                          navigation.navigate('HomeScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        { marginBottom: 10 },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: palettes.App.Peoplebit_Turquoise,
                            borderRadius: 20,
                            height: 100,
                            marginLeft: 30,
                            marginRight: 30,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Spacer 3 */}
                        <Spacer bottom={8} left={8} right={8} top={8} />
                        {/* Text 4 */}
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
                                textAlign: 'center',
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {flashListData?.Team}
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
                              {
                                color: palettes.App.Communical_Yellow_Emoticons,
                                fontFamily: 'Inter_600SemiBold',
                                textAlign: 'center',
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {flashListData?.Location} {flashListData?.Grade}{' '}
                          {flashListData?.Sport}
                        </Text>
                        <Spacer bottom={8} left={8} right={8} top={8} />
                      </View>
                      <Spacer bottom={8} left={8} right={8} top={8} />
                    </Touchable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </ShootrSupabaseDBAPIApi.FetchUserListGetGET>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ChooseTeamScreen);
