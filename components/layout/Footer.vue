<template>
  <footer>
    <div class="footer-divider-logo-wrapper">
      <div class="footer-divider-logo">
        <img src="../../static/Img/smallLogo.png" alt="" />
      </div>
    </div>
    <div class="footer">
      <div class="first-footer">
        <div class="footer-col" v-for="(item, index) in items" :key="index">
          <h2 @click="toggleAcc(index)">
            <span :class="[checkAcc == index ? 'transform' : '']"
              >{{ item.header }}<img src="../../static/Img/down-arrow.png" alt=""
            /></span>
          </h2>
          <ul
            :class="[
              checkAcc == index ? 'list-foot footer-active' : 'list-foot',
            ]"
          >
            <li v-for="(list, j) in item.content" :key="j">{{ list }}</li>
          </ul>
        </div>
      </div>
      <div class="footer-col-last">
        <h2>SIGN UP AND SAVE</h2>
        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
        <div class="footer-input">
          <input
            type="text"
            name=""
            placeholder="Enter your email"
            id=""
          /><button>Subscribe</button>
        </div>
        <div class="footer-social-media_container">
          <h3>GIVE US A FOLLOW</h3>
          <div class="social-media">
            <a href="/" target="_blank"><img src="../../static/Img/facebook.png" alt="image" /></a>
            <a href="/" target="_blank"
              ><img src="../../static/Img/instagram.png" alt="image"
            /></a>
            <a href="/" target="_blank"><img src="../../static/Img/twitter.png" alt="image" /></a>
            <a href="/" target="_blank"><img src="../../static/Img/linkedin.png" alt="image" /></a>
            <a href="/" target="_blank"
              ><img src="../../static/Img/pinterest.png" alt="image"
            /></a>
            <a href="/" target="_blank"><img src="../../static/Img/youtube.png" alt="image" /></a>
          </div>
        </div>
        <div class="d-none footer-copy-right">
          <p>Copyright © 2021 by Ahujasons I Powered by GreenHonchos</p>
        </div>
      </div>
    </div>
    <div class="for-mobile footer-copy">
      <p>Copyright © 2021 by Ahujasons I Powered by GreenHonchos</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "My-Footer",
  data() {
    return {
      checkAcc: null,
      items: [
        {
          header: "SHOP",
          content: ["Men", "Women", "Home", "Sale", "Collection"],
        },
        {
          header: "QUICK LINKS",
          content: [
            "Ahujasons Export",
            "Ahujasons Wholesale",
            "Our Story",
            "Legacy",
            "Craftsman ship",
            "Our Store",
            "Blogs",
          ],
        },
        {
          header: "CUSTOMER SERVICE",
          content: [
            "Terms and Condition",
            "Shipping & Delivery",
            "Returns & Cancellation",
            "Contact us",
            "Store appointment",
          ],
        },
        {
          header: "MY PROFILE",
          content: [
            "My Account",
            "Track Order",
            "My Cart",
            "Wishlist",
            "Order History",
          ],
        },
      ],
    };
  },
  methods: {
    toggleAcc(index) {
      if (index == this.checkAcc) {
        this.checkAcc = null;
      } else {
        this.checkAcc = index;
      }
    },
  },
};
</script>

<style>
.footer {
  display: flex;
  align-items: flex-start;
  padding: 2% 5%;
}
.first-footer {
  display: flex;
  align-items: flex-start;
  width: 85%;
}
.footer-divider-logo-wrapper {
  position: relative;
  width: 98%;
  height: 10px;
  border: 1px solid #eae4cf;
  border-right: none;
  border-left: none;
  margin: 50px auto;
}

.footer-divider-logo {
  position: absolute;
  background-color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 120px;
  text-align: center;
}

.footer-divider-logo img {
  width: 70px;
}

.footer ul li {
  list-style: none;
  font-size: 16px;
  opacity: 0.8;
  line-height: 36px;
}

.footer-col {
  width: 25%;
  padding: 0 1%;
  box-sizing: border-box;
  text-align: start;
}
.footer-col span > img {
  display: none;
}

.footer-col h2,
.footer-col-last h2 {
  font-size: 16px;
  letter-spacing: 3.2px;
  line-height: 23px;
  font-weight: 500;
  margin-bottom: 10px;
}

.footer-col-last {
  width: 35%;
  display: inline-block;
}

.footer-col-last p {
  font-size: 14px;
  width: 85%;
  line-height: 20px;
}

.footer-input {
  border-bottom: 2px solid #000000;
  background: white;
  display: flex;
  align-items: center;
  margin-top: 12px;
}

.footer-input input {
  border: none;
  width: 100%;
  background-color: transparent;
  padding: 10px 10px 10px 0;
}

.footer-input button {
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  border: none;
  background: transparent;
}

.footer-input button:focus {
  outline: none;
}

.footer-input input:focus {
  outline: none;
}

.footer-social-media_container {
  margin: 50px 0;
}

.footer-social-media_container h3 {
  font-size: 14px;
      letter-spacing: 2.8px;
}

.social-media {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.social-media a {
  margin-right: 20px;
}

.footer-copy-right {
  width: 110%;
}

.footer-copy-right p {
  display: block;
  font-size: 14px;
  margin: 0;
  width: 100%;
}
.social-media a img {
      width: 22px;
}
@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column-reverse;
    padding: 0% 2%;
}
.first-footer {
    width: 100%;
    flex-direction: column;
    padding: 0;
}
.footer-col {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid hsla(0,0%,77.3%,.47059);
    padding: 15px 0%;
}
.footer-col h2 span img{
    display: block;
    width: 16px;
    float: right;
}
.transform img{
transform: rotate(180deg);
}
.footer-col-last {
    width: 100%;
}
.social-media {
    width: 70%;
}
.list-foot{
    display: none;
}
.footer-active{
    display: block;
}
.footer-copy{
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 22px 2% 55px 2%;
}
}
</style>