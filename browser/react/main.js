import React from 'react';
import Album from './Album';
import Sidebar from './Sidebar';
import Footer from './Footer';

const audio = document.createElement('audio');

class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      album: {},
      currentSong: null,
      playing: false
    };

    // Is there a better way to do this?
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    // this.skip = this.skip.bind(this);
    // this.back = this.back.bind(this);
  }

  start(soundUrl) {
    audio.src =  soundUrl;
    this.setState({
      currentSong: soundUrl,
      playing: true
    });
    audio.load();
    audio.play();
  }

  pause() {
    audio.pause();
    this.setState({playing: false});
  }

  play() {
    audio.play();
    this.setState({playing: true});
  }

  // skip() {
  //   this.start()
  // }

  // back() {

  // }

  componentDidMount () {
    fetch('./api/albums/1')
    .then(function (response) {
      return response.json();
    })
    .then(data => {
      // How to set image size ahead of time?
      data.imageUrl = `/api/albums/${data.id}/image`;
      this.setState({album: data});
    })
    .catch(function (err) {
      console.error(err);
    });
  }

  render() {
    return(
      <div>
        <Album album={this.state.album} start={this.start} currentSong={this.state.currentSong} />
        <Footer running={this.state.currentSong} playing={this.state.playing} pause={this.pause} play={this.play} />
      </div>
    )
  }
}

export default Main;
