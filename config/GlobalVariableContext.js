import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeviceVariables = {
  AccountStatus: 'Basic',
  AccountType: 101,
  AuthorizationHeader: ' ',
  Email: 'Email',
  HomeTeam: 'HomeTeam',
  Name: 'Name',
  Position: 'Forward',
  TeamID: 'FerrybankSeniorHurling',
  TodayDate: 'some Date',
  Username: 'Tester@Shootr.com',
  UserPic:
    'https://mgjrztlrnhnktfnxbkhb.supabase.co/storage/v1/object/sign/Shootr%20Graphics/Shootr%20Big%20Logo%20Transparent.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTaG9vdHIgR3JhcGhpY3MvU2hvb3RyIEJpZyBMb2dvIFRyYW5zcGFyZW50LnBuZyIsImlhdCI6MTcxMzQzNDcxMCwiZXhwIjoxNzQ0OTcwNzEwfQ.p0d74o0Dx_8-Qs4weIZDT4-xL7z5uZwNGtaHRfOF6gI&t=2024-04-18T10%3A05%3A10.339Z',
  __env__: 'Development',
};
export const AppVariables = {
  '2nd Row 1': '2nd Row',
  '2nd Row 2': '2nd Row',
  '2nd Row 2 UN': 'TBC',
  '2nd Row UN': 'TBC',
  AAOpp1: 'Team1',
  AAOpp2: 'Team2',
  AAOpp3: 'Team3',
  AAOpp4: 'Team4',
  AAOpp5: 'Team5',
  AAOppTotal1: 10,
  AAOppTotal2: 8,
  AAOppTotal3: 9,
  AAOppTotal4: 11,
  AAOppTotal5: 7,
  AATot1: 12,
  AATot2: 6,
  AATot3: 11,
  AATot4: 10,
  AATot5: 9,
  Action: 'Shot',
  ActionZone: 5,
  Api_Key_Header:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nanJ6dGxybmhua3Rmbnhia2hiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzU1MTQ3OCwiZXhwIjoyMDEzMTI3NDc4fQ.SvEonapkcqGeOSHLDvPlvxQQfY95BmxDlaBDwIosHCI',
  Authorization_Header:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nanJ6dGxybmhua3Rmbnhia2hiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzU1MTQ3OCwiZXhwIjoyMDEzMTI3NDc4fQ.SvEonapkcqGeOSHLDvPlvxQQfY95BmxDlaBDwIosHCI',
  'BS Flanker': 'BS Flanker',
  'BS Flanker UN': 'TBC',
  CAM: 'TBC',
  'CAM UN': 'TBC',
  CB: 'TBC',
  'CB UN': 'TBC',
  CCB: 'TBC',
  'CCB UN': 'TBC',
  CF: 'TBC',
  'CF UN': 'TBC',
  chatdoc: true,
  chooseteamgrade: 'A',
  ChooseTeamID1: 'A',
  chooseteamlocation: 'A',
  ChooseTeamName1: 'A',
  chooseteamplayername: 'A',
  chooseteamsport: 'A',
  ChosenEvent: 'A',
  ChosenStat: 'Stat1',
  ChosenStat2: 'Stat2',
  Circle:
    '<circle r="5" cx="200" cy="150" stroke="green" stroke-width="3" fill="red" />',
  Date: '',
  DrilldownOpposition1: 'TBC',
  DrilldownOpposition2: 'TBC',
  DrilldownOpposition3: 'TBC',
  DrilldownOpposition4: 'TBC',
  DrilldownOpposition5: 'TBC',
  DrilldownStat1Total: 10,
  DrilldownStat2Total: 8,
  DrilldownStat3LG: 0,
  DrilldownStat4LG: 0,
  DrilldownStat5LG: 0,
  'Email App': 'Email',
  Error_Message: ' ',
  Event: 'Training',
  EventID: 'FerrybankGym',
  FB: 'TBC',
  'FB UN': 'TBC',
  FF: 'TBC',
  'FF UN': 'TBC',
  'Fly Half': 'Fly Half',
  'Fly Half UN': 'TBC',
  Formation: 442,
  'Full Back': 'Full Back',
  'Full Back UN': 'TBC',
  GK: 'TBC',
  'GK UN': 'TBC',
  Goal: 'TBC',
  'Goal Type': 'Right Foot',
  Grade: 'Grade',
  Hooker: 'Hooker',
  'Hooker UN': 'TBC',
  HTGoals: 0,
  HTPoints: 0,
  'Inside Centre': 'Inside Centre',
  'Inside Centre UN': 'TBC',
  LB: 'TBC',
  'LB UN': 'TBC',
  LCB: 'TBC',
  'LCB UN': 'TBC',
  'L-CDM': 'TBC',
  'L-CDM UN': 'TBC',
  LCF: 'TBC',
  'LCF UN': 'TBC',
  'Left Wing': 'Left Wing',
  'Left Wing UN': 'TBC',
  LHB: 'TBC',
  'LHB UN': 'TBC',
  LHF: 'TBC',
  'LHF UN': 'TBC',
  'LH Prop': 'LH Prop',
  'LH Prop UN': 'TBC',
  Location: 'Location',
  LW: 'TBC',
  'LW UN': 'TBC',
  MatchID: 'FerrybankCappoquin2024-08-20',
  Match_Options: [
    { label: 'Championship', value: '1' },
    { label: 'League', value: '2' },
    { label: 'Challenge', value: '3' },
  ],
  MatchType: 'TBC',
  MID1: 'TBC',
  'MID1 UN': 'TBC',
  MID2: 'TBC',
  'MID2 UN': 'TBC',
  'Number 8': 'Number 8',
  'Number 8 UN': 'TBC',
  OppGoals: 0,
  Opposition: 'TBC',
  OppPoints: 0,
  'OS Flanker': 'OS Flanker',
  'OS Flanker UN': 'TBC',
  'Outside Centre': 'Outside Centre',
  'Outside Centre UN': 'TBC',
  PaymentAmount: 100,
  PieChart4: 1,
  PieChart5: 1,
  PieChartDraw: 1,
  PieChartLoss: 2,
  PieChartWin: 5,
  PieDraw: 1,
  PieLoss: 1,
  PieWin: 1,
  PlayerStatPicker: [
    { label: 'Points', value: '1' },
    { label: 'Goals', value: '2' },
    { label: 'Wides', value: '3' },
    { label: 'Frees Won', value: '4' },
    { label: 'Frees Conceded', value: '5' },
    { value: '99', Turnovers: 'Points' },
  ],
  ProfilePicture: 'some ProfilePicture',
  RB: 'TBC',
  'RB UN': 'TBC',
  RCB: 'TBC',
  'RCB UN': 'TBC',
  'R-CDM': 'TBC',
  'R-CDM UN': 'TBC',
  RCF: 'TBC',
  'RCF UN': 'TBC',
  RHB: 'TBC',
  'RHB UN': 'TBC',
  RHF: 'TBC',
  'RHF UN': 'TBC',
  'Right Wing': 'Right Wing',
  'Ring Wing UN': 'TBC',
  RW: 'TBC',
  'RW UN': 'TBC',
  'Scrum Half': 'Scrum Half',
  'Scrum Half UN': 'TBC',
  SelectedPlayer: 'TBC',
  SelectedPlayerUsername: 'TBC',
  speciaities: ['some speciaity'],
  Sport: 'Sport',
  SportValue: 1,
  'Stat Filter': 'Point',
  Stat_Options: [
    { label: 'Points', value: '1' },
    { label: 'Goals', value: '2' },
    { label: 'Wides', value: '3' },
    { label: 'Frees Won', value: '4' },
    { label: 'Frees Conceded', value: '5' },
    { label: 'Restarts Won', value: '6' },
    { label: 'Yellow Cards', value: '7' },
    { label: 'Red Cards', value: '8' },
    { label: 'Opposition Scores', value: '9' },
  ],
  Sub1: 'TBC',
  Sub10: 'TBC',
  'Sub10 UN': 'TBC',
  Sub11: 'TBC',
  'Sub11 UN': 'TBC',
  Sub12: 'TBC',
  'Sub12 UN': 'TBC',
  'Sub1 UN': 'TBC',
  Sub2: 'TBC',
  'Sub2 UN': 'TBC',
  Sub3: 'TBC',
  'Sub3 UN': 'TBC',
  Sub4: 'TBC',
  Sub5: 'TBC',
  'Sub5 UN': 'TBC',
  Sub6: 'TBC',
  'Sub6 UN': 'TBC',
  Sub7: 'TBC',
  'Sub7 UN': 'TBC',
  Sub8: 'TBC',
  'Sub8 UN': 'TBC',
  Sub9: 'TBC',
  'Sub9 UN': 'TBC',
  'Sun4 UN': 'TBC',
  Tags: ['some Tag'],
  TempName: 'Thomas',
  'TH Prop': 'TH Prop',
  'TH Prop UN': 'TBC',
  TotalStat: 0,
  TrainingID: 0,
  Venue: 'TBC',
  'Visual Stat1': 'TBC',
  'Visual Stat2': 'TBC',
  VisualStatA1: 1,
  VisualStatA2: 1,
  VisualStatA3: 1,
  VisualStatA4: 1,
  VisualStatA5: 1,
  VisualStatB1: 1,
  VisualStatB2: 1,
  VisualStatB3: 1,
  VisualStatC2: 1,
  VisualStatC3: 1,
  VisualStatC4: 1,
  VisualStatC5: 1,
  VisualStatD1: 1,
  VisualStatD2: 1,
  VisualStatD3: 1,
  VisualStatD4: 1,
  VisualStatD5: 1,
  VisualStatsB4: 1,
  VisualStatsB5: 1,
  VisualStatsC1: 1,
  X1: '',
  X10: 1,
  X11: 1,
  X12: 1,
  X13: 1,
  X14: 1,
  X15: 1,
  X16: 1,
  X17: 1,
  X18: 1,
  X19: 1,
  X2: 1,
  X20: 1,
  X21: 1,
  X22: 1,
  X23: 1,
  X24: 1,
  X25: 1,
  X26: 1,
  X27: 1,
  X28: 1,
  X29: 1,
  X3: 1,
  X30: 1,
  X31: 1,
  X32: 1,
  X33: 1,
  X34: 1,
  X35: 1,
  X36: 1,
  X37: 1,
  X38: 1,
  X39: 1,
  X4: 1,
  X40: 1,
  X5: 1,
  X6: 1,
  X7: 1,
  X8: 1,
  X9: 1,
  XArray: '[{"23"},{"256"},{"313"}]',
  XAxis: 1,
  Y1: '',
  Y10: 1,
  Y11: 1,
  Y12: 1,
  Y13: 1,
  Y14: 1,
  Y15: 1,
  Y16: 1,
  Y17: 1,
  Y18: 1,
  Y19: 1,
  Y2: 1,
  Y20: 1,
  Y21: 1,
  Y22: 1,
  Y23: 1,
  Y24: 1,
  Y25: 1,
  Y26: 1,
  Y27: 1,
  Y28: 1,
  Y29: 1,
  Y3: 1,
  Y30: 1,
  Y31: 1,
  Y32: 1,
  Y33: 1,
  Y34: 1,
  Y35: 1,
  Y36: 1,
  Y37: 1,
  Y38: 1,
  Y39: 1,
  Y4: 1,
  Y40: 1,
  Y5: 1,
  Y6: 1,
  Y7: 1,
  Y8: 1,
  Y9: 1,
  YArray: '[{"23"},{"256"},{"313"}]',
  YAxis: 1,
};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();
const keySuffix = '';

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key + keySuffix, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const keys = Object.keys(DeviceVariables);
    const entries = await AsyncStorage.multiGet(
      keySuffix ? keys.map(k => k + keySuffix) : keys
    );

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key_, value]) => {
      // Keys only have the suffix appended in storage; strip the key
      // after they are retrieved
      const key = keySuffix ? key_.replace(keySuffix, '') : key_;
      return [key, value ? tryParseJson(value) : DeviceVariables[key]];
    });

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        if (
          payload?.__env__ &&
          DeviceVariables.__env__ &&
          payload.__env__ !== DeviceVariables.__env__
        ) {
          console.log(
            `Publication Environment changed from ${payload.__env__} to ${DeviceVariables.__env__}. Refreshing variables`
          );
          dispatch({
            type: 'LOAD_FROM_ASYNC_STORAGE',
            payload: DeviceVariables,
          });
        } else {
          dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
        }
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
