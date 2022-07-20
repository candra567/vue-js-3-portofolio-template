import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import route from './route/route.js';
import './assets/index.css';


const store = createStore({
    state () {
      return {
        nav:false
      }
    },
    mutations: {
      showNav (state) {
        state.nav=true;
      },
      hideNav(state){
       state.nav=false;
      }
    }
  })

createApp(App).use(route).use(store).mount('#app')

