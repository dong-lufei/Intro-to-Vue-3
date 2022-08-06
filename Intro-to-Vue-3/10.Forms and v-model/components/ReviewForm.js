// 第二种属性绑定方式 v-model
app.component("ReviewForm", {
  data() {
    return {
      name: "",
      review: "", // 评论
      rating: null // 等级
    }
  },
  methods: {
    onSubmit() {
      // 提交验证数据
      if (!this.name || !this.review || !this.rating) {
        alert("填写不完整，请填写每个字段")
        return
      }

      const productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }
      this.$emit("review-submitted", productReview)
      this.name = ""
      this.review = ""
      this.rating = null
    }
  },
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>发表评价</h3>
      <label for="name">姓名:</label>
      <input id="name" v-model="name" />

      <label for="review">评价:</label>
      <textarea id="review" v-model="review"></textarea>

      <label for="rating">星星:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <input class="button" type="submit" value="提交" />
    </form>`
})
