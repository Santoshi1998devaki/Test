let menuicon = document.querySelector('.menu');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container')

menuicon.addEventListener('click',function(){
    sidebar.classList.toggle('small_sidebar');
    container.classList.toggle('big_banner');

})



