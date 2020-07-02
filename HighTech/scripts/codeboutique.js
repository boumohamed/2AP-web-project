


/*      BOUZRI MOHAMED,AYOUB FADOUACHE, ASMAE HAYAR 2APG3M       */




var monPanier = new Array();
function chargerArticles()
 {

 	var articles = document.getElementById("content");
 	for (var i = 0 ; i < catalogue.length; i++) 
 	{
 		var article = document.createElement("div");
 		article.className = "article";
 		article.id = i + "-article";
 		var articleNom  = document.createElement("h2");
 		articleNom.className = "nom_art";
 		articleNom.innerText = catalogue[i].nom;
 		article.appendChild(articleNom); 


 		var articleImg  = document.createElement("img");
 		articleImg.setAttribute("src", catalogue[i].image);
 		article.appendChild(articleImg);
 		articleImg.className = "img_art";

 		var articleDesc       = document.createElement("div");
 		articleDesc.className = "desc_art";
 		articleDesc.innerText = catalogue[i].desc;
 		article.appendChild(articleDesc);

 		var articlePrix = document.createElement("div");
 		articlePrix.innerText = catalogue[i].prix+ " Dhs";
 		article.appendChild(articlePrix);
 		articlePrix.className = "prix_art";
 		var zoneCmd = document.createElement("div");
 		zoneCmd.className = "cmd_art";
 		var inputCmd = document.createElement("input");
 		inputCmd.id = i +"-qte";
 		inputCmd.className = "input_art"
 		inputCmd.type ="number";
 		inputCmd.value = 0;
 		inputCmd.min = 0 ;
		inputCmd.max = 5 ;
		zoneCmd.appendChild(inputCmd);

		if(catalogue[i].vrai == true)
	 		{
	 			var pro = document.createElement("span");
	 			pro.innerText = "Promotion";

	 			article.appendChild(pro);
	 			pro.id = "Promotion";

	 		}

		var bouton = document.createElement("button");
		bouton.id = i+"-cmd";
		bouton.className = "btn_art";
		bouton.onclick = function() { 
		    var item = this.getAttribute("id");
		    var pos2 = item.substring(0,2);
		    if(pos2 >= 10 && pos2 < 20)
		    	ajouterAuPanier(pos2);  
		    else
		    {
		    	var pos = item.substring(0,1);
		    	ajouterAuPanier(pos);
		    }     
	   }

		zoneCmd.appendChild(bouton);
		article.appendChild(zoneCmd);
		articles.appendChild(article);
 	}

 }


/***************************************************************************************************/


function chargerTVs()
 {

 	var articlesTVS = document.getElementById("content");
 	for (var i = 0 ; i < catalogueTVs.length; i++) 
 	{
 		var article = document.createElement("div");
 		article.className = "article";
 		article.id = i + "-article";
 		var articleNom  = document.createElement("h2");
 		articleNom.className = "nom_art";
 		articleNom.innerText = catalogueTVs[i].nom;
 		article.appendChild(articleNom); 


 		var articleImg  = document.createElement("img");
 		articleImg.setAttribute("src", catalogueTVs[i].image);
 		article.appendChild(articleImg);
 		articleImg.className = "img_art";

 		var articleDesc       = document.createElement("div");
 		articleDesc.className = "desc_art";
 		articleDesc.innerText = catalogueTVs[i].desc;
 		article.appendChild(articleDesc);

 		var articlePrix = document.createElement("div");
 		articlePrix.innerText = catalogueTVs[i].prix+ " Dhs";
 		article.appendChild(articlePrix);
 		articlePrix.className = "prix_art";
 		var zoneCmd = document.createElement("div");
 		zoneCmd.className = "cmd_art";
 		var inputCmd = document.createElement("input");
 		inputCmd.id = i +"-qte";
 		inputCmd.className = "input_art"
 		inputCmd.type ="number";
 		inputCmd.value = 0;
 		inputCmd.min = 0 ;
		inputCmd.max = 5 ;
		zoneCmd.appendChild(inputCmd);

		if(catalogueTVs[i].vrai == true)
	 		{
	 			var pro = document.createElement("span");
	 			pro.innerText = "Promotion";
	 			article.appendChild(pro);
	 			pro.id = "Promotion";

	 		}

		var bouton = document.createElement("button");
		bouton.id = i+"-cmd";
		bouton.className = "btn_art";
		bouton.onclick = function() { 
		    var item = this.getAttribute("id");
		    var pos2 = item.substring(0,2);
		    if(pos2 >= 10 && pos2 < 20)
		    	ajouterAuPanierTVs(pos2);  
		    else
		    {
		    	var pos = item.substring(0,1);
		    	ajouterAuPanierTVs(pos);
		    }   
	   }

		zoneCmd.appendChild(bouton);
		article.appendChild(zoneCmd);
		articlesTVS.appendChild(article);
 	}

 }


function chargerPhones()
 {

 	var articlesPhones = document.getElementById("content");
 	for (var i = 0 ; i < cataloguePhones.length; i++) 
 	{
 		var article = document.createElement("div");
 		article.className = "article";
 		article.id = i + "-article";
 		var articleNom  = document.createElement("h2");
 		articleNom.className = "nom_art";
 		articleNom.innerText = cataloguePhones[i].nom;
 		article.appendChild(articleNom); 
 		

 		var articleImg  = document.createElement("img");
 		articleImg.setAttribute("src", cataloguePhones[i].image);
 		article.appendChild(articleImg);
 		articleImg.className = "img_art";

 		var articleDesc       = document.createElement("div");
 		articleDesc.className = "desc_art";
 		articleDesc.innerText = cataloguePhones[i].desc;
 		article.appendChild(articleDesc);

 		var articlePrix = document.createElement("div");
 		articlePrix.innerText = cataloguePhones[i].prix+ " Dhs";
 		article.appendChild(articlePrix);
 		articlePrix.className = "prix_art";
 		var zoneCmd = document.createElement("div");
 		zoneCmd.className = "cmd_art";
 		var inputCmd = document.createElement("input");
 		inputCmd.id = i +"-qte";
 		inputCmd.className = "input_art"
 		inputCmd.type ="number";
 		inputCmd.value = 0;
 		inputCmd.min = 0 ;
		inputCmd.max = 5 ;
		zoneCmd.appendChild(inputCmd);

		if(cataloguePhones[i].vrai == true)
	 		{
	 			var pro = document.createElement("span");
	 			pro.innerText = "Promotion";
	 			article.appendChild(pro);
	 			pro.id = "Promotion";

	 		}

		var bouton = document.createElement("button");
		bouton.id = i+"-cmd";
		bouton.className = "btn_art";
		bouton.onclick = function() { 
		    var item = this.getAttribute("id");
		    var pos2 = item.substring(0,2);
		    if(pos2 >= 10 && pos2 < 20)
		    	ajouterAuPanierPhones(pos2);  
		    else
		    {
		    	var pos = item.substring(0,1);
		    	ajouterAuPanierPhones(pos);
		    }
		    
		      
	   }

		zoneCmd.appendChild(bouton);
		article.appendChild(zoneCmd);
		articlesPhones.appendChild(article);
 	}

 }



function ajouterAuPanierPhones(pos)
{
	if(searchDansPanier(cataloguePhones[pos].nom,cataloguePhones[pos].code))
		alert("Cet Article Déja Existe Dans Le Panier");
	else
	{
		var ident = pos +"-qte";
		var qte = document.getElementById(ident).value;
			if(qte <= 0)
				alert("choisissez une quantité > 0");
			else
			{

				var articleCmd = {}; 
				articleCmd.nom = cataloguePhones[pos].nom;
				articleCmd.prix = cataloguePhones[pos].prix;
				articleCmd.code = cataloguePhones[pos].code;
				articleCmd.qte = qte;
				articleCmd.prixHt = articleCmd.prix * articleCmd.qte;
				
				alert("Nom : " + articleCmd.nom);
				alert("Prix Unitaire : " + articleCmd.prix + " Dhs");
				alert("Quantité : " + articleCmd.qte);
				alert("Prix Ht : " + articleCmd.prixHt + " Dhs");
				monPanier.push(articleCmd);	


			}
	}
}

/***************************************************************************************************/




function searchDansPanier(nom,code)
{
	var existe = false;
	for (var i = 0; i < monPanier.length; i++)
	 {
		if ((monPanier[i].nom == nom) && (monPanier[i].code == code))
			existe = true;
	}
	return existe;
}



function ajouterAuPanierTVs(pos)
{
	if(searchDansPanier(catalogueTVs[pos].nom,catalogueTVs[pos].code))
		alert("Cet Article Déja Existe Dans Le Panier");
	else
	{
		var ident = pos +"-qte";
		var qte = document.getElementById(ident).value;
			if(qte <= 0)
				alert("choisissez une quantité > 0");
			else
			{

				var articleCmd = {}; 
				articleCmd.nom = catalogueTVs[pos].nom;
				articleCmd.prix = catalogueTVs[pos].prix;
				articleCmd.code = catalogueTVs[pos].code;
				articleCmd.qte = qte;
				articleCmd.prixHt = articleCmd.prix * articleCmd.qte;
				
				alert("Nom : " + articleCmd.nom);
				alert("Prix Unitaire : " + articleCmd.prix + " Dhs");
				alert("Quantité : " + articleCmd.qte);
				alert("Prix Ht : " + articleCmd.prixHt + " Dhs");
				monPanier.push(articleCmd);	


			}
	}
}


function ajouterAuPanier(pos)
{
	if(searchDansPanier(catalogue[pos].nom,catalogue[pos].code))
		alert("Cet Article Déja Existe Dans Le Panier");
	else
	{
		var ident = pos +"-qte";
		var qte = document.getElementById(ident).value;
			if(qte <= 0)
				alert("choisissez une quantité > 0");
			else
			{

				var articleCmd = {}; 
				articleCmd.nom = catalogue[pos].nom;
				articleCmd.prix = catalogue[pos].prix;
				articleCmd.code = catalogue[pos].code;
				articleCmd.qte = qte;
				articleCmd.prixHt = articleCmd.prix * articleCmd.qte;
				
				alert("Nom : " + articleCmd.nom);
				alert("Prix Unitaire : " + articleCmd.prix + " Dhs");
				alert("Quantité : " + articleCmd.qte);
				alert("Prix Ht : " + articleCmd.prixHt + " Dhs");
				monPanier.push(articleCmd);	


			}
	}
}



function stockerPanier(data)
{

var panierJSON = {}; 
panierJSON.monPanier = data;
localStorage.setItem("panierLocalStorage", JSON.stringify(panierJSON));
}

function chargerArticlespromo()
{
	 	var articles = document.getElementById("content");

 		for (var i = 0 ; i < catalogue.length; i++) 
	 	{
	 		if(catalogue[i].vrai == true)
	 		{
	 		var article = document.createElement("div");
	 		article.className = "article";
 			article.id = i + "-article";

 			var articleNom  = document.createElement("h2");
	 		articleNom.className = "nom_art";
	 		articleNom.innerText = catalogue[i].nom;
	 		article.appendChild(articleNom); 
	 		var link  = document.createElement("a");
	 		link.setAttribute("href", "html/articles.html");

	 		var articleImg  = document.createElement("img");
	 		articleImg.setAttribute("src", catalogue[i].image.substring(3));
	 		link.appendChild(articleImg);
	 		article.appendChild(link);
	 		articleImg.className = "img_art";
 			articles.appendChild(article);
 			}


}
}
function chargerArticlesTVSpromo()
{
	 	var articles = document.getElementById("content");

 		for (var i = 0 ; i < catalogueTVs.length; i++) 
	 	{
	 		if(catalogueTVs[i].vrai == true)
	 		{
	 		var article = document.createElement("div");
	 		article.className = "article";
 			article.id = i + "-article";

 			var articleNom  = document.createElement("h2");
	 		articleNom.className = "nom_art";
	 		articleNom.innerText = catalogueTVs[i].nom;
	 		article.appendChild(articleNom); 
	 		var link  = document.createElement("a");
	 		link.setAttribute("href", "html/TVs.html");

	 		var articleImg  = document.createElement("img");
	 		articleImg.setAttribute("src", catalogueTVs[i].image.substring(3));
	 		link.appendChild(articleImg);
	 		article.appendChild(link);
	 		articleImg.className = "img_art";
 			articles.appendChild(article);
 			}


}
}
function chargerArticlesPhonespromo()
	{
	 		 	var articles = document.getElementById("content");

 		for (var i = 0 ; i < cataloguePhones.length; i++) 
	 	{
	 		if(cataloguePhones[i].vrai == true)
	 		{
	 		var article = document.createElement("div");
	 		article.className = "article";
 			article.id = i + "-article";

 			var articleNom  = document.createElement("h2");
	 		articleNom.className = "nom_art";
	 		articleNom.innerText = cataloguePhones[i].nom;
	 		article.appendChild(articleNom); 
	 		var link  = document.createElement("a");
	 		link.setAttribute("href", "html/Phones.html");

	 		var articleImg  = document.createElement("img");
	 		articleImg.setAttribute("src", cataloguePhones[i].image.substring(3));
	 		link.appendChild(articleImg);
	 		article.appendChild(link);
	 		articleImg.className = "img_art";
 			articles.appendChild(article);
 			}

}
	}
	








