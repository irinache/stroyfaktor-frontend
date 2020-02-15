<template>
	<transition name="modal" v-if="showModal">
    <div class="modal-mask" @click="switchModalCallMeBackState(false)">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop="">
					<div class="cross" @click="switchModalCallMeBackState(false)">					
					</div>
					<h2 class="text-uppercase">
            Перезвоните мне
          </h2>        
          <div class="modal-text">
						Оставьте свой номер телефона и представитель компании с вами свяжется.						
          </div>
          <form action="" autocomplete="off">							
							<input type="phone" name="phone" placeholder="Номер телефона" class="light-input">								
							<input type="submit" value="Отправить" class="button solid-button text-center">				
					</form>          
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
    }     
  },
  methods:{
    switchModalCallMeBackState: function(isShown) {         
      this.showModal = isShown; 
    },
  },
  mounted(){
    this.$root.$on('modal-on', (isShown) => {this.switchModalCallMeBackState(isShown)});
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

input{
	width: 100%;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
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
</style>