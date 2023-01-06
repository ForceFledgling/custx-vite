<template>
  
  <div class="main-layout">
    <body>
      <Header />
      <main>
        <router-view />
      </main>
      <Footer />
    </body>
  </div>
  
</template>

<script>
import Header from "@/components/app/Header.vue";
import Footer from "@/components/app/Footer.vue";

export default {
  name: "main-layout",
  components: {
    Header,
    Footer
  },
}
</script>
