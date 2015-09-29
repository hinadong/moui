import React from 'react/addons';
import Mask from './Mask';

const Layer = {
  propTypes: {
    needMask: React.PropTypes.bool,
    maskToHide: React.PropTypes.bool,
  },
  getDefaultProps() {
    return {
      needMask: true,
      maskToHide: true
    };
  },
  getInitialState() {
    return {
      visible: true
    };
  },
  maskToHide() {
    let props = this.props;
    props.needMask && props.maskToHide && this.setState({visible: false});
  },
  createMask() {
    return <Mask onClick={this.maskToHide} />
  },
  hide() {
    this.setState({visible: false});
  }
};

export default Layer;