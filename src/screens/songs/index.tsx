import React from 'react';
import {CustomHeader} from '../../components/header';
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
  PanResponder,
  PanResponderInstance,
  Dimensions
} from 'react-native';
import {CustomColors} from "../../theme/colors";
import {PlayerSong} from "../../components/player-song";

interface State {
  isOpen: boolean
}

const { height } = Dimensions.get("screen")

export class SongsScreen extends React.Component<{}, State> {
  state: State = {
    isOpen: false
  }

  componentDidMount() {
    this.setState({isOpen: true})
  }

  render() {
    const randomType = Math.floor(Math.random() * 100) % 2 == 0 ? "audio" : "video";

    return (
      <View style={{flex: 1, backgroundColor: CustomColors.backgroundColor}}>
        <CustomHeader title={'Songs'} placeholder={'Search for songs'} />
        <TouchableOpacity style={{backgroundColor: "red"}} onPress={() => this.setState({isOpen: true})}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
        <PlayerSong isOpen={this.state.isOpen} mediaType={randomType} height={height} onClose={() => this.setState({isOpen: false})} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animatedView: {
    backgroundColor: "black", position: "absolute", bottom: 0, width: "100%"
  }
})
