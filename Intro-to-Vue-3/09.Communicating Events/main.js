const app = Vue.createApp({
  data() {
    return {
      cart: [], // 购物车
      premium: false // 价格
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
})
