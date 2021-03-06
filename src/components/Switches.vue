<template>
    <label :class="classObject">
        <span class="vue-switcher__label" v-if="shouldShowLabel">
            <span v-if="label" v-text="label"></span>
            <span v-if="!label && value" v-text="textEnabled"></span>
            <span v-if="!label && !value" v-text="textDisabled"></span>
        </span>

        <input type="checkbox" :disabled="disabled" @change="trigger" :checked="value">

        <div></div>
    </label>
</template>

<script>
export default {
    name: 'Switches',
    props: {
        typeBold: {
            default: false
        },
        value: {
            default: false
        },
        disabled: {
            default: false
        },
        label: {
            default: ''
        },
        textEnabled: {
            default: ''
        },
        textDisabled: {
            default: ''
        },
        color: {
            default: 'default'
        },
        theme: {
            default: 'default'
        },
        emitOnMount: {
            default: true
        }
    },
    mounted () {
        if(this.emitOnMount) {
            this.$emit('input', this.value)
        }
    },
    methods: {
        trigger (e) {
            this.$emit('input', e.target.checked)
        }
    },
    computed: {
        classObject () {
            const { color, value, theme, typeBold, disabled } = this;
            return {
                'vue-switcher' : true,
                ['vue-switcher--unchecked'] : !value,
                ['vue-switcher--disabled'] : disabled,
                ['vue-switcher--bold']: typeBold,
                ['vue-switcher--bold--unchecked']: typeBold && !value,
                [`vue-switcher-theme--${theme}`] : color,
                [`vue-switcher-color--${color}`] : color,
            };
        },
        shouldShowLabel () {
            return this.label !== '' || this.textEnabled !== '' || this.textDisabled !== '';
        }
    }
}
</script>
<style scoped>
/**
 * Default
 */
/**
 * Bulma
 */
/**
 * Bootstrap
 */
.vue-switcher {
  position: relative;
  display: inline-block; }
  .vue-switcher__label {
    display: block;
    font-size: 10px;
    margin-bottom: 5px; }
  .vue-switcher input {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    cursor: pointer; }
  .vue-switcher div {
    height: 15px;
    width: 36px;
    position: relative;
    border-radius: 30px;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: linear .2s, background-color linear .2s; }
    .vue-switcher div:after {
      content: '';
      height: 45px;
      width: 45px;
      border-radius: 100px;
      display: block;
      transition: linear .15s, background-color linear .15s;
      position: absolute;
      left: 100%;
      margin-left: -18px;
      cursor: pointer;
      top: -3px;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1); }
  .vue-switcher--unchecked div {
    justify-content: flex-end; }
    .vue-switcher--unchecked div:after {
      left: 15px; }
  .vue-switcher--disabled div {
    opacity: .3; }
  .vue-switcher--disabled input {
    cursor: not-allowed; }
  .vue-switcher--bold div {
    top: 0px;
    height: 52px;
    width: 102px; }
    .vue-switcher--bold div:after {
      margin-left: -50px;
      top: 3px; }
  .vue-switcher--bold--unchecked div:after {
    left: 52px; }
  .vue-switcher--bold .vue-switcher__label span {
    padding-bottom: 7px;
    display: inline-block; }
  .vue-switcher-theme--default.vue-switcher-color--default div {
    background-color: #26b5a9; }
    .vue-switcher-theme--default.vue-switcher-color--default div:after {
      background-color: #ffffff; }
  .vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div {
    background-color: #dfdfdf; }
    .vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after {
      background-color: #ffffff; }
  .vue-switcher-theme--default.vue-switcher-color--blue div {
    background-color: #77b0c8; }
    .vue-switcher-theme--default.vue-switcher-color--blue div:after {
      background-color: #539bb9; }
  .vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div {
    background-color: #c0dae5; }
    .vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div:after {
      background-color: #77b0c8; }
  .vue-switcher-theme--default.vue-switcher-color--red div {
    background-color: #c87777; }
    .vue-switcher-theme--default.vue-switcher-color--red div:after {
      background-color: #b95353; }
  .vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div {
    background-color: #e5c0c0; }
    .vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div:after {
      background-color: #c87777; }
  .vue-switcher-theme--default.vue-switcher-color--yellow div {
    background-color: #c9c377; }
    .vue-switcher-theme--default.vue-switcher-color--yellow div:after {
      background-color: #bab353; }
  .vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div {
    background-color: #e6e3c0; }
    .vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div:after {
      background-color: #c9c377; }
  .vue-switcher-theme--default.vue-switcher-color--orange div {
    background-color: #c89577; }
    .vue-switcher-theme--default.vue-switcher-color--orange div:after {
      background-color: #b97953; }
  .vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div {
    background-color: #e5cec0; }
    .vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div:after {
      background-color: #c89577; }
  .vue-switcher-theme--default.vue-switcher-color--green div {
    background-color: #77c88d; }
    .vue-switcher-theme--default.vue-switcher-color--green div:after {
      background-color: #53b96e; }
  .vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div {
    background-color: #c0e5ca; }
    .vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div:after {
      background-color: #77c88d; }
  .vue-switcher-theme--bulma.vue-switcher-color--default div {
    background-color: gainsboro; }
    .vue-switcher-theme--bulma.vue-switcher-color--default div:after {
      background-color: #f5f5f5; }
  .vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div {
    background-color: #e8e8e8; }
    .vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div:after {
      background-color: #f5f5f5; }
  .vue-switcher-theme--bulma.vue-switcher-color--primary div {
    background-color: #05ffda; }
    .vue-switcher-theme--bulma.vue-switcher-color--primary div:after {
      background-color: #00d1b2; }
  .vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div {
    background-color: #6bffe9; }
    .vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div:after {
      background-color: #05ffda; }
  .vue-switcher-theme--bulma.vue-switcher-color--blue div {
    background-color: #5e91e3; }
    .vue-switcher-theme--bulma.vue-switcher-color--blue div:after {
      background-color: #3273dc; }
  .vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div {
    background-color: #b5ccf2; }
    .vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div:after {
      background-color: #5e91e3; }
  .vue-switcher-theme--bulma.vue-switcher-color--red div {
    background-color: #ff6b89; }
    .vue-switcher-theme--bulma.vue-switcher-color--red div:after {
      background-color: #ff3860; }
  .vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div {
    background-color: #ffd1da; }
    .vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div:after {
      background-color: #ff6b89; }
  .vue-switcher-theme--bulma.vue-switcher-color--yellow div {
    background-color: #ffe78a; }
    .vue-switcher-theme--bulma.vue-switcher-color--yellow div:after {
      background-color: #ffdd57; }
  .vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div {
    background-color: #fffcf0; }
    .vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div:after {
      background-color: #ffe78a; }
  .vue-switcher-theme--bulma.vue-switcher-color--green div {
    background-color: #3dde75; }
    .vue-switcher-theme--bulma.vue-switcher-color--green div:after {
      background-color: #22c65b; }
  .vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div {
    background-color: #94edb3; }
    .vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div:after {
      background-color: #3dde75; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--default div {
    background-color: #e6e6e6; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--default div:after {
      background-color: #f0f0f0; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div {
    background-color: whitesmoke; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div:after {
      background-color: #f0f0f0; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--primary div {
    background-color: #4f93ce; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--primary div:after {
      background-color: #337ab7; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div {
    background-color: #9fc4e4; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div:after {
      background-color: #4f93ce; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--success div {
    background-color: #80c780; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--success div:after {
      background-color: #5cb85c; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div {
    background-color: #c7e6c7; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div:after {
      background-color: #80c780; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--info div {
    background-color: #85d0e7; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--info div:after {
      background-color: #5bc0de; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div {
    background-color: #daf1f8; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div:after {
      background-color: #85d0e7; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--warning div {
    background-color: #f4c37d; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--warning div:after {
      background-color: #f0ad4e; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div {
    background-color: #fceedb; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div:after {
      background-color: #f4c37d; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--danger div {
    background-color: #d9534f; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--danger div:after {
      background-color: #c9302c; }
  .vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div {
    background-color: #eba5a3; }
    .vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div:after {
      background-color: #d9534f; }
</style>