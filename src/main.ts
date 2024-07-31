import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import registerGlobComp from '@/components'
import pinia from '@/store'
import router from './router'
import '@/access'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import '@arco-design/web-vue/dist/arco.css'
import 'bytemd/dist/index.css'
import '@/utils/axios'

const app = createApp(App)
app.use(registerGlobComp)
// app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.mount('#app')

// openapi --input http://localhost:8101/api/v2/api-docs --output ./generated --client axios
