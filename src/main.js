import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'

const One = () => import('./One.vue')
const Two = () => import('./Two.vue')
const Three = () => import('./Three.vue')

const Home = {
  template: '<div>home…</div>'
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/one', component: One },
    { path: '/two', component: Two },
    { path: '/three', component: Three },
    { path: '', component: Home }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
