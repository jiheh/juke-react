import React from 'react';

class Footer extends React.Component {

  render() {
    return(
      <div>
        {this.props.running &&
          <footer>
          <div>
            <div className="pull-left">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-step-backward"></span>
              </button>

              {this.props.playing ?
              <button className="btn btn-default" onClick={this.props.pause}>
                <span className="glyphicon glyphicon-pause"></span>
              </button>
              :
              <button className="btn btn-default" onClick={this.props.play}>
                <span className="glyphicon glyphicon-play"></span>
              </button>
              }

              <button className="btn btn-default">
                <span className="glyphicon glyphicon-step-forward"></span>
              </button>
              
            </div>
            <div className="bar">
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
          </footer>
        }
      </div>
    )  
  }
}

export default Footer;