import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleScrollView,
  Spacer,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SoccerTeamStats2TheVisualsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [MbMValue, setMbMValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [selectedTag, setSelectedTag] = React.useState('All');
  const [stepper2Value, setStepper2Value] = React.useState('');
  const [stepper3Value, setStepper3Value] = React.useState('');
  const [stepperValue, setStepperValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const LineGraph = (
          await ShootrSupabaseDBAPIApi.teamMatchStatsLGGetGET(Constants, {
            Action: Constants['ChosenStat'],
            TeamID: Constants['TeamID'],
          })
        )?.json;
        const Opp1 = LineGraph?.[0].Opposition;
        const Opp2 = LineGraph?.[1].Opposition;
        const Opp3 = LineGraph?.[2].Opposition;
        const Opp4 = LineGraph?.[3].Opposition;
        const Opp5 = LineGraph?.[4].Opposition;
        const TotalOpp1 = LineGraph?.[0].Total;
        const TotalOpp2 = LineGraph?.[1].Total;
        const TotalOpp3 = LineGraph?.[2].Total;
        const TotalOpp4 = LineGraph?.[3].Total;
        const TotalOpp5 = LineGraph?.[4].Total;
        setGlobalVariableValue({
          key: 'DrilldownOpposition1',
          value: Opp1,
        });
        setGlobalVariableValue({
          key: 'DrilldownOpposition2',
          value: Opp2,
        });
        setGlobalVariableValue({
          key: 'DrilldownOpposition3',
          value: Opp3,
        });
        setGlobalVariableValue({
          key: 'DrilldownOpposition4',
          value: Opp4,
        });
        setGlobalVariableValue({
          key: 'DrilldownOpposition5',
          value: Opp5,
        });
        undefined;
        undefined;
        setGlobalVariableValue({
          key: 'DrilldownStat3LG',
          value: TotalOpp3,
        });
        setGlobalVariableValue({
          key: 'DrilldownStat4LG',
          value: TotalOpp4,
        });
        setGlobalVariableValue({
          key: 'DrilldownStat5LG',
          value: TotalOpp5,
        });
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Communial_Icon_BG },
        dimensions.width
      )}
    >
      {/* Header */}
      <View>
        {/* Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              alignSelf: 'center',
              color: theme.colors.text.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 21,
            },
            dimensions.width
          )}
        >
          {'Team Dashboard'}
        </Text>
        {/* Directional Buttons */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexWrap: 'nowrap',
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
                navigation.navigate('SoccerTeamStatsTheNumbersScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                  color: palettes.App.Peoplebit_Turquoise,
                  fontFamily: 'Inter_600SemiBold',
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={'The Numbers'}
          />
          {/* Button 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('SoccerTeamStats2TheVisualsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                  color: palettes.App.Peoplebit_Turquoise,
                  fontFamily: 'Inter_600SemiBold',
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={'The Visuals'}
          />
          {/* Button 3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('SoccerTeamStatsPitchViewAllSeasonScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                  color: palettes.App.Peoplebit_Turquoise,
                  fontFamily: 'Inter_600SemiBold',
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={'Pitch \nView'}
          />
        </View>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          {
            height: '200%',
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'column' },
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
                {
                  color: palettes.App.NFT_TIME_Black,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 20,
                }
              ),
              dimensions.width
            )}
          >
            {'Win Rate'}
          </Text>
          {/* HTML View 5 */}
          <WebView
            allowFileAccessFromFileURLs={false}
            allowUniversalAccessFromFileURLs={false}
            cacheEnabled={true}
            incognito={false}
            javaScriptCanOpenWindowsAutomatically={false}
            javaScriptEnabled={true}
            mediaPlaybackRequiresUserAction={false}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            startInLoadingState={false}
            {...GlobalStyles.WebViewStyles(theme)['HTML View'].props}
            source={{
              html: '<html>\n  <head>\n      <meta name="viewport" content="width=device-width, initial-scale=1"> \n    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>\n    <script type="text/javascript">\n      google.charts.load("current", {packages:["corechart"]});\n      google.charts.setOnLoadCallback(drawChart);\n      function drawChart() {\n        var data = google.visualization.arrayToDataTable([\n          [\'Task\', \'Hours per Day\'],\n          [\'Work\',     11],\n          [\'Eat\',      2],\n          [\'Commute\',  2],\n          [\'Watch TV\', 2],\n          [\'Sleep\',    7]\n        ]);\n\n        var options = {\n          title: \'My Daily Activities\',\n          pieHole: 0.4,\n        };\n\n        var chart = new google.visualization.PieChart(document.getElementById(\'donutchart\'));\n        chart.draw(data, options);\n      }\n    </script>\n  </head>\n  <body>\n    <div id="donutchart" style="width: 100%; height: 150px;"></div>\n  </body>\n</html>',
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.WebViewStyles(theme)['HTML View'].style,
                { height: 0 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        <View
          style={StyleSheet.applyWidth(
            { height: 200, width: '100%' },
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
                {
                  color: palettes.App.NFT_TIME_Black,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 20,
                }
              ),
              dimensions.width
            )}
          >
            {'Match Scores'}
          </Text>
          <WebView
            allowFileAccessFromFileURLs={false}
            allowUniversalAccessFromFileURLs={false}
            cacheEnabled={true}
            incognito={false}
            javaScriptCanOpenWindowsAutomatically={false}
            javaScriptEnabled={true}
            mediaPlaybackRequiresUserAction={false}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            startInLoadingState={false}
            {...GlobalStyles.WebViewStyles(theme)['HTML View'].props}
            source={{
              html: "<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> \n    <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n    <script type=\"text/javascript\">\n      google.charts.load('current', {'packages':['corechart']});\n      google.charts.setOnLoadCallback(drawChart);\n\n      function drawChart() {\n        var data = google.visualization.arrayToDataTable([\n          ['Year', 'Sales', 'Expenses'],\n          ['2013',  1000,      400],\n          ['2014',  1170,      460],\n          ['2015',  660,       1120],\n          ['2016',  1030,      540],\n          ['2015',  660,       1120],\n          ['2016',  1030,      540]\n        ]);\n\n        var options = {\n          title: 'Company Performance',\n          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},\n          vAxis: {minValue: 0}\n        };\n\n        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));\n        chart.draw(data, options);\n      }\n    </script>\n  </head>\n  <body>\n    <div id=\"chart_div\" style=\"width: 100%; height: 200px;\"></div>\n  </body>\n</html>\n",
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.WebViewStyles(theme)['HTML View'].style,
                { width: '100%' }
              ),
              dimensions.width
            )}
          />
        </View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* View 4 */}
        <View>
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                {
                  color: palettes.App.NFT_TIME_Black,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 20,
                }
              ),
              dimensions.width
            )}
          >
            {'Shooting Accuracy'}
          </Text>
          {/* HTML View 3 */}
          <WebView
            allowFileAccessFromFileURLs={false}
            allowUniversalAccessFromFileURLs={false}
            cacheEnabled={true}
            incognito={false}
            javaScriptCanOpenWindowsAutomatically={false}
            javaScriptEnabled={true}
            mediaPlaybackRequiresUserAction={false}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            startInLoadingState={false}
            {...GlobalStyles.WebViewStyles(theme)['HTML View'].props}
            source={{
              html: "<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> \n    <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n    <script type=\"text/javascript\">\n      google.charts.load('current', {'packages':['corechart']});\n      google.charts.setOnLoadCallback(drawSeriesChart);\n\n    function drawSeriesChart() {\n\n      var data = google.visualization.arrayToDataTable([\n        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],\n        ['CAN',    80.66,              1.67,      'North America',  33739900],\n        ['DEU',    79.84,              1.36,      'Europe',         81902307],\n        ['DNK',    78.6,               1.84,      'Europe',         5523095],\n        ['EGY',    72.73,              2.78,      'Middle East',    79716203],\n        ['GBR',    80.05,              2,         'Europe',         61801570],\n        ['IRN',    72.49,              1.7,       'Middle East',    73137148],\n        ['IRQ',    68.09,              4.77,      'Middle East',    31090763],\n        ['ISR',    81.55,              2.96,      'Middle East',    7485600],\n        ['RUS',    68.6,               1.54,      'Europe',         141850000],\n        ['USA',    78.09,              2.05,      'North America',  307007000]\n      ]);\n\n      var options = {\n        title: 'Shooting Accuracy',\n        hAxis: {title: 'Life Expectancy'},\n        vAxis: {title: 'Fertility Rate'},\n        bubble: {textStyle: {fontSize: 11}}\n      };\n\n      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));\n      chart.draw(data, options);\n    }\n    </script>\n  </head>\n  <body>\n    <div id=\"series_chart_div\" style=\"width: 100%; height: 200px;\"></div>\n  </body>\n</html>\n",
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.WebViewStyles(theme)['HTML View'].style,
                { height: 100 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Spacer 3 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* View 3 */}
        <View>
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                {
                  color: palettes.App.NFT_TIME_Black,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 20,
                }
              ),
              dimensions.width
            )}
          >
            {'Compare Your Own'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-around' },
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
                  { fontFamily: 'Inter_600SemiBold', fontSize: 20 }
                ),
                dimensions.width
              )}
            >
              {'Choose\nStats '}
            </Text>
            <Button
              accessible={true}
              iconPosition={'left'}
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
              title={'Stat 1'}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
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
              title={'Stat 2'}
            />
          </View>
          {/* View 2 */}
          <View>
            <WebView
              allowFileAccessFromFileURLs={false}
              allowUniversalAccessFromFileURLs={false}
              cacheEnabled={true}
              incognito={false}
              javaScriptCanOpenWindowsAutomatically={false}
              javaScriptEnabled={true}
              mediaPlaybackRequiresUserAction={false}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              startInLoadingState={false}
              {...GlobalStyles.WebViewStyles(theme)['HTML View'].props}
              source={{
                html: "<html>\n  <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> \n    <script type=\"text/javascript\" src=\"https://www.gstatic.com/charts/loader.js\"></script>\n    <script type=\"text/javascript\">\n      google.charts.load('current', {'packages':['corechart']});\n      google.charts.setOnLoadCallback(drawChart);\n\n      function drawChart() {\n        var data = google.visualization.arrayToDataTable([\n          ['Year', 'Sales', 'Expenses'],\n          ['2013',  1000,      400],\n          ['2014',  1170,      460],\n          ['2015',  660,       1120],\n          ['2016',  1030,      540],\n          ['2015',  660,       1120],\n          ['2016',  1030,      540]\n        ]);\n\n        var options = {\n          title: ' v ',\n          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},\n          vAxis: {minValue: 0}\n        };\n\n        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));\n        chart.draw(data, options);\n      }\n    </script>\n  </head>\n  <body>\n    <div id=\"chart_div\" style=\"width: 100%; height: 200px;\"></div>\n  </body>\n</html>\n",
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.WebViewStyles(theme)['HTML View'].style,
                  { width: '100%' }
                ),
                dimensions.width
              )}
            />
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SoccerTeamStats2TheVisualsScreen);
