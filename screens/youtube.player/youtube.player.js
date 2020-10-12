import React, {useEffect, useState} from 'react';
import {View, Text, BackHandler, Alert, ActivityIndicator} from 'react-native';
import YouTube from 'react-native-youtube';

export default function YoutubePlayer(props) {
  const [videoId, setVideoId] = useState(false);

  const onChangeFullScreen = (value) => {
    if (!value.isFullscreen) {
      setVideoId(false);
      props.navigation.goBack();
    }
  };

  useEffect(() => {
    setVideoId(props.route.params.id);
  }, [props.route.params.id]);
  return (
    <View style={{height: 200}}>
      <ActivityIndicator size="large" style={{marginTop: 40}} />
      {videoId ? (
        <YouTube
          apiKey="AIzaSyDVFU08y2UaijYaWQTQ4-TjylHsJSmRj2g"
          loop
          fullscreen={true}
          onChangeFullscreen={onChangeFullScreen}
          videoId={props.route.params.id} // The YouTube video ID
        />
      ) : null}
    </View>
  );
}
