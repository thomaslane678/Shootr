import React from 'react';
import {
  Button,
  ScreenContainer,
  Spacer,
  Stepper,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const RugbyMatchScreenBottomGoalScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ActionOptions, setActionOptions] = React.useState('Score, Card, Wide');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickerValue3, setPickerValue3] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [stepper3Value, setStepper3Value] = React.useState('');
  const [stepperValue, setStepperValue] = React.useState('');
  const [stepperValue2, setStepperValue2] = React.useState('');
  const [stepperValue3, setStepperValue3] = React.useState('');
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.NFT_TIME_Light_Gray },
        dimensions.width
      )}
    >
      {/* Match Details & Scoreboard */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.App.Peoplebit_Turquoise,
            height: 70,
            justifyContent: 'space-around',
          },
          dimensions.width
        )}
      >
        <View>
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
              }),
              dimensions.width
            )}
          >
            {Constants['MatchType']}
            {', '}
            {Constants['Venue']}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'stretch',
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 24,
              }),
              dimensions.width
            )}
          >
            {Constants['HomeTeam']}
            {' v '}
            {Constants['Opposition']}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* View 2 */}
          <View>
            <Stepper
              iconSize={24}
              onChange={newStepperValue => {
                const stepperValue = newStepperValue;
                try {
                  setStepperValue(stepperValue);
                  setGlobalVariableValue({
                    key: 'HTPoints',
                    value: stepperValue2,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              iconColor={palettes.App.Communial_Icon_BG}
              style={StyleSheet.applyWidth(
                { color: palettes.App.Communical_Yellow_Emoticons },
                dimensions.width
              )}
              value={stepperValue3}
            />
          </View>

          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                {
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontSize: 18,
                }
              ),
              dimensions.width
            )}
          >
            {'  -   '}
          </Text>
          {/* View 4 */}
          <View>
            {/* Stepper 4 */}
            <Stepper
              iconSize={24}
              onChange={newStepper4Value => {
                const stepperValue = newStepper4Value;
                try {
                  setStepperValue(stepperValue);
                  setGlobalVariableValue({
                    key: 'OppPoints',
                    value: newStepper4Value,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              iconColor={palettes.App.Communial_Icon_BG}
              style={StyleSheet.applyWidth(
                { color: palettes.App.Communical_Yellow_Emoticons },
                dimensions.width
              )}
              value={stepper3Value}
            />
          </View>
        </View>
      </View>
      {/* Pitch View */}
      <View
        style={StyleSheet.applyWidth(
          { height: 510, width: 390 },
          dimensions.width
        )}
      >
        <ImageBackground
          resizeMode={'cover'}
          {...GlobalStyles.ImageBackgroundStyles(theme)['Image Background']
            .props}
          source={imageSource(Images['Screenshot20240603At163743'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ImageBackgroundStyles(theme)['Image Background']
                .style,
              { height: '100%', width: '100%' }
            ),
            dimensions.width
          )}
        >
          {/* Main View */}
          <View>
            <View>
              {/* 1 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('1 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 1,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 479,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '1 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 6 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('6 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 4,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 258,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 479,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '6 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 120,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('2 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 3,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 297,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 479,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '2 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 80,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 4 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('4 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 6,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 180,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 179,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '4 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 197,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 5 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('5 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 7,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 141,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 479,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '5 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 237,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 3 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('3 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 3,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 219,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 479,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '3 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 160,
                      position: 'absolute',
                      width: 37,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 7 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('7 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 8,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 102,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 479,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '7 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 277,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 9 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('9 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 9,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 63,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 479,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '9 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 317,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 10 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('10 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 10,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 24,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 479,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '10 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 357,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 8 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('8 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 2,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 336,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 489,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '8 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 40,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
            >
              {/* 1 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('1 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 11,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '1 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 6 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('6 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 14,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 258,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '6 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 120,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('2 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 13,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 297,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '2 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 80,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 4 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('4 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 16,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 180,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '4 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 197,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 5 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('5 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 17,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 141,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '5 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 237,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 3 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('3 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 15,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 219,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '3 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 160,
                      position: 'absolute',
                      width: 37,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 7 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('7 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 18,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 102,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '7 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 277,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 9 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('9 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 19,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 63,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '9 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 317,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 10 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('10 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 20,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 24,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '10 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 357,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 8 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('8 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 12,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 336,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 432,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '8 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 40,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
            </View>
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
            >
              {/* 1 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('1 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 21,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '1 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 6 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('6 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 24,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 258,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '6 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 120,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('2 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 23,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 297,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '2 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 80,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 4 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('4 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 26,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 180,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '4 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 197,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 5 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('5 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 27,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 141,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '5 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 237,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 3 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('3 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 25,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 219,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '3 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 160,
                      position: 'absolute',
                      width: 37,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 7 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('7 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 28,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 102,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '7 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 277,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 9 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('9 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 29,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 63,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '9 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 317,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 10 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('10 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 30,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 24,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '10 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 357,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 8 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('8 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 22,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 336,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '8 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 40,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
            </View>
            {/* View 4 */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
            >
              {/* 1 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('1 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 31,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '1 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 6 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('6 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 34,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 258,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '6 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 120,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('2 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 297,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '2 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 80,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 4 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('4 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 36,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 180,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '4 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 197,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 5 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('5 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 37,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 141,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '5 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 237,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 3 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('3 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 35,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 219,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '3 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 160,
                      position: 'absolute',
                      width: 37,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 7 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('7 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 38,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 102,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '7 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 277,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 9 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('9 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 39,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 63,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '9 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 317,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 10 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('10 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 40,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 24,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '10 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 357,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 8 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('8 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 32,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 336,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 318,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '8 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 40,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
            </View>
            {/* View 5 */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
            >
              {/* 1 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('1 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 41,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 261,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '1 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 6 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('6 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 44,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 258,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 261,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '6 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 120,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('2 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 43,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 297,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 261,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '2 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 80,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 4 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('4 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 46,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 180,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 261,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '4 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 197,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 5 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('5 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 47,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 141,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 261,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '5 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 237,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 3 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('3 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 45,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 219,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 261,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '3 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 160,
                      position: 'absolute',
                      width: 37,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 7 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('7 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 48,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 102,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '7 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 277,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 9 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('9 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 49,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 63,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 261,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '9 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 317,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 10 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('10 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 50,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 24,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 261,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '10 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 357,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 8 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('8 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 42,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 336,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 261,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '8 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 40,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
            </View>
            {/* View 6 */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
            >
              {/* 1 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('1 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 51,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '1 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 6 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('6 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 54,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 258,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '6 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 120,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('2 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 53,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 297,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '2 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 80,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 4 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('4 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 56,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 180,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '4 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 197,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 5 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('5 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 57,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 141,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '5 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 237,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 3 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('3 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 55,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 219,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '3 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 160,
                      position: 'absolute',
                      width: 37,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 7 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('7 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 58,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 102,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '7 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 277,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 9 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('9 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 59,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 63,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '9 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 317,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 10 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('10 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 60,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 24,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '10 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 357,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 8 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('8 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 52,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 336,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 204,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '8 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 40,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
            </View>
            {/* View 7 */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
            >
              {/* 1 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('1 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 61,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '1 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 6 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('6 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 64,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 258,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '6 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 120,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('2 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 63,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 297,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '2 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 80,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 4 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('4 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 66,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 180,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '4 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 197,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 5 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('5 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 67,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 141,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '5 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 237,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 3 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('3 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 65,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 219,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '3 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 160,
                      position: 'absolute',
                      width: 37,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 7 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('7 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 68,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 102,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '7 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 277,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 9 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('9 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 69,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 63,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '9 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 317,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 10 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('10 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 70,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 24,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '10 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 357,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 8 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('8 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 62,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 336,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 147,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '8 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 40,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
            </View>
            {/* View 8 */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
            >
              {/* 1 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('1 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 71,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 375,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '1 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 6 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('6 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 74,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 258,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '6 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 120,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('2 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 73,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 297,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '2 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 80,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 4 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('4 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 76,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 180,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '4 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 197,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 5 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('5 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 77,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 141,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '5 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 237,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 3 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('3 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 75,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 219,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '3 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 160,
                      position: 'absolute',
                      width: 37,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 7 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('7 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 78,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 102,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '7 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 277,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 9 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('9 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 79,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 63,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '9 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 317,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 10 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('10 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 80,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 24,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '10 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 357,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 8 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('8 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 72,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 336,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '8 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 40,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
            </View>
            {/* View 9 */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
            >
              {/* 1 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('1 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 81,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 370,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '1 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 6 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('6 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 84,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 253,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '6 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 120,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('2 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 83,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 292,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '2 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 80,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 4 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('4 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 86,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 175,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '4 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 197,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 5 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('5 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 87,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 136,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '5 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 237,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 3 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('3 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 85,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 214,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '3 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 160,
                      position: 'absolute',
                      width: 37,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 7 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('7 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 88,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 97,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '7 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 277,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 9 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('9 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 89,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 58,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '9 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 317,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 10 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('10 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 90,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 19,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '10 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 357,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
              {/* 8 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  console.log('8 ON_PRESS Start');
                  let error = null;
                  try {
                    console.log('Start ON_PRESS:0 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'ActionZone',
                      value: 82,
                    });
                    console.log('Complete ON_PRESS:0 SET_VARIABLE');
                    console.log('Start ON_PRESS:1 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'XAxis',
                      value: 331,
                    });
                    console.log('Complete ON_PRESS:1 SET_VARIABLE');
                    console.log('Start ON_PRESS:2 SET_VARIABLE');
                    setGlobalVariableValue({
                      key: 'YAxis',
                      value: 33,
                    });
                    console.log('Complete ON_PRESS:2 SET_VARIABLE');
                    console.log('Start ON_PRESS:3 NAVIGATE');
                    navigation.navigate('RugbyMatchActionMainScreen');
                    console.log('Complete ON_PRESS:3 NAVIGATE');
                  } catch (err) {
                    console.error(err);
                    error = err.message ?? err;
                  }
                  console.log(
                    '8 ON_PRESS Complete',
                    error ? { error } : 'no error'
                  );
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      height: 60,
                      left: 40,
                      position: 'absolute',
                      width: 40,
                    }
                  ),
                  dimensions.width
                )}
                title={''}
              />
            </View>
          </View>
        </ImageBackground>
      </View>

      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            alignSelf: 'center',
            fontFamily: 'Inter_600SemiBold',
          }),
          dimensions.width
        )}
      >
        {'Attack This Goal'}
      </Text>

      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RugbyMatchScreenTopGoalScreen');
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: '50%',
              }
            ),
            dimensions.width
          )}
          title={'Swap Sides'}
        />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RugbyConfirmResultScreen');
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: '50%',
              }
            ),
            dimensions.width
          )}
          title={'Full Time'}
        />
      </View>
      {/* View 2 */}
      <View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RugbyLiveMatchStatsScreen');
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
                borderRadius: 20,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Live Stats'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RugbyMatchScreenBottomGoalScreen);
