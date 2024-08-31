document.getElementById('submitBtn').onclick = function(event) {
    let form = document.getElementById('purchaseForm');
    let inputs = form.querySelectorAll('input[required]');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
        }
    });

    if (allFilled) {
        setTimeout(() => {
            window.location.href = 'thanks';
        }, 1000);
    } else {
        alert('Please fill all required fields to Proceed');
    }
};



const screen = window.innerWidth;
const inp1 = document.getElementById("inp1");     
const inp2 = document.getElementById("inp2");
const inp3 = document.getElementById("inp3");
const inp4 = document.getElementById("inp4");     
const inp5 = document.getElementById("inp5");
const inp6 = document.getElementById("inp6");
const speMsg = document.getElementById("speMsg");

if (screen >= 600) {
    inp1.placeholder = "";
    inp2.placeholder = "";
    inp3.placeholder = "";
    inp4.placeholder = "";
    inp5.placeholder = "";
    inp6.placeholder = "";
} else {
    inp1.placeholder = "Name";
    inp2.placeholder = "Email *";
    inp3.placeholder = "Phone *";
    inp4.placeholder = "State *";
    inp5.placeholder = "City *";
    inp6.placeholder = "Location *";
    speMsg.rows = "4";
}



const pa = document.getElementById("pa");
const ma = document.getElementById("ma");
const pp = document.getElementById("pc");

pa.style.backgroundColor = "#06CD3745";
pa.style.transform = "scale(1)";
pa.style.boxShadow = "none";

pa.onclick = () => {
    pa.style.backgroundColor = "#06CD3745";
    pa.style.transform = "scale(1)";
    pa.style.boxShadow = "none";
    ma.style.backgroundColor = "#fff";
    ma.style.transform = "scale(1.02)";
    ma.style.boxShadow = "0 0 5px #00000099";
    pc.style.backgroundColor = "#fff";
    pc.style.transform = "scale(1.02)";
    pc.style.boxShadow = "0 0 5px #00000099";
}

ma.onclick = () => {
    ma.style.backgroundColor = "#06CD3745";
    ma.style.transform = "scale(1)";
    ma.style.boxShadow = "none";
    pa.style.backgroundColor = "#fff";
    pa.style.transform = "scale(1.02)";
    pa.style.boxShadow = "0 0 5px #00000099";
    pc.style.backgroundColor = "#fff";
    pc.style.transform = "scale(1.02)";
    pc.style.boxShadow = "0 0 5px #00000099";
}

pc.onclick = () => {
    pc.style.backgroundColor = "#06CD3745";
    pc.style.transform = "scale(1)";
    pc.style.boxShadow = "none";
    ma.style.backgroundColor = "#fff";
    ma.style.transform = "scale(1.02)";
    ma.style.boxShadow = "0 0 5px #00000099";
    pa.style.backgroundColor = "#fff";
    pa.style.transform = "scale(1.02)";
    pa.style.boxShadow = "0 0 5px #00000099";
}
