function changeOuterLinks() {
    const nav = document.querySelector('nav#link-list')
    const navLinks = document.querySelectorAll('nav#link-list a');
    navLinks.forEach( item => {
        if (item.innerHTML.includes('outer-link')) {
            item.setAttribute('target', '_blank');
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
        }
    })
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.width = '30%';
    nav.style.margin = '0 auto';
    nav.style.border = '1px solid blue';
    nav.style.padding = '16px';
}

changeOuterLinks();
export { changeOuterLinks };