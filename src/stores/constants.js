import { defineStore } from "pinia"

export const constantsStore = defineStore({
  id: "constantsStore",
  state: () => ({
    courtPositions: ["PG", "SG", "SF", "PF", "C"],
    nationalities: [
        "Anglia",
        "Brazylia",
        "Chorwacja",
        "Kanada",
        "Litwa",
        "Łotwa",
        "Polska",
        "Serbia",
        "Słowenia",
        "Szwecja",
        "Turcja",
        "USA"
    ],
    realClubs: [
        {
            name: "Anwil Włocławek",
            logo: "https://s1.static.esor.pzkosz.pl/internalfiles/image/kluby/s22/350-350/33.png",
            players: []
        },
        {
            name: "Arged BMSlam Stal Ostrów Wielkopolski",
            logo: "https://s1.static.esor.pzkosz.pl/internalfiles/image/kluby/s23/350-350/1492.png",
            players: []
        },
        {
            name: "Arka Gdynia",
            logo: "https://s1.static.esor.pzkosz.pl/internalfiles/image/kluby/s24/350-350/121.png",
            players: []
        },
        {
            name: "Astoria Bydgoszcz",
            logo: "https://s1.static.esor.pzkosz.pl/internalfiles/image/kluby/s24/350-350/4162.png",
            players: []
        }
    ]
  }),
  getters: {
      realClubsNames(state) {
        return state.realClubs.map(club => {
            return club.name
        })
      }
  },
  actions: {}
})
