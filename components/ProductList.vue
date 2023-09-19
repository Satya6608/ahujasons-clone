<template>
  <div class="product-container">
    <div class="new-class" v-for="(item, index) in Productsitem" :key="index">
      <div class="slide-box">
        <div class="product-box">
          <div class="view-detail">
            <nuxt-link
            :to="'/products/' + item.url_key"
              id="details"
              class="view_detail_btn"
            >
              View Detail
            </nuxt-link>
          </div>
          <nuxt-link :to="'/products/' + item.url_key">
            <div class="image-single">
              <img :src="item.image" alt="" />
            </div>
            <div class="img-hover">
              <ClientOnly>
                <vueSlickcarousel v-bind="slickOptions">
                  <div
                    class="image-single"
                    v-for="(i, j) in item.gallery"
                    :key="j"
                  >
                    <img :src="i.image" alt="" />
                  </div>
                </vueSlickcarousel>
              </ClientOnly>
            </div>
          </nuxt-link>
          <a href="/" class="wishlist"
            ><img src="../static/Img/Heart.svg" alt=""
          /></a>
        </div>
        <div class="product-info">
          <p class="product-name">{{ item.name }}</p>
          <div class="price">
            <p>
              <span class="price">Rs.{{ item.selling_price }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="loaderproduct"
      v-show="dataCountFlag"
      v-observe-visibility="handleScroll"
    >
      <img src="../static/Img/giphy.gif" alt="" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueObserveVisibility from "vue-observe-visibility";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import vueSlickcarousel from "vue-slick-carousel";
Vue.use(VueObserveVisibility);
export default {
  components: {
    vueSlickcarousel,
  },
  name: "Product-List",
  props: ["Productsitem", "handleScroll", "dataCountFlag"],
  data() {
    return {
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 500,
        pauseOnHover: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              dots: true,
            },
          },
        ],
      },
    };
  },
};
</script>
<style >
/* *********************** Product List Design *******************************/

.product-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  align-items: center;
  margin-left: -15px;
  margin-right: -15px;
}
.new-class {
  width: 25%;
}
.slide-box {
  padding-left: 15px;
  padding-right: 15px;
}
.img-hover {
  display: none;
}
.slide-box:hover .img-hover {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.product-box .view-detail {
  position: absolute;
  display: block;
  color: #fff;
  font-size: 13px;
  line-height: 38px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  bottom: -38px;
  text-decoration: none;
  opacity: 0;
  z-index: 2;
  font-weight: 600;
  background: #fff;
  padding: 5px 15px 0;
}
.product-box .view-detail a {
    color: #282c3f;
    border: 1px solid #d4d5d9;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;
    display: block;
    line-height: 30px;
    border-radius: 3px;
}
.slick-dots{
  position: absolute;
  list-style: none;
  display: block;
  text-align: center;
  width: 100%;
  bottom: 39px;
  z-index: 4;
  background-color: #fff;
}
.slide-box:hover .view-detail {
  opacity: 1;
  bottom: 0;
}
.product-box {
  position: relative;
  overflow: hidden;
}
.image-single img {
  width: 100%;
}
a.wishlist {
  z-index: 2;
  position: absolute;
  right: 5px;
  font-size: 0;
  display: block;
  height: 30px;
  width: 30px;
  text-align: center;
  border-radius: 30px;
  opacity: 1;
  color: #626262;
  text-transform: uppercase;
  text-decoration: none;
  pointer-events: none;
  padding-top: 7px;
  transition: all 0.1s;
  top: 5px;
}
.slide-box .product-name {
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #0c0c0c;
}
.price {
  margin: 5% 0%;
}
span.price {
  font-size: 17px !important;
  color: #4c0b36 !important;
  font-family: Jost-medium;
}
.loaderproduct {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 950px) {
  .new-class {
    width: 33.33%;
  }
}
@media screen and (max-width: 768px) {
  .new-class {
    width: 50%;
  }
  .slide-box {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>