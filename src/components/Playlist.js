import React from 'react';
import '../stylesheets/Playlist.css';
import Tracklist from './Tracklist';

class Playlist extends React.Component {

handleNameChange = (e) => {
    e.preventDefault();
    this.props.onNameChange(e.target.value)
} 

    render() {
        return (
        <div className="Playlist">
            <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
           <Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        </div>
        )
    }
}

export default Playlist