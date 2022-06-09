




const display = () => {

    const buttons = document.querySelectorAll("[data-image-button]")
    const navButtons = document.querySelector("[data-nav-container]")

    const createNavBtn = () => {
        let indexBtn = 0
        const imageButtons = document.querySelectorAll("[data-image]")
        imageButtons.forEach( e => {
                const createNav = document.createElement("div")
                    createNav.classList.add("navButton")
                    navButtons.appendChild(createNav)
                    createNav.id = indexBtn;
                    indexBtn += 1
                    
                    
            } )
            imageButtons[0].dataset.active = true
            navButtons.children[0].dataset.active = true
            
        
    }

   
    
    navButtons.addEventListener("click" ,e => {

        
        
        const images = document.querySelectorAll("[data-image]")
        const activeNav = navButtons.querySelector("[data-active]")
        const targetImage = e.target.id
        
        
        console.log(targetImage)
       
        
        images.forEach(image => {
            if(!null)
            delete image.dataset.active
        })
        
            images[targetImage].dataset.active = true;
            e.target.dataset.active = true;
            images[targetImage].dataset.active = true;
        
            delete activeNav.dataset.active
           
            

            
            
            
    })
    
    
    
    
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            
            const swap = button.dataset.imageButton === "right" ? 1 : -1
            const images = button.closest("[data-image-slider]")
                                 .querySelector("[data-images]")
    
            
            
    
            const activeImage = images.querySelector("[data-active]")
            const activeNav = navButtons.querySelector("[data-active]")
            
            let nextIndex = [...images.children].indexOf(activeImage) + swap
            if(nextIndex < 0)
                {
                    nextIndex = images.children.length -1;
                    
                }
            if(nextIndex >= images.children.length)
                {
                    nextIndex = 0
                }
            
           
           images.children[nextIndex].dataset.active = true;
           navButtons.children[nextIndex].dataset.active = true;
           
           delete activeNav.dataset.active
           delete activeImage.dataset.active
          
           
        })
    }) 
    
    createNavBtn()
}


display()





