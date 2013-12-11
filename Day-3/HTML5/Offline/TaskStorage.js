function TaskStorage(){
	var subscribers = {};
	this.addSubscriber = function(eventName,subscriptionFn){
		if (!subscribers[eventName]) subscribers[eventName] = [];
		subscribers[eventName].push(subscriptionFn);
	}
	this.removeSubscriber = function(eventName,subscriptionFn){
		for(var i=subscribers[eventName].length-1;i>=0;i--){
			if (subscribers[eventName][i] == subscriptionFn)
				subscribers[eventName].splice(i,1)
		}
		subscribers[eventName].push(subscriptionFn);
	};
	this.triggerEvent = function(eventName,args){
		for(var i=0;i<subscribers[eventName].length;i++){
			setTimeout((function(x){
				return function(){
					subscribers[eventName][x].apply(this,args);	
				};
			}(i)));
		}
	}
	this.storage = window.localStorage;
}
TaskStorage.prototype.getAllTasks = function(){
	var result = [];
	for(var i=0;i<this.storage.length;i++){
		var id = this.storage.key(i);
		var name = this.storage.getItem(id);
		var task = {id : id, name : name};
		result.push(task);
	}
	return result;
};
TaskStorage.prototype.addTask = function(taskName){
	var newId = new Date().getTime().toString();
	this.storage.setItem(newId,taskName);
	var newTask = {id : newId, name : taskName};
	this.triggerEvent("add",[newTask]);
	

};
TaskStorage.prototype.removeTask = function(taskId){
	var taskToRemove = {id : taskId, name : this.storage.getItem(taskId)};
	this.storage.removeItem(taskId);
	this.triggerEvent("remove",[taskToRemove]);
}