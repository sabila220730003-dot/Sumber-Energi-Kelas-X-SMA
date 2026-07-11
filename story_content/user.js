window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var audio = document.getElementById('bgSong');
audio.src = 'BackSound.mp3';
audio.load();
audio.play();
}

window.Script2 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0;
}

window.Script3 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

window.Script4 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

window.Script5 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

window.Script6 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

window.Script7 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

window.Script8 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

window.Script9 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.7;
}

window.Script10 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

window.Script11 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.9;
}

window.Script12 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1;
}

};
