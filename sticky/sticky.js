const onLoad = function() {
    const nav = document.getElementsByTagName("nav")[0];
    const navWidth = nav.offsetWidth;
    const top = nav.offsetTop + window.scrollY;

    const fixedNavOffset = document.createElement('div');
    fixedNavOffset.style.width = nav.offsetWidth + 'px';
    fixedNavOffset.style.height = nav.offsetHeight + 'px';


    let isFixed = false;
    const onScroll = function() {
        if ( (window.scrollY > top) ) {
            if (!isFixed) {
                nav.style.position = 'fixed';
                nav.style.width = navWidth + 'px';
                nav.style.top = 0;
                nav.parentNode.insertBefore(fixedNavOffset, nav);
                isFixed = !isFixed;
            }
        } else if (isFixed) {
            nav.style.position = 'static';
            fixedNavOffset && nav.parentNode.removeChild(fixedNavOffset);
            isFixed = !isFixed;
        }
    }

    document.addEventListener('scroll', onScroll);
}
document.addEventListener('DOMContentLoaded', onLoad);