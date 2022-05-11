import { defineStore } from "pinia"

export const useNavigationStore = defineStore({
  id: "navigation",
  state: () => ({
    navDrawerLinksList: [
      {
        prependIcon: "mdi-account-group",
        title: "Skład",
        value: "squad",
        path: "/squad"
      },
      {
        prependIcon: "mdi-trophy",
        title: "Rozgrywki",
        value: "competitions",
        path: "/competitions",
        tabs: ["Terminarz", "Puchar Fantasy", "Playoff"]
      },
      {
        prependIcon: "mdi-podium-gold",
        title: "Statystyki",
        value: "stats",
        path: "/stats",
        tabs: ["Drużynowe", "Zawodników", "MVP Race"]
      },
      {
        prependIcon: "mdi-swap-horizontal",
        title: "Transfery",
        value: "transfers",
        path: "/transfers",
        tabs: ["Licytacje", "Wolni Zawodnicy"]
      },
      {
        prependIcon: "mdi-clipboard-list",
        title: "Draft",
        value: "draft",
        path: "/draft",
        tabs: ["Draft", "Kolejność wyboru", "Lista draftowa"]
      },
      {
        prependIcon: "mdi-medal",
        title: "Poprzedni Zwycięzcy",
        value: "league-history",
        path: "/league-history"
      }
    ],
    tabs: {
      competitions: [
        { tab: "Tabela", path: "/competitions/league-table" },
        { tab: "Terminarz", path: "/competitions/schedule" },
        { tab: "Puchar Fantasy", path: "/competitions/cup" },
        { tab: "Playoff", path: "/competitions/playoff" },
      ],
      stats: [
          { tab: "Drużynowe", path: "/stats/teams"},
          { tab: "Zawodników", path: "/stats/players"},
          { tab: "MVP Race", path: "/stats/mvp"},
      ],
      transfers: [
        { tab: "Licytacje", path: "/transfers/auctions"},
        { tab: "Wolni Zawodnicy", path: "/transfers/free-agents"},
      ],
      draft: [
        { tab: "Draft", path: "/draft/draft"},
        { tab: "Kolejność Wyboru", path: "/draft/pick-order"},
        { tab: "Lista Draftowa", path: "/draft/draft-list"},
      ],
      admin: [
        { tab: "Komunikaty", path: "/admin" },
        { tab: "Zawodnicy", path: "/admin/players" },
        { tab: "Wyniki Kolejek", path: "/admin/round-scores" },
        { tab: "Drużyny", path: "/admin/teams" },
        { tab: "Userzy", path: "/admin/users" },
        { tab: "Wyniki Meczów", path: "/admin/match-scores" },
      ]
    }
  }),
  getters: {},
  actions: {}
})
