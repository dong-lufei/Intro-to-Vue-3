const app = Vue.createApp({
  data() {
    return {
      cart: 0, // 购物车商品
      product: "Socks", // 产品
      image: "../assets/images/socks_green.jpg",
      // inventory: 10, // 库存
      inventory: true, // 库存
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "../assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "../assets/images/socks_blue.jpg" }
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart++
    },
    updateImage(variantImage) {
      this.image = variantImage
    }
  }
})
