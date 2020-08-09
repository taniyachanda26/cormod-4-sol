(function(window){
var speakWord = "Good Bye";
var byeSpeaker={};
byeSpeaker.speakhello=function(name) {
    console.log(speakWord + " " + name);
}
    window.byeSpeaker=byeSpeaker;
})(window);
