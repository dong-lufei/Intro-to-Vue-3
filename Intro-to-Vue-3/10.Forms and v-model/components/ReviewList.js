app.component("ReviewList", {
  props: {
    reviews: {
      // 评论
      type: Array,
      required: true
    }
  },
  template:
    /*html*/
    `<div class="review-container">
      <h3>Reviews:</h3>
      <ul>
        <li v-for="(review,i) in reviews" :key="i">
          {{review.name}} 给了 {{review.rating}} 颗星
          <br />
          "{{review.review}}"
        </li>
      </ul>
    </div>`
})
