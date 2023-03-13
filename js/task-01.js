const itemEls = document.querySelectorAll('.item');
console.log('Number of categories:', itemEls.length);

itemEls.forEach((itemEl) => {

    const itemsElName = itemEl.firstElementChild.textContent;
    const itemsProd = itemEl.lastElementChild;
    const prodList = itemsProd.children;
    

    console.log('Category:', itemsElName);
    console.log('Elements', prodList.length);

})
