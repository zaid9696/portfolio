const bodyClass = document.querySelector('body').classList;

 const lang = navigator.language;
// Detecting Arabic Language To Redirect;
 if(lang == 'ar' && bodyClass[0] != 'ar'){

     // window.location.replace("http://www.w3schools.com");

     const url = window.location.href;
     
     window.location.href = `${url}/ar/index.html`;
    //  console.log(bodyClass);
 
 }

const filter = document.querySelector(".portfolio__filter"),
    sites = document.querySelectorAll(".portfolio__site"),
    sitesName = document.querySelectorAll(".portfolio__filter button"),
    btn = document.querySelector(".portfolio__btn"),
    hero = document.querySelector(".hero"),
    nav = document.querySelector(".nav"),
    btnNav = document.querySelector(".nav__ham"),
    navContainer = document.querySelector(".nav__container"),
    menueNav = document.querySelector(".nav__menu"),
    listNav = document.querySelectorAll(".nav__menu ul li"),
    listNavAnchor = document.querySelectorAll(".nav__menu ul li a"),
    loader = document.querySelector(".loader_container");

function showPress() {
    sites.forEach((e) => {
        e.classList.remove("show"), e.classList.add("hide"), "wordpress" === e.dataset.site && (e.classList.remove("hide"), e.classList.remove("last"), e.classList.add("show"));
    });
}
function showSatic() {
    sites.forEach((e) => {
        e.classList.remove("show"), e.classList.add("hide"), "static" === e.dataset.site && (e.classList.remove("hide"), e.classList.remove("last"), e.classList.add("show"));
    });
}
function showApp() {
    sites.forEach((e) => {
        e.classList.remove("show"), e.classList.add("hide"), "app" === e.dataset.site && (e.classList.remove("hide"), e.classList.remove("last"), e.classList.add("show"));
    });
}
function showAll() {
    sites.forEach((e, t) => {
        e.classList.remove("hide"), e.classList.remove("tranhide"), e.classList.add("show"), t >= 6 && (e.classList.remove("show"), e.classList.add("last"));
    });
}
function removeActive() {
    sitesName.forEach((e) => {
        e.classList.remove("active");
    });
}
filter.addEventListener("click", (e) => {
    e.target.matches(".all")
        ? ((btn.style.display = "inline-block"), removeActive(), e.target.classList.add("active"), showAll())
        : e.target.matches(".app")
        ? (removeActive(), e.target.classList.add("active"), (btn.style.display = "none"), showApp())
        : e.target.matches(".static")
        ? (removeActive(), e.target.classList.add("active"), showSatic(), (btn.style.display = "none"))
        : e.target.matches(".wordpress") && (removeActive(), e.target.classList.add("active"), (btn.style.display = "none"), showPress());
});
const transhide = () => {};


btn.addEventListener("click", (e) => {

    // const bodyClass = document.querySelector('body').classList;

    console.log()

    if(bodyClass[0] != 'ar'){
        
        sites.forEach((t, s) => {

         if ("show less" === btn.innerHTML) btn.innerHTML = "show More" ;
            else {
                if (6 == s) {
                    const s = t.children[1].children[0].children[0];
                    e.target.blur(),
                        setTimeout(() => {
                            s.focus();
                        }, 200);
                }
                btn.innerHTML = "show less";
            }
            s >= 6 && t.classList.toggle("last");
        });

    } 

    if(bodyClass[0] == 'ar'){
        
        sites.forEach((t, s) => {

            const work = t.classList.contains('last');

         if (!work) btn.innerHTML = "عرض المزيد" ;
            else {
                if (6 == s) {
                    const s = t.children[1].children[0].children[0];
                    e.target.blur(),
                        setTimeout(() => {
                            s.focus();
                        }, 200);
                }
                console.log(work)
                btn.innerHTML = "عرض أقل";
            }
            s >= 6 && t.classList.toggle("last");
            console.log(t.classList[1])
        });

    } 
   

   

    
});
const fixnNav = () => {
    (hero.offsetBottom = hero.offsetTop + hero.offsetHeight), window.scrollY >= hero.offsetBottom - 50 ? nav.classList.add("fixnav") : nav.classList.remove("fixnav");
};
window.addEventListener("scroll", fixnNav);
const resizeTheWindow = () => {
    const e = window.innerWidth;
    menueNav.inert = e <= 745;
};
resizeTheWindow(),
    window.addEventListener("resize", () => {
        resizeTheWindow();
    });
const openNav = () => {
    menueNav.className;
    console.log("Open Nav"),
        "nav__ham cancel" !== btnNav.className ? (trapFocus(navContainer, "false"), btnNav.setAttribute("aria-label", "cancel overlay")) : btnNav.setAttribute("aria-label", "menu"),
        btnNav.classList.toggle("cancel"),
        menueNav.classList.toggle("open");
};
function trapFocus(e, t) {
    var s = e.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), div[tabindex]'
        ),
        a = s[0];
    (lastFocusableEl = s[s.length - 1]),
        (KEYCODE_TAB = 9),
        e.addEventListener("keydown", function (e) {
            ("Tab" === e.key || e.keyCode === KEYCODE_TAB) &&
                ("nav__menu open" === menueNav.className
                    ? e.shiftKey
                        ? (console.log(e.shiftKey), document.activeElement === a && (lastFocusableEl.focus(), e.preventDefault()))
                        : document.activeElement === lastFocusableEl && (a.focus(), e.preventDefault())
                    : console.log("message"));
        });
}
btnNav.addEventListener("click", (e) => {
    openNav(), (menueNav.inert = !1), "nav__ham cancel" !== btnNav.className && (menueNav.inert = !0);
}),
    document.addEventListener("keyup", (e) => {
        const t = document.activeElement;
        13 == e.keyCode && t == btnNav && (openNav(), (menueNav.inert = !1), "nav__ham cancel" !== btnNav.className && (menueNav.inert = !0));
    }),
    listNav.forEach((e) => {
        e.addEventListener("click", () => {
            const e = window.innerWidth;
            "nav__ham cancel" !== btnNav.className ? btnNav.setAttribute("aria-label", "cancel overlay") : btnNav.setAttribute("aria-label", "menu"),
                (menueNav.inert = !(e > 745)),
                btnNav.classList.remove("cancel"),
                menueNav.classList.remove("open");
        });
    }),
    $(".nav__menu a, .hero__btnlink, #nav-logo").on("click", function (e) {
        if ("" !== this.hash) {
            e.preventDefault();
            const t = this.hash;
            $("html, body").animate({ scrollTop: $(t).offset().top - 47 }, 800);
        }
    }),
    new WOW().init(),
    window.addEventListener("load", () => {
        loader.classList.add("vanish");
    });




   


    

