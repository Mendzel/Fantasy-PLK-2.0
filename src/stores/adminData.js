import { defineStore } from "pinia"

export const adminStore = defineStore({
  id: "adminData",
  state: () => ({
    showNewPlayerForm: false,
    showEditPlayerForm: false,
    newsColors: [
      {
        title: "Czerwony",
        value: "red"
      },
      {
        title: "Pomarańczowy",
        value: "orange"
      },
      {
        title: "Żółty",
        value: "yellow"
      },
      {
        title: "Zielony",
        value: "green"
      }
    ],
    newses: [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        color: "red",
        message:
          "Fusce a tristique justo. Nunc ut nisi neque. Nulla vel erat arcu. Etiam nunc nibh, sagittis id pharetra in, rutrum nec est. Mauris vel viverra risus. Vivamus vitae velit turpis. Sed pretium pretium nibh ut commodo. Sed lectus magna, sodales sit amet turpis et, scelerisque bibendum augue."
      },
      {
        id: 2,
        title: "Cras pretium arcu eget enim ultrices pellentesque.",
        color: "orange",
        message:
          "Nulla quis purus ac nisl hendrerit euismod quis vel lorem. Nunc purus velit, sodales nec purus quis, sagittis euismod libero. Duis turpis tellus, eleifend vitae lacus ac, efficitur cursus dui. Sed sit amet ante ac erat rhoncus dignissim in sed turpis. Nam dignissim nisl quis orci pulvinar, non euismod nisl tempus. Aliquam porta mauris mi, eu condimentum odio cursus ac. Nam hendrerit commodo metus sollicitudin mollis. Curabitur et tincidunt leo."
      },
      {
        id: 3,
        title: "Integer blandit quis diam id luctus.",
        color: "yellow",
        message:
          "Fusce at semper magna. Mauris ac rhoncus mauris. Duis enim metus, eleifend sit amet risus sed"
      },
      {
        id: 4,
        title: "Aliquam tempor urna ornare tortor condimentum",
        color: "green",
        message:
          "Vivamus bibendum ex in mi gravida, eu porttitor nulla congue. Morbi in semper elit. Suspendisse luctus gravida euismod. Proin ante eros, lacinia blandit suscipit at, faucibus vel lectus."
      },
      {
        id: 5,
        title: "Aliquam tempor urna ornare tortor condimentum",
        color: "green",
        message:
          "Vivamus bibendum ex in mi gravida, eu porttitor nulla congue. Morbi in semper elit. Suspendisse luctus gravida euismod. Proin ante eros, lacinia blandit suscipit at, faucibus vel lectus."
      }
    ]
  }),
  getters: {},
  actions: {
    addNews(title, color, message) {
      let id = Math.floor(Math.random() * 1000)
      this.newses.unshift({ id: id, title: title, color: color, message: message })
    },
    showTheForm(state) {
      if(state === 'new') {
        this.showNewPlayerForm = true
      } else if (state === 'edit') {
        this.showEditPlayerForm = true
      }
    },
    closeTheForm() {
      this.showNewPlayerForm = false
      this.showEditPlayerForm = false
    }
  }
})
