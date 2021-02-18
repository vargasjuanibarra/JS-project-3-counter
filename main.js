let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function(event){
        const action = event.currentTarget.classList; 
    
    if(action.contains("decrease")){
        count--;
    } 
    else if (action.contains("increase")){
        count++;
    } 
    else if(action.contains("reset")){
        count = 0;
        //count = 0;
    }
    if(count>0){
        value.style.color = "green";
    }
    if(count<0){
        value.style.color = "red";
    }
    if(count === 0)
        value.style.color = "black";
    value.textContent = count;
    });
});
