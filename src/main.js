import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')




axios.all([axios({
    url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
    url: 'http://123.207.32.32:8000/home/data',
    params: {
        type: 'sell',
        page: 4
    }
})]).then(results => {
    console.log(results);
})