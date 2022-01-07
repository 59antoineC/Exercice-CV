function init()	{let  inner = document.getElementById("inner");
				inner.setAttribute("class","javascript");
				let body = document.getElementById("moncv");
				body.setAttribute("class","light");
				let header = document.getElementById("header");
				header.setAttribute("onclick","screenMode();return false;");
				let contenu = document.getElementById("contenu");
				let a = document.createElement("a");
				contenu.appendChild(a);
				a.setAttribute("id","retour");
				a.setAttribute("href","#menu");
				a.setAttribute("onclick","retour();return false;");
				let retour = document.getElementById("retour");
				let text = document.createTextNode("Retour");
				retour.appendChild(text);
				}

function rotateCard(id)	{
			let inner = document.getElementById("inner");
			let partie = inner.getElementsByClassName("partie");
			let visible = document.getElementById(id);
			let i;
			for (i = 0; i < partie.length; i++) {
			  partie[i].style.display = "none";
				}
			visible.style.display = "block";
			inner.style.transform = "rotateY(180deg)";
			return false;
			}

function retour()	{let inner = document.getElementById("inner");
			let partie = inner.getElementsByClassName("partie");
			let i;
			for (i = 0; i < partie.length; i++) {
			  partie[i].style.display = "none";
				}
			inner.style.transform = "rotateY(0)";
			return false;
			}

function screenMode()	{let elm = document.getElementById("moncv");
			if(elm.className === 'dark') {
   				 elm.className = 'light';
				}
			else {elm.className = 'dark';}
			return false;
			}