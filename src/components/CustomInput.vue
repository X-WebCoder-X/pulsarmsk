<template>
  <div class="w-full mb-8">  
    <div>
        <label class="block 2xl:text-16  md:text-16 sm:text-[14px] font-medium text-text-dark">
          <slot></slot>
          </label>
        <div class="relative mt-1 rounded-md input__wrapper">
            <input 
            :type="placeholderProps.type"
            v-bind:value="value"
            @input="updateValue($event.target.value)" 
            name="price" 
            class="block w-full rounded-md border-gray-300 p-5 my-1 focus:border-indigo-500 focus:ring-indigo-500 
            2xl:text-14 sm:text-12 
            2xl:placeholder:text-14 placeholder:text-text-gray-300 placeholder:font-normal sm:placeholder:text-12" 
            :placeholder="placeholderProps.text"
            >
        </div>
    </div>
  </div>
</template>
<script>
export default{
  props: ['placeholderProps','value'],
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss" scoped>

.block {
    width: 100%;
}

input{
    border: 1px solid #DFDFDF;
}

input::placeholder {
    display: flex;
    align-items: center;
}



</style>
