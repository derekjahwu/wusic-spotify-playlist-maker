import './stylesheets/App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import React from 'react';
import Spotify from './util/Spotify';

class App extends React.Component {
 constructor(props) {
   super(props)
  this.state = {
    searchResults: [],
    playlistName: 'New Playlist',
    playlistTracks: []
  }


 }

 componentDidMount() {
  window.addEventListener('load', Spotify.search(''));
}

 addTrack = (track) => {
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
        return;
    } 

    tracks.push(track)
    this.setState({playlistTracks: tracks})
 }

 removeTrack = (track) => {
  let tracks = this.state.playlistTracks;
  tracks = tracks.filter(currentTracks => currentTracks.id !== track.id)

  this.setState({playlistTracks: tracks})
 }

 updatePlaylistName = (name) => {
    this.setState({playlistName: name })
 }

 savePlaylist = () => {
   let trackURIs = this.state.playlistTracks.map(track => track.uri)

   Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
     this.setState({
       playlistName: 'New Playlist',
       playlistTracks: [],
     })
   })
 }

 search = (term) => {
  Spotify.search(term).then(searchResults => {
    this.setState({searchResults: searchResults})
  })
 }

  render() {
  return (
  <div>
    <h1><span className="highlight">Wu</span>sic</h1>
    <div className="App">
      <SearchBar onSearch={this.search} />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
        <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
      </div>
    </div>
  </div>
  );
}
}

export default App;