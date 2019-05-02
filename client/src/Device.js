import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const devices = [
  {
    id: 1,
    slug: 'device-1',
    name: 'Surface Pro 6',
    manufacturer: 'Microsoft',
    display: '12.3" 2736x1824 touchscreen',
    cpus: [
      'Intel Core i5-8250U',
      'Intel Core i7-8650U',
    ],
    ram: ['8 GB', '16 GB'],
    storage: ['128 GB SSD', '256 GB SSD', '512 GB SSD', '1 TB SSD'],
    gpus: ['Intel UHD Graphics 620'],
    configs: [
      {
        name: 'i7 - 16 GB - 512 GB',
        price: 2199
      }
    ],
    singleCoreScore: 1111,
    multiCoreScore: 4444
  },
  // {
  //   id: 2,
  //   slug: 'device-2',
  //   name: 'Device 2',
  //   singleCoreScore: 1111,
  //   multiCoreScore: 4444
  // },
  // {
  //   id: 3,
  //   slug: 'device-3',
  //   name: 'Device 3',
  //   singleCoreScore: 1111,
  //   multiCoreScore: 4444
  // }
]

class Device extends React.Component {
  constructor(obj) {
    super(obj)
  }
  render() {
    const device = this.getDevice();
    return (
    <div>
      <div class="jumbotron">
        <div class="container">
          <h1>{device.name}</h1>
        </div>
      </div>
      <div class="hero">
        <img src="/device-1.webp"/>
      </div>
      <div class="container">
        <div class="specs-grid">
          <div><h3>Display</h3></div><div><div>{device.display}</div></div>
          <div><h3>Processor</h3></div><div><div>{this.displayMultiSpecs(device.cpus)}</div></div>
          <div><h3>Memory</h3></div><div><div>{this.displayMultiSpecs(device.ram)}</div></div>
          <div><h3>Storage</h3></div><div><div>{this.displayMultiSpecs(device.storage)}</div></div>
          <div><h3>Graphics</h3></div><div><div>{this.displayMultiSpecs(device.gpus)}</div></div>
        </div>
      </div>
    </div>
    );
  }
  getDevice = () => {
    console.log('getting device')
    return devices.find(device => device.slug === this.props.match.params.deviceSlug)
  }
  displayMultiSpecs = (arr) => {
    return arr.map((value, index) => {
      return <div key={index}>{value}</div>
    })
  }
}

export default Device;