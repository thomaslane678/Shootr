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

const GAAChooseStat2Screen = props => {
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
                    key: 'ChosenStat2',
                    value: 'Point',
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
              title={'Point'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Wide',
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
              title={'Wide'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
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
                    key: 'ChosenStat2',
                    value: 'Dropped Short',
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
              title={'Dropped\nShort'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Post',
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
              title={'Post'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Saved',
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
              title={'Saved'}
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
                    key: 'ChosenStat2',
                    value: 'Free Point',
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
              title={'Free Point'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Free Wide',
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
              title={'Free Wide'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Free Goal',
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
              title={'Free Goal'}
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
                    key: 'ChosenStat2',
                    value: 'Penalty Point',
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
              title={'Penalty Point'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
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
                    key: 'ChosenStat2',
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
              title={'Penalty Goal'}
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
                    key: 'ChosenStat2',
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
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Mark Point',
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
              title={'Mark Point'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: '2 Pointer',
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
              title={'2 Pointer'}
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
                    key: 'ChosenStat2',
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
                    key: 'ChosenStat2',
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
              title={'Free\nConceded'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
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
                    key: 'ChosenStat2',
                    value: 'Mark Won',
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
              title={'Mark Won'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Mark Conceded',
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
              title={'Mark\nConceded'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
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
                {'Restarts & Turnovers'}
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
                    key: 'ChosenStat2',
                    value: 'Own Restart Won',
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
              title={'Own Restart Won'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Own Restart Lost',
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
              title={'Own Restart Lost'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
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
                    key: 'ChosenStat2',
                    value: 'Opp Restart Won',
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
              title={'Opp Restart Won'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Opp Restart Lost',
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
              title={'Opp Restart Lost'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
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
                    key: 'ChosenStat2',
                    value: 'Hook',
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
              title={'Hook'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
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
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
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
          </View>
        </View>
        {/* View 2 3 */}
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
                    key: 'ChosenStat2',
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
                    key: 'ChosenStat2',
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
                    key: 'ChosenStat2',
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
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Opp Point',
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
              title={'Opp Point'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Opp Free Scored',
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
              title={'Opp Free Scored'}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
                    value: 'Opp Goal',
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
              title={'Opp Goal'}
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
                    key: 'ChosenStat2',
                    value: 'Opp Free Wide',
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
              title={'Opp Free Wide'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'ChosenStat2',
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
                    key: 'ChosenStat2',
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
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(GAAChooseStat2Screen);
