import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SoccerMatchActionPossessionScreen = props => {
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
            backgroundColor: palettes.App.NFT_TIME_Light_Gray,
            flexDirection: 'row',
            height: '50%',
            justifyContent: 'space-around',
          },
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
        >
          {/* Button 6 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Key Pass',
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
            title={'Key Pass'}
          />
          {/* Button 7 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Turnover Won',
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
            title={'Turnover Won'}
          />
          {/* Button 8 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Out of Play',
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
            title={'Out of Play'}
          />
          {/* Button 9 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Successful Take On',
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
            title={'Successful\nTake On'}
          />
          {/* Button 10 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Corner Won',
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
            title={'Corner Won'}
          />
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 60 }, dimensions.width)}
        >
          {/* Button 6 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Progressive Pass',
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
            title={'Progressive Pass'}
          />
          {/* Button 7 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Turnover Lost',
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
            title={'Turnover Lost'}
          />
          {/* Button 8 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Intercepted',
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
            title={'Intercepted'}
          />
          {/* Button 9 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Progressive Carry',
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
            title={'Progressive\nCarry'}
          />
          {/* Button 10 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Action',
                  value: 'Corner Hit First Man',
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
            title={'Corner Hit\nFirst Man'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SoccerMatchActionPossessionScreen);
