


/*      BOUZRI MOHAMED,AYOUB FADOUACHE, ASMAE HAYAR 2APG3M       */




function chargerArticlesRechercher()
{

	var mySearch = document.getElementById("Rchrch");
	var articles = document.getElementById("content");
	 mySearch.onclick = function(){   
	    
	 var search = document.getElementById("search").value; 
	   localStorage.setItem("search",search);   
	   
	   
 	for (var i = 0 ; i < catalogue.length; i++) 
 	{
 		
 		if(catalogue[i].prix <= search || catalogue[i].nom == search)
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


 	for (var i = 0 ; i < catalogueTVs.length; i++) 
 	{
 		
 		if(catalogueTVs[i].prix <= search || catalogueTVs[i].nom == search)
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
		articles.appendChild(article);

 		}
 	}

 	for (var i = 0 ; i < cataloguePhones.length; i++) 
 	{
 		
 		if(cataloguePhones[i].prix <= search || cataloguePhones[i].nom == search)
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
		articles.appendChild(article);

 		}
 	}


}
}

	