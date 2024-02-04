// about company section start here
let imgBx =document.querySelectorAll(".imgBx");
let contentBx =document.querySelectorAll(".contentBx");
for(let i=0; i<imgBx.length; i++){
    imgBx[i].addEventListener('mouseover',function(){
        for(let i=0; i<contentBx.length; i++){
            contentBx[i].className ='contentBx';
        }
        document.getElementById(this.dataset.id).
        className ='contentBx active';
        for(let i=0; i<imgBx.length; i++){
            imgBx[i].className ='imgBx';
        }

        this.className ='imgBx active'
        
    })
}
// about company section end here


// window scrollbar start here

window.addEventListener('scroll',function(){
    const navbar =document.querySelector(".navbar");
    navbar.classList.toggle('stickey', window.scrollY > 0)
})