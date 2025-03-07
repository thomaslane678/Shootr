import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  SimpleStyleFlashList,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Spacer,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { y5: null };

const RugbyLiveMatchStatsScreen = props => {
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
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth({ height: '300%' }, dimensions.width)}
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
              {'Live Match Stats'}
            </Text>
            <Spacer bottom={8} left={8} right={8} top={8} />
          </View>
          {/* Choose Stat Button */}
          <>
            {!Constants['Stat_Options'] ? null : (
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-around' },
                  dimensions.width
                )}
              >
                <View>
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
                        navigation.navigate('RugbyChooseStatScreen');
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
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Choose Stat'}
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
                  </Text>
                </View>
                {/* View 3 */}
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
                    {'Total:'}
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
                    {Constants['TotalStat']}
                  </Text>
                </View>
              </View>
            )}
          </>
          {/* Spacer 4 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.App.NFT_TIME_Black,
                fontSize: 18,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Opposition: '}
            {Constants['Opposition']}
            {', '}
            {Constants['Date']}
          </Text>
          {/* GeoPitch API Button */}
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
                  marginLeft: 40,
                  marginRight: 40,
                }
              ),
              dimensions.width
            )}
            title={'Update'}
          />
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

<line x1="0" y1="255" x2="390" y2="255" style="stroke:white;stroke-width:2" />
<line x1="0" y1="112" x2="390" y2="112" style="stroke:white;stroke-width:2" />
<line x1="0" y1="397" x2="390" y2="397" style="stroke:white;stroke-width:2" />
Jagged
<line x1="39" y1="204" x2="59" y2="204" style="stroke:white;stroke-width:2" />
<line x1="39" y1="204" x2="59" y2="204" style="stroke:white;stroke-width:2" />
<line x1="39" y1="204" x2="59" y2="204" style="stroke:white;stroke-width:2" />
<line x1="98" y1="204" x2="118" y2="204" style="stroke:white;stroke-width:2" />
<line x1="157" y1="204" x2="177" y2="204" style="stroke:white;stroke-width:2" />
<line x1="216" y1="204" x2="236" y2="204" style="stroke:white;stroke-width:2" />
<line x1="275" y1="204" x2="295" y2="204" style="stroke:white;stroke-width:2" />
<line x1="334" y1="204" x2="354" y2="204" style="stroke:white;stroke-width:2" />
Jagged
<line x1="39" y1="306" x2="59" y2="306" style="stroke:white;stroke-width:2" />
<line x1="39" y1="306" x2="59" y2="306" style="stroke:white;stroke-width:2" />
<line x1="39" y1="306" x2="59" y2="306" style="stroke:white;stroke-width:2" />
<line x1="98" y1="306" x2="118" y2="306" style="stroke:white;stroke-width:2" />
<line x1="157" y1="306" x2="177" y2="306" style="stroke:white;stroke-width:2" />
<line x1="216" y1="306" x2="236" y2="306" style="stroke:white;stroke-width:2" />
<line x1="275" y1="306" x2="295" y2="306" style="stroke:white;stroke-width:2" />
<line x1="334" y1="306" x2="354" y2="306" style="stroke:white;stroke-width:2" />
Jagged
<line x1="39" y1="30" x2="59" y2="30" style="stroke:white;stroke-width:2" />
<line x1="39" y1="30" x2="59" y2="30" style="stroke:white;stroke-width:2" />
<line x1="39" y1="30" x2="59" y2="30" style="stroke:white;stroke-width:2" />
<line x1="98" y1="30" x2="118" y2="30" style="stroke:white;stroke-width:2" />
<line x1="157" y1="30" x2="177" y2="30" style="stroke:white;stroke-width:2" />
<line x1="216" y1="30" x2="236" y2="30" style="stroke:white;stroke-width:2" />
<line x1="275" y1="30" x2="295" y2="30" style="stroke:white;stroke-width:2" />
<line x1="334" y1="30" x2="354" y2="30" style="stroke:white;stroke-width:2" />
Jagged
<line x1="39" y1="479" x2="59" y2="479" style="stroke:white;stroke-width:2" />
<line x1="39" y1="479" x2="59" y2="479" style="stroke:white;stroke-width:2" />
<line x1="39" y1="479" x2="59" y2="479" style="stroke:white;stroke-width:2" />
<line x1="98" y1="479" x2="118" y2="479" style="stroke:white;stroke-width:2" />
<line x1="157" y1="479" x2="177" y2="479" style="stroke:white;stroke-width:2" />
<line x1="216" y1="479" x2="236" y2="479" style="stroke:white;stroke-width:2" />
<line x1="275" y1="479" x2="295" y2="479" style="stroke:white;stroke-width:2" />
<line x1="334" y1="479" x2="354" y2="479" style="stroke:white;stroke-width:2" />
Top Goal
<line x1="185" y1="0" x2="185" y2="20" style="stroke:white;stroke-width:2" />
<line x1="205" y1="0" x2="205" y2="20" style="stroke:white;stroke-width:2" />
<line x1="185" y1="20" x2="205" y2="20" style="stroke:white;stroke-width:2" />
Bottom Goal
<line x1="185" y1="510" x2="185" y2="490" style="stroke:white;stroke-width:2" />
<line x1="205" y1="510" x2="205" y2="490" style="stroke:white;stroke-width:2" />
<line x1="185" y1="490" x2="205" y2="490" style="stroke:white;stroke-width:2" />


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
          {/* Spacer 2 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
        </View>
        {/* Match Stats */}
        <View>
          <View>
            {/* Spacer 3 */}
            <Spacer bottom={8} left={8} right={8} top={8} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { color: palettes.App.NFT_TIME_Black, fontSize: 22 }
                ),
                dimensions.width
              )}
            >
              {'Match Leaderboard: '}
              {Constants['ChosenStat']}
            </Text>
            <Spacer bottom={8} left={8} right={8} top={8} />
          </View>

          <ShootrSupabaseDBAPIApi.FetchPlayerMatchStatsLeaderboardGET
            Variable={Constants['TeamID']}
            action={Constants['ChosenStat']}
            var3={Constants['MatchID']}
          >
            {({ loading, error, data, refetchPlayerMatchStatsLeaderboard }) => {
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
                  listKey={'Scroll View->Match Stats->Fetch->FlashList'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const flashListData = item;
                    return (
                      <>
                        {/* View 3 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: palettes.App.Peoplebit_Turquoise,
                              borderRadius: 18,
                              flexDirection: 'row',
                              height: 80,
                              marginLeft: 20,
                              marginRight: 20,
                            },
                            dimensions.width
                          )}
                        >
                          {/* View 2 */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['Image 2']
                                .props}
                              source={imageSource(`${Constants['UserPic']}`)}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['Image 2']
                                    .style,
                                  { height: 80, width: 80 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                          <Spacer bottom={8} left={8} right={8} top={8} />
                          <View
                            style={StyleSheet.applyWidth(
                              { alignSelf: 'center' },
                              dimensions.width
                            )}
                          >
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color:
                                      palettes.App.Communical_Yellow_Emoticons,
                                    fontSize: 18,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {flashListData?.PlayerName}
                            </Text>
                            <Spacer bottom={8} left={8} right={8} top={8} />
                            {/* Text 2 */}
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color:
                                      palettes.App.Communical_Yellow_Emoticons,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Total: '}
                              {flashListData?.Total}
                            </Text>
                          </View>
                        </View>
                        <Spacer bottom={8} left={8} right={8} top={8} />
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                />
              );
            }}
          </ShootrSupabaseDBAPIApi.FetchPlayerMatchStatsLeaderboardGET>
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
        {/* Spacer 3 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RugbyLiveMatchStatsScreen);
