import Vue from 'vue'
import App from './app'
import router from './routes'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

//Vue.component('movieEdit-item', movieEdit);
//Vue.component('home', home);

Vue.use(Vuetify);

try {
    require('axios').get('http://localhost:3000/listMovies').then(value => {
        window.shared_data = {
            movies: value.data
        };
        new Vue({
            el: '#app',
            router,
            components: {App},
            template: '<App/>'
        });
    })
} catch (error) {
    console.log(error)
}

