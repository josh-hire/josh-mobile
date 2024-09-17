import { Link, Href } from 'expo-router';
import { Button, type ButtonProps, StyleSheet } from 'react-native';

export type ThemedPrimaryButtonProps = ButtonProps & {
  title: string,
  link: Href<string | object>,
};

export function ThemedPrimaryButton({
  title,
  link
}: ThemedPrimaryButtonProps) {

  return (
    <Link replace href={link} asChild>
      <Button title={title} />
    </Link>
  );  
}
