import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './carousel.css'

const FPS = 60;
const UPDATE_INTERVAL = 1000 / FPS;
const START_INDEX = 1;

export default class Carousel extends Component {
  static propTypes = {
    className: PropTypes.string,
    speed: PropTypes.number
  }
  static defaultProps = {
    className: '',
    speed: 1000
  }
  state = {
    width: 0,
    currentIndex: START_INDEX,
    translateX: 0,
  }
  render() {
    const classes = classnames('slick-slider', this.props.className)
    return (
      <div
        className={classes}
        ref={(ref) => this.}
      >

      </div>
    )
  }
}