<template>
    <div class="footer flex items-center justify-between bg-gray">
      <div class="footer__item bg-gray flex xl:text-20 md:text-18 sm:text-13 md:max-w-full sm:max-w-full font-bold text-primary md:w-[100%] md:items-center md:flex-row sm:flex-col">
        <div class="info__item md:mt-9 sm:mb-9 md:mr-[31px]"><InfoIcon :colorIcon="infoColor"/></div>
        <div class="info__item md:mt-9 md:mb-9 md:w-[75%] sm:w-[75%]">
          <p class="text-gray-900">Телефон: <a href="tel:800-888-9028">8 (800) 888-90-28</a>, email: <a href = "mailto: info@example.ru">info@example.ru.</a></p>
        </div>
      </div>
    </div>
</template>

<script>
import InfoIcon from "@/assets/icons/info_50x48";

export default {
  components: {InfoIcon},
  data() {
    return {
      infoColor: "#0F4471"
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  border-radius: 16px;
  padding: 20px 30px 20px;
  margin-bottom: 10px;
}
</style>
