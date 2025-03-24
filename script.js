document.addEventListener('DOMContentLoaded',function(){
    const mainDiv = document.getElementById('container');
    const sizeInput = document.getElementById('sizeInput');
    let i = 16;
    
    
    sizeInput.addEventListener('click', function(){
        i = Number(prompt("Enter the number of spaces"));
        if(i > 100){
            alert("Number too big");
            return;
        }else{
        mainDiv.innerHTML = "";
        sketchsMaker(i);
        }
    })
    
    let sketchsMaker = function(i){
        for(let j = 0;j <= i;j++){
            let miniDivs = document.createElement('div');
        
            miniDivs.className = "bigdivs";
            mainDiv.appendChild(miniDivs)

            for(let k = 0; k <= i;k++){
                let ultraminiDivs = document.createElement('div');

                ultraminiDivs.style.height = "100%";
                ultraminiDivs.style.width = "100%";
                ultraminiDivs.className = "littleDivs";
                miniDivs.appendChild(ultraminiDivs);

                ultraminiDivs.addEventListener("mouseenter",(event) =>{
                    let random = Math.floor(Math.random() * 3);
                    let colors = ["red", "green", "blue"];
                    
                    ultraminiDivs.style.background = colors[random];
                });
            }
        }
    }

    
    sketchsMaker(i);
})