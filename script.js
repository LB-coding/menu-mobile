//Skapa ref till HTML-element 
let menuIcon = document.querySelector('#js-menu-toggle');
let menuList = document.querySelector('#js-menu');

//Lägga på en lyssnare på menuIcon som lyssnar efter click 
menuIcon.addEventListener('click', function(){
    //Vad ska hända när jag klickar på menuIcon 
    console.log('DU klcikade på menu');
    //Lägga på en klass på menuList 
    menuList.classList.toggle('active');
    menuIcon.classList.toggle('exit');
});