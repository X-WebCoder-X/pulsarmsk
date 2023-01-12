<template>
  <div class="header__wrapper">
    <div class="container">
      <header>
        <Navbar/>
      </header>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {Navbar}
}
</script>

<style lang="scss" scoped>
.header__wrapper {
  background-color: #F8F8F8;
  padding: 16px 0 17px 0;
}
</style>