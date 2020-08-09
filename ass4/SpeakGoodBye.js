(function(window){
var speakWord = "Good Bye";
var byespeaker={};
byespeaker.speakhello=function(name) {
    console.log(speakWord + " " + name);
}
    window.byespeaker=byespeaker;
})(window);
