var inputArea = document.getElementById("inputArea")
var currentCount = document.getElementById("currentCount")


function countChar(){
    var count = inputArea.value.length
    


    if(count > 200){
        
        inputArea.value = inputArea.value.substring(0, 200);
        count = 200;
        alert("⚠️ You reached the maximum character limit!")
    }
        currentCount.textContent = count

}