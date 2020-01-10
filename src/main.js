import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

import 'mdbvue/lib/mdbvue.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import '../mdb/mdbvue/scss/mdb-free.scss'
import Vue from 'vue'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue//lib/css/mdb.min.css';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
