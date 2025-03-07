import React from 'react';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const UpdatedHeaderBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: palettes.App.Peoplebit_Turquoise,
          flexDirection: 'row',
          marginBottom: 20,
          paddingLeft: 20,
        },
        dimensions.width
      )}
    >
      {/* Back btn */}
      <Touchable
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          { borderColor: palettes.App.Communical_Yellow_Emoticons },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 44,
              justifyContent: 'center',
              width: 44,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={palettes.App.Communical_Yellow_Emoticons}
            name={'AntDesign/arrowleft'}
          />
        </View>
      </Touchable>
      {/* Screen Heading */}
      <Text
        accessible={true}
        selectable={false}
        style={StyleSheet.applyWidth(
          {
            color: palettes.App.Communial_Icon_BG,
            fontFamily: 'Inter_500Medium',
            fontSize: 16,
            marginLeft: 10,
          },
          dimensions.width
        )}
      >
        {'Notifications\n'}
      </Text>
    </View>
  );
};

export default withTheme(UpdatedHeaderBlock);
