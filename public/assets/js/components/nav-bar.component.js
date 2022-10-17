import CreateEditor from "../editor.js"

export default {
    mounted(){
     NavBar=this
    /* if(localStorage.tabs){
	this.tabs=JSON.parse(localStorage.tabs) 
     }else if(localStorage.tabs === '[]' || !localStorage.tabs ){
	this.tabs= [{
		    title:'Request - 1',
		    active:true,
		    url:'http://URL:port-exemple',
		    requestData:'',
		    responseData:'',
	        }]
    }*/
	this.tabs= [{
		title:'Request - 1',
		active:true,
		url:'http://URL:port-exemple',
		requestData:'',
		responseData:'',
	}]
    this.numTabs=this.tabs.length
    //setInterval(()=>localStorage.tabs=JSON.stringify(this.tabs),100)
     
    },
    
    data() {
        return { 
            tabs:[
	        {
		    title:'rest',
		    active:true,
		    url:'http://exemple:port-ee',
		    requestData:'',
		    responseData:''
	        }
	    ],
	    numTabs:'',
	    tatus:'',
	    statusText:''
	}
	
  },
  
  methods:{
	switch_tab(item){
		this.saveData()
		for(let c in this.tabs){
			this.tabs[c].active=false
		}
		this.tabs[item].active=true
		setTimeout(()=>{
			Main.reqEditor = CreateEditor('#req-data','text/json','rdark')
			Main.sendEditor = CreateEditor('#send-data','text/json','rdark')
			console.log(this.tabs[item].requestData, this.tabs[item].requestData)
			//Main.reqEditor.setValue(this.tabs[item].requestData)
			//Main.sendEditor.setValue(this.tabs[item].requestData)
		}, 90)
	},
	
	newTab(){
		this.saveData()
	    this.tabs.push({
		title:`Request - ${++this.numTabs}`,
		url : 'URL',
		active:true
	    })
	    for(let c in this.tabs){
	        this.tabs[c].active=false
	    }
	    this.tabs[this.tabs.length-1].active=true

		setTimeout(()=>{
			Main.reqEditor = CreateEditor('#req-data','text/json','rdark')
			Main.sendEditor = CreateEditor('#send-data','text/json','rdark')
			//Main.reqEditor.setValue(this.tabs[item].requestData)
			//Main.sendEditor.setValue(this.tabs[item].requestData)
		}, 90)
	},
	
	removeTab(i){
		let index;
		if(!i){
			for(let c in this.tabs){
				if(this.tabs[c].active)index=c
			}
		}else{
			index=i
		}
		this.tabs.splice(index,1)
		if(this.tabs.length==0)return
	        if(index==0){
		     return this.tabs[index].active=true
		}else{
		   this.tabs[index-1].active=true
		   setTimeout(()=>{
				Main.reqEditor = CreateEditor('#req-data','text/json','rdark')
				Main.sendEditor = CreateEditor('#send-data','text/json','rdark')
				//Main.reqEditor.setValue(this.tabs[item].requestData)
				//Main.sendEditor.setValue(this.tabs[item].requestData)
		    },90)
		}
		
	},

	saveData(){
		for(let c in this.tabs){
			if(this.tabs[c].active){
				this.tabs[c].requestData =Main.reqEditor.getValue()
				this.tabs[c].responseData =Main.sendEditor.getValue()
			}
		}
	}

  },

  
  
  template: /*start*/`
      <div class="row">
          <div class="col-md-3 col-lg-2">fff</div>
	  <div class="col-md-9 col-lg-10 px-0">
	      <nav>
	          <div class="nav nav-tabs " id="nav-tab" role="tablist">
		      <span v-for="c,i in tabs">           
		          <button  v-if="c.active" class="nav-link active">{{c.title}}<span @click="removeTab(i)" class="remove-tab">x</span></button>
			  <button  v-else @click="switch_tab(i)" class="nav-link">{{c.title}} <span v-if="tabs[i].active" @click="removeTab(i)"  class="remove-tab">x</span></button>
		      </span>
		      <button @click="newTab()" class="nav-link"  id="new_tab"><i class="fa fa-plus"></button>
		  </div>
	     </nav>
          </div>
      </div>
  
  ` /*end*/
}
