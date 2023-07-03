// var count = 0;
// document.getElementById("result").value = "Any String"

// document.getElementById("btn").addEventListener("click", () ==>)

function appendToResult(val){
    let result = document.getElementById("result")
    result.value +=val;

}

function clearResult(){
    // alert("clearing result");
    document.getElementById("result").value = "";
}

function deleteLast(){
    // alert("hi");
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function calculateResult(){
    let result = document.getElementById("result");
    result.value = eval(result.value);
}