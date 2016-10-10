var ElementSelectionne = "un titre"; //localStorage.getItem('titreDuProjet');

if (window.location.href.indexOf('archiworksho') != -1) {
    for (var i = 0; i < projets.length; i++) {
        var unElement = document.createElement("div");
        unElement.className = "w3-col l3 m3 s3";
        unElement.id = "projetn" + i;
        var lImage = document.createElement("img");
        lImage.src = projets[i].miniature;
        unElement.appendChild(lImage);
        document.getElementById("boiteGallerie").appendChild(unElement)

        var unAutreElement = document.createElement('li');
        unAutreElement.innerHTML = projets[i].titre;
        unAutreElement.id = "projetz" + i;
        document.getElementById('ListeElements').appendChild(unAutreElement);
    }
}
if (window.location.href.indexOf('publications') != -1) {
    for (var i = 0; i < publications.length; i++) {
        var unElement = document.createElement("div");
        unElement.className = "w3-col l3 m3 s3";
        unElement.id = "projetn" + i;
        var lImage = document.createElement("img");
        lImage.src = publications[i].miniature;
        unElement.appendChild(lImage);
        document.getElementById("boiteGallerie").appendChild(unElement)

        var unAutreElement = document.createElement('li');
        unAutreElement.innerHTML = publications[i].titre;
        unAutreElement.id = "projetz" + i;
        document.getElementById('ListeElements').appendChild(unAutreElement);
    }
}


/*
document.getElementById('boiteDesc').innerHTML = laDesc;
document.getElementById('boiteTitre').innerHTML = leTitre;
for (var j=0; j<images.length; j++){
    var uneImage = document.createElement("img");
    uneImage.src = images[j];
    uneImage.className = "mySlides";
    uneImage.style = "width:100%";
    document.getElementById('lesImages').appendChild(uneImage);
    showDivs(slideIndex);
}
*/
