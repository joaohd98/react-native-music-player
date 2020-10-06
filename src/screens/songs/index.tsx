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

interface State {
  panAnimation: Animated.Value,
  animation: Animated.Value,
  isOpen: boolean
}

const { height } = Dimensions.get("screen")

export class SongsScreen extends React.Component<{}, State> {
  panResponder?: PanResponderInstance
  panAnimationValue = 0
  isExpanded = true

  state: State = {
    panAnimation: new Animated.Value(0),
    animation: new Animated.Value(0),
    isOpen: false
  }

  componentDidMount() {
    const {panAnimation} = this.state

    panAnimation.addListener((animation) => {
      this.panAnimationValue = animation.value
    })

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        panAnimation.extractOffset();
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dy: panAnimation }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        panAnimation.flattenOffset();

        const toValue = this.isExpanded ? 0 : height
        const toValueInverse = this.isExpanded ? height : 0

        if(this.panAnimationValue < 0 || this.panAnimationValue > height) {
          panAnimation.setValue(toValueInverse)
        }

        else if(this.panAnimationValue <= 75 || this.panAnimationValue >= height - 75) {
          Animated.spring(panAnimation, {
            toValue: toValueInverse,
            useNativeDriver: false
          }).start()
        }

        else {

          Animated.spring(panAnimation, {
            toValue,
            useNativeDriver: false
          }).start()

          this.isExpanded = !this.isExpanded
        }
      }
    })
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: this.state.isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      this.setState({isOpen: !this.state.isOpen})
    })
  }

  render() {
    const viewAnimated = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"]
    })

    const translateY = this.state.panAnimation.interpolate({
      inputRange: [0, height],
      outputRange: [0, height - 130],
      extrapolate: 'clamp'
    })

    const viewStyles = {
      height: viewAnimated,
      transform: [{translateY}],
    }

    return (
      <View style={{flex: 1, backgroundColor: CustomColors.backgroundColor}}>
        <CustomHeader title={'Songs'} placeholder={'Search for songs'} />
        <TouchableOpacity style={{backgroundColor: "red"}} onPress={this.startAnimation}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
        <Animated.View {...this.panResponder?.panHandlers} style={[styles.animatedView, viewStyles]}>
          <TouchableOpacity style={{backgroundColor: "blue"}} onPress={this.startAnimation}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animatedView: {
    backgroundColor: "green", position: "absolute", bottom: 0, width: "100%"
  }
})
