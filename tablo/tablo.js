function arttir(){
         
    var sonuc=document.getElementById("sonuc");
    sonuc.value=Number(sonuc.value)+1;
    }
     
    function azalt(){
     
    var sonuc=document.getElementById("sonuc");
    sonuc.value=Number(sonuc.value)-1;
    }

    function arttir1(){
    
    var sonuc=document.getElementById("sonuc1");
    sonuc.value=Number(sonuc.value)+1;
    }
     
    function azalt1(){
     
    var sonuc=document.getElementById("sonuc1");
    sonuc.value=Number(sonuc.value)-1;
    }

    function arttir2(){
    
    var sonuc=document.getElementById("sonuc2");
    sonuc.value=Number(sonuc.value)+1;
    }
     
    function azalt2(){
     
    var sonuc=document.getElementById("sonuc2");
    sonuc.value=Number(sonuc.value)-1;
    }
    function arttir3(){
    
    var sonuc=document.getElementById("sonuc3");
    sonuc.value=Number(sonuc.value)+1;
    }
     
    function azalt3(){
     
    var sonuc=document.getElementById("sonuc3");
    sonuc.value=Number(sonuc.value)-1;
    }
                



    const ad=document.querySelector("#ad");
const soyad=document.querySelector("#soyad");
const sınıf=document.querySelector("#sınıf");
const not=document.querySelector("#not");
const degistir=document.querySelector("#degistir");
const liste=document.querySelector("#liste");

ekle.onclick=function(){
   let tAd=document.createElement("td");
 let tSoyad=document.createElement("td");
 let tSınıf=document.createElement("td");
 let tNot=document.createElement("td");
 let tDegistir=document.createElement("td");
 

 tAd.textContent=ad.value;
 tSoyad.textContent=soyad.value;
 tSınıf.textContent=sınıf.value;
 tNot.textContent=not.value;
 tDegistir.textContent=degistir.value;


 let tr=document.createElement("tr");

 
 tr.appendChild(tAd);
 tr.appendChild(tSoyad);
 tr.appendChild(tSınıf);
 tr.appendChild(tNot);
 tr.appendChild(tDegistir);

 
 liste.appendChild(tr);

 
 ad.value="";
 soyad.value="";
 sınıf.value="";
 not.value="";
 degistir.value="";

 
 ad.focus();
}