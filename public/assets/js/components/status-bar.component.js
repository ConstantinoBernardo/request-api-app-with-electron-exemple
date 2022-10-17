export default {
  mounted(){
      setTimeout(()=>this.alerts = Alert.alerts, 100)
  },
  
  data() {
    return { alerts:0}
  },
  template: /*start*/`
     <footer class="fixed-bottom  bg-primary text-light" id="status-bar">
         <a href="#" data-bs-toggle="modal" data-bs-target="#modal"><i class="fa fa-cog"></i></a>
         <a href="#" data-bs-toggle="modal" data-bs-target="#modal-alert"><i class="fa fa-exclamation-triangle"></i> {{alerts.length}}</a>
     </footer>
  ` /*end*/
}
