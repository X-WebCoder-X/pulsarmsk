<template>
  <div>
    <nav>
      <NuxtLink to="/" class="mr-8 text-text-gray-500">
        <a class="nav__link text-12  font-medium" >Калькулятор</a>
      </NuxtLink>
      <NuxtLink to="/exchange" class="mr-8 text-text-gray-500">
        <a class="nav__link text-12  font-medium" >Курс рубля</a>
      </NuxtLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
a.nuxt-link-active {
  color:#666666
}

a.nuxt-link-exact-active {
  color: #343434;
}
</style>