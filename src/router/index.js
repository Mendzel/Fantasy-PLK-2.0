import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MainPage from '@/views/MainPage.vue'
import SquadView from '@/views/SquadView.vue'
import CompetitionsView from '@/views/CompetitionsView.vue'
import StatsView from '@/views/StatsView.vue'
import TransfersView from '@/views/TransfersView.vue'
import DraftView from '@/views/DraftView.vue'
import LeagueHistoryView from '@/views/LeagueHistoryView.vue'
import AdminView from '@/views/AdminView.vue'
import Announcements from '@/components/AdminPanel/Announcements.vue'
import EditPlayers from '@/components/AdminPanel/EditPlayers.vue'
import EditTeams from '@/components/AdminPanel/EditTeams.vue'
import EditUsers from '@/components/AdminPanel/EditUsers.vue'
import RoundScores from '@/components/AdminPanel/RoundScores.vue'
import MatchScores from '@/components/AdminPanel/MatchScores.vue'
import LeagueTable from '@/components/Competitions/LeagueTable.vue'
import Schedule from '@/components/Competitions/Schedule.vue'
import Cup from '@/components/Competitions/Cup.vue'
import Playoff from '@/components/Competitions/Playoff.vue'
import TeamsStats from '@/components/Statistics/TeamsStats.vue'
import PlayersStats from '@/components/Statistics/PlayersStats.vue'
import MVPRace from '@/components/Statistics/MVPRace.vue'
import Auctions from '@/components/Transfers/Auctions.vue'
import FreeAgents from '@/components/Transfers/FreeAgents.vue'
import Draft from '@/components/Draft/Draft.vue'
import DraftList from '@/components/Draft/DraftList.vue'
import PickOrder from '@/components/Draft/PickOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: MainPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/squad',
          name: 'squad',
          component: SquadView
        },
        {
          path: '/competitions',
          name: 'competitions',
          component: CompetitionsView,
          redirect: '/competitions/league-table',
          children: [
            {
              path: '/competitions/league-table',
              name: 'league-table',
              component: LeagueTable 
            },
            {
              path: '/competitions/schedule',
              name: 'schedule',
              component: Schedule 
            },
            {
              path: '/competitions/cup',
              name: 'Cup',
              component: Cup 
            },
            {
              path: '/competitions/playoff',
              name: 'playoff',
              component: Playoff 
            },
          ]
        },
        {
          path: '/stats',
          name: 'stats',
          component: StatsView,
          redirect: '/stats/teams',
          children: [
            {
              path: '/stats/teams',
              name: 'team-stats',
              component: TeamsStats
            },
            {
              path: '/stats/players',
              name: 'players-stats',
              component: PlayersStats
            },
            {
              path: '/stats/mvp',
              name: 'mvp-race',
              component: MVPRace
            },
          ]
        },
        {
          path: '/transfers',
          name: 'transfers',
          component: TransfersView,
          redirect: '/transfers/auctions',
          children: [
            {
              path: '/transfers/auctions',
              name: 'auctions',
              component: Auctions
            },
            {
              path: '/transfers/free-agents',
              name: 'free-agents',
              component: FreeAgents
            },
          ]
        },
        {
          path: '/draft',
          name: 'draft-view',
          component: DraftView,
          redirect: '/draft/draft',
          children: [
            {
              path: '/draft/draft',
              name: 'draft',
              component: Draft
            },
            {
              path: '/draft/pick-order',
              name: 'pick-order',
              component: PickOrder
            },
            {
              path: '/draft/draft-list',
              name: 'draft-list',
              component: DraftList
            },
          ]
        },
        {
          path: '/league-history',
          name: 'league-history',
          component: LeagueHistoryView
        },
        {
          path: '/admin',
          name: 'admin',
          component: AdminView,
          redirect: '/admin/announcements',
          children: [
            {
              path: '/admin/announcements',
              name: 'announcements',
              component: Announcements 
            },
            {
              path: '/admin/players',
              name: 'edit-players',
              component: EditPlayers 
            },
            {
              path: '/admin/round-scores',
              name: 'round-scores',
              component: RoundScores
            },
            {
              path: '/admin/teams',
              name: 'edit-teams',
              component: EditTeams 
            },
            {
              path: '/admin/users',
              name: 'edit-users',
              component: EditUsers
            },
            {
              path: '/admin/match-scores',
              name: 'match-scores',
              component: MatchScores
            }
          ]
        },
      ]
    },
  ]
})

export default router
