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

const SoccerChooseStatScreen = props => {
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
              {'Shots'}
            </Text>
            <Spacer bottom={8} left={8} right={8} top={8} />
          </View>
          {/* View 2 */}
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
                    value: 'Goal',
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
              title={'Goal'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Assist',
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
              title={'Assist'}
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
                    value: 'FK Goal',
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
              title={'FK Goal'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Penalty Goal',
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
              title={'Pen Goal'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Corner Goal',
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
              title={'Corner Goal'}
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
                    value: 'Own Goal Scored',
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
              title={'Own Goal\nScored'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Shot on Target',
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
              title={'Shot on Target'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Shot off Target',
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
              title={'Shot off Target'}
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
                    value: 'Shot Post',
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
              title={'Shot Post'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Shot Crossbar',
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
              title={'Shot Crossbar'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'FK on Target',
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
              title={'FK on Target'}
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
                    value: 'FK Off Target',
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
              title={'FK Off Target'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Penalty Saved',
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
              title={'Penalty Saved'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Penalty Wide',
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
              title={'Penalty Wide'}
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
                {'Fouls'}
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
                    value: 'FK Won',
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
              title={'FK Won'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'FK Conceded',
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
              title={'FK Conceded'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Offside',
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
              title={'Offside'}
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
              title={'Penalty Won'}
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
                {'Possession'}
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
                    value: 'Key Pass',
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
              title={'Key Pass'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Progressive Pass',
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
              title={'Progressive Pass'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Out of Play',
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
              title={'Out of Play'}
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
              title={'Turnover Won'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Turnover Lost',
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
              title={'Turnover Lost'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Intercepted',
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
              title={'Intercepted'}
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
                    value: 'Progressive Carry',
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
              title={'Progressive Carry'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Successful Take On',
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
              title={'Successful Take On'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Corner Won',
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
              title={'Corner Won'}
            />
          </View>
        </View>
        {/* View 2 3 */}
        <View>
          <View>
            <View>
              {/* Spacer 2 */}
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
                {'Cards & Saves'}
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
                    value: 'Save',
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
              title={'Save'}
            />
          </View>
        </View>
        {/* View 2 4 */}
        <View>
          <View>
            <View>
              {/* Spacer 2 */}
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
                {'Opposition'}
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
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opposition Goal',
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
              title={'Opposition Goal'}
            />
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Own Goal Conceded',
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
              title={'Own Goal Conceded'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opposition Offside',
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
              title={'Opp Offside'}
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
                    value: 'Opposition FK Scored',
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
              title={'Opp FK Goal'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opp Penalty Goal',
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
              title={'Opp Penalty Goal'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opp Penalty Missed',
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
              title={'Opp Penalty Missed'}
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
                    value: 'Opposition Yellow Card',
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
              title={'Opp Yellow Card'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Opposition Red Card',
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
              title={'Opp Red Card'}
            />
          </View>
        </View>
        {/* View 2 5 */}
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
                {'Defensive'}
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
                    value: 'Block',
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
              title={'Block'}
            />
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Clearance',
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
              title={'Clearance'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Corner Conceded',
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
              title={'Corner Conceded'}
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
                    value: 'Goal Line Clearance',
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
              title={'Goal Line Clearance'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Header Won',
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
              title={'Header Won'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat',
                    value: 'Corner Cleared',
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
              title={'Corner Cleared'}
            />
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SoccerChooseStatScreen);
