const app = Vue.createApp({
  data() {
    return {
      cart: 0, // 购物车
      product: "Socks", // 产品
      brand: "Vue Mastery", // 品牌
      selectedVariant: 0, // 选中的产品规格数组索引
      details: ["50% cotton", "30% wool", "20% polyester"], // 产品详情：成分
      variants: [
        {
          id: 2234,
          color: "green",
          image: "../assets/images/socks_green.jpg",
          quantity: 50
        },
        {
          id: 2235,
          color: "blue",
          image: "../assets/images/socks_blue.jpg",
          quantity: 0
        }
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart++
    },
    updateVariant(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product
    },
    // 产品图片url
    image() {
      return this.variants[this.selectedVariant].image
    },
    // 库存
    inStock() {
      return this.variants[this.selectedVariant].quantity
    }
  }
})
