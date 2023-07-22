let src = "https://reqres.in/api/users/"

const display = document.querySelector("#display-data")

const getData = async () => {
    const res = await fetch(src);
    const data = await res.json();
    return data.data;
}

const dispUser = async () => {
    const payload = await getData();


    let dataDisplay = payload.map((object) => {
        // console.log(object)
        const { first_name, avatar } = object;

        return `
      <div class="container">
      <img class="profone" src=${avatar}>
      <p>Name: ${first_name}</p> 
      <i class="ri bi bi-person-plus-fill add_frnd" ></i>
      </div>
      `
    }).join(" ")
    display.innerHTML = dataDisplay;
}
dispUser();



// let clip3 = document.querySelector(".vid3")

// clip3.addEventListener("mouseover", function (g){
//     clip3.play();
// })

// clip3.addEventListener("mouseout", function(g){
//     clip3.pause();
// })
// ///////////////////////////////////////////////////