import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')




axios.all([axios({
    url: 'http://152.136.185.210:7878/api/m5/home/multidata'
}), axios({
    url: 'http://152.136.185.210:7878/api/m5/home/data',
    params: {
        type: 'sell',
        page: 4
    }
})]).then(results => {
    console.log(results);
})