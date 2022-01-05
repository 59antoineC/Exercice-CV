function init()	{let  inner = document.getElementById("inner");
				inner.setAttribute("class","javascript");
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