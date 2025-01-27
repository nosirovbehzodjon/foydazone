import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { Fragment } from "react";

export default function NotFoundScreen() {
  return (
    <Fragment>
      <Stack.Screen options={{ title: "Oops!" }} />
      <h1>This screen doesn't exist.</h1>
      <Link href="/" style={styles.link}>
        Go to home screen!
      </Link>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
