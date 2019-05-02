import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const devices = [
  {
    id: 1,
    slug: 'device-1',
    name: 'Device 1',
    singleCoreScore: 1111,
    multiCoreScore: 4444
  },
  {
    id: 2,
    slug: 'device-2',
    name: 'Device 2',
    singleCoreScore: 1111,
    multiCoreScore: 4444
  },
  {
    id: 3,
    slug: 'device-3',
    name: 'Device 3',
    singleCoreScore: 1111,
    multiCoreScore: 4444
  }
]

class Device extends React.Component {
  constructor(obj) {
    super(obj)
  }
  render() {
    console.log(this.props)
    const device = this.getDevice();
    return (
    <div>
      <div>{device.name}</div>
      <div>Single core score: {device.singleCoreScore}</div>
      <div>Multi core score: {device.multiCoreScore}</div>
    </div>
    );
  }
  getDevice = () => {
    console.log('getting device')
    return devices.find(device => device.slug === this.props.match.params.deviceSlug)
  }
}

export default Device;