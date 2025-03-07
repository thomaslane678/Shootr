import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

import palettes from './themes/palettes';

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { style: {}, props: {} } });

export const TextInputStyles = theme =>
  StyleSheet.create({
    Password: {
      style: { borderLeftWidth: 45, borderRightWidth: 45 },
      props: {},
    },
    'Text Area': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
    'Image 2': { style: { height: 100, width: 100 }, props: {} },
    'Image 3': { style: { height: 100, width: 100 }, props: {} },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
  });

export const ActionSheetItemStyles = theme =>
  StyleSheet.create({
    'Action Sheet Item': { style: { textAlign: 'center' }, props: {} },
  });

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors.branding.primary,
        justifyContent: 'center',
      },
      props: {},
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.text.strong }, props: {} },
    'Text 2': { style: { color: theme.colors.text.strong }, props: {} },
  });

export const SwiperStyles = theme =>
  StyleSheet.create({
    Swiper: { style: { height: 300, width: '100%' }, props: {} },
  });

export const FetchStyles = theme =>
  StyleSheet.create({
    Fetch: { style: { minHeight: 40 }, props: {} },
    'Fetch 2': { style: { minHeight: 40 }, props: {} },
  });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const SwipeableItemStyles = theme =>
  StyleSheet.create({
    'Swipeable Item': { style: { overflow: 'hidden' }, props: {} },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { style: { height: 1 }, props: {} } });

export const WebViewStyles = theme =>
  StyleSheet.create({
    'HTML View': { style: { flex: 1 }, props: {} },
    'Web View': { style: { flex: 1 }, props: {} },
  });

export const MapViewStyles = theme =>
  StyleSheet.create({
    'Map View': {
      style: { flex: 1, height: '100%', width: '100%' },
      props: {},
    },
    'Map View 2': {
      style: { flex: 1, height: '100%', width: '100%' },
      props: {},
    },
    'Map View 3': {
      style: { flex: 1, height: '100%', width: '100%' },
      props: {},
    },
  });

export const SVGStyles = theme =>
  StyleSheet.create({ SVG: { style: { height: 100, width: 100 }, props: {} } });

export const ActivityIndicatorStyles = theme =>
  StyleSheet.create({
    'Activity Indicator': { style: { height: 36, width: 36 }, props: {} },
  });

export const SurfaceStyles = theme =>
  StyleSheet.create({ Surface: { style: { minHeight: 40 }, props: {} } });

export const FlatListStyles = theme =>
  StyleSheet.create({ List: { style: { flex: 1 }, props: {} } });

export const LinkStyles = theme =>
  StyleSheet.create({
    Link: { style: { color: theme.colors.branding.primary }, props: {} },
  });

export const ExpoImageStyles = theme =>
  StyleSheet.create({
    'Image (default)': { style: { height: 100, width: 100 }, props: {} },
  });
