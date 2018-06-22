import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Carousel from '../src/index'
const settings = {
  className: 'slide'
  speed: 500,
}
ReactDOM.render(
  <Carousel {...settings}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
  </Carousel>,
  document.getElementById('root')
);
