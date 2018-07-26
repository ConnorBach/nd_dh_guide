const SOUTH = "south-dining-hall"
const NORTH = "north-dining-hall"
async function getFood(dh) {
    let html = await fetch(`https://dining.nd.edu/locations-menus/${dh}/`, {
    method: "get",
    mode: "no-cors",
    });
    let json = await html.json();
    console.log(json);
};

function food() {
    fetch('https://dining.nd.edu/locations-menus/south-dining-hall/', {
        method: "get",
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
}

export { getFood, food };
