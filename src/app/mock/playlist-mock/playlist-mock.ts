import { PlaylistModel } from 'src/app/model/playlist-model';

export const PlayListMock: PlaylistModel[] = [
    {
      id: 1,
      nome: "Brasil 360",
      userId: 1,
      image: "assets/imgs/playlist/brasil360.jpg",
      musicas: [
        {
          id: 1,
          title: "The Neighbourhood - Sweater Weather",
          album: "AA",
          tempo: 249,
          link: "assets/mp3/sweater-weather.mp3"
        },
        {
          id: 2,
          title: "EDEN - drugs",
          album: "BB",
          tempo: 360,
          link: "assets/mp3/drugs.mp3"
        },
        {
          id: 3,
          title: "Axel Thesleff - Bad Karma",
          album: "CC",
          tempo: 426,
          link: "assets/mp3/bad-karma.mp3"
        }
      ]
    },
    {
      id: 2,
      nome: "Reggaeton 2020",
      userId: 1,
      image: "assets/imgs/playlist/reggaeton2020.jpg",
      musicas: [
        {
          id: 4,
          title: "Breakbot - Baby I'm Yours",
          album: "DD",
          tempo: 138,
          link: "assets/mp3/baby-im-yours.mp3"
        },
        {
          id: 5,
          title: "Petit Biscuit - Sunset Lover",
          album: "EE",
          tempo: 201,
          link: "assets/mp3/sunset-lover.mp3"
        },
        {
          id: 6,
          title: "Kygo - Firestone",
          album: "EE",
          tempo: 207,
          link: "assets/mp3/firestone.mp3"
        },
      ]
    },
    {
      id: 3,
      nome: "",
      image: "assets/imgs/playlist/clubQueens.jpg",
      userId: 1,
      musicas: [
        // {
        //   id: 7,   
        //   title: "Somebody That I Used To Know",
        //   autor: "Gotye",
        //   album: "DD",
        //   tempo: 240,
        //   link: "tal1"
        // },
      ]
    },
    {
      id: 4,
      nome: "",
      image: "assets/imgs/playlist/sofrenciaSertaneja.jpg",
      userId: 1,
      musicas: [
        // {
        //   id: 8,   
        //   title: "Somebody That I Used To Know",
        //   autor: "Gotye",
        //   album: "DD",
        //   tempo: 240,
        //   link: "tal1"
        // },
      ]
    },
    {
      id: 5,
      nome: "",
      image: "assets/imgs/playlist/rockBrazuca.jpg",
      userId: 1,
      musicas: [
        // {
        //   id: 9,   
        //   title: "Somebody That I Used To Know",
        //   autor: "Gotye",
        //   album: "DD",
        //   tempo: 240,
        //   link: "tal1"
        // },
      ]
    },
    {
      id: 6,
      nome: "",
      image: "assets/imgs/playlist/eletroBR.jpg",
      userId: 1,
      musicas: [
        // {
        //   id: 10,   
        //   title: "Somebody That I Used To Know",
        //   autor: "Gotye",
        //   album: "DD",
        //   tempo: 240,
        //   link: "tal1"
        // },
      ]
    },
    {
      id: 7,
      nome: "",
      image: "assets/imgs/playlist/nerd80.jpg",
      userId: 1,
      musicas: [
        // {
        //   id: 11,   
        //   title: "Somebody That I Used To Know",
        //   autor: "Gotye",
        //   album: "DD",
        //   tempo: 240,
        //   link: "tal1"
        // },
      ]
    },
    {
      id: 8,
      nome: "",
      image: "assets/imgs/playlist/romantica8090.jpg",
      userId: 1,
      musicas: [
        // {
        //   id: 12,   
        //   title: "Somebody That I Used To Know",
        //   autor: "Gotye",
        //   album: "DD",
        //   tempo: 240,
        //   link: "tal1"
        // },
      ]
    }
  ];