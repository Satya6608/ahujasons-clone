<template>
  <div>
    <div class="top-nav">
      <div class="left">
        <p class="top-para">
          COMPLIMENTARY GIFT BOX PACKING ON ALL PRE-PAID ORDERS
        </p>
      </div>
      <div class="right">
        <ul>
          <li>
            <a href="#"
              ><img src="../../static/Img/india-flag.jpg" alt="" /><span
                >INR
              </span>
              <img
                class="flag-side"
                src="../../static/Img/down-arrow.png"
                alt=""
            /></a>
          </li>
          <li><a href="#">OUR STORES</a></li>
          <li><a href="#">MY ACCOUNT</a></li>
          <li><a href="#">BLOG</a></li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
import StickyNav from "../layout/StickyNav.vue";
export default {
  components: {
    StickyNav,
  },
  name: "TopNav",
};
</script>
<style>
.top-nav {
  display: flex;
  justify-content: space-between;
  font-family: jost-regular;
  padding: 6px 1%;
}
.left {
  font-size: 12px;
  display: flex;
  align-items: center;
}
.right ul {
  margin: 0;
  padding: 0;
  display: flex;
}
.right ul li {
  list-style: none;
  padding: 0 10px;
}
.right ul li a {
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
  color: #303030;
}
.right ul li a img {
  width: 16px;
}
.right ul li a span {
  font-size: 16px;
}
.right ul li a .flag-side {
  margin-bottom: -3px;
}
.line {
  border: 1px solid #3030301a;
  width: 97%;
  text-align: center;
  margin-left: 16px;
}
@media screen and (max-width: 768px) {
  .top-nav .left {
    width: 100%;
    display: block;
  }

  .top-nav .left p {
    text-align: center;
  }

  .top-nav .right {
    display: none;
  }
}
</style>