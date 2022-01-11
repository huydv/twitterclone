import * as React from 'react';
import { Button, View, Text } from 'react-native';

function TweetScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
}

export default TweetScreen;