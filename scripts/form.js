var answer = prompt("What is your favourite band?");
if (answer.toLowerCase() == "pink floyd") {
    document.getElementById("communication_form").style.display='block';
}
else {
    form_alternative.style.display='block';
    alert("What a pity!");
}