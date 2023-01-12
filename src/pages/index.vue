<template>
    <div >
        <main>
            <div class="container">
                <CustomTitle>Валютный калькулятор</CustomTitle>
                <div class="main flex md:items-start md:justify-between md:flex-row sm:flex-col">
                    <div class="main__item md:w-[48%]">
                            <div>
                                <CustomInput 
                                :placeholderProps="{text:'Введите название или код', type:'text'}"  v-model="formData.currencyFirst"
                                >
                                    Валюта 1  <span :class="[formData.errorFirstCurrency.status ? 'error-text-active' : 'error-text']">{{ formData.errorFirstCurrency.text }}</span>
                                </CustomInput>
                                <CustomInput 
                                :placeholderProps="{text:'Введите название или код', type:'text',}"  v-model="formData.currencySecond"
                                >
                                    Валюта 2  <span :class="[formData.errorSecondCurrency.status ? 'error-text-active' : 'error-text']">{{ formData.errorSecondCurrency.text }}</span>
                                </CustomInput>
                                <CustomInput 
                                :placeholderProps="{text:'Введите количество', type:'number',}"  v-model="formData.currencyAmount"
                                >
                                    Количество 
                                </CustomInput>
                            </div>
                        <div class="info blue-wrapper 
                        mt-8.5 mb-10 ml-7.5
                        2xl:text-24 xl:text-20 md:text-16 sm:text-14
                        font-bold text-primary flex items-center">
                            <div class="info__item"><InfoIcon :colorIcon="infoColor"/></div>
                            <div class="info__item">Итого: <span>{{finalAmount }}</span></div>
                        </div>
                    </div>
                    <div class="main__item blue-wrapper pt-10 pb-10 px-6 md:w-[48%]">
                        <div>
                            <h2 class="2xl:text-18 xl:text-15 sm:text-13 font-medium text-primary list__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:</h2>
                        </div>
                        <div class="flex md:justify-between md:flex-row sm:flex-col mt-8">
                            <div class="main__item xl:w-[48%] md:w-[70%] sm:w-[100%]">
                                <ul class="list">
                                    <div class="list__item_wrapper mb-4">
                                        <li class="list__item 2xl:text-18 xl:text-14 md:text-13 sm:text-14 text-text-main font-normal">
                                            incididunt ut labore et dolore magna aliqua
                                        </li>
                                    </div>
                                    <div class="list__item_wrapper my-4">
                                        <li class="list__item 2xl:text-18 xl:text-14 md:text-13 sm:text-14 text-text-main font-normal">
                                            incididunt ut labore et
                                        </li>
                                    </div>
                                    <div class="list__item_wrapper my-4">
                                        <li class="list__item 2xl:text-18 xl:text-14 md:text-13 sm:text-14 text-text-main font-normal">
                                            incididunt ut labore et dolore
                                        </li>
                                    </div>
                                    <div class="list__item_wrapper my-4">
                                        <li class="list__item 2xl:text-18 xl:text-14 md:text-13 sm:text-14 text-text-main font-normal">
                                            labore et dolore
                                        </li>
                                    </div>
                                    <div class="list__item_wrapper my-4">
                                        <li class="list__item 2xl:text-18 xl:text-14 md:text-13 sm:text-14 text-text-main font-normal">
                                            incididunt ut
                                        </li>
                                    </div>
                                    <div class="list__item_wrapper my-4">
                                        <li class="list__item 2xl:text-18 xl:text-14 md:text-13 sm:text-14 text-text-main font-normal">
                                            incididunt ut labore et dolore
                                        </li>
                                    </div>
                                    <div class="list__item_wrapper my-4">
                                        <li class="list__item 2xl:text-18 xl:text-14 md:text-13 sm:text-14 text-text-main font-normal">
                                            incididunt ut labore
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div 
                            class="main__item 
                            grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-3.5 xl:gap-y-2 xl:w-[48%]
                            md:grid-cols-1 md:grid-rows:4 md:gap-y-1.5 
                            sm:grid-cols-4 sm:grid-rows:1 sm:gap-x-1.5
                            md:w-[27%] sm:w-auto"
                            >
                                <div class="list__img md:mn-h-[60px] sm:min-h-[46px]
                                md:rounded-tr-[15px] md:rounded-bl-[15px]
                                sm:rounded-tr-[15px] sm:rounded-bl-[15px]
                                ">
                                </div>
                                <div class="list__img md:mn-h-[60px] sm:min-h-[46px] 
                                xl:rounded-tr-[50px]
                                md:rounded-tl-[15px] md:rounded-br-[15px]
                                sm:rounded-tl-[15px] sm:rounded-br-[15px]
                                ">
                                </div>
                                <div class="list__img md:mn-h-[60px] sm:min-h-[46px] 
                                xl:rounded-bl-[50px]
                                md:rounded-tl-[15px] md:rounded-br-[15px]
                                sm:rounded-tr-[15px] sm:rounded-bl-[15px]
                                ">
                                </div>
                                <div class="list__img md:mn-h-[60px] sm:min-h-[46px]
                                md:rounded-tl-[15px] md:rounded-br-[15px]
                                sm:rounded-tl-[15px] sm:rounded-br-[15px]
                                ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HelpBlock/>
            </div>
        </main>
    </div>
</template>

<script>
import InfoIcon from "@/assets/icons/info_50x48";
import HelpBlock from "@/components/HelpBlock";
import CustomTitle from "@/components/CustomTitle"; 
import CustomInput from "@/components/CustomInput";
import { mapState, mapActions } from 'vuex';
export default {
    components: {InfoIcon, HelpBlock, CustomTitle,CustomInput},
    data() {
        return {
            infoColor: "#E02025",
           formData: {
            currencyFirst: "",
            currencySecond: "",
            currencyAmount: "",
            errorFirstCurrency:{
                text: "не найдено",
                status: false
            },
            errorSecondCurrency:{
                text: "не найдено",
                status: false
            }
           },exchangeRatesFirstField: 0,
           exchangeRatesSecondField: 0,
           finalAmount: 0
        }
    },
    watch: {

    formData: {
        deep: true,
        handler(){
            //Start validation a Form if we don't hav empty field
            if(this.formData.currencyFirst !="" &&
                this.formData.currencySecond !="" &&
                this.formData.currencyAmount !="" ) {
                    this.searchInfo()
            }else {
                this.formData.errorFirstCurrency.status = false;
                this.formData.errorSecondCurrency.status = false;
                this.finalAmount = 0;
            }
            
            
        }
    }
  },
    computed: {
    ...mapState(['currencyList'])
    },
    methods: {
        ...mapActions(["getCurrencyList"]),

        searchInfo(){
            let fullList = this.currencyList;

            //check Equal Fields with list
            let checkFirstField = fullList.filter(item=> {
                if(item.CharCode.toLowerCase() === this.formData.currencyFirst.toLowerCase()||
                item.Name.toLowerCase() === this.formData.currencyFirst.toLowerCase()){
                    this.exchangeRatesFirstField = item.Value;
                    return item
                }
            })
            let checkSecondField = fullList.filter(item=> {
                if(item.CharCode.toLowerCase() === this.formData.currencySecond.toLowerCase()||
                item.Name.toLowerCase() === this.formData.currencySecond.toLowerCase()){
                    this.exchangeRatesSecondField = item.Value;
                    return item
                }
            })

            //Show error's text
            if(checkFirstField.length === 0) {
                this.formData.errorFirstCurrency.status = true;
            }else{
                this.formData.errorFirstCurrency.status = false;
            }
            
            if(checkSecondField.length === 0) {
                this.formData.errorSecondCurrency.status = true;
            }else{
                this.formData.errorSecondCurrency.status = false;
            }

            //Hide all Errors and have finalAmount
            if(checkFirstField.length > 0 && checkSecondField.length > 0) {
                this.formData.errorFirstCurrency.status = false;
                this.formData.errorSecondCurrency.status = false;
                this.finalAmount = Number(this.exchangeRatesFirstField) * Number(this.formData.currencyAmount) /Number(this.exchangeRatesSecondField);
                this.finalAmount = this.finalAmount.toFixed(4)
            }
        }
    },
    async mounted() { 
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

.error-text-active {
    display: inline-block;
    color: red;
}
.error-text {
    display: none;
}
.list__item_wrapper {
    position: relative;
}

.list {
    margin-left: 20px;
}
.list__title {
    text-transform: uppercase;
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

.list__img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.list__img:nth-child(1) {
    background-image:url("@/assets/images/img-1.jpg");
}
.list__img:nth-child(2) {
    background-image:url("@/assets/images/img-2.jpg");
    // border-radius:  0px 50px 0px 0px;
}
.list__img:nth-child(3) {
    background-image:url("@/assets/images/img-3.jpg");
    // border-radius:  0px 0px 0px 50px;
}
.list__img:nth-child(4) {
    background-image:url("@/assets/images/img-4.png");
}

.info__item {
    margin: 36px 0 41px 31px;
}
</style>
