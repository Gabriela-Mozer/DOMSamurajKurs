//DOM- Document Object Model 

 //--reprezentacja dokumentu HTML w przeglądarce
 //--elementy strony są węzłami , które mogą być pobrane,modyfikowane. Można też usuwać i tworzyć nowe
 //--Struktura DOM przypomina drzewo. Na szczycie jest obiekt document
 //DOM NIE JEST CZĘŚCIĄ JS. ale JS umożliwia pracę z DOM.

//  Pobieranie elementów strony

//właściwości obiektu document
document.documentElement
document.body
document.images // lista pasujących elementów - obiekt-tablico podobny (ma length i notacje tablicy)

//Łatwo zrobić z niego tablicę 
const imgs = Array.from(document.images);
const imgs2 = [...document.images];

//Metody pobierające jeden element 
document.querySelector("li:nth-child(2)"); //jako selektor CSS
document.getElementById('first'); //Jako argument przy wywołaniu metody podajemy identyfikator
//obie metody zwracają pierwszy znaleziony element lub null jeśli nie znalazły żadnego 

//Metody pobierające wszystkie pasujące elementy 
document.querySelector("ul>li");
document.getElementById("even");
//Zwracają listę pasujących elementów w formie tablico podobnego obiektu (node-list w przypadku querySelectorAll i kolekcji html w przypadku dwóch pozostałych).
//Jeśli nie znajdują, żadnego pasującego elementu to zwracany obiekt jest pusty 
//Ten pierwszy sposób jest częściej używany, bardziej przypomina tablicę (ma część jej metod)
//Pamiętajmy jednak, że takie pseudotablice możżemy łatwo zmienić w tabliće np.
const liList =document.querySelectorAll('li');
const liArray =[...liList];
const liArray2 = Array.from(liList);
//Pobieranie atrybutów z elementów 
const h2 = document.querySelectorAll('h2');
// console.log(h2.getAttribute('class'));
// console.log(h2.getAttribute('data-color')); // tu coś jest  nie tak bo mi wyświetla is not a function

const h2Text = h2.textContent;
const h2HTML =h2.innerHTML;
console.log(h2.classList);

// h2.classList.contains("title"); //jeśli ma zwraca true, jeśli nie to false , ale tu coś nie działa :(

//Modyfikacja elementów 
// const firstLi= document.getElementById('li : first- child');
const firstLi= document.getElementById("#first");
// firstLi.textContent = "Nowa zawartość tekstowa";
firstLi.innerHTML = 
'<strong>Pogrubienie</strong> i normalnie';