import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Explore</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
