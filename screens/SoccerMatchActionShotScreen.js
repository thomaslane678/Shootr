import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SoccerMatchActionShotScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Communial_Icon_BG },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.App.Communial_Icon_BG,
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
        >
          {/* Button 8 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Goal',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                }
              ),
              dimensions.width
            )}
            title={'Goal'}
          />
          {/* Button 9 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'FK Goal',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'FK Goal'}
          />
          {/* Button 10 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Own Goal',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Own Goal'}
          />
          {/* Button 11 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Shot on Target',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Shot on Target'}
          />
          {/* Button 12 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Shot Post',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Shot Post'}
          />
          {/* Button 13 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'FK Shot On Target',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'FK Shot\nOn Target'}
          />
          {/* Button 14 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Penalty Saved',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Penalty Saved'}
          />
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
        >
          {/* Button 8 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Assist',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                }
              ),
              dimensions.width
            )}
            title={'Assist'}
          />
          {/* Button 9 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Penalty Goal',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Penalty Goal'}
          />
          {/* Button 10 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Corner Goal',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Corner Goal'}
          />
          {/* Button 11 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Shot Off Target',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Shot Off\nTarget'}
          />
          {/* Button 12 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Shot Crossbar',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Shot\nCrossbar'}
          />
          {/* Button 13 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'FK Off Target',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'FK Off\nTarget'}
          />
          {/* Button 14 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Penalty Wide',
                });
                if (Constants['Formation'] === 442) {
                  navigation.navigate('SoccerMatchActionPlayerSelect442Screen');
                } else {
                }

                if (Constants['Formation'] === 433) {
                  navigation.navigate('SoccerMatchActionPlayerSelect433Screen');
                } else {
                }

                if (Constants['Formation'] === 4231) {
                  navigation.navigate(
                    'SoccerMatchActionPlayerSelect4231Screen'
                  );
                } else {
                }

                if (Constants['Formation'] === 352) {
                  navigation.navigate('SoccerMatchActionPlayerSelect352Screen');
                } else {
                }

                if (Constants['Formation'] === 541) {
                  navigation.navigate('SoccerMatchActionPlayerSelect541Screen');
                } else {
                }
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
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 60,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
            title={'Penalty Wide'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SoccerMatchActionShotScreen);
