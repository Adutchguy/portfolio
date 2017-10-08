import React from 'react';

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: 'M26.666 0h-21.332c-2.934 0-5.334 2.4-5.334 5.333v21.333c0 2.934 2.4 5.334 5.334 5.334h21.332c2.936 0 5.334-2.4 5.334-5.334v-21.333c0-2.934-2.398-5.333-5.334-5.333zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.864-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z',
      facebook: 'M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z',
      linkedin: 'M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z',
      github: 'M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z',
      outlook: 'M32 9.85v13.97c0 0.308-0.106 0.564-0.316 0.768-0.21 0.206-0.468 0.308-0.776 0.308h-11.394v-9.28l2.132 1.64c0.136 0.112 0.304 0.168 0.504 0.168s0.372-0.056 0.52-0.17l9.33-7.404zM19.514 7.156h11.394c0.284 0 0.526 0.084 0.726 0.256 0.2 0.17 0.31 0.4 0.332 0.68l-9.826 7.834-2.626-2.066v-6.704zM17.874 1.152v29.696l-17.874-3.088v-23.434l17.876-3.174zM12.474 16.060c-0.026-1.512-0.416-2.764-1.172-3.752-0.74-0.988-1.7-1.508-2.84-1.554-1.1 0.046-2.040 0.564-2.8 1.554-0.76 0.988-1.14 2.24-1.16 3.752 0.020 1.49 0.42 2.728 1.18 3.72 0.76 0.988 1.7 1.51 2.8 1.568 1.14-0.046 2.1-0.566 2.86-1.56 0.76-0.996 1.16-2.24 1.18-3.728zM8.314 12.75c0.574 0.024 1.060 0.34 1.444 0.956 0.38 0.614 0.58 1.392 0.58 2.336 0 0.96-0.2 1.74-0.58 2.36-0.4 0.62-0.88 0.94-1.46 0.94s-1.060-0.3-1.46-0.92c-0.4-0.62-0.58-1.4-0.58-2.34s0.18-1.72 0.58-2.32c0.38-0.6 0.86-0.92 1.44-0.96z',
      menu: 'M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z',
    };
  }

  render() {
    return(
      <svg
        className={this.props.className}
        width={this.props.width ? this.props.width : '50'}
        height={this.props.height ? this.props.height : '50'}
        viewBox="0 0 32 32"
        onClick={this.props.onClick ? this.props.onClick : null}
      >
        <path
          d={this.state[this.props.icon]}
        ></path>
      </svg>
    );
  }
}

export default Icon;
