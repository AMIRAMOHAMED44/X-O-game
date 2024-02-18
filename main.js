let turn='X'
let title=document.querySelector(".title")
let squares=[]
function end(num1,num2,num3){
    title.innerHTML=`${squares[num1]} Winner`
        document.getElementById("item"+num1).style.backgroundColor="rgb(36, 226, 198)"
        document.getElementById("item"+num1).style.color="black"
        document.getElementById("item"+num2).style.backgroundColor="rgb(36, 226, 198)"
        document.getElementById("item"+num2).style.color="black"
        document.getElementById("item"+num3).style.backgroundColor="rgb(36, 226, 198)"
        document.getElementById("item"+num3).style.color="black"
        setInterval(()=>{
            title.innerHTML+='.'
        },1000)
        setTimeout(()=>{
            location.reload()
        },4000)
}
function winner(){
    for(let i=1;i<10;i++){
        squares[i]=document.getElementById("item"+i).innerHTML
    }

    if(squares[1]==squares[2]&&squares[2]==squares[3]&& squares[1]!=''){
        end(1,2,3)
    }
    else if(squares[4]==squares[5]&&squares[5]==squares[6] && squares[5]!=''){
        end(4,5,6)
    }
    else if(squares[7]==squares[8]&&squares[8]==squares[9] && squares[9]!=''){
        end(7,8,9)
    }
    else if(squares[1]==squares[4]&&squares[4]==squares[7] && squares[7]!=''){
        end(1,4,7)
    }
    else if(squares[2]==squares[5]&&squares[5]==squares[8] && squares[8]!=''){
        end(2,5,8)
    }
    else if(squares[3]==squares[6]&&squares[6]==squares[9] && squares[3]!=''){
        end(3,6,9)
    }
    else if(squares[3]==squares[5]&&squares[5]==squares[7] && squares[3]!=''){
        end(3,5,7)
    }
    else if(squares[1]==squares[5]&&squares[5]==squares[9] && squares[9]!=''){
        end(1,5,9)
    }

}

//to write x or o in square
function game (id){
    let item=document.getElementById(id)
    if(turn==='X'&& item.innerHTML==''){
        item.innerHTML="X"
        turn='O'
        title.innerHTML="O"
        
    }
    else if(turn==='O' && item.innerHTML==''){
        item.innerHTML="O"
        turn='X'
        title.innerHTML="X"
    }
    winner()


}