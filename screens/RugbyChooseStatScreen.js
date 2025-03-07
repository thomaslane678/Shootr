import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleScrollView,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const RugbyChooseStatScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
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
      >
        <View>
          <View>
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: palettes.App.NFT_TIME_Black,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                  }
                ),
                dimensions.width
              )}
            >
              {'Attack'}
            </Text>
            <Spacer bottom={8} left={8} right={8} top={8} />
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Try',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Try'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Penalty Try',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Penalty Try'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Penalty Won',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Penalty\nWon'}
            />
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Free Won',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Free Won'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Carry',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Carry'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Clean Break',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Clean Break'}
            />
          </View>
          {/* View 7 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Offload',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Offload'}
            />
          </View>
        </View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* View 2 */}
        <View>
          <View>
            <View>
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App.NFT_TIME_Black,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Defence'}
              </Text>
              <Spacer bottom={8} left={8} right={8} top={8} />
            </View>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Tackle',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Tackle'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Tackle Missed',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Tackle\nMissed'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Turnover Won',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Turnover\nWon'}
            />
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opposition Try Scored',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Opposition Try Scored'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opposition Pen Scored',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Opposition\nPen Scored'}
            />
          </View>
        </View>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* View 2 2 */}
        <View>
          <View>
            <View>
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App.NFT_TIME_Black,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Discipline'}
              </Text>
              <Spacer bottom={8} left={8} right={8} top={8} />
            </View>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Yellow Card',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Yellow Card'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Red Card',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Red Card'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Penalty Conceded',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Penalty Conceded'}
            />
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Free Conceded',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Free Conceded'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Scrum Offence',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Scrum Offence'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Line Out Offence',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Line Out\nOffence'}
            />
          </View>
        </View>
        {/* View 2 3 */}
        <View>
          <View>
            <View>
              <Spacer bottom={8} left={8} right={8} top={8} />
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App.NFT_TIME_Black,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Kicking'}
              </Text>
              {/* Spacer 2 */}
              <Spacer bottom={8} left={8} right={8} top={8} />
            </View>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Pen Scored',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Penalty Scored'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Pen Missed',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Penalty Missed'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Conversion Scored',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Conversion Scored'}
            />
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Conversion Missed',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Conversion\nMissed'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Drop Goal Scored',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Drop Goal\nScored'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Drop Goal Missed',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Drop Goal\nMissed'}
            />
          </View>
          {/* View 4 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Kick From Hand',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Kick From Hand'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Kick Retained',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Drop Goal\nScored'}
            />
          </View>
        </View>
        {/* View 2 4 */}
        <View>
          <View>
            <View>
              <Spacer bottom={8} left={8} right={8} top={8} />
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App.NFT_TIME_Black,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 18,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Line Out/Scrum'}
              </Text>
              {/* Spacer 2 */}
              <Spacer bottom={8} left={8} right={8} top={8} />
            </View>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Own Scrum Won',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Own Scrum Won'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Own Scrum Lost',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Own Scrum Lost'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opp Scrum Won',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Opp Scrum Won'}
            />
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opp Scrum Lost',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Opp Scrum Lost'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Scrum Penalty Won',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Scrum Pen Won'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Scrum Penalty Conceded',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Scrum Pen\nConceded'}
            />
          </View>
          {/* View 4 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Own Line Out Won',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Own Line Out Won'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Own Line Out Lost',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Own Line Out Lost'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opp Line Out Won',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Opp Line Out Won'}
            />
          </View>
          {/* View 5 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opp Line Out Lost',
                  });
                  navigation.goBack();
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
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={'Opp Line Out Lost'}
            />
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RugbyChooseStatScreen);
