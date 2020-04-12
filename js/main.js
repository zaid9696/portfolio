


const filter = document.querySelector(".portfolio__filter");

const sites = document.querySelectorAll(".portfolio__site");

const sitesName = document.querySelectorAll(".portfolio__filter div");

const btn = document.querySelector(".portfolio__btn");

const hero = document.querySelector(".hero");

const nav = document.querySelector(".nav");

const btnNav = document.querySelector(".nav__ham");

const menueNav = document.querySelector(".nav__menu");

const listNav = document.querySelectorAll(".nav__menu ul li");

const loader = document.querySelector(".loader_container");


function showPress(){

    sites.forEach(item =>{

        

        item.classList.remove("show")
        item.classList.add("hide")
        if(item.dataset.site === 'wordpress'){

            item.classList.remove("hide")
            item.classList.remove("last")
            item.classList.add("show")
            

        }

    })

}

function showSatic(){

    sites.forEach(item =>{

        

        item.classList.remove("show")
        item.classList.add("hide")
        if(item.dataset.site === 'static'){

            item.classList.remove("hide")
            item.classList.remove("last")
            item.classList.add("show")
            

        }

    })

}


function showApp(){

    sites.forEach(item =>{

        item.classList.remove("show")
        item.classList.add("hide")
        if(item.dataset.site === 'app'){

            item.classList.remove("hide")
            item.classList.remove("last")
            item.classList.add("show")
            

        }
    })

}
function showAll(){

    sites.forEach((item, i) =>{

        item.classList.remove("hide");
        item.classList.remove("tranhide");
        
        item.classList.add("show");
        if(i >= 6 ){
            
            item.classList.remove("show");
            item.classList.add("last");   
        }
        
    })

}




filter.addEventListener("click", (e) =>{


   if(e.target.matches(".all")){

    btn.style.display = "inline-block"
    removeActive()
    e.target.classList.add("active")
    showAll()
   }else if(e.target.matches(".app")){
    removeActive()
    e.target.classList.add("active")
    btn.style.display = "none"
    showApp()
   }else if(e.target.matches(".static")){
    removeActive()
    e.target.classList.add("active")
       showSatic()
       btn.style.display = "none"
       
   }else if(e.target.matches(".wordpress")){
        removeActive()
        e.target.classList.add("active")
        btn.style.display = "none"
        showPress()

   }


})


function removeActive(){


    sitesName.forEach(item => {


        item.classList.remove("active")

    })

}




const transhide = () =>{
    
}

// sites.forEach(item =>{



//     item.classList.add("show");
    
   
//     item.addEventListener("webkitTransitionEnd", () =>{

//         item.classList.remove("show");
//         item.classList.add("tranhide");



//     })

//     item.addEventListener("mouseover", () =>{


//         // alert("wowo")
//         item.classList.add("show");
//         return

//     })

    

// })


btn.addEventListener("click", () =>{



    sites.forEach((item , i) => {

        if(btn.innerHTML === "show less"){

            btn.innerHTML = "show More"
        }else{

            btn.innerHTML = "show less"

        }

        if(i >= 6 ){
            
            item.classList.toggle("last");   
        }
        

    })

})


const fixnNav =  () =>{

    hero.offsetBottom = hero.offsetTop + hero.offsetHeight;

    if(window.scrollY >= hero.offsetBottom - 50){

        nav.classList.add("fixnav")
    }else{
        nav.classList.remove("fixnav")
    }
    // alert("wowo")
}


window.addEventListener("scroll", fixnNav)

btnNav.addEventListener("click", (e) =>{


    btnNav.classList.toggle("cancel")
    menueNav.classList.toggle("open")
})


listNav.forEach(item => {


    item.addEventListener("click", () =>{


        // alert("list")
        btnNav.classList.remove("cancel")
        menueNav.classList.remove("open")
    
    
    })

})


$(".nav__menu a, .hero__btnlink").on("click", function(e){

    if(this.hash !== ''){
        e.preventDefault()

        const hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top - 47
        },800)
    }

})

new WOW().init();


window.addEventListener("load", () =>{


    loader.classList.add("vanish")

})