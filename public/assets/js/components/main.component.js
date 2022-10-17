import CreateEditor from "../editor.js"

export default {
	mounted(){
		setTimeout(()=>this.tabs = NavBar.tabs, 100)
		window.Main=this
		setTimeout(()=>{
			this.reqEditor = CreateEditor('#req-data','text/json','rdark')
			this.sendEditor = CreateEditor('#send-data','text/json','rdark')
		}, 150)
	},

	

	data() {
		return { 
			tabs:'',
			reqEditor:'',
			sendEditor:'',
		}
	},

	methods:{
		jsonParse(d){
			let data
			try{
				data = JSON.parse(d)
			}catch(err){
				return{data:null, err:err}
			}
			return data
	},

		async request(tab){
			this.parseReq(tab)
			let date = new Date()
			let dataToReturn
			let jsonData

			if(tab.requestData){
				jsonData = this.jsonParse(tab.requestData)
				if(jsonData.err)return alert(jsonData.err.stack.slice(0,85)+'...')
			}
			if(SideBar.method=='POST' || SideBar.method=='POST' ){
				dataToReturn = await this.requestPOST(jsonData,tab.url)
			}else if(SideBar.method=='GET' || SideBar.method=='get' ){
				dataToReturn = await this.requestGET(jsonData, tab.url)
			}else{
				return alert("No method especificado")
				tab.responseData = ''
				SideBar.statusText = ''
				SideBar.status = ''
			}
			if(dataToReturn.err){
				let status = dataToReturn.err.slice(32,35)
				alert(dataToReturn.err);
				if(!Number(status)) return

				tab.responseData = ''
				this.sendEditor.setValue('');
		 		SideBar.statusText = 'ERROR'
				SideBar.status = status
				 Alert.alerts.push({
					type: 'danger',
					message:'Request Failed with status '+status,
					time:`${date.getHours()}:${date.getMinutes()}`
				})
				return
			}

			tab.responseData = JSON.stringify(dataToReturn.data.data)
			this.parseSend(tab)
			SideBar.statusText = dataToReturn.data.statusText
			SideBar.status = dataToReturn.data.status
			Alert.alerts.push({
				type: 'success',
				message:'Request successfull with status '+dataToReturn.data.status,
				time:`${date.getHours()}:${date.getMinutes()}`
			})
		},

		async requestGET(data, url){
			let response
			if(data){
				try{
					response = await axios.get(url,data)
				}catch(err){
					return {err:err.stack.slice(7,70), data:null}
				}
				return {err:null, data:response}
			}
			try{
				response = await axios.get(url)
			}catch(err){
				return {err:err.stack.slice(7,70), data:response}
			}
			return {err:null, data:response}
		},

		async requestPOST(data, url){
			let response
			if(data){
				try{
					response = await axios.post(url, data)
				}catch(err){
					return {err:err.stack.slice(7,70), data:null}
				}
				return {err:null, data:response}
			}
			try{
				response = await axios.post(url)
			}catch(err){
				return {err:err.stack.slice(7,70), data:null}
			}
			return {err:null, data:response}
		},
    
		updateEditor(){
			setInterval(()=>{
				for(let c in this.tabs){
					if(this.tabs[c].active){
						this.tabs[c].requestData = this.reqEditor.getValue();
					}
				}
			})
		},

		parseReq(tab){
			tab.requestData = this.reqEditor.getValue();
		},

		parseSend(tab){
			this.sendEditor.setValue(tab.responseData);
		},

	},
	components:{
  
 	},

 
	template: /*start*/`
		<main class="col-md-9 ms-sm-auto col-lg-10 ">
			<br>

			<div  v-if="tabs.length===0" class="text-muted info-1"> 
          <h3>Create New Request </h3> 
      </div>

			<div v-for="c,i in tabs">
				<div :key="i" v-if="c.active">
					<div class="row">
						<div class="col-sm-7">
						    <input type="text" id="url" v-model="c.url" class="form-control">
						    
						</div>
						<div class="col-sm-5">
							<button type="button" @click="request(c)" class="btn btn-outline-light">send</button>
						</div>
					</div>
					<br><br>
					<div class="row">
						<div class="col-sm-6">
							<textarea v-model="c.requestData" id="req-data" class="form-control" style="height: 15rem;"></textarea>
						</div>
						<div class="col-sm-6">
							<textarea v-model="c.responseData" id="send-data" disabled class="form-control" style="height: 15rem;"></textarea>
						</div>
					</div>
				<div>
			</div>
		</main>
  
  ` /*end*/
}
