var nos=6;
var arr= generatearray(6);
var boxes=document.querySelectorAll(".square");
var winningitem=pickcolor();
var roman=document.getElementById("roman");
var rg=document.getElementById("h1s");
var reset=document.getElementById("reset");
var h1=document.getElementById("h1")
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
easy.addEventListener("click",function()
{
	easy.classList.add("selected");
	hard.classList.remove("selected");
	nos=3;
	arr=generatearray(nos);
	winningitem=pickcolor();
	rg.textContent=winningitem;
	for(var i=0;i<boxes.length;i++)
{   if(arr[i])
	{
	boxes[i].style.background=arr[i];
	}
	else
	{
		boxes[i].style.display="none";
	}
}	

});
hard.addEventListener("click",function()
{
	hard.classList.add("selected");
	easy.classList.remove("selected");
	nos=6;
	arr=generatearray(nos);
	winningitem=pickcolor();
	rg.textContent=winningitem;
	for(var i=0;i<arr.length;i++)
{
	boxes[i].style.background=arr[i];
boxes[i].style.display="block";
}
});
rg.textContent=winningitem;
reset.addEventListener("click",function()
{
	arr=generatearray(nos);
	winningitem=pickcolor();
	rg.textContent=winningitem;
	this.textContent="New Colors";
	for(var i=0;i<arr.length;i++)
{
	boxes[i].style.background=arr[i];
}
h1.style.background="steelblue";
roman.textContent="";
});


for(var i=0;i<arr.length;i++)
{
	boxes[i].style.background=arr[i];

boxes[i].addEventListener("click",function(){
	var clickedcol=this.style.background;
	if(clickedcol===winningitem)
	{
		roman.textContent="Correct Answer";
		changecolor(winningitem);
		h1.style.background=winningitem;
		reset.textContent="Try Again";
	}
	else{
	this.style.background="black";
	roman.textContent="Wrong Answer";
}
});
}

function changecolor(color){

for (var i =0;i<boxes.length;i++){
	boxes[i].style.background=color;

}
}

function pickcolor()
{
	var item=Math.floor(Math.random() * arr.length);
	return arr[item];
}

function generatearray(num)
{
	var a=[]
	for (var i = 0; i < num; i++) {
		a.push(randomcolors());
	}
	return a;
}

function randomcolors()
{
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+b+")"
}