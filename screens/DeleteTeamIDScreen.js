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

const DeleteTeamIDScreen = props => {
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
      <View
        style={StyleSheet.applyWidth(
          { alignContent: 'center', alignSelf: 'center' },
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
              theme.typography.body1,
              {
                color: palettes.App.NFT_Time_UI_Black,
                fontFamily: 'Inter_700Bold',
                fontSize: 20,
                textAlign: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {'Delete TeamID'}
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
                fontFamily: 'Inter_400Regular',
                fontSize: 18,
                textAlign: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {'Please click on the TeamID you wish to Delete from your Profile'}
        </Text>
      </View>

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
                            key: 'SelectedTeamID',
                            value: flashListData?.TeamID,
                          });
                          navigation.navigate('DeleteTeamIDConfirmScreen');
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

export default withTheme(DeleteTeamIDScreen);
