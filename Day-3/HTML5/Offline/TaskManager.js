(function(){
		var taskStorage = new TaskStorage();
		var taskCount = 0;
		taskStorage.addSubscriber("add",addTaskToUi);
		taskStorage.addSubscriber("add",incTaskCount);
		taskStorage.addSubscriber("remove",removeTaskFromUi);
		taskStorage.addSubscriber("remove",decTaskCount);


		function incTaskCount(){
			document.getElementById("divTaskCount").innerHTML = ++taskCount;
		}
		function decTaskCount(){
			document.getElementById("divTaskCount").innerHTML = --taskCount;
		}
		function initialize(){
			document.getElementById("btnAddTask").onclick = onBtnAddTaskClick;
			document.getElementById("btnRemoveCompleted").onclick = onBtnRemoveCompletedClick;
			loadAllTasksFromStorage();
			checkForManifestUpdates();
			
		}
		function checkForManifestUpdates(){
			applicationCache.onupdateready = function(){
				document.getElementById("divCacheUpdateReady").style.display = "block";
				document.getElementById("btnYes").onclick = function(){
					location.reload();
				}
				document.getElementById("btnNo").onclick = function(){
					document.getElementById("divCacheUpdateReady").style.display = "none";
				}
			}
		}
		function loadAllTasksFromStorage(){
			var allTasks = taskStorage.getAllTasks();
			for(var i=0;i<allTasks.length;i++){
				addTaskToUi(allTasks[i]);
				incTaskCount();

			}
		}
		function addTaskToUi(task){
			var ulTaskList = document.getElementById("ulTaskList");
			
			var newTaskItem = document.createElement("li");
			newTaskItem.setAttribute("task-id",task.id);
			newTaskItem.onclick = onTaskItemClick;
			newTaskItem.innerHTML = task.name;

			ulTaskList.appendChild(newTaskItem);
		}
		function removeTaskFromUi(task){
			console.log(task);
			var completedTaskItem = document.querySelector("#ulTaskList > li[task-id='" + task.id + "']");
			completedTaskItem.remove();
		}
		
		function onTaskItemClick(){
			if (this.classList.contains("completed")){
				this.classList.remove("completed");
			} else {
				this.classList.add("completed");
			}
		}
		function onBtnAddTaskClick(){
			var taskName = document.getElementById("txtTask").value;
			var newTask = taskStorage.addTask(taskName);
			
		}
		function onBtnRemoveCompletedClick(){
			var completedTaskItems = document.querySelectorAll("#ulTaskList > li.completed");
			for(var i=0;i<completedTaskItems.length;i++){
				taskStorage.removeTask(completedTaskItems[i].getAttribute("task-id"));
				
			}
		}
		window.onload = initialize;
	}());