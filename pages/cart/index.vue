<template>
  <div class="container-fluid cart-container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center font-medium cart-title">Shopping Cart</h1>
      </div>
    </div>
    <div class="row" v-if="items.some((e) => e.id_product != undefined)">
      <div class="col-9 cart-table" style="overflow-x:auto;">
        <!---->
        <!---->
        <table class="cart table">
          <thead>
            <tr>
              <th class="item font-medium"><span>Item</span></th>
              <th class="price font-medium"><span>Price</span></th>
              <th class="qty font-medium"><span>Qty</span></th>
              <th class="discount font-medium"><span>Discount</span></th>
              <th class="subtotal font-medium"><span>Subtotal</span></th>
            </tr>
          </thead>
          <tbody class="cart-item" v-for="(item,index) in items" :key="index">
            <tr class="item-info">
              <td class="item">
                <div class="row">
                  <div class="col-4">
                    <nuxt-link
                      :to="'/products/' + item.url_key"
                      class="item-photo"
                      ><img
                        :src="item.image"
                        alt="Handloom Pure Pashmina Shawl"
                        title="Handloom Pure Pashmina Shawl"
                    /></nuxt-link>
                  </div>
                  <div class="col-8">
                    <h2 class="item-name font-medium">
                      <nuxt-link :to="'/products/' + item.url_key" class="">{{
                        item.name
                      }}</nuxt-link>
                    </h2>
                    <a
                      href="#"
                      title="Remove"
                      class="remove-cart"
                      @click="removeFromCart(item)"
                      >
                      <img src="../../static/Img/delete.png" alt=""><span> Remove </span></a
                    >
                  </div>
                </div>
              </td>
              <td class="price">
                <p>&#8377;{{ item.price }}</p>
              </td>
              <td class="qty">
                <div class="control">
                  <div class="qty_box">
                    <a @click="updateqtymin(item)" :class="[$store.state.cart.itemsqty ? 'disabled' : '']"><img src="../../static/Img/minus-sign.png" alt=""></a
                    ><input
                      type="text"
                      readonly="readonly"
                      :value="item.qty"
                    /><a class="" @click="updateqtyplus(item)"
                      ><img src="../../static/Img/plus.png" alt=""></a>
                  </div>
                </div>
              </td>
              <td class="discount">
                <p class="text-center">{{ item.discount }}%</p>
              </td>
              <td class="subtotal">
                <p>
                  <span class="old_price">&#8377;{{ (item.price)*(item.qty) }}</span>
                  <span class="selling_price">&#8377;{{ (item.selling_price)*(item.qty) }}</span>
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">
                <p class="giftContainer">
                  <input type="checkbox" id="giftBox" />
                  <label for="giftBox">Add Gift Wrap</label>
                </p>
              </td>
              <td colspan="3">
                <nuxt-link to="/" class="continue">Continue Shopping</nuxt-link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="col-3 cart-summary">
        <div class="discount-container">
          <label class="label discount-label font-medium"
            ><span>Discount</span></label
          >
        </div>
        <div class="summary-container">
          <label class="label summary-label font-medium"
            ><span>Summary</span></label
          >
          <table>
            <tbody>
              <tr class="totals sub">
                <th class="font-medium">Subtotal</th>
                <td class="amount">
                  <span class="price"
                    >&#8377;<span id="m_sub_total" class="sub_total"
                      >215000</span
                    ></span
                  >
                </td>
              </tr>
              <tr class="grand totals">
                <th class="font-bold"><strong>Order Total</strong></th>
                <td class="amount font-bold">
                  <strong
                    ><span class="price"
                      >&#8377;<span class="sub_total">21500</span></span
                    ></strong
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="checkout-container">
          <nuxt-link to="/checkout" class=""
            ><button type="button" class="checkout font-medium">
              <span>Checkout</span>
            </button></nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12 text-center">
        <p>
          You have no items in your shopping cart.<br />
          <nuxt-link to="/" class=""><span>Click here</span></nuxt-link>
          to continue shopping.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    items: (state) => state.cart.items,
    itemsqty:(state) => state.cart.itemsqty
}),
  methods: mapActions({
    updateqtyplus:"cart/updateqtyplus",
    updateqtymin:"cart/updateqtymin",
    removeFromCart: "cart/removeFromCart",
  }),
};
</script>
<style >
.cart-container {
  padding: 0.7rem 2rem !important;
  min-height: 90vh;
  margin-bottom: 50px;
}
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
.cart-container .cart-title {
  font-size: 30px;
  margin: 25px 0;
  font-weight: 400;
}
.text-center {
  text-align: center !important;
}
.cart-container .cart-table {
  flex: 0 0 70%;
  max-width: 70%;
}
.cart-container .cart-table .subtotal .old_price {
    color: #c5c5c5;
    text-decoration: line-through;
    padding-right: 5px;
    font-size: 15px;
}
.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}
table {
  border-collapse: collapse;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 1px solid #f4f4f4;
  font-weight: 400;
}
.table td, .table th {
    padding: 0.75rem;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}
.cart-item .item {
  width: 40%;
  padding: 15px;
}
.table td,
.table th {
  border-top: 1px solid #f4f4f4;
}
.cart-summary {
  padding: 15px;
  flex: 0 0 30%;
  max-width: 30%;
  background-color: #fafafa;
}
.cart-summary label {
    font-size: 18px;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    text-transform: uppercase;
    margin-bottom: 0;
    padding-bottom: 0.5rem;
}
.cart-summary table {
    font-size: 15px;
    width: 100%;
}
table {
    border-collapse: collapse;
}
.summary-total table tr.totals td.amount {
    text-align: right;
    font-size: 14px;
}
.cart-summary table td, .cart-summary table th {
    padding: 10px 0;
    font-weight: 400;
}
.summary-container {
    margin-top: 25px;
}
tr.totals {
    text-align: left;
}
td.amount {
    text-align: right;
}
.col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}
.col-8 {
  position: relative;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}
.cart-item .item-name {
  font-size: 15px;
}
a.item-photo {
    display: flex;
    justify-content: center;
}
.cart-container .cart-table .continue {
    background: transparent;
    border: 1px solid #bebebe;
    border-radius: 5px;
    color: #000;
    text-transform: none;
    font-size: 13px;
    padding: 10px 15px 8px;
    font-family: "Jost-medium";
    text-decoration: none;
    cursor: pointer;
    float: right;
    text-transform: uppercase;
    margin-top: 15px;
}
.giftContainer {
    font-family: "Jost-medium";
    color: #000;
    font-size: 14px;
}
.cart-item .item-photo img {
  max-width: 60%;
}
img {
  vertical-align: middle;
  border-style: none;
}
.cart-item .remove-cart {
  position: absolute;
  bottom: 0;
  font-size: 12px;
}
.cart-item .remove-cart img {
  width: 13px;
}
.cart-summary label {
  font-size: 18px;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  text-transform: uppercase;
  margin-bottom: 0;
  padding-bottom: 0.5rem;
}
.cart-summary .coupon-container {
  padding: 10px 0;
  float: left;
  width: 100%;
}
.cart-summary .coupon-container p {
  font-size: 15px;
  margin-top: 5px;
}
.pull-right {
  float: right;
}

.cart-item .qty_box a {
  cursor: pointer;
  padding: 5px 9px;
  border: 1px solid #ccc;
  vertical-align: top;
  margin: 0;
  height: 30px;
  color: #000;
  background-color: #ccc;
  font-size: 12px;
  display: inline-block;
}
.cart-item .qty_box a.disabled{
  opacity: 0.2;
  cursor: no-drop;
}
.cart-item .qty_box input {
  text-align: center;
  outline: none;
  font-size: 15px;
  padding: 2px;
  height: 30px;
  border-radius: 0;
  border: 1px solid #ccc;
  width: 40px;
  cursor: default;
  font-family: "Jost-medium";
  text-transform: uppercase;
}
.qty_box img{
  width: 10px;
}
.cart-summary .checkout-container .checkout {
  border: none;
    color: #fff;
    text-transform: none;
    font-size: 15px;
    padding: 8px 25px;
    cursor: pointer;
    float: right;
    text-transform: uppercase;
    margin-top: 15px;
}
  .checkout-container .checkout {
      background: #501337;
      width: 100%;
      padding: 11px;
      border-radius: 5px;
  }
  @media only screen and (max-width: 768px) {
    .cart-container {
    padding: 0px !important;
}
.row{
  margin: 0;
}
    .cart-summary {
    padding: 15px;
    flex: 0 0 100%;
    max-width: 100%;
    background-color: #fafafa;
}
.cart-container .cart-table {
    flex: 0 0 100%;
    max-width: 100%;
}
.table {
    width: 180%;
    max-width: 180%;
}
}
</style>