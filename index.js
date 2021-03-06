const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

const addToPlaylist = (playlist, episode) => [...playlist, episode];


function removeFromPlaylist(playlist, episode) {
  return playlist.filter( function(e) {
    if (e.id === episode.id) {
      return false
    } else {
      return true
    }
  })
}

const getNextEpisodeInPlaylist = (playlist) => playlist[0]

function bingeWatch(playlist) {
  if (playlist.length === 0) {
    return "Please let there be more!"
  } else {
    var episode = getNextEpisodeInPlaylist(playlist)
    var nplaylist = removeFromPlaylist(playlist, episode)
    return bingeWatch(nplaylist)
  }
}
