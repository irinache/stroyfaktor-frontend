<template>
	<div>
	<label class="container">
		<slot></slot>
		<input type="checkbox">
		<span class="checkmark"></span>
	</label>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: @light_text;
  transition: 0.2s;
}
.checkmark:hover {
  background-color: @main_color;
  transition: 0.2s;
}
label:hover{
	font-weight: bold;
	color: @main_color;
}
.container input:checked ~ .checkmark {
  background-color: @main_color;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  left: 10px;
  top: 5px;
  width: 5px;
  height: 12px;
  border: solid @light_text;
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>