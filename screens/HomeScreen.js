import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Button
          title="Go to New Tweet"
          onPress={() => navigation.navigate('New Tweet')}
        />
         <Button
          title="Go to Tweet"
          onPress={() => navigation.navigate('Tweet Screen')}
        />
         <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile Screen')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})

export default HomeScreen;