// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//creating an array for all the like buttons
const arrayOfLikes=Array.from(document.querySelectorAll("ul span"));

//iterating through each of the like buttons
arrayOfLikes.forEach( (heartButton)=>{
  function likeFunction(){
    mimicServerCall()
    .then( ()=>{
      if (heartButton.innerText===EMPTY_HEART){
        heartButton.innerText = FULL_HEART;
        heartButton.className ="like-glyph activated-heart"
      }
      else if(heartButton.innerText ===FULL_HEART){
        heartButton.innerText = EMPTY_HEART;
        heartButton.className = "like-glyph"
      }
    }
    )
    .catch(()=>{
      document.querySelector("#modal").className =""
      document.querySelector("#modal").innerText ="Random server error.Try again."
      setTimeout(()=>{document.querySelector("modal").className="hidden"}, 3000)
    })
  }
    heartButton.addEventListener("click", likeFunction)
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
