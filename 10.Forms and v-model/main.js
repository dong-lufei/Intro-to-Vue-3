const app = Vue.createApp({
  data() {
    return {
      cart: [], // 购物车
      premium: false // 价格
    }
  },
  methods: {
    // 更新购物车数量
    updateCart(id) {
      this.cart.push(id)
    }
  }
})
