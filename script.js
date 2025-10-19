var inputArea = document.getElementById("inputArea")
var currentCount = document.getElementById("currentCount")
var warnMsg = document.querySelector(".warning")
var btnClose = document.querySelector(".cls")

function countChar(){
    var count = inputArea.value.length
    


    if(count > 200){
        
        inputArea.value = inputArea.value.substring(0, 200);
        count = 200;
        // alert("⚠️ You reached the maximum character limit!")
        warnMsg.classList.remove("hidden")
    }

        currentCount.textContent = count
        btnClose.addEventListener("click",function(){
            warnMsg.classList.add("hidden")
        })

}