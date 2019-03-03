import Vue from "vue"
import Router from 'vue-router'
import home from './components/home'
import movieDetails from './components/movie-details'
import movieEdit from './components/movie-edit'
import movieAdd from './components/movie-add'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: "/movie/:id",
            component: movieDetails
        },
        {
            path: "/movie/:id/edit",
            component: movieEdit
        },
        {
            path: "/add",
            component: movieAdd
        }
    ]
});