export default {
	mounted(){
		window.SideBar=this
	},
  
	data() {
		return {
			method:'',
			statusText : '',
			status : '',
		}
	},

  methods:{
   
  },
  
  template: /*start*/`
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse border-right text-light">
      <div class="position-sticky pt-3 px-2">
        <ul class="nav flex-column">
          <li class="nav-item">
              <select id="method" v-model="method" class="form-select mb-3">
                   <option disabled value="">Method</option>
                    <option>GET</option>
                    <option>POST</option>
              </select>
          </li>
        </ul>
        <br> 
		<ul class="nav flex-column">
          <li class="nav-item">
			<span class="mb-2 text-center">status-text</span>
            <input type="text" disabled v-model="statusText" :class="'form-control mb-3 s-'+statusText">
          </li>
          <li class="nav-item">
			<span class="mb-2 text-center">status</span>
            <input type="text" disabled v-model="status" :class="'form-control mb-3 s-'+statusText">
          </li>
        </ul>
      </div>
    </nav>
  
  ` /*end*/
}
