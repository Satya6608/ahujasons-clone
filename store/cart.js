import { onUpdated } from "vue"

export const state = () => ({
  itemsqty: null,
  items: []
})

export const mutations = {
  addItem(state, item) {
    console.log("addItem");
    if ((state.items.some(pro => pro.id_product === item.id_product)&& state.items.some(i => i.qty == item.qty))) {
      let itemsenc = state.items.some(i => i.qty == item.qty)
      if (itemsenc) {
        item.qty++
        state.itemsqty = false
        console.log(item.qty);
      }
    }
    else {
      state.items.push(item)
    }
  },
  removeItem(state, item) {
    state.items = state.items.filter(i => i !== item)
  },
  updateQuantity(state, item) {
    let itemsenc = state.items.some(i => i.qty == item.qty)
    if (itemsenc) {
      item.qty++
      state.itemsqty = false
    }
  },
  updateQuantityMin(state, item) {
    state.itemsqty = state.items.some(item => item.qty == 1)
    if (state.itemsqty) {
      state.itemsqty = true
    }
    else {
      item.qty--
    }
  }
}

export const actions = {
  addToCart({ commit }, item) {
    commit('addItem', item)
  },
  removeFromCart({ commit }, item) {
    commit('removeItem', item)
  },
  updateqtyplus({ commit }, item) {
    commit('updateQuantity', item)
  },
  updateqtymin({ commit }, item) {
    commit('updateQuantityMin', item)
  }
}