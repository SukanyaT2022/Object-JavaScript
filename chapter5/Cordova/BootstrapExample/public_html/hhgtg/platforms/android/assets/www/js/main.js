var curNav = 'home';
function toggleNav(navLyr){
    document.getElementById(curNav).className = '';
    document.getElementById(navLyr).className = 'active';
    curNav = navLyr;
}
