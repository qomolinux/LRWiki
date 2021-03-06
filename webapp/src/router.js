import Vue from 'vue'
import Router from 'vue-router'
import wikidocs from './views/wikidocs.vue'
import viewlogin  from './views/login.vue';

Vue.use(Router)
let base =`${process.env.BASE_URL}`
export default new Router({
  mode : 'history',
  base : base,
  routes: [
    {
      path: '/',
      name: 'home',
      component: wikidocs,
    },
    {
      path: '/docs/:docid/',
      name: 'docs' ,
      props: true ,
      component: () => import(/* webpackChunkName: "Detail" */'./components/DocDetail.vue')
    },
    {
      path: '/docs/:docid/editer',
      name: 'docsediter' , 
      props:true,
      component: () => import(/*webpackChunkName: "editor" */'./views/doceditor.vue')
    },
    {
      path:'/login',
      name:'login',
      component: viewlogin,
    },
    {
      path:'/doc/new',
      name:'newdoc',
      props:true,
      component: () => import(/*webpackChunkName: "editor" */'./views/doceditor.vue')
    }
  ]
})
