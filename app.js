const darkMode = document.querySelector('.darkmode');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const body = document.querySelector('body');
const addList = document.querySelector('.add-list');
const taskInput = document.querySelector('.task-input');
const itemContainer = document.querySelector('.items-container');
let circles = document.querySelectorAll('.items-container .circle');
const clearCompleted = document.querySelector('.clear-completed');
let removing = document.querySelectorAll('.delete-btn');
const numItmems = document.querySelector('.number');
const completed = document.querySelector('.completed');
const all = document.querySelector('.all');
const active = document.querySelector('.active');
let eleId;
let num = 0;
numItmems.textContent = '5';

taskInput.value = "";

darkMode.addEventListener('click',()=>{
    body.classList.toggle('toggle');
    light.classList.toggle('light-toggle');
    dark.classList.toggle('dark-toggle');
})

// adding new task

function updateList() {
    const newItemContainer = document.createElement('div');
    const newCircle = document.createElement('div');
    const wrapper = document.createElement('div');
    newItemContainer.setAttribute('draggable','true');
    newItemContainer.setAttribute('id',`container-${Math.random()}`);
    const newContent = document.createElement('p');
    const newBtn = document.createElement('button');
    const newImg = document.createElement('img');
    wrapper.appendChild(newCircle);
    wrapper.appendChild(newContent);
    wrapper.appendChild(newBtn);
    newBtn.appendChild(newImg);
    newItemContainer.appendChild(wrapper);
    console.log(newItemContainer);
    newCircle.setAttribute('class','circle');
    newContent.setAttribute('class','para');
    newContent.textContent = taskInput.value;
    newBtn.setAttribute('class','delete-btn');
    newImg.setAttribute('src','images/icon-cross.svg');
    itemContainer.appendChild(newItemContainer);
    taskInput.value='';
    numItmems.textContent = Number(numItmems.textContent)+1;
    newCircle.addEventListener('click',()=>{
        newCircle.classList.toggle('circle-toggle');
        newCircle.parentElement.querySelector('p').classList.toggle('para-completed');
    })
    circles = document.querySelectorAll('.items-container .circle');
    circles.forEach(ci=>{
        ci.addEventListener('click',()=>{
        if(ci.classList.contains('circle-toggle')) {
            numItmems.textContent = Number(numItmems.textContent)-1;
        }else {
            numItmems.textContent = Number(numItmems.textContent)+1;
        }
    });
    })
    removing = document.querySelectorAll('.delete-btn');
    removing.forEach(rm=>{
        rm.addEventListener('click',()=>{
            rm.parentElement.style. transform= "translate(100%, 0) scale(0,0)";
            rm.parentElement.style.transitionDuration = "0.1s";
            setTimeout(() => {
                rm.parentElement.remove();
            }, 200);
        })
    })

    newItemContainer.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text/html',e.currentTarget.id);
        eleId = e.dataTransfer.getData('text/html');
    });
    newItemContainer.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
    newItemContainer.addEventListener('drop',()=>{
        document.getElementById(eleId).appendChild(newItemContainer.lastElementChild);
        newItemContainer.appendChild(document.getElementById(eleId).firstElementChild);

    });
}

addList.addEventListener('click',()=>{
    if(taskInput.value!=''){
        updateList();
    }
})

// completed task encircle

circles.forEach(cl=>{
    cl.addEventListener('click',(evt)=>{
        evt.target.classList.toggle('circle-toggle');
        cl.parentElement.querySelector('p').classList.toggle('para-completed');
    })
})
circles.forEach(ci=>{
    ci.addEventListener('click',()=>{
    if(ci.classList.contains('circle-toggle')) {
        numItmems.textContent = Number(numItmems.textContent)-1;
    }else {
        numItmems.textContent = Number(numItmems.textContent)+1;
    }
});
})

clearCompleted.addEventListener('click',(e)=>{
    e.preventDefault();
    circles.forEach(element => {
        if(element.classList.contains('circle-toggle')){
            element.parentElement.style. transform= "translate(100%,0px) scale(0,0)";
        element.parentElement.style.transitionDuration = "0.3s";
        setTimeout(() => {
            element.parentElement.remove();
        }, 200);
        }
    });
})


removing.forEach(rm=>{
    rm.addEventListener('click',()=>{
        rm.parentElement.style. transform= "translate(100%,0px) scale(0,0)";
        rm.parentElement.style.transitionDuration = "0.3s";
        setTimeout(() => {
            rm.parentElement.remove();
        }, 200);
    })
})


// drag and drop

function dragdrop() {
    const containers = document.querySelectorAll('.items-container>div');
containers.forEach(con=>{
    con.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text/html',e.currentTarget.id);
        eleId = e.dataTransfer.getData('text/html');
    });
    con.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });
    con.addEventListener('drop',()=>{
        document.getElementById(eleId).appendChild(con.lastElementChild);
        con.appendChild(document.getElementById(eleId).firstElementChild);

    });
})
}

dragdrop();

// completed

completed.addEventListener('click',(e)=>{
    e.preventDefault()
    // circles = document.querySelectorAll('.items-container .circle')
    circles.forEach(cl=>{
        if(cl.classList.contains('circle-toggle')){
            cl.parentElement.parentElement.style.display = "block";
        }else {
            cl.parentElement.parentElement.style.display = "none";
        }
    })
})

// active

active.addEventListener('click',(e)=>{
    e.preventDefault();
    circles.forEach(cl=>{
        if(cl.classList.contains('circle-toggle')){
            cl.parentElement.parentElement.style.display = "none";
        }else {
            cl.parentElement.parentElement.style.display = "block";
        }
    })
})

// all
all.addEventListener('click',(e)=>{
    e.preventDefault();
    circles.forEach(cl=>{
        cl.parentElement.parentElement.style.display = "block";
    })
    // e.target.style.color = "hsl(220, 98%, 61%)";
})

// menu 

let menu = document.querySelectorAll('.menu a');
// menu.addEventListener('click',(e)=>{
//     e.preventDefault();
//     e.target.style.color = "hsl(220, 98%, 61%)";
// })

// menu.addEventListener('blur',(e)=>{
//     e.preventDefault();
//     e.target.style.color = "grey";
// })

menu.forEach(menu=>{
    menu.addEventListener('click',(e)=>{
        e.preventDefault();
        menu.style.color = "hsl(220, 98%, 61%)";
    })
    menu.addEventListener('blur',(e)=>{
        e.preventDefault();
        menu.style.color = "hsl(234, 39%, 85%)";
    })
})