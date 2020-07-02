


/*      BOUZRI MOHAMED,AYOUB FADOUACHE, ASMAE HAYAR 2APG3M       */



var totalHt = 0;
function chargerPanier()
{
	panierLocal = JSON.parse(localStorage.getItem("panierLocalStorage"));
	tabPanier = panierLocal.monPanier;
	monTableau = document.getElementById("panier");
	for( var i = 0; i < tabPanier.length; i++)
	{
		var ligne =  document.createElement("tr");
		ligne.id = i +"ligne";
		var cellule1 = document.createElement("td");
		var imgElem = document.createElement("img");
		imgElem.setAttribute("src", "../images/poub.jpg");
		imgElem.className = "imgpoubelle";
		imgElem.id = i+"supp";
		imgElem.onclick = function()
		{
			var  reponse = confirm("voulez supprimer cet Article ?");
			if(reponse == true)
			{
				var item = this.getAttribute("id");
				var pos = item.substring(0,1,1);
				supprimerDuPanier(pos);
			}
		}
		cellule1.appendChild(imgElem);
		ligne.appendChild(cellule1);
		
		var cellule2 = document.createElement("td");
		cellule2.textContent = tabPanier[i].nom + " " +tabPanier[i].prix + " " + tabPanier[i].prixHt;
		ligne.appendChild(cellule2);
	

	totalHt = totalHt + tabPanier[i].prixHt;
	monTableau.appendChild(ligne);

	}	
		
		total = document.createElement("p");
		total.id = "total";
		total.textContent = "Total : " + totalHt + " Dh";
		document.getElementById("montant").appendChild(total);
}

function supprimerDuPanier(pos)
{
	totalHt = totalHt - tabPanier[pos].prixHt;
	var total = document.getElementById("total");
    panierLocal.monPanier.splice(pos,1);
	var maLigne = document.getElementById(pos+"ligne");
	monTableau = document.getElementById("panier");
	monTableau.removeChild(maLigne);
	total.textContent = "Total : " + totalHt + " Dh";
	panier.monPanier = tabPanier;
	localStorage.setItem("panierLocalStorage",JSON.stringify(panier));
	window.location.reload();
}
