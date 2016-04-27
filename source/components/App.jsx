import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    window.document.body.addEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    let currentSlide = 0;
    if (!(this.props.path.locationBeforeTransitions.pathname === '/')) {
      currentSlide = Number(this.props.path.locationBeforeTransitions.pathname);
    }
    switch (e.key) {
      case 'ArrowRight':
        browserHistory.push(String(currentSlide + 1));
        break;
      case 'ArrowLeft':
        browserHistory.push(String(currentSlide - 1));
        break;
      default:
    }
  }
  render() {
    return (
    <div onKeyDown={this.handleKeyPress}>
        {this.props.children}
    </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  path: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  path: state.routing,
});

const ConnectedApp = connect(
  mapStateToProps
)(App);

export default ConnectedApp;
