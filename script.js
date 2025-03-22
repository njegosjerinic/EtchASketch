document.addEventListener('DOMContentLoaded',function(){
    const mainDiv = document.getElementById('container');
    const sizeInput = document.getElementById('sizeInput');
    let i;
    
    sizeInput.addEventListener('click', function(){
        prompt
    })
    

    for(let j = 0;j <= i;j++){
        let miniDivs = document.createElement('div');
        
        miniDivs.className = "bigdivs";
        mainDiv.appendChild(miniDivs)

        for(let k = 0; k <= i;k++){
            let ultraminiDivs = document.createElement('div');

            ultraminiDivs.style.height = "50px";
            ultraminiDivs.style.width = "50px";
            ultraminiDivs.className = "littleDivs";
            miniDivs.appendChild(ultraminiDivs);

            ultraminiDivs.addEventListener("mouseenter",(event) =>{
                event.target.style.background = "black";
            });
        }
    }

    
    
})