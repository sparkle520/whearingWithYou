import {createApp,reactive} from 'vue'
import Loading from '../components/Load.vue'
const divDom = document.createElement('div')
divDom.setAttribute('class', 'loading-container')

const options = reactive({
  open: true,
  txt: ''
})

const $loading = createApp(Loading, {options}).mount(divDom)

const loadPlguin = {
  open({txt}) {
    options.open = true
    options.txt = txt
    document.body.appendChild($loading.$el)
  },

  close() {
    options.open = false;
  }
}
export default {
  install(app) {
    app.provide('$loading',loadPlguin)
  }
}