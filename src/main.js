import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import
{
    Button,
    Carousel,
    CarouselItem,
    Checkbox,
    Tag,
    Loading,
    Radio,
    RadioGroup,
    RadioButton,
    Pagination
}
    from 'element-ui';
import '../theme/index.css'
import "./assets/css/main.less";
import locale from 'element-ui/lib/locale/lang/en'
import i18n from './lang'

Vue.prototype.$ELEMENT = { zIndex: 3000, locale};

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Checkbox)
Vue.use(Tag)
Vue.use(Loading)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Pagination)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
