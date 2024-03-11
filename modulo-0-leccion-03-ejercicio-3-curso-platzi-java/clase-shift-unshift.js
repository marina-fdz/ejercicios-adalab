//Exercise: Managing a Playlist

function managePlaylist (playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['Sweater Weather', 'What you know', 'Eventually']
const newSongToAdd = 'The adults are talking'
const updatedPlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log('Initial playlist: ', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Updated playlist: ', updatedPlaylist)