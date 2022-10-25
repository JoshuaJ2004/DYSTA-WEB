window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
      header.ClassList.add('nav_mod');
    }else if(scroll < 20){
        header.ClassList.remove('nav_mod');
    }

}