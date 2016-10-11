import React from 'react';

class Album extends React.Component {

  render() {
    return(
      <div className="album col-xs-10">
        <div>
          <h3>{this.props.album.name}</h3>
          <img src={this.props.album.imageUrl} className="img-thumbnail" />
        </div>
          
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
            
          <tbody>
            {this.props.album.songs && this.props.album.songs.map((song, index) => (
              <tr key={index} className={this.props.currentSong === song.url ? 'active' : ''}>
                {this.props.currentSong !== song.url ? 
                  <td>
                    <button className="btn btn-default btn-xs" onClick = {() => this.props.start(song.url)}>
                      <span className="glyphicon glyphicon-play"></span>
                    </button>
                  </td>
                : <td></td>}
                <td>{song.name}</td>
                <td>{song.artists.map((artist) => (artist.name)).join(", ")}</td>
                <td>{song.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Album;