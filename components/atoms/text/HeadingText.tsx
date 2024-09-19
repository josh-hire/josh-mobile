import { Text, type TextProps, StyleSheet } from 'react-native';

export type HeadingTextProps = TextProps & {
  lightColor?: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  fontWeight?: 'regular' | 'bold';
  color?: 'black' | 'red' | string;
};

export function HeadingText({
  style,
  lightColor,
  type = 'h3',
  fontWeight = 'regular',
  color = 'black',
  ...rest
}: HeadingTextProps) {

  return (
    <Text
      style={[
        { color, fontWeight },
        type === 'h1' ? styles.heading1 : undefined,
        type === 'h2' ? styles.heading2 : undefined,
        type === 'h3' ? styles.heading3 : undefined,
        type === 'h4' ? styles.heading4 : undefined,
        type === 'h5' ? styles.heading5 : undefined,
        type === 'h6' ? styles.heading6 : undefined,
        type === 'label' ? styles.label : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  heading1: {
    fontSize: 32,
    lineHeight: 36,
    fontFamily: 'TelkomselBatik'
  },
  heading2: {
    fontSize: 27,
    lineHeight: 30,
    fontFamily: 'TelkomselBatik'
  },
  heading3: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: 'TelkomselBatik'
  },
  heading4: {
    fontSize: 21,
    lineHeight: 25,
    fontFamily: 'TelkomselBatik'
  },
  heading5: {
    fontSize: 19,
    lineHeight: 23,
    fontFamily: 'TelkomselBatik'
  },
  heading6: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'TelkomselBatik'
  },
  label: {
    fontSize: 10,
    lineHeight: 15,
    fontFamily: 'TelkomselBatik'
  },
});
