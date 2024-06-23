let string="";
let buttons=document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText=='='){
            string=eval(string);
            document.querySelector('input').value=string;
            string=document.querySelector('input').value;
        }
        else if(e.target.innerText=='AC'){
            document.querySelector('input').value="";
            string="";
        }
        else if(e.target.innerText=="C"){
            string=string.slice(0,string.length-1);
            document.querySelector('input').value=string;
        }
        else if(e.target.innetText=='x'){
            console.log(string);
            string=string+e.target.innerText=='*';
        }
        else{
            string=string+e.target.innerText;
            document.querySelector('input').value=string;
        }
    })
});
let inp=document.querySelector('input');
inp.addEventListener('keydown',(e)=>{
    if(e.key=="Backspace"){
        string=string.slice(0,string.length-1);
    }
})
