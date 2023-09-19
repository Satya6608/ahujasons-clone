<template>
    <div>
         <TopNav/>
            <StickyNav />
        <div>
            <nuxt/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>

</template>
<script>
import TopNav from "../components/layout/TopNav.vue"
import  StickyNav from "../components/layout/StickyNav.vue"
import Footer from "../components/layout/Footer.vue"
export default {
  components: {
    TopNav,
    StickyNav,
    Footer
  },
}
</script>