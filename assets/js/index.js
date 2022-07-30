//tareas principales
let taskIn = [
    { id: 1, name: "Programar", status: false },
    { id: 2, name: "Estudiar", status: false },
    { id: 3, name: "Trabajar", status: false },
  ];
  
  const elemContenedor = document.querySelector(".principalTasks");
  function createElements() {
    for (const task of taskIn) {
      if (task.status == true) {
        checking = "checked";
      } else {
        checking = "";
      }
      elemContenedor.innerHTML += `
        <table class="principalTasks">
      <td>${task.id}</td>
      <td>${task.name}<button onclick="deleteTask(${task.id})"> Borrar </button></td>
      <td>
        <input type="checkbox" name="checkbox" id="option${task.id}" ${checking} onclick="updateTasks(${task.id})" value="first_checkbox"/>
        </td>
      
  
   
  </table>
  
        `;
    }
  }
  //creando tareas principales
  createElements();
  const tasksFinals = document.querySelector(".principalTasks");
  const tasksInput = document.querySelector("#newTask");
  const button = document.querySelector("#buttonTasks");
  const span = document.querySelector("#count-tasks");
  
  //añadiendo nuevas tareas
  function addingElements() {
    let start = 1;
    let end = 100;
  
    const tasks = [];
    button.addEventListener("click", () => {
      const nametask = tasksInput.value;
  
      taskIn.push({
        id: start + Math.floor(Math.random() * (start - end + 1)) + end,
        name: nametask,
        status: false,
      });
      tasksInput.value = "";
      let html = "";
  
      for (let task of taskIn) {
        if (task.status == true) {
          checking = "checked";
        } else {
          checking = "";
        }
        html += `
        <table class="principalTasks">
    
    <tr id="tasks">
      <td>${task.id}</td>
      <td>${task.name} <button onclick="deleteTask(${task.id})"> Borrar </button></td>
      <td>
        <input type="checkbox" id="option${task.id}" ${checking} onclick="updateTasks(${task.id})" name="checkbox" value="first_checkbox"/>
        </td>
      </tr>
   <tr>
    </tr>
  </table>
  
        `;
      }
      let totalTasks = taskIn.length;
      span.innerHTML = totalTasks;
      elemContenedor.innerHTML = html;
      console.log("task", taskIn);
      console.log("tasksFinals", html);
    });
  }
  
  addingElements();
  
  //eliminando tareas
  let deleteTask = (id) => {
    const indextasks = taskIn.findIndex((task) => task.id === id);
    taskIn.splice(indextasks, 1);
  
    console.log("index deleted", indextasks);
    let html = "";
    for (let task of taskIn) {
      if (task.status == true) {
        checking = "checked";
      } else {
        checking = "";
      }
      html += `  <table class="principalTasks">
  
          <table class="principalTasks">
    
    <tr id="tasks">
      <td>${task.id}</td>
      <td>${task.name} <button onclick="deleteTask(${task.id})"> Borrar </button></td>
      <td>
        <input type="checkbox" id="option${task.id}" ${checking} onclick="updateTasks(${task.id})" name="checkbox"  value="first_checkbox"/>
        </td>
      </tr>
   <tr>
    </tr>
  </table>
     `;
    }
    let totalTasks = taskIn.length;
    span.innerHTML = totalTasks;
    elemContenedor.innerHTML = html;
    console.log("task", taskIn);
    console.log("tasksFinals", html);
    cuentaOK();
  };
  //actualizando tareas
  let updateTasks = (id) => {
    const index = taskIn.findIndex((task) => task.id == id);
    if (document.querySelector("#option" + id).checked == true) {
      taskIn[index].status = true;
    } else {
      taskIn[index].status = false;
    }
    cuentaOK();
    console.log(taskIn);
  };
  //total tareas realizadas
  const cuentaOK = function () {
    accountTasks = taskIn.filter(({ status }) => status === true).length;
    taskcheck.innerHTML = accountTasks;
  };
  
  cuentaOK();
  
