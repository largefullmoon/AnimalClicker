


const scriptsInEvents = {

	async Gameevents_Event2_Act7(runtime, localVars)
	{
		runtime.globalVars.dataloadingflag = 1;
	},

	async Gameevents_Event292_Act2(runtime, localVars)
	{
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onload = function() {
			switch(this.responseText){
				case "noconnection":
					return true;
					break;
				case "failure":
					return false;
					break;
				default:
					runtime.globalVars.totalMoney = this.responseText;
					runtime.globalVars.islocaldata = 0;
					runtime.globalVars.setting = 1;
					return true;
					break;
			}
		}
		xmlhttp.open("POST", "https://reward.tg/game/index.php?func=getscore&userID="+runtime.globalVars.userId);
		xmlhttp.setRequestHeader('Content-Type', 'application/json');
		xmlhttp.send();
	},

	async Gameevents_Event294_Act3(runtime, localVars)
	{
		runtime.globalVars.setting = 0;
		runtime.globalVars.islocaldata = 0;
	},

	async Gameevents_Event297_Act12(runtime, localVars)
	{
		if(runtime.globalVars.totalMoney==0)
			return;
		else{
			var xmlhttp = new XMLHttpRequest();
				xmlhttp.onload = function() {
				switch(this.responseText){
					case "noconnection":
						alert("can't connect database");
						return true;
						break;
					case "success":
						return true;
						break;
					case "failure":
						console.log("failure");
						return false;
						break;
					default:
						return false;
						break;
				}
			}
		
			xmlhttp.open("POST", "https://reward.tg/game/index.php?func=savescore&score="+runtime.globalVars.totalMoney+'&userID='+runtime.globalVars.userId);
			xmlhttp.setRequestHeader('Content-Type', 'application/json');
			xmlhttp.send();
		}
		
	},

	async Loginevents_Event1_Act1(runtime, localVars)
	{
		var btn  = document.getElementById('signUserBtn');
		
		btn.onclick = function() {
			var userId = document.getElementById("signUserId").value;
			if(userId==''){
				return false;
			}
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onload = function() {
				switch(this.responseText){
					case "noconnection":
						return true;
						break;
					case "success":
						runtime.globalVars.login = 1;
						runtime.globalVars.userId = userId;
						return true;
						break;
					case "failure":
						return false;
						break;
					case "registersuccess":
						runtime.globalVars.login = 1;
						runtime.globalVars.userId = userId;
						return true;
						break;
					default:
						return false;
						break;
				}
			}
			xmlhttp.open("POST", "https://reward.tg/game/index.php?func=login&userId="+userId);
			xmlhttp.setRequestHeader('Content-Type', 'application/json');
			xmlhttp.send();
		};
	},

	async Loginevents_Event2_Act1(runtime, localVars)
	{
		var btn  = document.getElementById('signUserBtn');
		
		btn.onclick = function() {
			var userId = document.getElementById("signUserId").value;
			if(userId==''){
				return false;
			}
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onload = function() {
				switch(this.responseText){
					case "noconnection":
						return true;
						break;
					case "success":
						runtime.globalVars.login = 1;
						runtime.globalVars.userId = userId;
						return true;
						break;
					case "failure":
						return false;
						break;
					case "registersuccess":
						runtime.globalVars.login = 1;
						runtime.globalVars.userId = userId;
						return true;
						break;
					default:
						return false;
						break;
				}
			}
			xmlhttp.open("POST", "https://reward.tg/game/index.php?func=login&userId="+userId);
			xmlhttp.setRequestHeader('Content-Type', 'application/json');
			xmlhttp.send();
		};
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

