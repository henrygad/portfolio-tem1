/* global */
const main_el = document.querySelector("main")
const mediachecker = window.matchMedia("(max-width: 768px)")
/* end of global */

/* const varibles for reponsive navication menu */
const toggle_nav_div = document.querySelector(".toggle-nav")
const toggle_button = toggle_nav_div.children[0]
const nav_ul_el = toggle_nav_div.nextElementSibling
/* end of const varible for reponsive navigation menu */

/* project portfolio slider const varibles */
const project_nav_el = document.querySelectorAll(".js-project-nav")
const project_slides = document.querySelector(".project-slides")
const project_children_slides = project_slides.children
/* end of project portfolio slider const varibles  */

/* project portfolio slider const varibles */
const review_nav_el = document.querySelectorAll(".js-review-nav")
const review_slides = document.querySelector(".reviews-slides")
const review_children_slides = review_slides.children
/* end of project portfolio slider const varibles  */


/* contact form button image UX animation const varibles  */
const form_el = document.getElementById("contact-form")
const name_input = document.getElementById('name')
const email_input = document.getElementById('email')
const massage_input = document.getElementById('massage')
const btn_img_div = document.querySelector('.js-animate-image')
const btn_img = btn_img_div.lastChild

/* end of contact form button image UX animation const varibles  */


/* responsive  navication functions */
const toggleClass = element =>{
    if(mediachecker.matches){
        toggle_button.classList.toggle("toggle-effect")
        nav_ul_el.classList.toggle("toggle-ul")
    }
};
toggle_button.addEventListener('click', event => {
     toggleClass()
});
nav_ul_el.addEventListener('click', event => {
    toggleClass()
});
main_el.addEventListener('click', event => {
    if(mediachecker.matches){
    toggle_button.classList.remove("toggle-effect")
    nav_ul_el.classList.remove("toggle-ul")
    }
});
/* end of responsive navication function */

/* usable  functions code for both sliders */
const initialPosition = value => {
    [slide_left, slide_center, slide_right] = value
    const right = window.getComputedStyle(slide_right).left
    const center = window.getComputedStyle(slide_center).left
    const left = window.getComputedStyle(slide_left).left
    return [right, center, left]
}

const nextPosition = (right, center, left) => {
   
    if(parseFloat(right) > parseFloat(center) && 
       parseFloat(right) > parseFloat(left)) {
        
        //right
        slide_right.classList.remove("move-right", "right")
        slide_right.classList.add("move-left", "left")
        
        //center
        slide_center.classList.remove("mover-center", "front", "center")
        slide_center.classList.add("move-right", "back", "right")
        
        //left
        slide_left.classList.remove("move-left", "left", "back")
        slide_left.classList.add("move-center", "front", "center")


    } else if(parseFloat(right) < parseFloat(center) && 
             parseFloat(right) < parseFloat(left)){

            //right 
            slide_center.classList.remove("move-right", "right")
            slide_center.classList.add("move-left", "left")    

            //center
            slide_left.classList.remove("move-center", "front", "center")
            slide_left.classList.add("move-right", "back", "right")

            //left
            slide_right.classList.remove("move-left", "back", "left")
            slide_right.classList.add("move-center", "front", "center")
            
    } else{

        //right
        slide_left.classList.remove("move-right", "right")
        slide_left.classList.add("move-left", "left")

        //center
        slide_right.classList.remove("move-center", "front", "center")
        slide_right.classList.add("move-right", "back", "right")

        //left
        slide_center.classList.remove("move-left", "back", "left")
        slide_center.classList.add("move-center", "front", "center") 

    };
};

const previousPosition = (right, center, left) =>{
    if(parseFloat(left) < parseFloat(right) && 
       parseFloat(left) < parseFloat(center)) {
        /* right */
        slide_right.classList.remove("move-right", "back", "right")
        slide_right.classList.add("move-center", "front", "center")

        //center
        slide_center.classList.remove("mover-center", "front", "center")
        slide_center.classList.add("move-left", "back", "left")

                
        //left
        slide_left.classList.remove("move-left", "left")
        slide_left.classList.add("move-right", "right")

       }  else if(parseFloat(left) > parseFloat(right) && 
                  parseFloat(left) > parseFloat(center)) {

        //right 
        slide_center.classList.remove("move-left", "left")
        slide_center.classList.add("move-right", "right")    

        //center
        slide_left.classList.remove("move-right", "back", "right")
        slide_left.classList.add("move-center", "front", "center")

        //left
        slide_right.classList.remove("move-center", "front", "center")
        slide_right.classList.add("move-left", "back", "left")

      }else{

        //right
        slide_left.classList.remove("move-center", "front", "center")
        slide_left.classList.add("move-left", "back", "left")

        //center
        slide_right.classList.remove("move-left", "left")
        slide_right.classList.add("move-right", "right")

        //left
        slide_center.classList.remove("move-right", "back", "right")
        slide_center.classList.add("move-center", "front", "center") 

      };
};
/* end of usable function code for both slider */


/* project portfolio slider functions  */
project_nav_el.forEach((value, index) => {
    value.addEventListener('click', event => {
        [right, center, left] = initialPosition(project_children_slides)

         if(index == 1){
            nextPosition(right, center,  left)
         } else{
            previousPosition(right, center, left)
           
         }
    });
});
/* end of project portfolio slider functions  */



/* review portfolio slider functions  */
review_nav_el.forEach((value, index) => {
    value.addEventListener('click', event => {
        [right, center, left] = initialPosition(review_children_slides)

         if(index == 1){
            nextPosition(right, center,  left)
         } else{
            previousPosition(right, center, left)
           
         }
    });
});
/* end of review portfolio slider functions  */


/* contact form button image UX animation functions  */
btn_img_div.addEventListener("click", event => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    event.preventDefault()
    
    if(name_input.value !== "" &&
       emailRegex.test(email_input.value) &&
       massage_input.value !== "" ) {

       btn_img.classList.toggle("animate-image")
    } else {
        alert("invalid email address or name and massage not provided")
    }

    setTimeout(() => {
        form_el.submit()
    }, 500);
    
})
/* end of contact form button image UX animation functions  */