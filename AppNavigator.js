import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import * as GlobalVariables from './config/GlobalVariableContext';
import AddEventScreen from './screens/AddEventScreen';
import AddNewTeamIDScreen from './screens/AddNewTeamIDScreen';
import AddTeamChooseSportScreen from './screens/AddTeamChooseSportScreen';
import AddTeamScreen from './screens/AddTeamScreen';
import AddUserChooseSportScreen from './screens/AddUserChooseSportScreen';
import AddUserScreen from './screens/AddUserScreen';
import AdvancedAnalyticsFixtureSelectScreen from './screens/AdvancedAnalyticsFixtureSelectScreen';
import AdvancedAnalyticsGAAPaymentScreen from './screens/AdvancedAnalyticsGAAPaymentScreen';
import AdvancedAnalyticsGAAWelcomeScreen from './screens/AdvancedAnalyticsGAAWelcomeScreen';
import AdvancedAnalyticsRugbyPaymentScreen from './screens/AdvancedAnalyticsRugbyPaymentScreen';
import AdvancedAnalyticsRugbyWelcomeScreen from './screens/AdvancedAnalyticsRugbyWelcomeScreen';
import AdvancedAnalyticsSignUpScreen from './screens/AdvancedAnalyticsSignUpScreen';
import AdvancedAnalyticsSoccerPaymentScreen from './screens/AdvancedAnalyticsSoccerPaymentScreen';
import AdvancedAnalyticsSoccerWelcomeScreen from './screens/AdvancedAnalyticsSoccerWelcomeScreen';
import ChooseEventToCreateScreen from './screens/ChooseEventToCreateScreen';
import ChooseGoalScreen from './screens/ChooseGoalScreen';
import ChooseTeamScreen from './screens/ChooseTeamScreen';
import ChooseYourGoalScreen from './screens/ChooseYourGoalScreen';
import ConfirmAttendanceScreen from './screens/ConfirmAttendanceScreen';
import EventAttendanceScreen from './screens/EventAttendanceScreen';
import EventScheduleScreen from './screens/EventScheduleScreen';
import FixtureListScreen from './screens/FixtureListScreen';
import GAAAddMatchScreen from './screens/GAAAddMatchScreen';
import GAAAdvancedAnalyticsAllSeasonScreen from './screens/GAAAdvancedAnalyticsAllSeasonScreen';
import GAAAdvancedAnalyticsByMatchScreen from './screens/GAAAdvancedAnalyticsByMatchScreen';
import GAAChooseStat2Screen from './screens/GAAChooseStat2Screen';
import GAAChooseStatScreen from './screens/GAAChooseStatScreen';
import GAAConfirmResultScreen from './screens/GAAConfirmResultScreen';
import GAALiveMatchStatsScreen from './screens/GAALiveMatchStatsScreen';
import GAAMatchActionCardsScreen from './screens/GAAMatchActionCardsScreen';
import GAAMatchActionFreePenaltyScreen from './screens/GAAMatchActionFreePenaltyScreen';
import GAAMatchActionMainScreen from './screens/GAAMatchActionMainScreen';
import GAAMatchActionOppositionScreen from './screens/GAAMatchActionOppositionScreen';
import GAAMatchActionPlayerSelectScreen from './screens/GAAMatchActionPlayerSelectScreen';
import GAAMatchActionRestartsScreen from './screens/GAAMatchActionRestartsScreen';
import GAAMatchActionShotScreen from './screens/GAAMatchActionShotScreen';
import GAAMatchActionTurnoverScreen from './screens/GAAMatchActionTurnoverScreen';
import GAAMatchScreenBottomGoalScreen from './screens/GAAMatchScreenBottomGoalScreen';
import GAAMatchScreenTopGoalScreen from './screens/GAAMatchScreenTopGoalScreen';
import GAAPickTeamScreen from './screens/GAAPickTeamScreen';
import GAATeamListScreen from './screens/GAATeamListScreen';
import GAATeamStatsPitchViewAllSeasonScreen from './screens/GAATeamStatsPitchViewAllSeasonScreen';
import GAATeamStatsPitchViewByMatchScreen from './screens/GAATeamStatsPitchViewByMatchScreen';
import GAATeamStatsTheNumbersScreen from './screens/GAATeamStatsTheNumbersScreen';
import GAAUserProfileBasicScreen from './screens/GAAUserProfileBasicScreen';
import GAAUserProfileScreen from './screens/GAAUserProfileScreen';
import HomeScreen from './screens/HomeScreen';
import LogInScreen from './screens/LogInScreen';
import MessagesScreen from './screens/MessagesScreen';
import MyTeamScreen from './screens/MyTeamScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import PlayerSignUpConfirmationScreen from './screens/PlayerSignUpConfirmationScreen';
import ResultListGAAScreen from './screens/ResultListGAAScreen';
import ResultListScreen from './screens/ResultListScreen';
import RugbyAddMatchScreen from './screens/RugbyAddMatchScreen';
import RugbyAdvancedAnalyticsAllSeasonScreen from './screens/RugbyAdvancedAnalyticsAllSeasonScreen';
import RugbyAdvancedAnalyticsByMatchScreen from './screens/RugbyAdvancedAnalyticsByMatchScreen';
import RugbyChooseStat2Screen from './screens/RugbyChooseStat2Screen';
import RugbyChooseStatScreen from './screens/RugbyChooseStatScreen';
import RugbyConfirmResultScreen from './screens/RugbyConfirmResultScreen';
import RugbyLiveMatchStatsScreen from './screens/RugbyLiveMatchStatsScreen';
import RugbyMatchActionAttackScreen from './screens/RugbyMatchActionAttackScreen';
import RugbyMatchActionDefenceScreen from './screens/RugbyMatchActionDefenceScreen';
import RugbyMatchActionDisciplineScreen from './screens/RugbyMatchActionDisciplineScreen';
import RugbyMatchActionKickingScreen from './screens/RugbyMatchActionKickingScreen';
import RugbyMatchActionLineOutScrumScreen from './screens/RugbyMatchActionLineOutScrumScreen';
import RugbyMatchActionMainScreen from './screens/RugbyMatchActionMainScreen';
import RugbyMatchActionPlayerSelectScreen from './screens/RugbyMatchActionPlayerSelectScreen';
import RugbyMatchScreenBottomGoalScreen from './screens/RugbyMatchScreenBottomGoalScreen';
import RugbyMatchScreenTopGoalScreen from './screens/RugbyMatchScreenTopGoalScreen';
import RugbyPickTeamScreen from './screens/RugbyPickTeamScreen';
import RugbyTeamListScreen from './screens/RugbyTeamListScreen';
import RugbyTeamStatsPitchViewAllSeasonScreen from './screens/RugbyTeamStatsPitchViewAllSeasonScreen';
import RugbyTeamStatsPitchViewByMatchScreen from './screens/RugbyTeamStatsPitchViewByMatchScreen';
import RugbyTeamStatsTheNumbersScreen from './screens/RugbyTeamStatsTheNumbersScreen';
import RugbyUserProfileBasicScreen from './screens/RugbyUserProfileBasicScreen';
import RugbyUserProfileScreen from './screens/RugbyUserProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpInfoScreen from './screens/SignUpInfoScreen';
import SignUpScreen from './screens/SignUpScreen';
import SoccerAddMatchScreen from './screens/SoccerAddMatchScreen';
import SoccerAdvancedAnalyticsAllSeasonScreen from './screens/SoccerAdvancedAnalyticsAllSeasonScreen';
import SoccerAdvancedAnalyticsByMatchScreen from './screens/SoccerAdvancedAnalyticsByMatchScreen';
import SoccerChooseStatScreen from './screens/SoccerChooseStatScreen';
import SoccerChooseYourFormationScreen from './screens/SoccerChooseYourFormationScreen';
import SoccerConfirmResultScreen from './screens/SoccerConfirmResultScreen';
import SoccerGoalTypeScreen from './screens/SoccerGoalTypeScreen';
import SoccerLiveMatchStatsScreen from './screens/SoccerLiveMatchStatsScreen';
import SoccerMatchActionCardsScreen from './screens/SoccerMatchActionCardsScreen';
import SoccerMatchActionDefensiveScreen from './screens/SoccerMatchActionDefensiveScreen';
import SoccerMatchActionFoulScreen from './screens/SoccerMatchActionFoulScreen';
import SoccerMatchActionMainScreen from './screens/SoccerMatchActionMainScreen';
import SoccerMatchActionOppositionScreen from './screens/SoccerMatchActionOppositionScreen';
import SoccerMatchActionPlayerSelect352Screen from './screens/SoccerMatchActionPlayerSelect352Screen';
import SoccerMatchActionPlayerSelect4231Screen from './screens/SoccerMatchActionPlayerSelect4231Screen';
import SoccerMatchActionPlayerSelect433Screen from './screens/SoccerMatchActionPlayerSelect433Screen';
import SoccerMatchActionPlayerSelect442Screen from './screens/SoccerMatchActionPlayerSelect442Screen';
import SoccerMatchActionPlayerSelect541Screen from './screens/SoccerMatchActionPlayerSelect541Screen';
import SoccerMatchActionPossessionScreen from './screens/SoccerMatchActionPossessionScreen';
import SoccerMatchActionShotScreen from './screens/SoccerMatchActionShotScreen';
import SoccerMatchScreenBottomGoalScreen from './screens/SoccerMatchScreenBottomGoalScreen';
import SoccerMatchScreenTopGoalScreen from './screens/SoccerMatchScreenTopGoalScreen';
import SoccerPickTeam352Screen from './screens/SoccerPickTeam352Screen';
import SoccerPickTeam4231Screen from './screens/SoccerPickTeam4231Screen';
import SoccerPickTeam433Screen from './screens/SoccerPickTeam433Screen';
import SoccerPickTeam442Screen from './screens/SoccerPickTeam442Screen';
import SoccerPickTeam541Screen from './screens/SoccerPickTeam541Screen';
import SoccerTeamListScreen from './screens/SoccerTeamListScreen';
import SoccerTeamStats2TheVisualsScreen from './screens/SoccerTeamStats2TheVisualsScreen';
import SoccerTeamStatsPitchViewAllSeasonScreen from './screens/SoccerTeamStatsPitchViewAllSeasonScreen';
import SoccerTeamStatsPitchViewByMatchScreen from './screens/SoccerTeamStatsPitchViewByMatchScreen';
import SoccerTeamStatsTheNumbersScreen from './screens/SoccerTeamStatsTheNumbersScreen';
import SoccerUserProfileBasicScreen from './screens/SoccerUserProfileBasicScreen';
import SoccerUserProfileScreen from './screens/SoccerUserProfileScreen';
import TeamHomeScreen from './screens/TeamHomeScreen';
import TeamSignUpConfirmationScreen from './screens/TeamSignUpConfirmationScreen';
import TeamStatsResultListScreen from './screens/TeamStatsResultListScreen';
import UpdateProfileAddPatchAPIScreen from './screens/UpdateProfileAddPatchAPIScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

function BottomTabNavigator() {
  const theme = useTheme();

  const tabBarOrDrawerIcons = {};
  /* Navigator has no children, add a child screen or navigator to have it rendered here */
}

export default function RootAppNavigator() {
  const theme = useTheme();

  const Constants = GlobalVariables.useValues();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background.base,
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="LogInScreen"
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerLeft: ({ tintColor, canGoBack }) =>
            canGoBack ? (
              <Touchable
                style={[styles.headerContainer, styles.headerContainerLeft]}
                onPress={() => {
                  try {
                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Icon
                  name="Ionicons/arrow-back-sharp"
                  size={Platform.OS === 'ios' ? 21 : 24}
                  color={tintColor}
                  style={[styles.headerIcon, styles.headerIconLeft]}
                />
              </Touchable>
            ) : (
              <View
                style={[styles.headerContainer, styles.headerContainerLeft]}
              >
                <Icon
                  name="AntDesign/arrowleft"
                  size={Platform.OS === 'ios' ? 21 : 24}
                  color={tintColor}
                  style={[styles.headerIcon, styles.headerIconLeft]}
                />
              </View>
            ),
          headerStyle: {
            backgroundColor: palettes.App.Peoplebit_Turquoise,
            borderBottomColor: 'transparent',
          },
          headerTintColor: palettes.App.Communical_Yellow_Emoticons,
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Inter_600SemiBold' },
          headerTransparent: false,
        })}
      >
        <Stack.Screen
          name="AddEventScreen"
          component={AddEventScreen}
          options={({ navigation }) => ({
            title: 'Add Event',
          })}
        />
        <Stack.Screen
          name="AddNewTeamIDScreen"
          component={AddNewTeamIDScreen}
          options={({ navigation }) => ({
            title: 'Add New TeamID',
          })}
        />
        <Stack.Screen
          name="AddTeamChooseSportScreen"
          component={AddTeamChooseSportScreen}
          options={({ navigation }) => ({
            title: 'Add Team - Choose Sport',
          })}
        />
        <Stack.Screen
          name="AddTeamScreen"
          component={AddTeamScreen}
          options={({ navigation }) => ({
            title: 'Add Team',
          })}
        />
        <Stack.Screen
          name="AddUserChooseSportScreen"
          component={AddUserChooseSportScreen}
          options={({ navigation }) => ({
            title: 'Add User - Choose Sport',
          })}
        />
        <Stack.Screen
          name="AddUserScreen"
          component={AddUserScreen}
          options={({ navigation }) => ({
            title: 'Add User',
          })}
        />
        <Stack.Screen
          name="AdvancedAnalyticsFixtureSelectScreen"
          component={AdvancedAnalyticsFixtureSelectScreen}
          options={({ navigation }) => ({
            title: 'Advanced Analytics Fixture Select',
          })}
        />
        <Stack.Screen
          name="AdvancedAnalyticsGAAPaymentScreen"
          component={AdvancedAnalyticsGAAPaymentScreen}
          options={({ navigation }) => ({
            title: 'Advanced Analytics GAA Payment Screen',
          })}
        />
        <Stack.Screen
          name="AdvancedAnalyticsGAAWelcomeScreen"
          component={AdvancedAnalyticsGAAWelcomeScreen}
          options={({ navigation }) => ({
            title: 'Advanced Analytics GAA Welcome',
          })}
        />
        <Stack.Screen
          name="AdvancedAnalyticsRugbyPaymentScreen"
          component={AdvancedAnalyticsRugbyPaymentScreen}
          options={({ navigation }) => ({
            title: 'Advanced Analytics Rugby Payment Screen',
          })}
        />
        <Stack.Screen
          name="AdvancedAnalyticsRugbyWelcomeScreen"
          component={AdvancedAnalyticsRugbyWelcomeScreen}
          options={({ navigation }) => ({
            title: 'Advanced Analytics Rugby Welcome',
          })}
        />
        <Stack.Screen
          name="AdvancedAnalyticsSignUpScreen"
          component={AdvancedAnalyticsSignUpScreen}
          options={({ navigation }) => ({
            title: 'Advanced Analytics Sign Up',
          })}
        />
        <Stack.Screen
          name="AdvancedAnalyticsSoccerPaymentScreen"
          component={AdvancedAnalyticsSoccerPaymentScreen}
          options={({ navigation }) => ({
            title: 'Advanced Analytics Soccer Payment Screen',
          })}
        />
        <Stack.Screen
          name="AdvancedAnalyticsSoccerWelcomeScreen"
          component={AdvancedAnalyticsSoccerWelcomeScreen}
          options={({ navigation }) => ({
            title: 'Advanced Analytics Soccer Welcome',
          })}
        />
        <Stack.Screen
          name="ChooseEventToCreateScreen"
          component={ChooseEventToCreateScreen}
          options={({ navigation }) => ({
            title: 'Choose Event to Create',
          })}
        />
        <Stack.Screen
          name="ChooseGoalScreen"
          component={ChooseGoalScreen}
          options={({ navigation }) => ({
            title: 'Choose Goal',
          })}
        />
        <Stack.Screen
          name="ChooseTeamScreen"
          component={ChooseTeamScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderBottomColor: 'transparent',
            },
            headerTintColor: palettes.App.Communical_Yellow_Emoticons,
            headerTitle: 'Choose Team',
            headerTitleStyle: { fontFamily: 'Inter_400Regular' },
            headerTransparent: false,
            title: 'Choose Team',
          })}
        />
        <Stack.Screen
          name="ChooseYourGoalScreen"
          component={ChooseYourGoalScreen}
          options={({ navigation }) => ({
            title: 'Choose Your Goal',
          })}
        />
        <Stack.Screen
          name="ConfirmAttendanceScreen"
          component={ConfirmAttendanceScreen}
          options={({ navigation }) => ({
            title: 'Confirm Attendance',
          })}
        />
        <Stack.Screen
          name="EventAttendanceScreen"
          component={EventAttendanceScreen}
          options={({ navigation }) => ({
            title: 'Event Attendance',
          })}
        />
        <Stack.Screen
          name="EventScheduleScreen"
          component={EventScheduleScreen}
          options={({ navigation }) => ({
            title: 'Event Schedule',
          })}
        />
        <Stack.Screen
          name="FixtureListScreen"
          component={FixtureListScreen}
          options={({ navigation }) => ({
            title: 'Fixture List',
          })}
        />
        <Stack.Screen
          name="GAAAddMatchScreen"
          component={GAAAddMatchScreen}
          options={({ navigation }) => ({
            title: 'GAA Add Match',
          })}
        />
        <Stack.Screen
          name="GAAAdvancedAnalyticsAllSeasonScreen"
          component={GAAAdvancedAnalyticsAllSeasonScreen}
          options={({ navigation }) => ({
            title: 'GAA Advanced Analytics All Season',
          })}
        />
        <Stack.Screen
          name="GAAAdvancedAnalyticsByMatchScreen"
          component={GAAAdvancedAnalyticsByMatchScreen}
          options={({ navigation }) => ({
            title: 'GAA Advanced Analytics By Match',
          })}
        />
        <Stack.Screen
          name="GAAChooseStat2Screen"
          component={GAAChooseStat2Screen}
          options={({ navigation }) => ({
            title: 'GAA Choose Stat 2',
          })}
        />
        <Stack.Screen
          name="GAAChooseStatScreen"
          component={GAAChooseStatScreen}
          options={({ navigation }) => ({
            title: 'GAA Choose Stat',
          })}
        />
        <Stack.Screen
          name="GAAConfirmResultScreen"
          component={GAAConfirmResultScreen}
          options={({ navigation }) => ({
            title: 'GAA Confirm Result',
          })}
        />
        <Stack.Screen
          name="GAALiveMatchStatsScreen"
          component={GAALiveMatchStatsScreen}
          options={({ navigation }) => ({
            title: 'GAA Live Match Stats',
          })}
        />
        <Stack.Screen
          name="GAAMatchActionCardsScreen"
          component={GAAMatchActionCardsScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Action Cards',
          })}
        />
        <Stack.Screen
          name="GAAMatchActionFreePenaltyScreen"
          component={GAAMatchActionFreePenaltyScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Action Free/Penalty',
          })}
        />
        <Stack.Screen
          name="GAAMatchActionMainScreen"
          component={GAAMatchActionMainScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Action Main',
          })}
        />
        <Stack.Screen
          name="GAAMatchActionOppositionScreen"
          component={GAAMatchActionOppositionScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Action Opposition',
          })}
        />
        <Stack.Screen
          name="GAAMatchActionPlayerSelectScreen"
          component={GAAMatchActionPlayerSelectScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Action Player Select',
          })}
        />
        <Stack.Screen
          name="GAAMatchActionRestartsScreen"
          component={GAAMatchActionRestartsScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Action Restarts',
          })}
        />
        <Stack.Screen
          name="GAAMatchActionShotScreen"
          component={GAAMatchActionShotScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Action Shot',
          })}
        />
        <Stack.Screen
          name="GAAMatchActionTurnoverScreen"
          component={GAAMatchActionTurnoverScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Action Turnover',
          })}
        />
        <Stack.Screen
          name="GAAMatchScreenBottomGoalScreen"
          component={GAAMatchScreenBottomGoalScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Screen Bottom Goal',
          })}
        />
        <Stack.Screen
          name="GAAMatchScreenTopGoalScreen"
          component={GAAMatchScreenTopGoalScreen}
          options={({ navigation }) => ({
            title: 'GAA Match Screen Top Goal',
          })}
        />
        <Stack.Screen
          name="GAAPickTeamScreen"
          component={GAAPickTeamScreen}
          options={({ navigation }) => ({
            title: 'GAA Pick Team',
          })}
        />
        <Stack.Screen
          name="GAATeamListScreen"
          component={GAATeamListScreen}
          options={({ navigation }) => ({
            title: 'GAA Team List',
          })}
        />
        <Stack.Screen
          name="GAATeamStatsPitchViewAllSeasonScreen"
          component={GAATeamStatsPitchViewAllSeasonScreen}
          options={({ navigation }) => ({
            title: 'GAA Team Stats - Pitch View All Season',
          })}
        />
        <Stack.Screen
          name="GAATeamStatsPitchViewByMatchScreen"
          component={GAATeamStatsPitchViewByMatchScreen}
          options={({ navigation }) => ({
            title: 'GAA Team Stats - Pitch View By Match',
          })}
        />
        <Stack.Screen
          name="GAATeamStatsTheNumbersScreen"
          component={GAATeamStatsTheNumbersScreen}
          options={({ navigation }) => ({
            title: 'GAA Team Stats - The Numbers',
          })}
        />
        <Stack.Screen
          name="GAAUserProfileBasicScreen"
          component={GAAUserProfileBasicScreen}
          options={({ navigation }) => ({
            title: 'GAA User Profile Basic',
          })}
        />
        <Stack.Screen
          name="GAAUserProfileScreen"
          component={GAAUserProfileScreen}
          options={({ navigation }) => ({
            title: 'GAA User Profile',
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home',
          })}
        />
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={({ navigation }) => ({
            title: 'Log In',
          })}
        />
        <Stack.Screen
          name="MessagesScreen"
          component={MessagesScreen}
          options={({ navigation }) => ({
            title: 'Messages',
          })}
        />
        <Stack.Screen
          name="MyTeamScreen"
          component={MyTeamScreen}
          options={({ navigation }) => ({
            title: 'My Team',
          })}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={({ navigation }) => ({
            title: 'Notifications',
          })}
        />
        <Stack.Screen
          name="PlayerSignUpConfirmationScreen"
          component={PlayerSignUpConfirmationScreen}
          options={({ navigation }) => ({
            title: 'Player Sign Up Confirmation',
          })}
        />
        <Stack.Screen
          name="ResultListGAAScreen"
          component={ResultListGAAScreen}
          options={({ navigation }) => ({
            title: 'Result List GAA',
          })}
        />
        <Stack.Screen
          name="ResultListScreen"
          component={ResultListScreen}
          options={({ navigation }) => ({
            title: 'Result List',
          })}
        />
        <Stack.Screen
          name="RugbyAddMatchScreen"
          component={RugbyAddMatchScreen}
          options={({ navigation }) => ({
            title: 'Rugby Add Match',
          })}
        />
        <Stack.Screen
          name="RugbyAdvancedAnalyticsAllSeasonScreen"
          component={RugbyAdvancedAnalyticsAllSeasonScreen}
          options={({ navigation }) => ({
            title: 'Rugby Advanced Analytics All Season',
          })}
        />
        <Stack.Screen
          name="RugbyAdvancedAnalyticsByMatchScreen"
          component={RugbyAdvancedAnalyticsByMatchScreen}
          options={({ navigation }) => ({
            title: 'Rugby Advanced Analytics By Match',
          })}
        />
        <Stack.Screen
          name="RugbyChooseStat2Screen"
          component={RugbyChooseStat2Screen}
          options={({ navigation }) => ({
            title: 'Rugby Choose Stat 2',
          })}
        />
        <Stack.Screen
          name="RugbyChooseStatScreen"
          component={RugbyChooseStatScreen}
          options={({ navigation }) => ({
            title: 'Rugby Choose Stat',
          })}
        />
        <Stack.Screen
          name="RugbyConfirmResultScreen"
          component={RugbyConfirmResultScreen}
          options={({ navigation }) => ({
            title: 'Rugby Confirm Result',
          })}
        />
        <Stack.Screen
          name="RugbyLiveMatchStatsScreen"
          component={RugbyLiveMatchStatsScreen}
          options={({ navigation }) => ({
            title: 'Rugby Live Match Stats',
          })}
        />
        <Stack.Screen
          name="RugbyMatchActionAttackScreen"
          component={RugbyMatchActionAttackScreen}
          options={({ navigation }) => ({
            title: 'Rugby Match Action Attack',
          })}
        />
        <Stack.Screen
          name="RugbyMatchActionDefenceScreen"
          component={RugbyMatchActionDefenceScreen}
          options={({ navigation }) => ({
            title: 'Rugby Match Action Defence',
          })}
        />
        <Stack.Screen
          name="RugbyMatchActionDisciplineScreen"
          component={RugbyMatchActionDisciplineScreen}
          options={({ navigation }) => ({
            title: 'Rugby Match Action Discipline',
          })}
        />
        <Stack.Screen
          name="RugbyMatchActionKickingScreen"
          component={RugbyMatchActionKickingScreen}
          options={({ navigation }) => ({
            title: 'Rugby Match Action Kicking',
          })}
        />
        <Stack.Screen
          name="RugbyMatchActionLineOutScrumScreen"
          component={RugbyMatchActionLineOutScrumScreen}
          options={({ navigation }) => ({
            title: 'Rugby Match Action Line Out Scrum',
          })}
        />
        <Stack.Screen
          name="RugbyMatchActionMainScreen"
          component={RugbyMatchActionMainScreen}
          options={({ navigation }) => ({
            title: 'Rugby Match Action Main',
          })}
        />
        <Stack.Screen
          name="RugbyMatchActionPlayerSelectScreen"
          component={RugbyMatchActionPlayerSelectScreen}
          options={({ navigation }) => ({
            title: 'Rugby Match Action Player Select',
          })}
        />
        <Stack.Screen
          name="RugbyMatchScreenBottomGoalScreen"
          component={RugbyMatchScreenBottomGoalScreen}
          options={({ navigation }) => ({
            title: 'Rugby Match Screen Bottom Goal',
          })}
        />
        <Stack.Screen
          name="RugbyMatchScreenTopGoalScreen"
          component={RugbyMatchScreenTopGoalScreen}
          options={({ navigation }) => ({
            title: 'Rugby Match Screen Top Goal',
          })}
        />
        <Stack.Screen
          name="RugbyPickTeamScreen"
          component={RugbyPickTeamScreen}
          options={({ navigation }) => ({
            title: 'Rugby Pick Team',
          })}
        />
        <Stack.Screen
          name="RugbyTeamListScreen"
          component={RugbyTeamListScreen}
          options={({ navigation }) => ({
            title: 'Rugby Team List',
          })}
        />
        <Stack.Screen
          name="RugbyTeamStatsPitchViewAllSeasonScreen"
          component={RugbyTeamStatsPitchViewAllSeasonScreen}
          options={({ navigation }) => ({
            title: 'Rugby Team Stats - Pitch View All Season',
          })}
        />
        <Stack.Screen
          name="RugbyTeamStatsPitchViewByMatchScreen"
          component={RugbyTeamStatsPitchViewByMatchScreen}
          options={({ navigation }) => ({
            title: 'Rugby Team Stats - Pitch View By Match',
          })}
        />
        <Stack.Screen
          name="RugbyTeamStatsTheNumbersScreen"
          component={RugbyTeamStatsTheNumbersScreen}
          options={({ navigation }) => ({
            title: 'Rugby Team Stats - The Numbers',
          })}
        />
        <Stack.Screen
          name="RugbyUserProfileBasicScreen"
          component={RugbyUserProfileBasicScreen}
          options={({ navigation }) => ({
            title: 'Rugby User Profile Basic',
          })}
        />
        <Stack.Screen
          name="RugbyUserProfileScreen"
          component={RugbyUserProfileScreen}
          options={({ navigation }) => ({
            title: 'Rugby User Profile',
          })}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={({ navigation }) => ({
            title: 'Settings',
          })}
        />
        <Stack.Screen
          name="SignUpInfoScreen"
          component={SignUpInfoScreen}
          options={({ navigation }) => ({
            title: 'Sign Up Info',
          })}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={({ navigation }) => ({
            title: 'Sign Up',
          })}
        />
        <Stack.Screen
          name="SoccerAddMatchScreen"
          component={SoccerAddMatchScreen}
          options={({ navigation }) => ({
            title: 'Soccer Add Match',
          })}
        />
        <Stack.Screen
          name="SoccerAdvancedAnalyticsAllSeasonScreen"
          component={SoccerAdvancedAnalyticsAllSeasonScreen}
          options={({ navigation }) => ({
            title: 'Soccer Advanced Analytics All Season',
          })}
        />
        <Stack.Screen
          name="SoccerAdvancedAnalyticsByMatchScreen"
          component={SoccerAdvancedAnalyticsByMatchScreen}
          options={({ navigation }) => ({
            title: 'Soccer Advanced Analytics By Match',
          })}
        />
        <Stack.Screen
          name="SoccerChooseStatScreen"
          component={SoccerChooseStatScreen}
          options={({ navigation }) => ({
            title: 'Soccer Choose Stat',
          })}
        />
        <Stack.Screen
          name="SoccerChooseYourFormationScreen"
          component={SoccerChooseYourFormationScreen}
          options={({ navigation }) => ({
            title: 'Soccer Choose Your Formation',
          })}
        />
        <Stack.Screen
          name="SoccerConfirmResultScreen"
          component={SoccerConfirmResultScreen}
          options={({ navigation }) => ({
            title: 'Soccer Confirm Result',
          })}
        />
        <Stack.Screen
          name="SoccerGoalTypeScreen"
          component={SoccerGoalTypeScreen}
          options={({ navigation }) => ({
            title: 'Soccer Goal Type',
          })}
        />
        <Stack.Screen
          name="SoccerLiveMatchStatsScreen"
          component={SoccerLiveMatchStatsScreen}
          options={({ navigation }) => ({
            title: 'Soccer Live Match Stats',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionCardsScreen"
          component={SoccerMatchActionCardsScreen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Cards',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionDefensiveScreen"
          component={SoccerMatchActionDefensiveScreen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Defensive',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionFoulScreen"
          component={SoccerMatchActionFoulScreen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Foul',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionMainScreen"
          component={SoccerMatchActionMainScreen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Main',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionOppositionScreen"
          component={SoccerMatchActionOppositionScreen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Opposition',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionPlayerSelect352Screen"
          component={SoccerMatchActionPlayerSelect352Screen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Player Select 352',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionPlayerSelect4231Screen"
          component={SoccerMatchActionPlayerSelect4231Screen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Player Select 4231',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionPlayerSelect433Screen"
          component={SoccerMatchActionPlayerSelect433Screen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Player Select 433',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionPlayerSelect442Screen"
          component={SoccerMatchActionPlayerSelect442Screen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Player Select 442',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionPlayerSelect541Screen"
          component={SoccerMatchActionPlayerSelect541Screen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Player Select 541',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionPossessionScreen"
          component={SoccerMatchActionPossessionScreen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Possession',
          })}
        />
        <Stack.Screen
          name="SoccerMatchActionShotScreen"
          component={SoccerMatchActionShotScreen}
          options={({ navigation }) => ({
            title: 'Soccer Match Action Shot',
          })}
        />
        <Stack.Screen
          name="SoccerMatchScreenBottomGoalScreen"
          component={SoccerMatchScreenBottomGoalScreen}
          options={({ navigation }) => ({
            title: 'Soccer Match Screen Bottom Goal',
          })}
        />
        <Stack.Screen
          name="SoccerMatchScreenTopGoalScreen"
          component={SoccerMatchScreenTopGoalScreen}
          options={({ navigation }) => ({
            title: 'Soccer Match Screen Top Goal',
          })}
        />
        <Stack.Screen
          name="SoccerPickTeam352Screen"
          component={SoccerPickTeam352Screen}
          options={({ navigation }) => ({
            title: 'Soccer Pick Team 3-5-2',
          })}
        />
        <Stack.Screen
          name="SoccerPickTeam4231Screen"
          component={SoccerPickTeam4231Screen}
          options={({ navigation }) => ({
            title: 'Soccer Pick Team 4-2-3-1',
          })}
        />
        <Stack.Screen
          name="SoccerPickTeam433Screen"
          component={SoccerPickTeam433Screen}
          options={({ navigation }) => ({
            title: 'Soccer Pick Team 4-3-3',
          })}
        />
        <Stack.Screen
          name="SoccerPickTeam442Screen"
          component={SoccerPickTeam442Screen}
          options={({ navigation }) => ({
            title: 'Soccer Pick Team 4-4-2',
          })}
        />
        <Stack.Screen
          name="SoccerPickTeam541Screen"
          component={SoccerPickTeam541Screen}
          options={({ navigation }) => ({
            title: 'Soccer Pick Team 5-4-1',
          })}
        />
        <Stack.Screen
          name="SoccerTeamListScreen"
          component={SoccerTeamListScreen}
          options={({ navigation }) => ({
            title: 'Soccer Team List',
          })}
        />
        <Stack.Screen
          name="SoccerTeamStats2TheVisualsScreen"
          component={SoccerTeamStats2TheVisualsScreen}
          options={({ navigation }) => ({
            title: 'Soccer Team Stats 2 - The Visuals',
          })}
        />
        <Stack.Screen
          name="SoccerTeamStatsPitchViewAllSeasonScreen"
          component={SoccerTeamStatsPitchViewAllSeasonScreen}
          options={({ navigation }) => ({
            title: 'Soccer Team Stats - Pitch View All Season',
          })}
        />
        <Stack.Screen
          name="SoccerTeamStatsPitchViewByMatchScreen"
          component={SoccerTeamStatsPitchViewByMatchScreen}
          options={({ navigation }) => ({
            title: 'Soccer Team Stats - Pitch View By Match',
          })}
        />
        <Stack.Screen
          name="SoccerTeamStatsTheNumbersScreen"
          component={SoccerTeamStatsTheNumbersScreen}
          options={({ navigation }) => ({
            title: 'Soccer Team Stats - The Numbers ',
          })}
        />
        <Stack.Screen
          name="SoccerUserProfileBasicScreen"
          component={SoccerUserProfileBasicScreen}
          options={({ navigation }) => ({
            title: 'Soccer User Profile Basic',
          })}
        />
        <Stack.Screen
          name="SoccerUserProfileScreen"
          component={SoccerUserProfileScreen}
          options={({ navigation }) => ({
            title: 'Soccer User Profile',
          })}
        />
        <Stack.Screen
          name="TeamHomeScreen"
          component={TeamHomeScreen}
          options={({ navigation }) => ({
            title: 'Team Home',
          })}
        />
        <Stack.Screen
          name="TeamSignUpConfirmationScreen"
          component={TeamSignUpConfirmationScreen}
          options={({ navigation }) => ({
            title: 'Team Sign Up Confirmation',
          })}
        />
        <Stack.Screen
          name="TeamStatsResultListScreen"
          component={TeamStatsResultListScreen}
          options={({ navigation }) => ({
            title: 'Team Stats Result List',
          })}
        />
        <Stack.Screen
          name="UpdateProfileAddPatchAPIScreen"
          component={UpdateProfileAddPatchAPIScreen}
          options={({ navigation }) => ({
            title: 'Update Profile (Add Patch API)',
          })}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            title: 'Bottom Tab Navigator',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
