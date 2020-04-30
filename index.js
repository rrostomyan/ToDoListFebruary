function onAddClick() {
    const input = document.getElementById('input');
    const value = input.value;
    if(!value.trim()){
        alert('Please enter value');
        return;
    }
    let liCmp = document.createElement('li');
    liCmp.innerHTML = value;
    input.value = '';
    let closeBtn = document.createElement('span');
    closeBtn.innerHTML = 'x';
    closeBtn.className = 'closeBtn';
    liCmp.appendChild(closeBtn);
    let list = document.getElementById('list');
    list.appendChild(liCmp);
}

function onKeyPress(e) {
    if(e.keyCode === 13){
        onAddClick();
    }
}

function onListClick(e) {
    let target = e.target;
    if(target.className === 'closeBtn'){
        let parent = target.parentNode;
        let list = document.getElementById('list');
        list.removeChild(parent);
    } else {
        target.classList.toggle('checked');
    }
}