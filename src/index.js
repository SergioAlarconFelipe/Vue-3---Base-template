import { createApp } from 'vue'
import router from './router'
import App from './App'

import 'assets/css/app.styl'

const app = createApp( App );
app.use( router );
app.mount( '#app' );

window.v = app;
