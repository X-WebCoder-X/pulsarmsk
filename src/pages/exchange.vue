<template>
    <div>
      <main>
        <div class="container">
          <CustomTitle>Курс рубля</CustomTitle>
          <div class="main flex md:justify-between md:flex-row sm:flex-wrap sm:flex-column"> 
            <div class="main__item md:w-[30%] md:min-w-[344px] sm:my-4 sm:w-full" v-for="item,index in currencyList" :key="item.ID">
              <CustomCart :indexCart="index">
                <template v-slot:currency__code>
                  {{ item.CharCode }}
                </template>
                <template v-slot:currency__name>
                  {{ item.Name }}
                </template>
                <template v-slot:currency__nominal>
                  {{ item.Nominal }}
                </template>
                <template v-slot:currency__price>
                  {{ item.Value }}
                </template>
              </CustomCart>
            </div>
          </div>
          <SocialBlock/>
        </div>
      </main>
  </div>
</template>

<script>
import SocialBlock from '@/components/SocialBlock';
import CustomTitle from "@/components/CustomTitle"; 
import CustomCart from '@/components/CustomCart';
import { mapState, mapActions } from 'vuex';
export default {
  components: {SocialBlock, CustomTitle, CustomCart},
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['currencyList'])
  },
  methods: {
    ...mapActions(["getCurrencyList"]),
  }, 
   async mounted() { 
    //load currencyList if this list is empty
    if(this.currencyList.length < 1){
      try{
        await this.getCurrencyList();
      }catch(e){
        throw Error(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main__item {
  background: #F8F8F8;
  border-radius: 16px;
  padding: 38px 30px 35px;
  transition-duration: 0.3s;
}

.main__item:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: ease-in-out;
  transition-duration: 0.3s;
  cursor: pointer;
}

</style>
