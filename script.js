const nuevaTarea = event => {
    event.preventDefault();
    let value=document.getElementById("tareas").value
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', cambiarEstadoTarea)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const cambiarEstadoTarea = event => {
    event.target.classList.toggle('hecho');
};


let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})