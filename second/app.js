window.addEventListener("load", () =>{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    //Resizing
    canvas.height = 600;
    canvas.width = 600;

    canvas.style.backgroundColor = "#f8f1f1"

    let Xlocation = 0;
    let Ylocation = 0
    ctx.fillStyle = '#000';

    const randomColor = () =>{
        const RandomNumber = Math.random();
        console.log(RandomNumber)
    }

    for(let i=0; i<100; i++){
        const RandomNumber = Math.random();
        randomColor()
        
        ctx.fillRect(Xlocation, Ylocation, RandomNumber*100, RandomNumber*100);
        Xlocation += 80;
        if(Xlocation > canvas.width){
            Xlocation = 0;
            Ylocation += 80;
        }
    }
    
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
