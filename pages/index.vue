<template>
  <div class="container-fluid product-list-main">
    <div class="container-fluid product-heading">
      <div class="product-width product-count">
        <div class="items">
          <h1>{{ responseData.name }}</h1>
          <p class="item_count font-bold">{{ result.count }} Item</p>
        </div>
      </div>
    </div>
    <div class="container-fluid inline-block">
      <div class="filter-top">
        <div class="sidebar-filter-top">
          <div>
            <div>
              <h3>
                <p
                  @click="showHideFilter"
                  :isOpen="isOpen"
                  class="hideFilterWrap"
                >
                  <img src="../static/Img/filter-icon.svg" alt="" />
                  <span> {{ isOpen ? "show" : "hide" }}</span>
                  filter
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div class="sidebar-filter" v-show="mobilefiltertog"></div>
        <div class="product-filter-section">
          <div class="row-filter">
            <div class="applied-filter">
              <ul>
                <li v-for="(filter, i) in selected" :key="i">
                  <span>{{ filter.filter_value }}</span
                  ><a @click="rmByIndex(i)" class="remove" href="#">X</a>
                </li>
              </ul>
            </div>
            <div class="product-sort">
              <div class="sort-product">
                <strong
                  >Sort by : &nbsp;
                  <span class="sortby-arrow"
                    ><p>{{ label }}</p></span
                  >
                </strong>
                <ul class="sort-list">
                  <li
                    v-for="(sort, i) in responseData.sort"
                    :key="i"
                    :class="[sort.label == label ? 'liactive' : '']"
                    @click="getsort(sort.code, sort.label)"
                    :value="sort.label"
                  >
                    {{ sort.label }}
                  </li>
                </ul>
              </div>
              <div
                class="sortoverlay"
                style=""
                v-show="mobiletoggle"
                @click="togglemobile()"
              >
                <ul class="sort-dropdown">
                  <li class="heading font-bold limobilesort">SORT BY</li>
                  <li
                    v-for="(sort, i) in responseData.sort"
                    :key="i"
                    :class="[
                      sort.label == label
                        ? 'limobilesort liactive'
                        : 'limobilesort',
                    ]"
                    @click="getsort(sort.code, sort.label)"
                    :value="sort.label"
                  >
                    {{ sort.label }}
                  </li>
                </ul>
              </div>
              <button class="product-sort for-mobile" @click="togglemobile()">
                Sort by
              </button>
              <button class="mobile-filter for-mobile" @click="filtermobile()">
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-main">
      <div
        :class="[
          !isOpen
            ? 'sidebar-filter for-desktop '
            : 'sidebar-filter hidefilter for-desktop ',
        ]"
      >
        <div class="container mobileFilterSection for-mobile">
          <div class="row">
            <div class="col-6">
              <p>Filter</p>
            </div>
            <div class="col-6 text-right pr-4"></div>
          </div>
        </div>
        <div class="sidebar-inner">
          <ul
            :class="[
              showlist == index
                ? 'filter-component active-filter'
                : 'filter-component',
            ]"
            v-for="(item, index) in responseData.filters"
            :key="index"
          >
            <a @click="toggleAccordion(index)" class="filter-box">
              <li>
                {{ item.filter_lable }}
                <span :class="[showlist == index ? 'show' : 'hide']"
                  ><img src="../static/Img/minus-sign.png" alt=""
                /></span>
                <span :class="[showlist == index ? 'hide' : 'show']"
                  ><img src="../static/Img/plus.png" alt=""
                /></span>
              </li>
            </a>
            <ul class="options_wrapper list-unstyled" v-if="showlist == index">
              <li v-for="(itemf, i) in item.options" :key="i">
                <input
                  type="checkbox"
                  :name="itemf.value_key"
                  :id="itemf.value_key"
                  @click="selectAdd(itemf.code, itemf.value)"
                  :checked="checkbox_control(itemf.value)"
                />
                <label :for="itemf.value_key" :value="itemf.value"
                  >{{ itemf.value }}
                </label>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div class="sidebar-filter" v-show="mobilefiltertog">
        <div class="container mobileFilterSection for-mobile">
          <div class="row">
            <div class="col-6">
              <p>Filter</p>
            </div>
            <div class="col-6 text-right pr-4">
              <a href="#" class="filter-clear-new" @click="clearall()"
                >Clear All</a
              >
            </div>
          </div>
        </div>
        <div class="sidebar-inner">
          <ul
            :class="[
              showlist == index
                ? 'filter-component active-filter'
                : 'filter-component',
            ]"
            v-for="(item, index) in responseData.filters"
            :key="index"
          >
            <a @click="toggleAccordion(index)" class="filter-box">
              <li>
                {{ item.filter_lable }}
                <span :class="[showlist == index ? 'show' : 'hide']"
                  ><img src="../static/Img/minus-sign.png" alt=""
                /></span>
                <span :class="[showlist == index ? 'hide' : 'show']"
                  ><img src="../static/Img/plus.png" alt=""
                /></span>
              </li>
            </a>
            <ul class="options_wrapper list-unstyled" v-if="showlist == index">
              <li v-for="(itemf, i) in item.options" :key="i">
                <input
                  type="checkbox"
                  :name="itemf.value_key"
                  :id="itemf.value_key"
                  @click="selectAdd(itemf.code, itemf.value)"
                  :checked="checkbox_control(itemf.value)"
                />
                <label :for="itemf.value_key" :value="itemf.value"
                  >{{ itemf.value }}
                </label>
              </li>
            </ul>
          </ul>
        </div>
        <button class="apply_mobile_filter for-mobile" @click="filtermobile()">
          Apply
        </button>
        <button class="close_mobile_filter for-mobile" @click="filtermobile()">
          Close
        </button>
      </div>
      <div :class="[isOpen ? 'product-page active' : 'product-page']">
        <ProductList
          :Productsitem="Productsitem"
          :handleScroll="handleScroll"
          :dataCountFlag="dataCountFlag"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from "../components/ProductList.vue";
import axios from "axios";
export default {
  components: {
    ProductList,
  },
  data() {
    return {
      page: 1,
      limit: 20,
      Productsitem: [],
      responseData: [],
      result: [],
      flag: false,
      isOpen: false,
      isvisible: true,
      showlist: null,
      selected: [],
      checked: false,
      filterPassing: "",
      srt: "",
      label: "",
      dataCount: 0,
      dataCountFlag: false,
      mobiletoggle: false,
      mobilefiltertog: false,
    };
  },
  methods: {
    getsort(srt_code, srt_label) {
      this.page = 1;
      this.srt = srt_code;
      this.label = srt_label;
      this.$router.push({ query: { ...this.$route.query, sort: this.srt } });
    },
    rmByIndex(index) {
      this.selected.splice(index, 1);
      this.filterPassing = this.$route.query.filter;
      this.filterPassing = "";
      this.$router.push({ name: "index" });

      for (let a in this.selected) {
        if (this.selected[this.selected.length - 1] === this.selected[a]) {
          this.filterPassing = this.filterPassing.concat(
            "",
            this.selected[a].filter_code
          );
          this.$router.push({
            query: { ...this.$route.query, filter: this.filterPassing },
          });
        } else {
          this.filterPassing = this.filterPassing.concat(
            this.selected[a].filter_code,
            ","
          );
        }
      }
    },
    selectAdd(filter_code, filter_value) {
      this.page = 1;
      this.filterPassing = "";
      let isvalue = this.indexFilter(this.selected, filter_code, filter_value);
      if (isvalue >= 0) {
        this.rmByIndex(isvalue);
      } else {
        let filter_key = filter_code.concat("-", filter_value);
        filter_key = filter_key.split(" ").join("+");
        // filter_key = filter_key.split("&").join("%26");
        let obj = {};
        obj["filter_filter_code"] = filter_code;
        obj["filter_value"] = filter_value;
        obj["filter_code"] = filter_key;

        this.selected.push(obj);
      }
      for (let a in this.selected) {
        console.log("first", a);
        if (this.selected[this.selected.length - 1] === this.selected[a]) {
          this.filterPassing = this.filterPassing.concat(
            "",
            this.selected[a].filter_code
          );
          // this.$router.push({query: this.$route.query, filter: this.filterPassing })
          this.$router.push({
            query: { ...this.$route.query, filter: this.filterPassing },
          });
        } else {
          this.filterPassing = this.filterPassing.concat(
            this.selected[a].filter_code,
            ","
          );
        }
        console.log(
          this.selected,
          " oinckjabdvnavikbqekjevbn",
          this.filterPassing
        );
      }
    },
    indexFilter(arr, value, code) {
      let index = arr.findIndex(
        (x) => x.filter_filter_code == value && x.filter_value == code
      );
      return index;
    },
    showHideFilter() {
      this.isOpen = !this.isOpen;
    },
    toggleAccordion(index) {
      if (index == this.showlist) {
        this.showlist = null;
      } else {
        this.showlist = index;
      }
    },
    async getData() {
      try {
        const response = await axios.get(
          "https://pim.wforwoman.com/pim/pimresponse.php",
          {
            params: {
              service: "category",
              store: 1,
              url_key: "top-wear-kurtas",
              page: this.page,
              count: this.limit,
              sort_by: this.srt,
              sort_dir: "desc",
              filter: this.filterPassing,
            },
          }
        );
        this.result = response.data.result;

        if (this.result.count - this.dataCount >= this.limit) {
          this.dataCountFlag = true;
          this.dataCount += this.limit;
        } else {
          this.dataCountFlag = false;
        }
        if (this.flag == true) {
          this.responseData = response.data.result;
          this.flag = false;
        }
        this.Productsitem = [...this.Productsitem,...response.data.result.products, ];
      } catch (err) {
        console.error(err);
      }
    },
    handleScroll(isVisible) {
      if (this.isvisible == isVisible) {
        this.page++;
        this.getData();
      } else return;
    },
    checkbox_control(value) {
      let a =
        this.selected.findIndex((x) => x.filter_value == value) >= 0
          ? true
          : false;
      return a;
    },
    togglemobile() {
      if (this.mobiletoggle == false) {
        this.mobiletoggle = true;
      } else {
        this.mobiletoggle = false;
      }
    },
    filtermobile() {
      if (this.mobilefiltertog == false) {
        this.mobilefiltertog = true;
      } else {
        this.mobilefiltertog = false;
      }
    },
    clearall() {
      this.selected = [];
      this.filterPassing = "";
      this.$router.push({ name: "Home" });
    },
  },
  async fetch() {
    this.flag = true;
    this.label = "newest";
    if (this.$route.query.filter != undefined) {
      let a = this.$route.query.filter.split(",");
      a.forEach((el) => {
        let val = el.split("-");
        val[1] = val[1].split("+").join(" ");
        // val[1] = val[1].split("%26").join("&");
        this.selectAdd(val[0], val[1]);
      });
    } else if (this.$route.query.sort != undefined) {
      let b = this.$route.query.sort;
      this.getsort(b, b);
    } else {
      try {
        const response = await axios.get(
          "https://pim.wforwoman.com/pim/pimresponse.php",
          {
            params: {
              service: "category",
              store: 1,
              url_key: "top-wear-kurtas",
              page: this.page,
              count: this.limit,
              sort_by: this.srt,
              sort_dir: "desc",
              filter: this.filterPassing,
            },
          }
        );
        this.result = response.data.result;

        if (this.result.count - this.dataCount >= this.limit) {
          this.dataCountFlag = true;
          this.dataCount += this.limit;
        } else {
          this.dataCountFlag = false;
        }
        if (this.flag == true) {
          this.responseData = response.data.result;
          this.flag = false;
        }
        this.Productsitem = [
          ...this.Productsitem,
          ...response.data.result.products,
        ];
      } catch (err) {
        console.error(err);
      }
    }
  },
  watch: {
    selected: {
      handler() {
        this.page == 1;
        this.Productsitem = [];
        this.getData();
      },
      deep: true,
    },
    srt: {
      handler(newVal, oldVal) {
        if (newVal != oldVal) {
          this.Productsitem = [];
          this.getData();
        }
      },
      deep: true,
    },
  },
};
</script>
<style>
/* ************************** Product Page Design *********************************/
.product-page {
  width: 80%;
}
.container-fluid {
  width: 100%;
  padding: 0px !important;
  margin-right: auto;
  margin-left: auto;
}
.container-fluid.product-list-main {
  background-color: #fff;
  padding-top: 30px;
  display: inline-block;
}
.product-list-main {
  background-color: #fff;
  padding-top: 30px;
  display: inline-block;
}
.product-heading {
  display: inline-block;
}
.product-width {
  width: 100%;
}
.product-count {
  display: inline-block;
  padding-bottom: 20px;
}
.items {
  text-align: center;
}
.product-list-main h1 {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  max-width: 400px;
  color: #303030;
  padding-left: 10px;
  margin-top: 3px;
  margin-bottom: 0;
  text-transform: capitalize;
  font-family: playfairdisplay-regular;
  font-size: 2rem;
  font-weight: 400;
}
.item_count {
  font-size: 18px !important;
}
.product-list-main p {
  color: #303030;
  padding-top: 0;
  margin: 0;
  text-transform: capitalize;
  font-size: 14px;
  font-family: jost-regular;
}

/* ***************************  Filter Top Design *************************/
.filter-top {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 40px;
}
.product-list-main .sidebar-filter-top {
  min-width: auto !important;
  flex-grow: 0 !important;
  width: 20%;
  flex: 0 0 20%;
  transition: 0.5s all ease-out;
  position: sticky;
  top: 0;
}
.sidebar-inner {
  position: sticky;
  top: 0;
  padding-right: 20px;
  height: 100vh;
  overflow-x: scroll;
}
.sidebar-inner::-webkit-scrollbar {
  width: 0px;
}
.sidebar-inner ul {
  list-style: none;
  cursor: pointer;
}
.product-list-main h3 {
  font-weight: 500;
  display: inline-block;
  text-overflow: ellipsis;
  vertical-align: top;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  max-width: 400px;
  color: #000;
  margin-top: 3px;
  margin-bottom: 0;
  text-transform: capitalize;
}
.product-list-main p {
  color: #303030;
  padding-top: 0;
  margin: 0;
  text-transform: capitalize;
  font-size: 14px;
}
.product-list-main p span {
  color: #303030;
  padding-right: 3px;
  font-size: 14px !important;
}
.hideFilterWrap {
  display: flex;
  border: 1px solid #ccc;
  padding: 10px 15px !important;
  cursor: pointer;
  text-transform: uppercase !important;
  font-family: jost-medium;
}
.hideFilterWrap img {
  margin-right: 5px;
}
.product-list-main .product-filter-section {
  width: 80%;
  flex: 0 0 80%;
}
.row-filter {
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  padding-bottom: 36px;
  margin-right: 0;
  display: flex;
}
.applied-filter > ul::-webkit-scrollbar {
  display: none;
}
.applied-filter {
  width: 65%;
}
.applied-filter ul {
  display: flex;
  overflow-x: scroll;
}
.product-sort {
  margin-bottom: 0;
  position: relative;
  padding-right: 0;
  margin-right: 0;
  width: 35%;
}

.sort-product {
  float: right;
  padding: 8px 5px;
  font-size: 14px;
  color: #282c3f;
  cursor: pointer;
  position: relative;
  width: 140%;
  max-width: 250px;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #d3d3d3;
}
.sort-product strong {
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sort-product span {
  text-transform: capitalize;
  color: #282c3f;
  font-family: "Jost-medium";
  width: 60%;
}
.sortby-arrow {
  background-image: url(../static/Img/down-arrow.png);
  background-size: 14px;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  width: 14px;
  height: 20px;
  padding-right: 22px;
  font-weight: 400;
  float: right;
}
.sortby-arrow > p {
  padding-top: 4px;
}
.sort-product ul.sort-list {
  width: 100%;
  max-width: 250px;
  background-color: #fff;
  position: absolute;
  top: 32px;
  left: -1px;
  margin: 0;
  padding: 10px 0;
  z-index: 10;
  display: none;
  border: 1px solid #d4d5d9;
  border-top: none;
  box-shadow: 0 8px 10px 0 rgb(0 0 0 / 8%);
}
.sort-product:hover ul.sort-list {
  display: block;
}
.sort-product ul.sort-list li {
  display: block;
  font-size: 15px;
  color: #282c3f;
  cursor: pointer;
  padding: 10px 20px;
}
.sort-product ul.sort-list li:hover {
  background-color: #f5f5f5;
}
.liactive {
  background-color: #f5f5f5;
}
.limobilesort {
  border-bottom: 1px solid #f1f1f1;
  padding: 10px 15px;
}
.inline-block {
  display: inline-block;
}
.applied-filter li {
  font-size: 13px;
  display: inline-block;
  padding: 5.5px 13px;
  border-radius: 18px;
  margin-right: 5px;
  border: 1px solid #707070;
  margin-bottom: 4px;
}
.applied-filter li > span {
  text-transform: capitalize;
  font-family: Jost-medium;
}
ul.filter-component {
  border-bottom: 1px solid #e9e9ed;
  padding-bottom: 19px;
}
li .remove {
  text-decoration: none;
  color: #303030;
  margin-left: 5px;
  font-weight: lighter;
}
.product-main {
  display: flex;
  padding: 0px 40px;
}

/* **********************Sidebar filter Design ***************************/
.sidebar-filter {
  width: 20%;
}
input[type="checkbox"] {
  accent-color: #4c0b36;
}
.filter-component button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: none;
  background: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  padding: 15px 0 12px 0;
}
a.filter-box {
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 5px;
  border-bottom: 1px solid #e9e9ed;
}
.list-unstyled li {
  font-size: 14px;
  padding-top: 9px;
  display: block;
  padding-bottom: 0;
  position: relative;
}
.list-unstyled li label {
  padding-left: 25px;
}
.filter-box li .hide {
  display: none;
}
.filter-box li .show {
  display: block;
  width: 10%;
}
.filter-box > li {
  font-size: 1rem;
  font-family: jost-semibold;
  display: flex;
  justify-content: space-between;
}
.filter-box > li span {
  font-size: 16px;
}
.filter-box li .show img {
  width: 45%;
}
li.women {
  padding: 3% 0%;
}
li.women label {
  font-family: "jost-medium";
  font-size: 14px;
  font-weight: 200;
  margin-left: 15px;
}
.hidefilter {
  display: none;
  transition: 0.5s all ease-out;
}
.sort-product:hover .new img {
  transform: rotateX(180deg);
}
@media screen and (max-width: 950px) {
  .applied-filter {
    width: 60%;
  }
  .product-container {
    column-gap: 0px;
  }
  .product-sort {
    width: 40%;
  }

  .row-filter {
    padding-right: 0px;
  }
}
@media screen and (max-width: 768px) {
  .sortoverlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    z-index: 2;
  }
  .sort-dropdown {
    position: fixed;
    right: 0;
    width: 100%;
    max-width: 100%;
    z-index: 999;
    background-color: #fff;
    top: auto;
    padding: 0;
    bottom: 45px;
    text-align: left;
  }

  .sort-list {
    display: none;
  }
  .product-sort {
    background: #fff;
    font-weight: 700;
    color: #000;
    line-height: 45px;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-size: 14px !important;
    background-image: url(../static/Img/sort.svg) !important;
    background-repeat: no-repeat !important;
    background-position: 50% !important;
    background-position-x: 20% !important;
    outline: none !important;
    box-shadow: none !important;
    border: none;
    border-top: 1px solid #eaeaec;
    border-right: 1px solid #eaeaec !important;
  }
  button.product-sort {
    display: block;
  }
  .product-sort {
    width: 50%;
    float: left;
    line-height: 45px;
    max-width: 50% !important;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    top: auto;
    position: fixed;
    bottom: 0;
    color: #000;
    -moz-text-align-last: center;
    text-align-last: center;
    left: 0;
    height: 45px !important;
    border-right: 1px solid rgba(122, 119, 119, 0.34118) !important;
    z-index: 9;
    border-radius: 0;
  }
  .mobile-filter {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 99;
    width: 50%;
    height: 45px;
    color: #fff;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-size: 18px !important;
    background-image: url(../static/Img/filter-mobile.svg) !important;
    background-repeat: no-repeat !important;
    background-position: 50% !important;
    background-position-x: 22% !important;
    line-height: 45px;
    border: none;
    border-top: 1px solid #eaeaec;
    color: #000;
    font-weight: 700;
    background-color: #fff;
  }
  .filter-box .list-unstyled {
    padding-top: 0;
    position: absolute;
    left: 120px;
    width: calc(100% - 120px);
    top: 49px;
    margin: 0;
    height: 100%;
    background: #fff;
    min-height: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  .sidebar-filter {
    /* position: absolute; */
    min-height: 100% !important;
    width: 120px;
    background: #f3f3f3;
    border-bottom: 1px solid #e4e4e4;
    z-index: 100;
    position: fixed !important;
    top: 0;
    overflow: auto;
    left: 0;
    width: 100% !important;
    background-color: #fff;
    padding: 0px 0px 46px !important;
  }
  .container {
    max-width: 100%;
  }
  .mobileFilterSection {
    padding: 0;
    border-bottom: 1px solid #efefef;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 35px;
    margin-left: 35px;
  }
  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .mobileFilterSection p {
    font-size: 18px;
    font-family: "Jost-medium";
    padding: 11px 0;
  }
  .text-right {
    text-align: right !important;
  }
  .filter-clear-new {
    font-size: 13px;
    font-weight: 400;
    border: 1px solid #707070;
    font-family: "Jost-regular";
    padding: 3px 10px;
    display: inline-block;
    margin: 10px 0;
    border-radius: 50px;
    line-height: normal;
  }
  .sidebar-inner {
    height: 100vh !important;
    padding-left: 0px !important;
    overflow-x: scroll;
  }
  ul.filter-component {
    padding-left: 20px !important;
    height: 6%;
    width: 150px;
    background: #f3f3f3;
    padding: 0;
    border-bottom: 1px solid #e4e4e4;
    padding-top: 10px;
  }
  ul.options_wrapper.list-unstyled {
    position: absolute;
    left: 185px;
    top: 10px;
  }
  ul.options_wrapper.list-unstyled li {
    line-height: 2rem;
    font-size: 16px;
    padding-left: 20px;
  }
  .hideFilterWrap {
    display: none;
  }
  .applied-filter {
    display: none;
  }
  .show img {
    display: none;
  }
  /* .sidebar-filter {
        display: none;
    } */
  .product-page {
    width: 100%;
  }
  .apply_mobile_filter {
    position: fixed;
    display: block;
    bottom: 0;
    right: 0;
    z-index: 99;
    width: 50%;
    height: 45px;
    border: none;
    color: #fff;
    font-size: 15px;
    border: 0;
    border-top: 1px solid #eaeaec;
    color: red;
    text-transform: uppercase;
    font-size: 13px;
    border-right: 0;
    font-weight: 700;
    letter-spacing: 1px;
    background: #fff;
  }
  .close_mobile_filter {
    border: 0;
    border-top: 1px solid #eaeaec;
    color: #000;
    text-transform: uppercase;
    font-size: 13px;
    border-right: 1px solid #eaeaec;
    font-weight: 700;
    letter-spacing: 1px;
    position: fixed;
    display: block;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 50%;
    height: 45px;
    background-color: #fff;
    font-size: 15px;
  }
  .active-filter {
    background: #fff !important;
  }
  a.filter-box {
    font-size: 14px;
    padding-top: 0px; 
    padding-bottom: 0px;
    padding-left: 0px;
    border-bottom: 0px solid #e9e9ed;
  }
}
</style>
