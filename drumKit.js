document.addEventListener("keypress",function(event){
  sound(event.key);
  
});





function sound(key){
  switch(key){
case "k":var sound1 =new Audio("sounds_crash.mp3");
sound1.play()
break;
case "l":var sound2 =new Audio("sounds_kick-bass.mp3");
sound2.play()
break;
case "j":var sound3 =new Audio(" sounds_snare.mp3");
sound3.play()
break;
case "w":var sound4 =new Audio(" sounds_tom-1.mp3");
sound4.play()
break;
case "a":var sound5 =new Audio(" sounds_tom-2.mp3");
sound5.play()
break;
case "s":var sound6 =new Audio(" sounds_tom-3.mp3");
sound6.play()
break;
case "d":var sound7 =new Audio(" sounds_tom-4.mp3");
sound7.play()
break;

default:console.log(key)


  }
}
