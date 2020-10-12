import React, {useEffect} from 'react';
import {ScrollView, Image} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import {colors} from '../../constants/colors';
import Header from './../../components/common/header/header';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

export default function CouseSolution(props) {
  useEffect(() => {
    props.getCourseSolution();
  }, []);

  const playVideo = (id) => {
    props.navigation.navigate('Youtube', {
      id: id,
    });
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Medication" {...props} />
      <ScrollView style={{flex: 1}}>
        {props.courseSolution &&
          props.courseSolution.data &&
          props.courseSolution.data.map((data, index) => {
            console.log(data);
            var videoId = data.video.split('=')[1];
            return (
              <View style={{padding: 10}}>
                <Text
                  style={{
                    color: colors.primaryColor,
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingTop: 10,
                  }}>
                  {data.title}
                </Text>
                <Text>{data.content}</Text>
                {data.video ? (
                  <TouchableOpacity onPress={() => playVideo(videoId)}>
                    <View
                      style={{
                        height: 200,
                        backgroundColor: 'gray',
                        position: 'relative',
                      }}>
                      <Image
                        style={{width: '100%', height: 200}}
                        source={{
                          uri: `https://img.youtube.com/vi/${videoId}/0.jpg`,
                        }}
                      />
                      <Icon
                        name="play"
                        style={{
                          position: 'absolute',
                          left: '40%',
                          top: '40%',
                          fontSize: 45,
                          color: 'red',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}
