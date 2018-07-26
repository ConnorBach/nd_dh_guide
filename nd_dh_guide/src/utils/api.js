async function getFood() {
    let json = await fetch('/api/foods');
    const foods = await json.json();
    return foods;
    console.log(foods);
}

export { getFood };