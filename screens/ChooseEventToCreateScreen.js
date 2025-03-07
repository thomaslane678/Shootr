import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { View } from 'react-native';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const ChooseEventToCreateScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [PlayerName, setPlayerName] = React.useState('PlayerName');
  const [PlayerUserName, setPlayerUserName] = React.useState('PlayerUsername');
  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState('customer');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const shootrSupabaseDBAPIMatchResultsPostPOST =
    ShootrSupabaseDBAPIApi.useMatchResultsPostPOST();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Communial_Icon_BG },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { height: '80%', justifyContent: 'center' },
          dimensions.width
        )}
      >
        {/* Action Btn 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onChangeText={newActionBtn2Value => {
            const handler = async () => {
              try {
                (await shootrSupabaseDBAPIMatchResultsPostPOST.mutateAsync({}))
                  ?.json;
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          onPress={() => {
            try {
              if (Constants['SportValue'] === 2) {
                navigation.navigate('GAAAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 7) {
                navigation.navigate('GAAAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 1) {
                navigation.navigate('SoccerAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 6) {
                navigation.navigate('SoccerAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 3) {
                navigation.navigate('RugbyAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 8) {
                navigation.navigate('RugbyAddMatchScreen');
              } else {
              }
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Sapphire,
              borderRadius: 11,
              color: palettes.App.Communical_Yellow_Emoticons,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 51,
              marginBottom: 20,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              textAlign: 'center',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
          title={'Add Match'}
        />
        {/* Action Btn */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onChangeText={newActionBtnValue => {
            const handler = async () => {
              try {
                (await shootrSupabaseDBAPIMatchResultsPostPOST.mutateAsync({}))
                  ?.json;
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          onPress={() => {
            try {
              navigation.navigate('AddEventScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Sapphire,
              borderRadius: 11,
              color: palettes.App.Communical_Yellow_Emoticons,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 51,
              marginBottom: 20,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              textAlign: 'center',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
          title={'Add Event'}
        />
      </View>
      {/* Updated Menu */}
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
                navigation.navigate('SoccerUserProfileScreen');
              } else {
              }

              if (Constants['SportValue'] === 3) {
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

export default withTheme(ChooseEventToCreateScreen);
