import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

function TweetScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.flexRow}>
            <Image style={styles.avatar}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }} 
            />
            <View>
              <Text style={styles.tweetName}>Andre Madarang</Text>
              <Text style={styles.tweetHandle}>@drehimself</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="grey" />
          </TouchableOpacity>
        </View>

        <View style={styles.tweetContentContainer}>
            <Text style={styles.tweetContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Text>
        </View>

        <View style={styles.tweetEngagement}>
            <View style={styles.flexRow}>
              <Text style={styles.tweetEngagementNumber}>628</Text>
              <Text style={styles.tweetEngagementLabel}>ReTweets</Text>
            </View>
            <View style={[styles.flexRow, styles.ml4]}>
              <Text style={styles.tweetEngagementNumber}>38</Text>
              <Text style={styles.tweetEngagementLabel}>Quote Tweets</Text>
            </View>

            <View style={[styles.flexRow, styles.ml4]}>
              <Text style={styles.tweetEngagementNumber}>230</Text>
              <Text style={styles.tweetEngagementLabel}>Likes</Text>
            </View>
        </View>

        <View style={[styles.tweetEngagement, styles.spaceAround]}>
          <TouchableOpacity style={styles.flexRow}>
                <EvilIcons name="comment" size={32} color="gray"  />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                <EvilIcons name="retweet" size={32} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                <EvilIcons name="heart" size={32} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                <EvilIcons name={Platform.OS == 'ios' ? 'share-apple' : 'share-google'} size={22} color="gray" style={{marginRight: 2}} />
            </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexRow: {
    flexDirection: 'row'
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 25
  },
  tweetName: {
    fontWeight: 'bold',
    color: '#222222'
  },
  tweetHandle: {

    color: 'gray',
    marginTop: 4
  },

  tweetContentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb'
  }, 
  tweetContent: {
    fontSize: 20,
    lineHeight: 30,
  },

  tweetEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb'
  },
  tweetEngagementNumber: {
    fontWeight: 'bold'
  },
  tweetEngagementLabel: {
    color: 'grey',
    marginLeft: 6
  },
  ml4: {
    marginLeft: 16
  },

  spaceAround: {
    justifyContent: 'space-around'
  },
  
});

export default TweetScreen;

