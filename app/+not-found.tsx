import { HeadingText } from '@/components/atoms/text/HeadingText';
import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <HeadingText type="h4">This screen doesn't exist.</HeadingText>
        <Link href="/(auth)/index" style={styles.link}>
          <HeadingText type="h4">Go to home screen!</HeadingText>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
