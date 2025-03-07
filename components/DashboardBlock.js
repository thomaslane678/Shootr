import React from 'react';
import { Circle, Icon, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const DashboardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        },
        dimensions.width
      )}
    >
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderRadius: 8,
              flex: 1,
              height: 111,
              justifyContent: 'center',
              marginTop: 16,
              paddingBottom: 12,
              paddingLeft: 20,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ opacity: 0.38 }, dimensions.width)}
          >
            <Circle bgColor={palettes.App['Custom Color_2']} size={30} />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 30,
                justifyContent: 'center',
                left: 20,
                position: 'absolute',
                top: 12,
                width: 30,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['BxsHot1'])}
              style={StyleSheet.applyWidth(
                { height: 16, width: 16 },
                dimensions.width
              )}
            />
          </View>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                marginTop: 10,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Shooting Accuracy'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 22,
                marginTop: 4,
              },
              dimensions.width
            )}
          >
            {'245'}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  marginLeft: 6,
                  marginTop: 4,
                },
                dimensions.width
              )}
            >
              {'Kcal'}
            </Text>
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderRadius: 8,
              flex: 1,
              height: 111,
              justifyContent: 'center',
              marginTop: 16,
              paddingBottom: 12,
              paddingLeft: 20,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ opacity: 0.38 }, dimensions.width)}
          >
            <Circle bgColor={palettes.App['Custom Color_2']} size={30} />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 30,
                justifyContent: 'center',
                left: 20,
                position: 'absolute',
                top: 12,
                width: 30,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['BxsBowlRice1'])}
              style={StyleSheet.applyWidth(
                { height: 16, width: 16 },
                dimensions.width
              )}
            />
          </View>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                marginTop: 10,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Frees Won'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 22,
                marginTop: 4,
              },
              dimensions.width
            )}
          >
            {'123'}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  marginLeft: 6,
                  marginTop: 4,
                },
                dimensions.width
              )}
            >
              {'Gram'}
            </Text>
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderRadius: 8,
              flex: 1,
              height: 111,
              justifyContent: 'center',
              marginTop: 16,
              paddingBottom: 12,
              paddingLeft: 20,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ opacity: 0.38 }, dimensions.width)}
          >
            <Circle bgColor={palettes.App['Custom Color_2']} size={30} />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 30,
                justifyContent: 'center',
                left: 20,
                position: 'absolute',
                top: 12,
                width: 30,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['BxsBowlRice1'])}
              style={StyleSheet.applyWidth(
                { height: 16, width: 16 },
                dimensions.width
              )}
            />
          </View>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                marginTop: 10,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Yellow Cards'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 22,
                marginTop: 4,
              },
              dimensions.width
            )}
          >
            {'123'}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  marginLeft: 6,
                  marginTop: 4,
                },
                dimensions.width
              )}
            >
              {'Gram'}
            </Text>
          </Text>
        </View>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flex: 1, marginLeft: 20 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderRadius: 8,
              flex: 1,
              height: 111,
              justifyContent: 'center',
              marginTop: 16,
              paddingBottom: 12,
              paddingLeft: 20,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ opacity: 0.38 }, dimensions.width)}
          >
            <Circle bgColor={palettes.App['Custom Color_2']} size={30} />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 30,
                justifyContent: 'center',
                left: 20,
                position: 'absolute',
                top: 12,
                width: 30,
              },
              dimensions.width
            )}
          >
            <Icon
              color={palettes.App['Custom Color_2']}
              name={'AntDesign/heart'}
              size={15}
              style={StyleSheet.applyWidth(
                { backgroundColor: palettes.App.Communial_Icon_BG },
                dimensions.width
              )}
            />
          </View>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                marginTop: 10,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Biggest Score'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 22,
                marginTop: 4,
              },
              dimensions.width
            )}
          >
            {'78'}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  marginLeft: 6,
                  marginTop: 4,
                },
                dimensions.width
              )}
            >
              {'Bpm'}
            </Text>
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderRadius: 8,
              flex: 1,
              height: 111,
              justifyContent: 'center',
              marginTop: 16,
              paddingBottom: 12,
              paddingLeft: 20,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ opacity: 0.38 }, dimensions.width)}
          >
            <Circle bgColor={palettes.App['Custom Color_2']} size={30} />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 30,
                justifyContent: 'center',
                left: 20,
                position: 'absolute',
                top: 12,
                width: 30,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['BxDumbbell'])}
              style={StyleSheet.applyWidth(
                { height: 16, position: 'absolute', width: 16 },
                dimensions.width
              )}
            />
          </View>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                marginTop: 10,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Frees Conceded'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 22,
                marginTop: 4,
              },
              dimensions.width
            )}
          >
            {'53'}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  marginLeft: 6,
                  marginTop: 4,
                },
                dimensions.width
              )}
            >
              {'Video'}
            </Text>
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderRadius: 8,
              flex: 1,
              height: 111,
              justifyContent: 'center',
              marginTop: 16,
              paddingBottom: 12,
              paddingLeft: 20,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth({ opacity: 0.38 }, dimensions.width)}
          >
            <Circle bgColor={palettes.App['Custom Color_2']} size={30} />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 30,
                justifyContent: 'center',
                left: 20,
                position: 'absolute',
                top: 12,
                width: 30,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['BxDumbbell'])}
              style={StyleSheet.applyWidth(
                { height: 16, position: 'absolute', width: 16 },
                dimensions.width
              )}
            />
          </View>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_500Medium',
                fontSize: 14,
                marginTop: 10,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Red Cards'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 22,
                marginTop: 4,
              },
              dimensions.width
            )}
          >
            {'53'}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App.Communical_Yellow_Emoticons,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  marginLeft: 6,
                  marginTop: 4,
                },
                dimensions.width
              )}
            >
              {'Video'}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(DashboardBlock);
