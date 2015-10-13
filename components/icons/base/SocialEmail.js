// (C) Copyright 2014-2015 Hewlett-Packard Development Company

'use strict';

var React = require('react');
var IntlMixin = require('../../../mixins/GrommetIntlMixin');

var Icon = React.createClass({
  displayName: 'Icon',

  propTypes: {
    a11yTitle: React.PropTypes.string,
    a11yTitleId: React.PropTypes.string
  },

  mixins: [IntlMixin],

  getDefaultProps: function getDefaultProps() {
    return {
      a11yTitleId: 'social-email-title'
    };
  },

  render: function render() {
    var className = 'control-icon control-icon-social-email';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    var a11yTitle = this.getGrommetIntlMessage(typeof this.props.a11yTitle !== "undefined" ? this.props.a11yTitle : "social-email");

    return React.createElement(
      'svg',
      { version: '1.1', viewBox: '0 0 48 48', width: '48px', height: '48px', className: className, 'aria-labelledby': this.props.a11yTitleId },
      React.createElement(
        'title',
        { id: this.props.a11yTitleId },
        a11yTitle
      ),
      React.createElement(
        'g',
        { id: 'social-email' },
        React.createElement('rect', { id: '_x2E_svg_306_', x: '0', y: '0', fill: 'none', width: '48', height: '48' }),
        React.createElement('path', { fill: '#231F20', stroke: '#231F20', strokeWidth: '2', strokeMiterlimit: '10', d: 'M35,32.5H13v-16h22V32.5z' }),
        React.createElement('polyline', { fill: 'none', stroke: '#FFFFFF', strokeWidth: '2', strokeLinecap: 'square', strokeMiterlimit: '10', points: '12,16.8985  24,26.8985 36,16.8985 \t' })
      )
    );
  }

});

module.exports = Icon;