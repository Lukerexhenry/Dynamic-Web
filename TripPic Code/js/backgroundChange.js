// function myFunctionId(id) {
  //  document.body.style.backgroundColor = "#07072B";
// } 

// function myFunctionId(id) {
  // document.body.style.backgroundColor = "#07072B";
// }

var currentTime = new Date().getHours();
        if (7 <= currentTime && currentTime < 18) {
            if (document.body) {
                document.body.className = "day";
            }
        }
        else {
            if (document.body) {
                document.body.className = "night";
                }
        }