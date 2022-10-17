export default {
  mounted(){
		window.Alert=this
	},

  data() {
    return {alerts:[]}
  },
  
  methods:{
      close(index){
          this.alerts.splice(index,1)    
      }    
  },
  
  template: /*start*/`
     <div class="modal fade" id="modal-alert" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content bg-dark text-light">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-title">Alerts</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-if="alerts.length != 0">
                    <div  v-for="c,i in alerts" :class="'alert alert-'+c.type+' alert-dismissible fade show'" role="alert">
                        {{c.message}} - {{c.time}}
                        <button type="button" @click="close(i)" class="btn-close" aria-label="Close"></button>
                    </div>
                    <br><br><br>
                </div>
                <div class="modal-body" v-else>
                    <div  class="alert alert-info alert-dismissible fade show" role="alert">
                        No Requests
                    </div>
                    <br>
                </div>
                <div class="modal-footer">
                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
    </div>
  ` /*end*/
}
