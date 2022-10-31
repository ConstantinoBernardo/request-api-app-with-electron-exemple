import { createApp} from '../vendor/vue/vue.esm-browser.js'

import Navbar from "./components/nav-bar.component.js"
import Sidebar from "./components/side-bar.component.js"
import Main from "./components/main.component.js"
import StatusBar from "./components/status-bar.component.js"
import ModalSetting from "./components/modal-setting.component.js"
import ModalAlert from "./components/modal-alert.component.js"


const App = {
    data() {
        return {
        }
    },
    components:{
       Navbar,
       Sidebar,
       Main,
       StatusBar,
       ModalSetting,
       ModalAlert
    },
    template:/*start*/`
        <div class="container-fluid">
            <Navbar/>
            <div class="row">
                <Sidebar/>
                <Main/>
            </div>
        </div>
        <StatusBar/>
        <ModalSetting/>
        <ModalAlert/>
    `/*end*/
}


createApp(App).mount("#app")
