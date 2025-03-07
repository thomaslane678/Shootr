import React from 'react';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Spacer,
  WebView,
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

const defaultProps = { y5: null };

const SoccerTeamStatsPitchViewByMatchScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [FoulsConcededTotal, setFoulsConcededTotal] = React.useState(7);
  const [FoulsWonTotal, setFoulsWonTotal] = React.useState(8);
  const [GoalsTotal, setGoalsTotal] = React.useState(5);
  const [LineData1, setLineData1] = React.useState(0);
  const [LineData10, setLineData10] = React.useState(0);
  const [LineData2, setLineData2] = React.useState(0);
  const [LineData3, setLineData3] = React.useState(0);
  const [LineData4, setLineData4] = React.useState(0);
  const [LineData5, setLineData5] = React.useState(0);
  const [LineData6, setLineData6] = React.useState(0);
  const [LineData7, setLineData7] = React.useState(0);
  const [LineData8, setLineData8] = React.useState(0);
  const [LineData9, setLineData9] = React.useState(0);
  const [MbMValue, setMbMValue] = React.useState('');
  const [Opp1, setOpp1] = React.useState('Opp1');
  const [Opp10, setOpp10] = React.useState('Opp10');
  const [Opp2, setOpp2] = React.useState('Opp2');
  const [Opp3, setOpp3] = React.useState('Opp3');
  const [Opp4, setOpp4] = React.useState('Opp4');
  const [Opp5, setOpp5] = React.useState('Opp5');
  const [Opp6, setOpp6] = React.useState('Opp6');
  const [Opp7, setOpp7] = React.useState('Opp7');
  const [Opp8, setOpp8] = React.useState('Opp8');
  const [Opp9, setOpp9] = React.useState('Opp9');
  const [PointsTotal, setPointsTotal] = React.useState(10);
  const [TurnoversTotal, setTurnoversTotal] = React.useState(5);
  const [X1, setX1] = React.useState(1);
  const [X2, setX2] = React.useState(1);
  const [X3, setX3] = React.useState(1);
  const [Y10, setY10] = React.useState('');
  const [Y3, setY3] = React.useState('');
  const [Y6, setY6] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      console.log('Screen ON_SCREEN_FOCUS Start');
      let error = null;
      try {
        if (!isFocused) {
          return;
        }
        console.log('Start ON_SCREEN_FOCUS:0 FETCH_REQUEST');
        const API1 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: 'FerrybankSeniorHurling',
              Opposition: Constants['Opposition'],
              offset: 0,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:0 FETCH_REQUEST', { API1 });
        console.log('Start ON_SCREEN_FOCUS:1 EXTRACT_KEY');
        const X1 = API1?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:1 EXTRACT_KEY', { X1 });
        console.log('Start ON_SCREEN_FOCUS:2 EXTRACT_KEY');
        const Y1 = API1?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:2 EXTRACT_KEY', { Y1 });
        console.log('Start ON_SCREEN_FOCUS:3 SET_VARIABLE');
        setX1(X1);
        console.log('Complete ON_SCREEN_FOCUS:3 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:4 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y1',
          value: Y1,
        });
        console.log('Complete ON_SCREEN_FOCUS:4 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:5 FETCH_REQUEST');
        const API2 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 1,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:5 FETCH_REQUEST', { API2 });
        console.log('Start ON_SCREEN_FOCUS:6 EXTRACT_KEY');
        const X2 = 'API2'?.X;
        console.log('Complete ON_SCREEN_FOCUS:6 EXTRACT_KEY', { X2 });
        console.log('Start ON_SCREEN_FOCUS:7 EXTRACT_KEY');
        const Y2 = 'API2'?.Y;
        console.log('Complete ON_SCREEN_FOCUS:7 EXTRACT_KEY', { Y2 });
        console.log('Start ON_SCREEN_FOCUS:8 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X2',
          value: X2,
        });
        console.log('Complete ON_SCREEN_FOCUS:8 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:9 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y2',
          value: Y2,
        });
        console.log('Complete ON_SCREEN_FOCUS:9 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:10 FETCH_REQUEST');
        const API3 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 2,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:10 FETCH_REQUEST', { API3 });
        console.log('Start ON_SCREEN_FOCUS:11 EXTRACT_KEY');
        const X3 = 'API3'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:11 EXTRACT_KEY', { X3 });
        console.log('Start ON_SCREEN_FOCUS:12 EXTRACT_KEY');
        const Y3 = 'API3'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:12 EXTRACT_KEY', { Y3 });
        console.log('Start ON_SCREEN_FOCUS:13 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X3',
          value: X3,
        });
        console.log('Complete ON_SCREEN_FOCUS:13 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:14 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y3',
          value: Y3,
        });
        console.log('Complete ON_SCREEN_FOCUS:14 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:15 FETCH_REQUEST');
        const API4 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 3,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:15 FETCH_REQUEST', { API4 });
        console.log('Start ON_SCREEN_FOCUS:16 EXTRACT_KEY');
        const X4 = 'API4'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:16 EXTRACT_KEY', { X4 });
        console.log('Start ON_SCREEN_FOCUS:17 EXTRACT_KEY');
        const Y4 = 'API4'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:17 EXTRACT_KEY', { Y4 });
        console.log('Start ON_SCREEN_FOCUS:18 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X4',
          value: X4,
        });
        console.log('Complete ON_SCREEN_FOCUS:18 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:19 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y4',
          value: Y4,
        });
        console.log('Complete ON_SCREEN_FOCUS:19 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:20 FETCH_REQUEST');
        const API5 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 4,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:20 FETCH_REQUEST', { API5 });
        console.log('Start ON_SCREEN_FOCUS:21 EXTRACT_KEY');
        const X5 = 'API5'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:21 EXTRACT_KEY', { X5 });
        console.log('Start ON_SCREEN_FOCUS:22 EXTRACT_KEY');
        const Y5 = 'API5'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:22 EXTRACT_KEY', { Y5 });
        console.log('Start ON_SCREEN_FOCUS:23 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X5',
          value: X5,
        });
        console.log('Complete ON_SCREEN_FOCUS:23 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:24 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y5',
          value: Y5,
        });
        console.log('Complete ON_SCREEN_FOCUS:24 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:25 FETCH_REQUEST');
        const API6 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 5,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:25 FETCH_REQUEST', { API6 });
        console.log('Start ON_SCREEN_FOCUS:26 EXTRACT_KEY');
        const X6 = 'API6'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:26 EXTRACT_KEY', { X6 });
        console.log('Start ON_SCREEN_FOCUS:27 EXTRACT_KEY');
        const Y6 = 'API6'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:27 EXTRACT_KEY', { Y6 });
        console.log('Start ON_SCREEN_FOCUS:28 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X6',
          value: X6,
        });
        console.log('Complete ON_SCREEN_FOCUS:28 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:29 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y6',
          value: Y6,
        });
        console.log('Complete ON_SCREEN_FOCUS:29 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:30 FETCH_REQUEST');
        const API7 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 6,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:30 FETCH_REQUEST', { API7 });
        console.log('Start ON_SCREEN_FOCUS:31 EXTRACT_KEY');
        const X7 = 'API7'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:31 EXTRACT_KEY', { X7 });
        console.log('Start ON_SCREEN_FOCUS:32 EXTRACT_KEY');
        const Y7 = 'API7'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:32 EXTRACT_KEY', { Y7 });
        console.log('Start ON_SCREEN_FOCUS:33 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X7',
          value: X7,
        });
        console.log('Complete ON_SCREEN_FOCUS:33 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:34 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y7',
          value: Y7,
        });
        console.log('Complete ON_SCREEN_FOCUS:34 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:35 FETCH_REQUEST');
        const API8 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 7,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:35 FETCH_REQUEST', { API8 });
        console.log('Start ON_SCREEN_FOCUS:36 EXTRACT_KEY');
        const Y8 = 'API8'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:36 EXTRACT_KEY', { Y8 });
        console.log('Start ON_SCREEN_FOCUS:37 EXTRACT_KEY');
        const X8 = 'API8'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:37 EXTRACT_KEY', { X8 });
        console.log('Start ON_SCREEN_FOCUS:38 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y8',
          value: Y8,
        });
        console.log('Complete ON_SCREEN_FOCUS:38 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:39 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X8',
          value: X8,
        });
        console.log('Complete ON_SCREEN_FOCUS:39 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:40 FETCH_REQUEST');
        const API9 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 8,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:40 FETCH_REQUEST', { API9 });
        console.log('Start ON_SCREEN_FOCUS:41 EXTRACT_KEY');
        const X9 = 'API9'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:41 EXTRACT_KEY', { X9 });
        console.log('Start ON_SCREEN_FOCUS:42 EXTRACT_KEY');
        const Y9 = 'API9'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:42 EXTRACT_KEY', { Y9 });
        console.log('Start ON_SCREEN_FOCUS:43 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X9',
          value: X9,
        });
        console.log('Complete ON_SCREEN_FOCUS:43 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:44 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y9',
          value: Y9,
        });
        console.log('Complete ON_SCREEN_FOCUS:44 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:45 FETCH_REQUEST');
        const API10 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 9,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:45 FETCH_REQUEST', { API10 });
        console.log('Start ON_SCREEN_FOCUS:46 EXTRACT_KEY');
        const X10 = 'API10'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:46 EXTRACT_KEY', { X10 });
        console.log('Start ON_SCREEN_FOCUS:47 EXTRACT_KEY');
        const Y10 = API10?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:47 EXTRACT_KEY', { Y10 });
        console.log('Start ON_SCREEN_FOCUS:48 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X10',
          value: X10,
        });
        console.log('Complete ON_SCREEN_FOCUS:48 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:49 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y10',
          value: Y10,
        });
        console.log('Complete ON_SCREEN_FOCUS:49 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:50 FETCH_REQUEST');
        const API11 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 10,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:50 FETCH_REQUEST', { API11 });
        console.log('Start ON_SCREEN_FOCUS:51 EXTRACT_KEY');
        const X11 = 'API11'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:51 EXTRACT_KEY', { X11 });
        console.log('Start ON_SCREEN_FOCUS:52 EXTRACT_KEY');
        const Y11 = 'API11'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:52 EXTRACT_KEY', { Y11 });
        console.log('Start ON_SCREEN_FOCUS:53 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X11',
          value: X11,
        });
        console.log('Complete ON_SCREEN_FOCUS:53 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:54 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y11',
          value: Y11,
        });
        console.log('Complete ON_SCREEN_FOCUS:54 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:55 FETCH_REQUEST');
        const API12 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 11,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:55 FETCH_REQUEST', { API12 });
        console.log('Start ON_SCREEN_FOCUS:56 EXTRACT_KEY');
        const X12 = 'API12'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:56 EXTRACT_KEY', { X12 });
        console.log('Start ON_SCREEN_FOCUS:57 EXTRACT_KEY');
        const Y12 = 'API12'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:57 EXTRACT_KEY', { Y12 });
        console.log('Start ON_SCREEN_FOCUS:58 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X12',
          value: X12,
        });
        console.log('Complete ON_SCREEN_FOCUS:58 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:59 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y12',
          value: Y12,
        });
        console.log('Complete ON_SCREEN_FOCUS:59 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:60 FETCH_REQUEST');
        const API13 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 12,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:60 FETCH_REQUEST', { API13 });
        console.log('Start ON_SCREEN_FOCUS:61 EXTRACT_KEY');
        const X13 = 'API13'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:61 EXTRACT_KEY', { X13 });
        console.log('Start ON_SCREEN_FOCUS:62 EXTRACT_KEY');
        const Y13 = 'API13'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:62 EXTRACT_KEY', { Y13 });
        console.log('Start ON_SCREEN_FOCUS:63 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X13',
          value: X13,
        });
        console.log('Complete ON_SCREEN_FOCUS:63 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:64 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y13',
          value: Y13,
        });
        console.log('Complete ON_SCREEN_FOCUS:64 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:65 FETCH_REQUEST');
        const API14 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 13,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:65 FETCH_REQUEST', { API14 });
        console.log('Start ON_SCREEN_FOCUS:66 EXTRACT_KEY');
        const X14 = 'API14'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:66 EXTRACT_KEY', { X14 });
        console.log('Start ON_SCREEN_FOCUS:67 EXTRACT_KEY');
        const Y14 = 'API14'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:67 EXTRACT_KEY', { Y14 });
        console.log('Start ON_SCREEN_FOCUS:68 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y14',
          value: 'y14',
        });
        console.log('Complete ON_SCREEN_FOCUS:68 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:69 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X14',
          value: X14,
        });
        console.log('Complete ON_SCREEN_FOCUS:69 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:70 FETCH_REQUEST');
        const API15 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 14,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:70 FETCH_REQUEST', { API15 });
        console.log('Start ON_SCREEN_FOCUS:71 EXTRACT_KEY');
        const X15 = 'API15'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:71 EXTRACT_KEY', { X15 });
        console.log('Start ON_SCREEN_FOCUS:72 EXTRACT_KEY');
        const Y15 = 'API15'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:72 EXTRACT_KEY', { Y15 });
        console.log('Start ON_SCREEN_FOCUS:73 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X15',
          value: X15,
        });
        console.log('Complete ON_SCREEN_FOCUS:73 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:74 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y15',
          value: Y15,
        });
        console.log('Complete ON_SCREEN_FOCUS:74 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:75 FETCH_REQUEST');
        const API16 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 15,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:75 FETCH_REQUEST', { API16 });
        console.log('Start ON_SCREEN_FOCUS:76 EXTRACT_KEY');
        const X16 = 'API16'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:76 EXTRACT_KEY', { X16 });
        console.log('Start ON_SCREEN_FOCUS:77 EXTRACT_KEY');
        const Y16 = 'API16'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:77 EXTRACT_KEY', { Y16 });
        console.log('Start ON_SCREEN_FOCUS:78 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X16',
          value: X16,
        });
        console.log('Complete ON_SCREEN_FOCUS:78 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:79 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y16',
          value: Y16,
        });
        console.log('Complete ON_SCREEN_FOCUS:79 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:80 FETCH_REQUEST');
        const API17 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 16,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:80 FETCH_REQUEST', { API17 });
        console.log('Start ON_SCREEN_FOCUS:81 EXTRACT_KEY');
        const X17 = 'API17'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:81 EXTRACT_KEY', { X17 });
        console.log('Start ON_SCREEN_FOCUS:82 EXTRACT_KEY');
        const Y17 = 'API17'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:82 EXTRACT_KEY', { Y17 });
        console.log('Start ON_SCREEN_FOCUS:83 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X17',
          value: X17,
        });
        console.log('Complete ON_SCREEN_FOCUS:83 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:84 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y17',
          value: Y17,
        });
        console.log('Complete ON_SCREEN_FOCUS:84 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:85 FETCH_REQUEST');
        const API18 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 17,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:85 FETCH_REQUEST', { API18 });
        console.log('Start ON_SCREEN_FOCUS:86 EXTRACT_KEY');
        const X18 = 'API18'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:86 EXTRACT_KEY', { X18 });
        console.log('Start ON_SCREEN_FOCUS:87 EXTRACT_KEY');
        const Y18 = 'API18'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:87 EXTRACT_KEY', { Y18 });
        console.log('Start ON_SCREEN_FOCUS:88 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X18',
          value: X18,
        });
        console.log('Complete ON_SCREEN_FOCUS:88 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:89 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y18',
          value: Y18,
        });
        console.log('Complete ON_SCREEN_FOCUS:89 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:90 FETCH_REQUEST');
        const API19 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 18,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:90 FETCH_REQUEST', { API19 });
        console.log('Start ON_SCREEN_FOCUS:91 EXTRACT_KEY');
        const X19 = 'API19'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:91 EXTRACT_KEY', { X19 });
        console.log('Start ON_SCREEN_FOCUS:92 EXTRACT_KEY');
        const Y19 = 'API19'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:92 EXTRACT_KEY', { Y19 });
        console.log('Start ON_SCREEN_FOCUS:93 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X19',
          value: X19,
        });
        console.log('Complete ON_SCREEN_FOCUS:93 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:94 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y19',
          value: Y19,
        });
        console.log('Complete ON_SCREEN_FOCUS:94 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:95 FETCH_REQUEST');
        const API20 = (
          await ShootrSupabaseDBAPIApi.matchStatsAnalyticsByMatchGET(
            Constants,
            {
              Action: Constants['ChosenStat'],
              HTVariable: Constants['HomeTeam'],
              Opposition: Constants['Opposition'],
              offset: 19,
            }
          )
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:95 FETCH_REQUEST', { API20 });
        console.log('Start ON_SCREEN_FOCUS:96 EXTRACT_KEY');
        const X20 = 'API20'?.MatchStats.X;
        console.log('Complete ON_SCREEN_FOCUS:96 EXTRACT_KEY', { X20 });
        console.log('Start ON_SCREEN_FOCUS:97 EXTRACT_KEY');
        const Y20 = 'API20'?.MatchStats.Y;
        console.log('Complete ON_SCREEN_FOCUS:97 EXTRACT_KEY', { Y20 });
        console.log('Start ON_SCREEN_FOCUS:98 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'X20',
          value: X20,
        });
        console.log('Complete ON_SCREEN_FOCUS:98 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:99 SET_VARIABLE');
        setGlobalVariableValue({
          key: 'Y20',
          value: Y20,
        });
        console.log('Complete ON_SCREEN_FOCUS:99 SET_VARIABLE');
      } catch (err) {
        console.error(err);
        error = err.message ?? err;
      }
      console.log(
        'Screen ON_SCREEN_FOCUS Complete',
        error ? { error } : 'no error'
      );
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Communial_Icon_BG },
        dimensions.width
      )}
    >
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

        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              width: '100%',
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
                  borderRadius: null,
                  color: palettes.App.Peoplebit_Turquoise,
                  fontFamily: 'Inter_600SemiBold',
                  width: '33%',
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
                  borderRadius: null,
                  color: palettes.App.Peoplebit_Turquoise,
                  fontFamily: 'Inter_600SemiBold',
                  width: '33%',
                }
              ),
              dimensions.width
            )}
            title={'Pitch View\nAll Season'}
          />
          {/* Button 3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('SoccerTeamStatsPitchViewByMatchScreen');
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
                  borderRadius: null,
                  color: palettes.App.Peoplebit_Turquoise,
                  fontFamily: 'Inter_600SemiBold',
                  width: '33%',
                }
              ),
              dimensions.width
            )}
            title={'Pitch View\nBy Match'}
          />
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Divider
            {...GlobalStyles.DividerStyles(theme)['Divider'].props}
            color={theme.colors.border.brand}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.DividerStyles(theme)['Divider'].style,
                { height: 5, width: '33%' }
              ),
              dimensions.width
            )}
          />
          {/* Divider 2 */}
          <Divider
            color={theme.colors.border.base}
            {...GlobalStyles.DividerStyles(theme)['Divider'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.DividerStyles(theme)['Divider'].style,
                { height: 5, width: '33%' }
              ),
              dimensions.width
            )}
          />
          {/* Divider 3 */}
          <Divider
            {...GlobalStyles.DividerStyles(theme)['Divider'].props}
            color={palettes.App.Peoplebit_Turquoise}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.DividerStyles(theme)['Divider'].style,
                { height: 5, width: '33%' }
              ),
              dimensions.width
            )}
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
        style={StyleSheet.applyWidth({ height: '500%' }, dimensions.width)}
      >
        {/* Pitch View */}
        <View
          style={StyleSheet.applyWidth(
            { height: 680, width: 390 },
            dimensions.width
          )}
        >
          <View>
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { alignSelf: 'center', fontFamily: 'Inter_600SemiBold' }
                ),
                dimensions.width
              )}
            >
              {'Attack Top Goal'}
            </Text>
            <Spacer bottom={8} left={8} right={8} top={8} />
          </View>
          {/* Action Buttons */}
          <View>
            {/* Choose Stat Buttons */}
            <>
              {!Constants['Stat_Options'] ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row', justifyContent: 'space-around' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: 220,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Choose Stat & Refresh API Button */}
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setGlobalVariableValue({
                            key: 'X1',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X2',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X3',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X4',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X5',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X6',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X7',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X8',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X9',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X10',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X11',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X12',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X13',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X14',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X15',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X16',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X17',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X18',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X19',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X20',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y1',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y2',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y3',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y4',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y5',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y6',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y7',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y8',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y9',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y10',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y11',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y12',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y13',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y14',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y15',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y16',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y17',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y18',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y19',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y20',
                            value: 1,
                          });
                          navigation.navigate('GAAChooseStatScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ButtonStyles(theme)['Button'].style,
                          {
                            backgroundColor:
                              palettes.App.Communical_Yellow_Emoticons,
                            color: palettes.App.Peoplebit_Turquoise,
                            width: 100,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'Choose Stat 1'}
                    />
                    {/* Choose Stat & Refresh API Button 2 */}
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setGlobalVariableValue({
                            key: 'X21',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X22',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X23',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X24',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X25',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X26',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X27',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X28',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X29',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X30',
                            value: 1,
                          });
                          undefined;
                          setGlobalVariableValue({
                            key: 'X32',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X33',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X34',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X35',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X36',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X37',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X38',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X39',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'X40',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y21',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y22',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y23',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y24',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y25',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y26',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y27',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y28',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y29',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y30',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y31',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y32',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y33',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y34',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y35',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y36',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y37',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y38',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y39',
                            value: 1,
                          });
                          setGlobalVariableValue({
                            key: 'Y40',
                            value: 1,
                          });
                          navigation.navigate('GAAChooseStat2Screen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ButtonStyles(theme)['Button'].style,
                          {
                            backgroundColor:
                              palettes.App.Communical_Yellow_Emoticons,
                            color: palettes.App.Peoplebit_Turquoise,
                            width: 100,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'Choose Stat 2'}
                    />
                  </View>
                  {/* View 2 */}
                  <View>
                    <Text
                      accessible={true}
                      selectable={false}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          { fontFamily: 'Inter_600SemiBold', fontSize: 16 }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Currently Showing:'}
                    </Text>
                    {/* Text 2 */}
                    <Text
                      accessible={true}
                      selectable={false}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            alignSelf: 'center',
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 18,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {Constants['ChosenStat']}
                      {'s & '}
                      {Constants['ChosenStat2']}
                      {'s'}
                    </Text>
                  </View>
                </View>
              )}
            </>
            <View>
              {/* Spacer 4 */}
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
                      fontSize: 18,
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Opposition: '}
                {Constants['Opposition']} {Constants['Date']}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                {/* Choose Match */}
                <Button
                  accessible={true}
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      navigation.navigate('TeamStatsResultListScreen');
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
                        fontFamily: 'Inter_700Bold',
                        width: 150,
                      }
                    ),
                    dimensions.width
                  )}
                  title={'Choose Match'}
                />
                {/* Update Button */}
                <Button
                  accessible={true}
                  iconPosition={'left'}
                  onPress={() => {
                    const handler = async () => {
                      try {
                        const API1 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 0,
                            }
                          )
                        )?.json;
                        const X1 = API1?.[0].X;
                        const Y1 = API1?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X1',
                          value: X1,
                        });
                        setGlobalVariableValue({
                          key: 'Y1',
                          value: Y1,
                        });
                        const API2 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 1,
                            }
                          )
                        )?.json;
                        const X2 = API2?.[0].X;
                        const Y2 = API2?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X2',
                          value: X2,
                        });
                        setGlobalVariableValue({
                          key: 'Y2',
                          value: Y2,
                        });
                        const API3 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 2,
                            }
                          )
                        )?.json;
                        const X3 = API3?.[0].X;
                        const Y3 = API3?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X3',
                          value: X3,
                        });
                        setGlobalVariableValue({
                          key: 'Y3',
                          value: Y3,
                        });
                        const API4 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 3,
                            }
                          )
                        )?.json;
                        const X4 = API4?.[0].X;
                        const Y4 = API4?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X4',
                          value: X4,
                        });
                        setGlobalVariableValue({
                          key: 'Y4',
                          value: Y4,
                        });
                        const API5 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 4,
                            }
                          )
                        )?.json;
                        const X5 = API5?.[0].X;
                        const Y5 = API5?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X5',
                          value: X5,
                        });
                        setGlobalVariableValue({
                          key: 'Y5',
                          value: Y5,
                        });
                        const API6 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 5,
                            }
                          )
                        )?.json;
                        const X6 = API6?.[0].X;
                        const Y6 = API6?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X6',
                          value: X6,
                        });
                        setGlobalVariableValue({
                          key: 'Y6',
                          value: Y6,
                        });
                        const API7 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 6,
                            }
                          )
                        )?.json;
                        const X7 = API7?.[0].X;
                        const Y7 = API7?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X7',
                          value: X7,
                        });
                        setGlobalVariableValue({
                          key: 'Y7',
                          value: Y7,
                        });
                        const API8 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 7,
                            }
                          )
                        )?.json;
                        const X8 = API8?.[0].X;
                        const Y8 = API8?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X8',
                          value: X8,
                        });
                        setGlobalVariableValue({
                          key: 'Y8',
                          value: Y8,
                        });
                        const API9 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 8,
                            }
                          )
                        )?.json;
                        const X9 = API9?.[0].X;
                        const Y9 = API9?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X9',
                          value: X9,
                        });
                        setGlobalVariableValue({
                          key: 'Y9',
                          value: Y9,
                        });
                        const API10 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 9,
                            }
                          )
                        )?.json;
                        const X10 = API10?.[0].X;
                        const Y10 = API10?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X10',
                          value: X10,
                        });
                        setGlobalVariableValue({
                          key: 'Y10',
                          value: Y10,
                        });
                        const API11 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 10,
                            }
                          )
                        )?.json;
                        const X11 = API11?.[0].X;
                        const Y11 = API11?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X11',
                          value: X11,
                        });
                        setGlobalVariableValue({
                          key: 'Y11',
                          value: Y11,
                        });
                        const API12 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 11,
                            }
                          )
                        )?.json;
                        const X12 = API12?.[0].X;
                        const Y12 = API12?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X12',
                          value: X12,
                        });
                        setGlobalVariableValue({
                          key: 'Y12',
                          value: Y12,
                        });
                        const API13 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 12,
                            }
                          )
                        )?.json;
                        const X13 = API13?.[0].X;
                        const Y13 = API13?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X13',
                          value: X13,
                        });
                        setGlobalVariableValue({
                          key: 'Y13',
                          value: Y13,
                        });
                        const API14 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 13,
                            }
                          )
                        )?.json;
                        const X14 = API14?.[0].X;
                        const Y14 = API14?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X14',
                          value: X14,
                        });
                        setGlobalVariableValue({
                          key: 'X14',
                          value: X14,
                        });
                        const API15 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 14,
                            }
                          )
                        )?.json;
                        const X15 = API15?.[0].X;
                        const Y15 = API15?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X15',
                          value: X15,
                        });
                        setGlobalVariableValue({
                          key: 'Y15',
                          value: Y15,
                        });
                        const API16 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 15,
                            }
                          )
                        )?.json;
                        const X16 = API16?.[0].X;
                        const Y16 = API16?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X16',
                          value: X16,
                        });
                        setGlobalVariableValue({
                          key: 'Y16',
                          value: Y16,
                        });
                        const API17 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 16,
                            }
                          )
                        )?.json;
                        const X17 = API17?.[0].X;
                        const Y17 = API17?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X17',
                          value: X17,
                        });
                        setGlobalVariableValue({
                          key: 'Y17',
                          value: Y17,
                        });
                        const API18 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 17,
                            }
                          )
                        )?.json;
                        const X18 = API18?.[0].X;
                        const Y18 = API18?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X18',
                          value: X18,
                        });
                        setGlobalVariableValue({
                          key: 'Y18',
                          value: Y18,
                        });
                        const API19 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 18,
                            }
                          )
                        )?.json;
                        const X19 = API19?.[0].X;
                        const Y19 = API19?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X19',
                          value: X19,
                        });
                        setGlobalVariableValue({
                          key: 'Y19',
                          value: Y19,
                        });
                        const API20 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 19,
                            }
                          )
                        )?.json;
                        const X20 = API20?.[0].X;
                        const Y20 = API20?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X20',
                          value: X20,
                        });
                        setGlobalVariableValue({
                          key: 'Y20',
                          value: Y20,
                        });
                        const API21 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 0,
                            }
                          )
                        )?.json;
                        const X21 = API21?.[0].X;
                        const Y21 = API21?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X21',
                          value: X21,
                        });
                        setGlobalVariableValue({
                          key: 'Y21',
                          value: Y21,
                        });
                        const API22 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 1,
                            }
                          )
                        )?.json;
                        const X22 = API22?.[0].X;
                        const Y22 = API22?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X22',
                          value: X22,
                        });
                        setGlobalVariableValue({
                          key: 'Y22',
                          value: Y22,
                        });
                        const API23 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 2,
                            }
                          )
                        )?.json;
                        const X23 = API23?.[0].X;
                        const Y23 = API23?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X23',
                          value: X23,
                        });
                        setGlobalVariableValue({
                          key: 'Y23',
                          value: Y23,
                        });
                        const API24 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 3,
                            }
                          )
                        )?.json;
                        const X24 = API24?.[0].X;
                        const Y24 = API24?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X24',
                          value: X24,
                        });
                        setGlobalVariableValue({
                          key: 'Y24',
                          value: Y24,
                        });
                        const API25 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 4,
                            }
                          )
                        )?.json;
                        const X25 = API25?.[0].X;
                        const Y25 = API25?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X25',
                          value: X25,
                        });
                        setGlobalVariableValue({
                          key: 'Y25',
                          value: Y25,
                        });
                        const API26 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 5,
                            }
                          )
                        )?.json;
                        const X26 = API26?.[0].X;
                        const Y26 = API26?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X26',
                          value: X26,
                        });
                        setGlobalVariableValue({
                          key: 'Y26',
                          value: Y26,
                        });
                        const API27 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 6,
                            }
                          )
                        )?.json;
                        const X27 = API27?.[0].X;
                        const Y27 = API27?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X27',
                          value: X27,
                        });
                        setGlobalVariableValue({
                          key: 'Y27',
                          value: Y27,
                        });
                        const API28 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 7,
                            }
                          )
                        )?.json;
                        const X28 = API28?.[0].X;
                        const Y28 = API28?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X28',
                          value: X28,
                        });
                        setGlobalVariableValue({
                          key: 'Y28',
                          value: Y28,
                        });
                        const API29 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 8,
                            }
                          )
                        )?.json;
                        const X29 = API29?.[0].X;
                        const Y29 = API29?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X29',
                          value: X29,
                        });
                        setGlobalVariableValue({
                          key: 'Y29',
                          value: Y29,
                        });
                        const API30 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 9,
                            }
                          )
                        )?.json;
                        const X30 = API30?.[0].X;
                        const Y30 = API30?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X30',
                          value: X30,
                        });
                        setGlobalVariableValue({
                          key: 'Y30',
                          value: Y30,
                        });
                        const API31 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 10,
                            }
                          )
                        )?.json;
                        const X31 = API31?.[0].X;
                        const Y31 = API31?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X31',
                          value: X31,
                        });
                        setGlobalVariableValue({
                          key: 'Y31',
                          value: Y31,
                        });
                        const API32 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 11,
                            }
                          )
                        )?.json;
                        const X32 = API32?.[0].X;
                        const Y32 = API32?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X32',
                          value: X32,
                        });
                        setGlobalVariableValue({
                          key: 'Y32',
                          value: Y32,
                        });
                        const API33 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 12,
                            }
                          )
                        )?.json;
                        const X33 = API33?.[0].X;
                        const Y33 = API33?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X33',
                          value: X33,
                        });
                        setGlobalVariableValue({
                          key: 'Y33',
                          value: Y33,
                        });
                        const API34 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 13,
                            }
                          )
                        )?.json;
                        const X34 = API34?.[0].X;
                        const Y34 = API34?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X34',
                          value: X34,
                        });
                        setGlobalVariableValue({
                          key: 'Y34',
                          value: Constants['Y34'],
                        });
                        const API35 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 14,
                            }
                          )
                        )?.json;
                        const X35 = API35?.[0].X;
                        const Y35 = API35?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X35',
                          value: X35,
                        });
                        setGlobalVariableValue({
                          key: 'Y35',
                          value: Y35,
                        });
                        const API36 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 15,
                            }
                          )
                        )?.json;
                        const X36 = API36?.[0].X;
                        const Y36 = API36?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X36',
                          value: X36,
                        });
                        setGlobalVariableValue({
                          key: 'Y36',
                          value: Y36,
                        });
                        const API37 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 16,
                            }
                          )
                        )?.json;
                        const X37 = API37?.[0].X;
                        const Y37 = API37?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X37',
                          value: X37,
                        });
                        setGlobalVariableValue({
                          key: 'Y37',
                          value: Y37,
                        });
                        const API38 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 17,
                            }
                          )
                        )?.json;
                        const X38 = API38?.[0].X;
                        const Y38 = API38?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X38',
                          value: X38,
                        });
                        setGlobalVariableValue({
                          key: 'Y38',
                          value: Y38,
                        });
                        const API39 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 18,
                            }
                          )
                        )?.json;
                        const X39 = API39?.[0].X;
                        const Y39 = API39?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X39',
                          value: X39,
                        });
                        setGlobalVariableValue({
                          key: 'Y39',
                          value: Y39,
                        });
                        const API40 = (
                          await ShootrSupabaseDBAPIApi.matchActionCoordByMatchGET(
                            Constants,
                            {
                              Action: Constants['ChosenStat2'],
                              MatchID: Constants['MatchID'],
                              TeamID: Constants['TeamID'],
                              page: 19,
                            }
                          )
                        )?.json;
                        const X40 = API40?.[0].X;
                        const Y40 = API40?.[0].Y;
                        setGlobalVariableValue({
                          key: 'X40',
                          value: X40,
                        });
                        setGlobalVariableValue({
                          key: 'Y40',
                          value: Y40,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Button'].style,
                      {
                        backgroundColor: palettes.App.Peoplebit_Turquoise,
                        borderRadius: 12,
                        color: palettes.App.Communical_Yellow_Emoticons,
                        width: 150,
                      }
                    ),
                    dimensions.width
                  )}
                  title={'Update'}
                />
              </View>
            </View>
          </View>

          <View
            style={StyleSheet.applyWidth({ height: 550 }, dimensions.width)}
          >
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
                html: `<!DOCTYPE html>
   <head> 
      <meta name="viewport" content="width=device-width, initial-scale=1"> 
<html>
<body>

<svg height="510" width="390" xmlns="http://www.w3.org/2000/svg">

 <rect width="390" height="510" fill="forestgreen" />
 
 centre circle
   <circle r="70" cx="190" cy="255" fill="forestgreen" style="stroke:white;stroke-width:2" />
   centre point
   <circle r="5" cx="190" cy="255" fill="white" style="stroke:white;stroke-width:2" />
   Penalty spot top
   <circle r="2" cx="195" cy="50" fill="white" style="stroke:white;stroke-width:2" />
   penalty spot bottom
 <circle r="2" cx="195" cy="460" fill="white" style="stroke:white;stroke-width:2" />
 
top box
<line x1="75" y1="0" x2="75" y2="81" style="stroke:white;stroke-width:2" />
<line x1="315" y1="0" x2="315" y2="81" style="stroke:white;stroke-width:2" />
<line x1="75" y1="81" x2="315" y2="81" style="stroke:white;stroke-width:2" />
top 6YB
<line x1="141" y1="0" x2="141" y2="25" style="stroke:white;stroke-width:2" />
<line x1="250" y1="0" x2="250" y2="25" style="stroke:white;stroke-width:2" />
<line x1="141" y1="25" x2="250" y2="25" style="stroke:white;stroke-width:2" />
bottom box
<line x1="75" y1="510" x2="75" y2="429" style="stroke:white;stroke-width:2" />
<line x1="315" y1="510" x2="315" y2="429" style="stroke:white;stroke-width:2" />
<line x1="75" y1="429" x2="315" y2="429" style="stroke:white;stroke-width:2" />
bottom 6YB
<line x1="141" y1="510" x2="141" y2="485" style="stroke:white;stroke-width:2" />
<line x1="250" y1="510" x2="250" y2="485" style="stroke:white;stroke-width:2" />
<line x1="141" y1="485" x2="250" y2="485" style="stroke:white;stroke-width:2" />



halfway
<line x1="0" y1="255" x2="390" y2="255" style="stroke:white;stroke-width:2" />
   
<circle r="5" cx="${Constants['X1']}" cy="${Constants['Y1']}" fill="gold" />
<circle r="5" cx="${Constants['X2']}" cy="${Constants['Y2']}" fill="gold" />
  <circle r="5" cx="${Constants['X3']}" cy="${Constants['Y3']}" fill="gold" />
<circle r="5" cx="${Constants['X4']}" cy="${Constants['Y4']}" fill="gold" />
<circle r="5" cx="${Constants['X5']}" cy="${Constants['Y5']}" fill="gold" />
<circle r="5" cx="${Constants['X6']}" cy="${Constants['Y6']}" fill="gold" />
  <circle r="5" cx="${Constants['X7']}" cy="${Constants['Y7']}" fill="gold" />
<circle r="5" cx="${Constants['X8']}" cy="${Constants['Y8']}" fill="gold" />
  <circle r="5" cx="${Constants['X9']}" cy="${Constants['Y9']}" fill="gold" />
<circle r="5" cx="${Constants['X10']}" cy="${Y10}" fill="gold" />
  <circle r="5" cx="${Constants['X11']}” cy="${Constants['Y11']}” fill="gold" />
<circle r="5" cx="${Constants['X12']}" cy="${Constants['Y12']}" fill="gold" />
  <circle r="5" cx="${Constants['X13']}" cy="${Constants['Y13']}" fill="gold" />
<circle r="5" cx="${Constants['X14']}" cy="${Constants['Y14']}" fill="gold" />
<circle r="5" cx="${Constants['X15']}" cy="${Constants['Y15']}" fill="gold" />
<circle r="5" cx="${Constants['X16']}" cy="${Constants['Y16']}" fill="gold" />
  <circle r="5" cx="${Constants['X17']}" cy="${Constants['Y17']}" fill="gold" />
<circle r="5" cx="${Constants['X18']}" cy="${Constants['Y18']}" fill="gold" />
  <circle r="5" cx="${Constants['X19']}" cy="${Constants['Y19']}" fill="gold" />
<circle r="5" cx="${Constants['X20']}" cy="${Constants['Y20']}" fill="gold" />

  <circle r="5" cx="${Constants['X21']}" cy="${Constants['Y21']}" fill=“red” />
<circle r="5" cx="${Constants['X22']}" cy="${Constants['Y22']}" fill="red" />
  <circle r="5" cx="${Constants['X23']}" cy="${Constants['Y23']}" fill="red" />
<circle r="5" cx="${Constants['X24']}" cy="${Constants['Y24']}" fill="red" />
<circle r="5" cx="${Constants['X25']}" cy="${Constants['Y25']}" fill="red" />
<circle r="5" cx="${Constants['X26']}" cy="${Constants['Y26']}" fill="red" />
  <circle r="5" cx="${Constants['X27']}" cy="${Constants['Y27']}" fill="red" />
<circle r="5" cx="${Constants['X28']}" cy="${Constants['Y28']}" fill="red" />
  <circle r="5" cx="${Constants['X29']}" cy="${Constants['Y29']}" fill="red" />
<circle r="5" cx="${Constants['X30']}" cy="${Constants['Y30']}" fill="red" />
  <circle r="5" cx="${Constants['X31']}” cy="${Constants['Y31']}” fill="red" />
<circle r="5" cx="${Constants['X32']}" cy="${Constants['Y32']}" fill=“red” />
  <circle r="5" cx="${Constants['X33']}" cy="${Constants['Y33']}" fill="red" />
<circle r="5" cx="${Constants['X34']}" cy="${Constants['Y34']}" fill="red" />
<circle r="5" cx="${Constants['X35']}" cy="${Constants['Y35']}" fill="red" />
<circle r="5" cx="${Constants['X36']}" cy="${Constants['Y36']}" fill="red" />
  <circle r="5" cx="${Constants['X37']}" cy="${Constants['Y37']}" fill="red" />
<circle r="5" cx="${Constants['X38']}" cy="${Constants['Y38']}" fill="red" />
  <circle r="5" cx="${Constants['X39']}" cy="${Constants['Y39']}" fill="red" />
<circle r="5" cx="${Constants['X40']}" cy="${Constants['Y40']}" fill="red" />

</svg> 
 
</body>
</html>
`,
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.WebViewStyles(theme)['HTML View'].style,
                  { height: 510, width: 390 }
                ),
                dimensions.width
              )}
            />
          </View>
          <Spacer bottom={8} left={8} right={8} top={8} />
        </View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        <View>
          {/* Change Match Button */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('ResultListScreen');
                setGlobalVariableValue({
                  key: 'X1',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X2',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X3',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X4',
                  value: 1,
                });
                undefined;
                setGlobalVariableValue({
                  key: 'X6',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X7',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X8',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X9',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X10',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X11',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X12',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X13',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X14',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X15',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X16',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X17',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X18',
                  value: Y10,
                });
                setGlobalVariableValue({
                  key: 'X19',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'X20',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y1',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y2',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y3',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y4',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y5',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y6',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y7',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y8',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y9',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y10',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y11',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y12',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y13',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y14',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y15',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y16',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y17',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y18',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y19',
                  value: 1,
                });
                setGlobalVariableValue({
                  key: 'Y20',
                  value: 1,
                });
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
                  fontFamily: 'Inter_600SemiBold',
                  marginLeft: 40,
                  marginRight: 40,
                }
              ),
              dimensions.width
            )}
            title={'Choose Match'}
          />
          {/* Spacer 2 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
        </View>
        {/* Match Stats */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'column', justifyContent: 'space-around' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.App.NFT_TIME_Black,
                fontSize: 20,
              }),
              dimensions.width
            )}
          >
            {'Match Stats'}
          </Text>
          <Spacer bottom={8} left={8} right={8} top={8} />
          <ShootrSupabaseDBAPIApi.FetchTeamMatchStatsByMatch2GET
            MatchID={Constants['MatchID']}
            TeamID={Constants['TeamID']}
          >
            {({ loading, error, data, refetchTeamMatchStatsByMatch2 }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <SimpleStyleFlatList
                  data={fetchData}
                  decelerationRate={'normal'}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(listData, index) =>
                    listData?.id ??
                    listData?.uuid ??
                    index?.toString() ??
                    JSON.stringify(listData)
                  }
                  keyboardShouldPersistTaps={'never'}
                  listKey={'Scroll View->Match Stats->Fetch->List'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  pagingEnabled={false}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <>
                        {/* View 3 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'flex-start',
                              backgroundColor: palettes.App.Peoplebit_Turquoise,
                              borderRadius: 12,
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                              marginBottom: 5,
                              marginLeft: 10,
                              marginRight: 10,
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            size={24}
                            color={palettes.App.Communical_Yellow_Emoticons}
                            name={'MaterialCommunityIcons/radiobox-marked'}
                          />
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  alignSelf: 'auto',
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: 18,
                                  marginLeft: 10,
                                  textAlign: 'auto',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {listData?.Action}
                            {' - '}
                            {listData?.Total}
                          </Text>
                        </View>
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  snapToAlignment={'start'}
                />
              );
            }}
          </ShootrSupabaseDBAPIApi.FetchTeamMatchStatsByMatch2GET>
        </View>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
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
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Change to Season View'}
        />
        {/* Spacer 3 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SoccerTeamStatsPitchViewByMatchScreen);
