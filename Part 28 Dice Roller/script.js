function rolldice(){
    const input = document.getElementById("input").value;
    const submit = document.getElementById("submit");
    const dice_result = document.getElementById("dice_result");
    const dice_images = document.getElementById("dice_images");
    const values = [];
    const images = [];

    for(let i = 0; i < input; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<image src="images/${value}.svg" style="width: 100px">`);
    }

    dice_result.textContent = `dice: ${values.join(`, `)}`;
    dice_images.innerHTML = images.join("");
}

