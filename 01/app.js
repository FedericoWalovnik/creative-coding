window.addEventListener("load", () =>{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const colors= ['#FF7D47','#E85941','#FF5454','#E84195','#FF47FF']

    //Resizing
    canvas.height = 700;
    canvas.width = 700;

    canvas.style.backgroundColor = "#f8f1f1"

    let Xlocation = 0;
    let Ylocation = 0;
    
    const randomColor = () =>{
        const randomNumber = Math.round(Math.random()*4);
        return colors[randomNumber]
    }
    
    const generateFigures = () => {
        for(let i=0; i<100; i++){
            randomSize = Math.random()*8
            const color = randomColor()
            
            ctx.fillStyle = color;
            
            ctx.fillRect(Xlocation, Ylocation, randomSize*100, randomSize*100);
            Xlocation += 80;
            if(Xlocation > canvas.width){
                Xlocation = 0;
                Ylocation += 80;
            }
        }
    }

    generateFigures();

    
    /*ctx.fillStyle = '#1c2b2d';
    ctx.fillRect(450, 300, 150, 300);

    ctx.fillStyle = '#16697a';
    ctx.fillRect(300, 200, 150, 300);

    ctx.fillStyle = '#db6400';
    ctx.fillRect(150, 100, 150, 300);

    ctx.fillStyle = '';
    ctx.fillRect(0, 300, 150, 300);

    ctx.fillStyle = '#ffa62b';
    ctx.fillRect(0, 0, 150, 300);*/
    
})
