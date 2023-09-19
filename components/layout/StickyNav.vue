<template>
  <nav class="navbar-sticky">
    <div class="header">
      <div class="toggle for-mobile" @click="toggle()">
        <img src="../../static/Img/toggle.svg" alt="" >
      </div>
      <div
        :class="[checktoggle ? 'navbar active-menu' : 'navbar']"
        @click="toggle()"
      >
        <div class="navbar-nav" @click="toggle()">
          <div class="for-mobile close-btn" @click="toggle()">
            <img src="../../static/Img/cancel.png" alt="" >
          </div>
          <ul>
            <li class="nav-item">
              <a href="#"
                ><span>WOMEN</span>
                <img src="../../static/Img/down-arrow.png" alt=""
              ></a>
            </li>
            <li class="nav-item">
              <a href="#"
                ><span> MEN</span>
                <img src="../../static/Img/down-arrow.png" alt=""
              ></a>
            </li>
            <li class="nav-item"><a href="#">SALE</a></li>
            <li class="nav-item">
              <a href="#"
                ><span> COLLECTION</span>
                <img src="../../static/Img/down-arrow.png" alt=""
              ></a>
            </li>
            <li class="nav-item for-mobile">
              <a href="#"
                ><span>OUR STORY</span>
                <img src="../../static/Img/down-arrow.png" alt=""
              ></a>
            </li>
            <li class="nav-item for-mobile"><a href="#">CRAFTSMANSHIP</a></li>
          </ul>
        </div>
      </div>
      <nuxt-link to="/" class="logo d-none"
        ><img src="../../static/Img/logo.svg" alt=""
      ></nuxt-link>
      <nuxt-link to="/" class="mobile-logo"
        ><img src="../../static/Img/smallLogo.png" alt=""
      ></nuxt-link>
      <div class="left">
        <div class="left-inner">
          <ul>
            <li>
              <a href="#"
                ><span>OUR STORY</span>
                <img src="../../static/Img/down-arrow.png" alt=""
              ></a>
            </li>
            <li><a href="#">CRAFTSMANSHIP</a></li>
          </ul>
        </div>
        <div class="logins">
          <ul>
            <li  class="search-container">
             <input type="text" placeholder="Search">
            </li>
            <li>
              <a href=""><img src="../../static/Img/Heart.svg" alt="" ></a>
            </li>
            <li>
              <nuxt-link to="/cart"><img src="../../static/Img/shopping-bag.svg" alt="" >
              <span class="counter-number">{{ length }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "StickyNav",
  computed: mapState({
    length: (state) => state.cart.items.length,
  }),
  data() {
    return {
      checktoggle: false,
    };
  },
  methods: {
    toggle() {
      if (this.checktoggle == false) {
        this.checktoggle = true;
      } else {
        this.checktoggle = false;
      }
    },
  },
};
</script>
<style>
.navbar-sticky {
    position: sticky;
    top: 0;
    z-index: 5;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%)
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.navbar {
  width: 30%;
  padding-left: 5%;
}
.navbar-nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-nav ul li {
  list-style: none;
}
.navbar-nav ul li:hover a img {
  transform: rotateX(180deg);
}
.navbar-nav ul li a {
  text-decoration: none;
  color: #303030;
  font-family: jost-medium;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-nav ul li a img {
  width: 16px;
}
.logo {
  width: 20%;
  display: flex;
  justify-content: center;
  margin-top: 1%;
  margin-bottom: 1%;
}
.logo img {
  width: 150px;
}
.mobile-logo {
  display: none;
}
.left {
  display: flex;
  width: 40%;
  justify-content: space-between;
}
.left .left-inner {
  width: 55%;
}
.left .left-inner ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left .left-inner ul li {
  list-style: none;
}
.left .left-inner ul li:hover a img {
  transform: rotateX(180deg);
}
.left .left-inner ul li a {
  text-decoration: none;
  color: #303030;
  font-size: 16px;
  font-family: jost-medium;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left .left-inner ul li a img {
  width: 16px;
}
.left .logins {
  width: 30%;
}
.left .logins ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left .logins ul li {
  list-style: none;
}
.left .logins ul li a {
  text-decoration: none;
}
.search-container input[type=text] {
    font-size: 20px;
    background-image: url(../../static/Img/search.svg);
    height: 22px!important;
    width: 22px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 20px;
    border: 0;
    font-size: 0;
    background-color: transparent;
    cursor: pointer;
    margin-top: 7px!important;
}
.search-container ::placeholder{
  color: transparent;
  }
.search-container input[type=text]:focus::placeholder{
  color: #495057 !important;
}
.search-container input:focus {
  outline: none;
  cursor: text;
    box-shadow: none;
    transition: width .5s;
    width: 200px;
    border: 1px solid #3a3a3a;
    background: #fff;
    width: 421px;
    box-sizing: border-box;
    font-size: 15px;
    min-height: 36px;
    color: #a2a2a2;
    border-radius: 5px;
    margin-top: 0!important;
    background-image: url(../../static/Img/search.svg)!important;
    background-repeat: no-repeat;
    background-position: 10px 10px;
    background-size: 17px;
    padding: 9px 10px 9px 38px;
    position: absolute;
    right: 10%;
    top: 38%;
}
.left .logins ul li a img {
  width: 22px;
}
span.counter-number {
  position: absolute;
    width: 12px;
    height: 12px;
    background: #000;
    color: #fff;
    padding: 1px;
    border-radius: 15px;
    top:50%;
    font-family: "Jost-medium";
    right: 10px;
    text-align: center;
    font-size: 11px;
    line-height: 11px;
}
@media screen and (max-width: 950px) {
  .navbar-nav ul li a {
    font-size: 13px;
  }
  .left .left-inner ul li a {
    font-size: 13px;
  }
    /* span.counter-number {
      top: 45px;
    } */
  .navbar {
    width: 40%;
  }
  .logo img {
    width: 120px;
  }
  .left {
    display: flex;
  }
    .search-container input:focus {
      width: 225px;
             right: 12%;
    top: 25%;
    }
  .left .left-inner {
    width: 60%;
  }
  .left .logins {
    width: 35%;
  }
}
@media screen and (max-width: 768px) {
  .header {
    padding: 5px 15px;
        display: inline-block;
        width: 94%;
    }

    .header-nav {
      position: fixed;
        top: 0;
    }
    span.counter-number {
      right: 15%;
      top:60%;
    }


    .mobile-logo {
        display: block;
        position: relative;
        width: auto;
        float: left;
        margin-left: 30px;
        cursor: pointer;
    }

    .mobile-logo img {
      width: 70px !important;
        height: auto;
        top: 4px !important;
        padding: 18px 16px 0px;
        position: relative;
    }

    .left {
      float: right;
        display: block;
    }

    .left .left-inner {
      display: none;
    }

    .left .logins {
      float: right;
        margin: 5px 0;
        width: 90%;
    }

    .left .logins ul {
      margin-top: 16px;
    }
      .search-container input:focus {
        width: 180px;
            right: 28%;
    top: 28%;
      }

    .navbar {
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0;
        padding-left: 0%;
        background: #00000030;
        display: none;
    }

    .navbar-nav {
        width: 80%;
        background: #fff;
        position: relative;
        z-index: 12;
        height: 100%;
        overflow-x: scroll;
    }

    .navbar-nav .nav-item {
        display: block;
        float: none;
        border-bottom: 1px solid #e2e2e2;
        width: 100%;
    }

    .navbar-nav ul {
        overflow: auto;
        max-width: 100%;
        width: 100%;
        margin: 0;
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .navbar-nav ul li a {
        justify-content: space-between;
        padding: 16px 15px;
        font-size: 15px;
        padding: 1.3rem;
    }

    .close-btn {
        width: 10%;
        float: right;
        top: 17px;
        right: -15px;
        position: relative;
        display: block;
    }

    .close-btn img {
        width: 15px;
    }

    .active-menu {
        display: block;
        position: fixed;
        top: 0;
        z-index: 15;
        height: 100%;
    }
.toggle {
        display: block;
        margin-left: 2px;
        float: left;
        position: absolute;
        top: 28px;
        width: 31px;
        margin-top: 0;
        display: block;
        height: 26px;
    }

    .toggle img {
        width: 21px;
        margin-left: 1px;
        margin: 6px 0;
    }
}
</style>