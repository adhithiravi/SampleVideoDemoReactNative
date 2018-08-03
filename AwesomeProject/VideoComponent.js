import React from 'react'
import PropTypes from 'prop-types'
import { Video }from 'expo'
import { View } from 'react-native'

export default class VideoComponent extends React.Component {

	renderMetronome () {
		const {mute } = this.props

			return(
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping={false}
          style={{ width: 500, height: 500 }}
        />
			)
	}

	render () {
		return (
			<View>
				{this.renderMetronome()}
			</View>
		)
	}
}

// Prop type warnings
VideoComponent.propTypes = {
	mute: PropTypes.bool.isRequired
}
