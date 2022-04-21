slide();
var slideMovie = [
"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUD92whdwqVnEPh5fMHOBL5vext3SdEnKXR03ZDZ7on7yhm0es-61Q_70kKhas_PtfHMDD49bJJ4F3w015XiAFW7H9cDUzEDl8TFSKPAHWhImqoatBUPOMxuj2N.jpg?r=1f7",
"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdGY4Y0Ij2LTz1jANkNN1C5yT8Sg0ukAw3AHXXY6eRhmxufub0Na2EJwvoCPoluWl6kO5dLgmO-c_uBngSsVy4KOjbU.jpg?r=81c",
"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRYIqM50z_EIJMx3caEHpdw734aqg3bgtNn6Spf0itywn83cbkehau6v5z8MZpOms-oUX2GRYQzdeM-2QZ4xVUzcjr8.jpg?r=d3f",
"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX2P3BGCJ49g1lqsKTe7UtezEclw6TsezsK2VJwAT8sUY-5appe-Cq0e6QP_F2SOHkaL9hIrLmWSvLbZra7mVcBhthU.jpg?r=0ed",
"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeko0x6dmPbgsa21sF42InUeuTH1W7LIG8hAipIOFf1xM6piyv4i0P1fx4-8g1NQ6VVuueYX6pWZ5J1Lb9W6BViwoc4.jpg?r=8b8",
"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWOrpanFaRtXbkkHo0vB4MsJrbrlOrpPwH9X8Df9Y0VD1kvDlX7KYRwnLcQk0pNgwBaSNFscTKyEC8P_LaFCPcBYu4M.jpg?r=fe6",
"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTMMK2vn4C1d7JW1-cL3KKHz5pN6aVUCdcRVN3KgIhNQx-fKzyoSnPLmzGKUgwgzGPZjw5qWtdPN_rj0b7hX_RJz9Rc.jpg?r=0ea",
"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS8vDfQ8k1vedyBPWhPXhNqsr7wwG0l3rOAIfDI3O07ftf08Ob9upZMcmsRLuZDwMvgKfQZ0OjyGmTdvDl9p20AwCxE.jpg?r=333",

];

var start = 0;

function slide() {
  setInterval(slideShow, 1500);
}

function slideShow() {
  start = start % 8;
  

  document.querySelector("#slideshow > img").src = slideMovie[start];
  start++;
}


var movie=[
    {
        name:"The Shawshank Redemption " ,
        date: 1994 ,
        poster:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg" ,
        rating:9.2
    },
    {
        name:"The Godfather" ,
        date: 1972 ,
        poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg" ,
        rating:  9.2,
    },
    {
        name:"The Dark Knight" ,
        date:2008  ,
        poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg" ,
        rating: 9.0 ,
    },
    {
        name:"The Godfather: Part II " ,
        date: 1974 ,
        poster:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg" ,
        rating: 9.0 ,
    },
    {
        name:"12 Angry Men" ,
        date: 1957 ,
        poster:"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg" ,
        rating:  8.9,
    },
    {
        name:" Schindler's List " ,
        date:  1993,
        poster:"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg" ,
        rating:  8.9,
    },
    {
        name:" The Lord of the Rings: The Return of the King" ,
        date: 2003 ,
        poster:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg" ,
        rating: 8.9 ,
    },
    {
        name:" Pulp Fiction" ,
        date: 1994 ,
        poster:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg" ,
        rating: 8.9 ,
    },
    {
        name:"The Lord of the Rings: The Fellowship of the Ring" ,
        date: 2001 ,
        poster:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg" ,
        rating: 8.8 ,
    },
    {
        name:" Fight Club" ,
        date:  1999,
        poster:"https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg" ,
        rating: 8.8 ,
    },
]

showdata(movie)
function showdata(data){
    data.forEach(item => {
        var box=document.createElement("div");

    var image=document.createElement("img");
    image.setAttribute("src",item.poster)

    var name=document.createElement("h3");
    name.innerText=item.name;

    var date=document.createElement("p");
    date.innerText=item.date;

    var rating=document.createElement("p");
    rating.innerText=item.rating;

    box.append(image,name,date,rating);

    document.querySelector("#movies").append(box);
    });
}


document.querySelector("#sort").addEventListener("change",sortByRating);

function sortByRating(){
    event.preventDefault();
    var newData=[...movie];
    var sort=document.querySelector("#sort").value;

    if(sort=="sort-lh")
    {
        newData.sort((a,b)=>(a.rating-b.rating));
    }
    else if(sort=="sort-hl")
    {
        newData.sort((a,b)=>(b.rating-a.rating));
    }
    // console.log(newData)
    document.querySelector("#movies").innerHTML="";
    showdata(newData)
}
