import { defineStore } from "pinia"

export const playersAndTeamsStore = defineStore({
  id: "playersAndTeamsStore",
  state: () => ({
    players: [
      {
        id: 1,
        name: "Szymon Szewczyk",
        age: 40,
        position: "C",
        nationality: "Polska",
        club: "Anwil Włocławek",
        fantasyClub: "Orki z Majorki",
        photoURL: "xxx",
        pointsScored: 0
      },
      {
        id: 2,
        name: "Maciej Bojanowski",
        age: 27,
        position: "SF",
        nationality: "Polska",
        club: "Anwil Włocławek",
        fantasyClub: "Orki z Majorki",
        photoURL: "xxx",
        pointsScored: 0
      }
    ],
    teams: [
      {
        id: 1,
        name: "Orki z Majorki",
        coach: "Piotr Łukaszewski",
        colorPrimary: "",
        colorSecondary: "",
        logoURL: "",
        transfersLeft: 4,
        players: [], // Czy robimy oddzielna liste i idzie update czy jak
        // pointsInTheLeague: 0,
        // pointsScored: 0,
        // pointsConceded: 0,
        // wins: 0
      },
      {
        id: 2,
        name: "Coconut Club",
        coach: "Konrad Mendzelewski",
        colorPrimary: "",
        colorSecondary: "",
        logoURL: "",
        transfersLeft: 4,
        players: [], // Czy robimy oddzielna liste i idzie update czy jak
        // pointsInTheLeague: 0,
        // pointsScored: 0,
        // pointsConceded: 0,
        // wins: 0
      }
    ]
  }),
  getters: {
    listOfPlayers(state) {
      return state.players.map(player => {
        return player.name
      })
    },
    listOfTeams(state) {
      return state.teams.map(team => {
        return team.name
      })
    }
  },
  actions: {
    findPlayer(playerName) {
        return this.players.find(player => player.name === playerName)
    }
  }
})
