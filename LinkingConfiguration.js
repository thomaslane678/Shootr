/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';
import { Platform } from 'react-native';

function renderLinkingPrefix() {
  try {
    return Linking.createURL('/');
  } catch (e) {
    return 'draftbit://';
  }
}

const prefix = renderLinkingPrefix();

const linking = {
  enabled: Platform.OS === 'web' ? false : true,
  prefixes: [prefix],
  config: {
    screens: {
      AddTeamScreen: {
        screens: {
          AddTeamScreen: {
            path: 'AddTeamScreen',
          },
        },
      },

      AdvancedAnalyticsFixtureSelectScreen: {
        screens: {
          AdvancedAnalyticsFixtureSelectScreen: {
            path: 'AdvancedAnalyticsFixtureSelectScreen',
          },
        },
      },

      AdvancedAnalyticsGAAWelcomeScreen: {
        screens: {
          AdvancedAnalyticsGAAWelcomeScreen: {
            path: 'AdvancedAnalyticsGAAWelcomeScreen',
          },
        },
      },

      SignUpScreen: {
        screens: {
          SignUpScreen: {
            path: 'SignUpScreen',
          },
        },
      },

      BottomTabNavigator: { screens: {} },
    },
  },
};

export default linking;
