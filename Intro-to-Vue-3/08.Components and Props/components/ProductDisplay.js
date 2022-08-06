// 这是注册全局组件
// app.component("product-display", {
app.component("ProductDisplay", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      product: "Socks", // 产品
      brand: "Vue Mastery", // 品牌
      selectedVariant: 0, // 选中的产品规格数组索引
      details: ["50% cotton", "30% wool", "20% polyester"], // 产品详情：成分
      variants: [
        {
          id: 2234,
          color: "green",
          image: "../assets/images/socks_green.jpg",
          quantity: 50 // 数量
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
      // console.log("需要抛事件给父组件")
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
    },
    // 运费
    shipping() {
      if (this.premium) {
        return "包邮" // 免运费
      }
      return "2.99" // 运费2.99
    }
  },
  template: `
  <div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <img :src="image" />
    </div>
    <div class="product-info">
      <h1>{{title}}</h1>
      <p v-if="inStock">有存货</p>
      <p v-else>缺货</p>

      <p>运费：{{shipping}}</p>
      <ul>
        <li v-for="detail in details">{{detail}}</li>
      </ul>
      <div
        v-for="(variant,i) in variants"
        :key="variant.id"
        @click="updateVariant(i)"
        class="color-circle"
        :style="{backgroundColor:variant.color}"
      ></div>
      <button
        @click="addToCart"
        class="button"
        :disabled="!inStock"
        :class="{disabledButton:!inStock}"
      >
        添加到购物车
      </button>
    </div>
  </div>
  </div>
  `
})
