const inputComponent = {
  template: `<input class="input is-small" type="text" :placeholder="placeholder">`,
  props: ['placeholder']
};

new Vue({
  el: '#app',
  data: {
    notes: [],
    timestamps: [],
    placeholder: 'Enter a note'
  },
  components: {
    'input-component': inputComponent
  }
})