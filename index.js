let body = document.body
let bodyWidth = body.offsetWidth;
let bodyHeight = body.offsetHeight;

let innerScreen = document.getElementById("inner-screen");
let innerScreenBackground = document.getElementById("inner-screen-background");
let matrix = document.getElementById("matrix")
let channelText = document.getElementById("channel-text");
let onOff = document.getElementById("on-off");
let switchUp = document.getElementById("switch-up");
let switchDown = document.getElementById("switch-down");
let on = false;
let switchedOver = false;



onOff.addEventListener("click", onOffFunc)
switchUp.addEventListener("click", switchingOverUp)
switchDown.addEventListener("click", switchingOverDown)

function onOffFunc(){
  if(on == false){
    innerScreenBackground.classList.add("inner-screen-background-action")
    on = true
      let timeoutId1 = setTimeout(()=>{
        if(innerScreenBackground.classList.contains("inner-screen-background-action")){
          innerScreenBackground.classList.add("onTV")
        }
        clearTimeout(timeoutId1)
      }, 1500)
  }
  else if(on == true){
    innerScreenBackground.classList.remove("onTV")
    innerScreenBackground.classList.remove("inner-screen-background-switchingOver")
    channelText.classList.remove("displayed")
    matrix.classList.remove("matrix-displayed")
    matrix.src = ""
    let timeoutId2 = setTimeout(()=>{
      innerScreenBackground.classList.remove("inner-screen-background-action")
      clearTimeout(timeoutId2)
    }, 200)
    on = false
  }
}



function switchingOverUp(){
  if(matrix.classList.contains("matrix-displayed")){
    innerScreenBackground.classList.remove("onTV")
    innerScreenBackground.classList.remove("inner-screen-background-action")
    matrix.classList.remove("matrix-displayed")
    matrix.src = ""
    channelText.classList.remove("displayed")
    innerScreenBackground.classList.add("inner-screen-background-switchingOver")
  }
  else if(innerScreenBackground.classList.contains("inner-screen-background-switchingOver")){
    console.log("test")
    channelText.classList.add("displayed")
  }
  else if(on == true){
    innerScreenBackground.classList.remove("onTV")
    innerScreenBackground.classList.remove("inner-screen-background-action")
    innerScreenBackground.classList.add("inner-screen-background-switchingOver")
    matrix.classList.remove("matrix-displayed")
  }
}


function switchingOverDown(){
  if(on == true && !matrix.classList.contains("matrix-displayed")){
    matrix.classList.add("matrix-displayed")
    matrix.src = "https://www.youtube.com/embed/zE7PKRjrid4?loop=1&autoplay=1&mute=1&playlist=zE7PKRjrid4"
    matrix.unMute = "true"
    innerScreenBackground.classList.remove("onTV")
    innerScreenBackground.classList.remove("inner-screen-background-action")
    innerScreenBackground.classList.remove("inner-screen-background-switchingOver")
    channelText.classList.remove("displayed")
  }
  else if(matrix.classList.contains("matrix-displayed")){
    matrix.classList.remove("matrix-displayed")
    matrix.src = ""
  }
}


function createRainDrop(){
    let position = -150;
    let newLeftPosition = 2
  
    for (let i = 0; i < 100; i ++){
      let rainDrop = document.createElement("div")
      rainDrop.classList.add("raindrop")
      rainDrop.id = `${i}`
      innerScreen.appendChild(rainDrop)

      let randomLeftPosition = Math.floor(Math.random() * bodyWidth)
      let randomTopPosition = Math.floor(Math.random() * bodyHeight - 15)
      let randomHeight = Math.floor(2 + (Math.random() * 5))


      rainDrop.style.top = randomTopPosition + "px"
      rainDrop.style.left = randomLeftPosition + "px"
      rainDrop.style.height = randomHeight + "px"
      
      if(parseInt(rainDrop.style.top) > bodyHeight){
        rainDrop.remove()
      }
      
      function rain(){
        let setIntervalId = setInterval(()=>{
          position = position + 2
          randomTopPosition = randomTopPosition + position
          rainDrop.style.top = randomTopPosition + "px"
          rainDrop.style.left = newLeftPosition + "px";
          
          if(parseInt(rainDrop.style.top) > bodyHeight){
            position = 0;
            randomTopPosition = 0;
            newLeftPosition = newLeftPosition + 20
            rainDrop.style.left = newLeftPosition + "px";
            if(parseInt(rainDrop.style.left) > bodyHeight){
              position = 0;
              randomTopPosition = 0;
              newLeftPosition = 0;
              newLeftPosition = newLeftPosition + 20
              rainDrop.style.left = newLeftPosition + "px";
            }
          }
          clearInterval(setIntervalId)
          rain()
                                        
        }, 50)
      }
      rain()
      
      
  }
  
}
createRainDrop()
