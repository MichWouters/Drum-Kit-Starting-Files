// Events can be bound to all kinds of Html Elements
assignSoundToDrums();

function assignSoundToDrums(){
    let allButtons = document.querySelectorAll('.drum');

    for (let index = 0; index < allButtons.length; index++) 
    {
        const myButton = allButtons[index];
        myButton.addEventListener("click", function()
        {
            let buttonInnerHtml = this.innerHTML;
            makeSound(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml);
        });
    }
}

function makeSound(key){
    switch (key) 
            {
                case "w":
                    audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                    break;

                case "a":
                    audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                    break;

                case "s":
                    audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                    break;

                case "d":
                    audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
                    break;

                case "j":
                    audio = new Audio('sounds/snare.mp3');
                    audio.play();
                    break;

                case "k":
                    audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
                    break;

                case "l":
                    audio = new Audio('sounds/crash.mp3');
                    audio.play();
                    break;
                default:
                    console.log('Other button clicked');
                    break;
            }
}

/* Avoid injecting css values in JS as much as possible
 * It's preferable to set the styling in CSS and add or remove CSS classes in JS.
 */
function buttonAnimation(currentKey){
    let activeButton = document.querySelector('.' + currentKey);

    // Add Css class to element
    activeButton.classList.add('pressed');

    // Wait 100 ms before performing functionality
    setTimeout(function(){
        // Remove css class from element
        activeButton.classList.remove('pressed');
    }, 100);

    
}

document.addEventListener("keypress", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
});

