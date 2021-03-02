const tabCatalog = () => {
    const header = document.querySelector('.header-bottom'),
        tabs = header.querySelectorAll('.bottom-list__item');


    const removeActivClass = () => {
        tabs.forEach(tab => {
            tab.classList.remove('nav-active');
        })
    }

    const addActiveClass = (i = 2) => {
        tabs[i].classList.add('nav-active');
    }
    removeActivClass();
    addActiveClass();

    header.addEventListener('click', (e) => {
        const target = e.target;
        //console.log(target)


        if (e.target && e.target.matches('.bottom-list__item') || e.target && e.target.matches('.bottom-list__item a')) {

            tabs.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    
                    removeActivClass();
                    addActiveClass(i);

                };
            })
        }
    })


}
export default tabCatalog;