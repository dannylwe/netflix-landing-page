// icons tabs
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content
function selectItem(e) {
    removerBorder();
    // add border to tab
    this.classList.add('tab-border');
}

// remove class of .tab-border from all tabs
function removerBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'));
}

//listen tab click
tabItems.forEach(item=> item.addEventListener('click', selectItem));
