<template>
  <div>
    <CashIcon :colorIcon="indexCart % 2 != 0 ? '#E02025' : '#0F4471'"/>
    <p class="font-bold xl:text-20 md:text-18 sm:text-17 pb-3.5 pt-5 text-primary item_currency_code">
      <slot name="currency__code"></slot>
    </p>
    <p class="2xl:text-16 xl:text-15 md:text-14 sm:text-14 font-normal pt 3.5 pb-5 text-text-gray-950 item_currency_name">
      <slot name="currency__name"></slot>
    </p>
    <ul class="list">
      <div class="list__item_wrapper mb-4">
          <li class="list__item 2xl:text-16 xl:text-15 sm:text-14 text-text-gray-900 font-medium">
            <slot name="currency__nominal"></slot>
          </li>
      </div>
      <div class="list__item_wrapper my-4">
          <li class="list__item 2xl:text-16 xl:text-15 sm:text-14 text-text-gray-900 font-medium">
            <slot name="currency__price"></slot>
          </li>
      </div>
    </ul>
  </div>
</template>
<script>
import CashIcon from "@/assets/icons/cash_70x70";

export default {
  components: {CashIcon},
  props:{
    indexCart:Number
  }
}
</script>
<style lang="scss" scoped>

.item_currency_code {
  text-transform: uppercase;
}
.list__item_wrapper {
    position: relative;
}

.list {
  list-style: none;
  padding: 0;
  margin-left: 20px;
  position: relative;
}

.list__item::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: -18px;
    width: 10px;
    height: 10px;
    border: 2px solid #E02025;
    border-radius: 50%;
    transform: translateY(-50%);
}
</style>