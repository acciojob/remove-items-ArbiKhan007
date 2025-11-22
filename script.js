//your JS code here. If required.
let selected=document.querySelector("#colorSelect");
let btn=document.querySelector("#btn");

btn.addEventListener("click", ()=>{
	selected.remove(selected.selectedIndex);
});
