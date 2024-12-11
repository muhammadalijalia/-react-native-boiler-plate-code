import React from 'react';
import PropTypes from 'prop-types';
import {DataHandler} from '../../utils';
import FastImage from 'react-native-fast-image';

let placeholderSource = require('./image/placeholder.png');

export default class ImageView extends React.PureComponent {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    placeholderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    source: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
      .isRequired,
    isShowActivity: PropTypes.bool,
  };

  static defaultProps = {
    isShowActivity: true,
    style: {},
    placeholderStyle: {},
  };

  render() {
    const {isShowActivity, source, placeholderStyle, ...rest} = this.props;
    return (
      <FastImage
        isShowActivity={isShowActivity}
        source={
          source?.uri ? source : source?.uri ? source.uri : placeholderSource
        }
        {...rest}
        networkInfo={DataHandler.getIsInternetConnected()}
        placeholderSource={placeholderSource}
        placeholderStyle={placeholderStyle}
      />
    );
  }
}
