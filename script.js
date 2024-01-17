console.log("JS Ready");

function showResult(name, gender, probability) {
    const resultElement = document.getElementById("result");
    const probpercentage = probability * 100;
    let genderdecode;

    if(gender == "male"){
        genderdecode = "Cowok"
    } else{
        genderdecode = "Cewek"
    }

    const user = document.getElementById("user");
    const username = `${name}`
    user.textContent = username 

    const resulttext = `Halo ${name}, Jenis kelamin kamu kemungkinan ${genderdecode} dengan persentase ${probpercentage}%`;
    
    resultElement.textContent = resulttext
}

const base_api = "https://api.genderize.io"
async function predict(event) {
    if(event.key == "Enter"){
        const firstname = event.target.value;
        const queryUrl = `${base_api}/?name=${firstname}&country_id=ID`;
        const response = await fetch(queryUrl);
        const result = await response.json();
        showResult(result.name, result.gender, result.probability)
    }
}
