
let docupelis = document.getElementById("pelisSW")

fetch("https://swapi.dev/api/films/")
.then((response)=>response.json())
.then((info)=>{

    info.results.forEach((films) => {
      
        const infoPelis = document.createElement('div')

        infoPelis.innerHTML = 
        `<h4>${films.title}</h4>
            
    <p>${films.opening_crawl}</p>`;
        
        docupelis.append(infoPelis)


    });

})
