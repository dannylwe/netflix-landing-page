// icons tabs
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content
function selectItem(e) {
    removerBorder();
    removeShow();
    // add border to tab
    this.classList.add('tab-border');
    // get from DOM
    // console.log(this.id);
    // can use getElementById
    const tabConntentItem = document.querySelector(`#${this.id}-content`); 
    // Add show class
    tabConntentItem.classList.add('show');
}

// remove class of .tab-border from all tabs
function removerBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item=> item.classList.remove('show'));
}

//listen tab click
tabItems.forEach(item=> item.addEventListener('click', selectItem));
