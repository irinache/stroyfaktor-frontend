<template>
  <div class="cust-select" :tabindex="tabindex" @blur="open = false" >
    <div class="selected" :class="{open: open,  select_border: bordered}" @click="open = !open">{{ selected }}</div>
    <div class="items" :class="{selectHide: !open,  select_border: bordered}">
      <div
        class="item" 
        v-for="(option, i) of options"
        :key="i"
        @click="selected=option; open=false; $emit('input', option)"
      >{{ option }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bordered: Boolean,
    options: {
      type: Array,
      required: true,      
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  }
};
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.cust-select {
  position: relative;
  width: 220px;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}
.select_border{
  outline: 1px solid @dark-bg;
  outline-offset: -1px;
}
.selected {
  background-color: @light_text;  
  color: @dark-bg;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
}
.selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: @dark-bg transparent transparent transparent;
}
.selected.open, .selected:hover {
  background-color: @main_color;
  color:  @light_text;
  transition: 0.2s;
}
.items {
  color: @dark-bg;
  overflow: hidden;
  position: absolute;
  background-color:  @light_text;
  left: 0;
  right: 0;
  z-index: 100;
}
.item {
  color: @dark-bg;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

}
.item:hover {
  background-color: @main_color;
  color:  @light_text;
  transition: 0.2s;
}
.selectHide {
  display: none;
}
</style>