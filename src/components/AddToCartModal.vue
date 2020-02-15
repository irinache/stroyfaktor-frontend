<template>
	<transition name="modal" v-if="showModal">
    <div class="modal-mask" @click="switchModalAddedToCartState(false)">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop="">
					<div class="cross" @click="switchModalAddedToCartState(false)">					
					</div>
          <div v-show="step==1">
            <h2 class="text-uppercase">
              Добавить в козину
            </h2>        
            <div class="modal-text">
              Укажите количество квадратных метров:           
            </div>
            <form action="" autocomplete="off">    
              <div class="counter align-top d-block">
                <div class="minus" @click="decreaseCount()">
                  -
                </div>
                <input type="number" name="count" class="count" v-model.number="item_count" min="1">
                <div class="plus" @click="increaseCount()">
                  +
                </div>                  
              </div>
              <div class="button brdr-btn-main-color text-center d-inline-block"  @click="switchModalAddedToCartState(false)">К покупкам</div>
              <div class="button solid-button text-center d-inline-block" @click="addToCart">Добавить в корзину</div>         
            </form>
          </div>
          <div v-show="step==2">
            <h2 class="text-uppercase">
              Товар добавлен
            </h2>        
            <div class="modal-text">
              Товар был успешно добавлен в вашу корзину          
            </div>               
              <div class="button brdr-btn-main-color text-center d-inline-block"  @click="switchModalAddedToCartState(false)">Вернуться к покупкам</div>
              <div class="d-inline-block" @click="switchModalAddedToCartState(false)">
                <router-link to="/cart" class="button solid-button text-center d-inline-block" @click="switchModalAddedToCartState(false)">Оформить заказ</router-link>
              </div>
          </div>					          
				</div>
      </div>
    </div>
  </transition>
</template>

<script>
	export default{
  data() {
    return{
      showModal: false,
      item_count: 1,
      step:1,
    }     
  },
  methods:{
    switchModalAddedToCartState: function(isShown) {         
      this.showModal = isShown; 
    },
    increaseCount: function(){
      this.item_count++;      
    },
    decreaseCount: function(){
      if(this.item_count>1){          
        this.item_count--;        
      }
    },
    addToCart:function(){
      this.step = 2;
    }
  },
  mounted(){
    this.$root.$on('modal-atc-on', (isShown) => {this.switchModalAddedToCartState(isShown)});
  }
}
</script>


<style lang="less" scoped>
@import '../assets/styles/index.less';
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
	position: relative;
	text-align: center;
  width: 700px;
  margin: 0px auto;
  padding: 40px 50px;
  background-color:@light_text;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}
.modal-text {
  width: 450px;
  margin: 0 auto 25px auto;
}
.modal-default-button {
  float: right;
}
input:focus{
  outline: none;
}
.button{
  margin: 10px; 
}
form{
	text-align: center;
}
.cross{
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 99999;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.counter{
  display: block;
  //z-index: 9999;
}
.minus, .plus, .count{
  padding: 0 25px;
  line-height: 55px;
  display: inline-block;
  z-index: 9999;
}
.count{
  background-color: @light_text;
  width: 100px;
  border: none;
  background-color: @medium-bg;
  text-align: center;
}
.minus, .plus{
  background-color: @main_color;
  font-weight: bold;
  color: @light_text;
}
.minus:hover, .plus:hover{
  background-color: @hover_main_color;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance:textfield;
}
</style>