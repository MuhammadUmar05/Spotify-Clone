import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import song_1 from './song-1.jpeg'
import song_2 from './song-2.jpeg'
import song_3 from './song-3.jpeg'
import song_4 from './song-4.jpeg'
import song_5 from './song-5.jpeg'
import song_6 from './song-6.jpeg'
import song_7 from './song-7.jpeg'
import song_8 from './song-8.jpeg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from './song-1.mp3'
import song2 from './song-2.mp3'
import song3 from './song-3.mp3'
import song4 from './song-4.mp3'
import song5 from './song-5.mp3'
import song6 from './song-6.mp3'
import song7 from './song-7.mp3'
import song8 from './song-8.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {
        id: 0,
        name: "Top 50 Global",
        image: img8,
        desc: "The hottest global tracks of the week",
        bgColor: "#2a4365"
    },

    {
        id: 1,
        name: "Top 50 US",
        image: img9,
        desc: "The hottest US tracks of the week",
        bgColor: "#d41a4c"
    },
    {
        id: 2,
        name: "Mega Hits",
        image: img11,
        desc: "Massive chart-topping anthems",
        bgColor: "#234e52"
    },
    {
        id: 3,
        name: "Trending US",
        image: img10,
        desc: "The latest buzzing hits in the US",
        bgColor: "#742a2a"
    },
    {
        id: 4,
        name: "Trending Global",
        image: img16,
        desc: "The latest buzzing hits worldwide",
        bgColor: "#44337a"
    },
    {
        id: 5,
        name: "Happy Favorites",
        image: img15,
        desc: "Feel-good tunes to lift your mood",
        bgColor: "#744210"
    }
]

export const songsData = [
    {
        id: 0,
        name: "I Wanna Be Yours",
        image: song_1,
        file: song1,
        desc: "Arctic Monkeys",
        duration: "3:03"
    },
    {
        id: 1,
        name: "Starboy",
        image: song_2,
        file: song2,
        desc: "The Weeknd, Daft Punk",
        duration: "3:50"
    },
    {
        id: 2,
        name: "Softcore",
        image: song_3,
        file: song3,
        desc: "The Neighbourhood",
        duration: "3:26"
    },

    {
        id: 3,
        name: "BIRDS OF A FEATHER",
        image: song_5,
        file: song4,
        desc: "Billie Eilish",
        duration: "3:30"
    },
    {
        id: 4,
        name: "Sweater Weather",
        image: song_4,
        file: song5,
        desc: "The Neighbourhood",
        duration: "4:00"
    },
    {
        id: 5,
        name: "Timeless",
        image: song_6,
        file: song6,
        desc: "The Weeknd, Playboi Carti",
        duration: "4:16"
    },
    {
        id: 6,
        name: "If We Have Each Other",
        image: song_7,
        file: song7,
        desc: "Alec Benjamin",
        duration: "3:01"
    },
    {
        id: 7,
        name: "Apocalypse",
        image: song_8,
        file: song8,
        desc: "Cigarettes After Sex",
        duration: "4:50"
    }
]