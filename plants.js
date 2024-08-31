const screen = window.innerWidth;
console.log(screen);

const allPlants = document.getElementById('allPlants');
const topPlants = document.getElementById('topPlants');
const plantedPlants = document.getElementById('plantedPlants'); 
const ratedPlants = document.getElementById('ratedPlants');
const usingPlants = document.getElementById('usingPlants');

const npf = document.getElementById('npf');
const apf = document.getElementById('apf');
const tpf = document.getElementById('tpf');
const ppf = document.getElementById('ppf');
const rpf = document.getElementById('rpf');
const upf = document.getElementById('upf');
console.log(npf);

npf.style.backgroundColor = '#008001';
apf.style.backgroundColor = '#06CD3745'; 
tpf.style.backgroundColor = '#06CD3745';
ppf.style.backgroundColor = '#06CD3745';
rpf.style.backgroundColor = '#06CD3745'; 
upf.style.backgroundColor = '#06CD3745';
npf.style.color = '#FFFFFF'; 
apf.style.color = '#000000'; 
tpf.style.color = '#000000';
ppf.style.color = '#000000';
rpf.style.color = '#000000'; 
upf.style.color = '#000000';

const noFliterFunc = (msh, ssh, nh) => { 
    allPlants.style.maxHeight = msh;
    topPlants.style.maxHeight = ssh;
    plantedPlants.style.maxHeight = ssh;
    ratedPlants.style.maxHeight = ssh;
    usingPlants.style.maxHeight = ssh;
    npf.style.backgroundColor = '#008001';
    apf.style.backgroundColor = '#06CD3745'; 
    tpf.style.backgroundColor = '#06CD3745'; 
    ppf.style.backgroundColor = '#06CD3745';
    rpf.style.backgroundColor = '#06CD3745'; 
    upf.style.backgroundColor = '#06CD3745'; 
    npf.style.color = '#FFFFFF';
    apf.style.color = '#000000';
    tpf.style.color = '#000000';
    ppf.style.color = '#000000';
    rpf.style.color = '#000000';
    upf.style.color = '#000000'; 
}
    
const allPlantsFunc = (msh, ssh, nh) => {
    allPlants.style.maxHeight = msh;
    topPlants.style.maxHeight = nh;
    plantedPlants.style.maxHeight = nh;
    ratedPlants.style.maxHeight = nh;
    usingPlants.style.maxHeight = nh;
    npf.style.backgroundColor = '#06CD3745';  
    apf.style.backgroundColor = '#008001';
    tpf.style.backgroundColor = '#06CD3745';
    ppf.style.backgroundColor = '#06CD3745';
    rpf.style.backgroundColor = '#06CD3745';
    upf.style.backgroundColor = '#06CD3745';
    npf.style.color = '#000000';
    apf.style.color = '#FFFFFF';
    tpf.style.color = '#000000';
    ppf.style.color = '#000000';
    rpf.style.color = '#000000';
    upf.style.color = '#000000';
}

const topPlantsFunc = (msh, ssh, nh) => {
    allPlants.style.maxHeight = nh;
    topPlants.style.maxHeight = ssh;
    plantedPlants.style.maxHeight = nh;
    ratedPlants.style.maxHeight = nh;
    usingPlants.style.maxHeight = nh;
    npf.style.backgroundColor = '#06CD3745';  
    apf.style.backgroundColor = '#06CD3745';
    tpf.style.backgroundColor = '#008001';
    ppf.style.backgroundColor = '#06CD3745';
    rpf.style.backgroundColor = '#06CD3745';
    upf.style.backgroundColor = '#06CD3745';
    npf.style.color = '#000000';
    apf.style.color = '#000000';
    tpf.style.color = '#FFFFFF';
    ppf.style.color = '#000000';
    rpf.style.color = '#000000';
    upf.style.color = '#000000';
}

const mostPlantedFunc = (msh, ssh, nh) => {
    allPlants.style.maxHeight = nh;
    topPlants.style.maxHeight = nh;
    plantedPlants.style.maxHeight = ssh;
    ratedPlants.style.maxHeight = nh;
    usingPlants.style.maxHeight = nh;
    npf.style.backgroundColor = '#06CD3745';
    apf.style.backgroundColor = '#06CD3745';
    tpf.style.backgroundColor = '#06CD3745';
    ppf.style.backgroundColor = '#008001';
    rpf.style.backgroundColor = '#06CD3745';
    upf.style.backgroundColor = '#06CD3745';
    npf.style.color = '#000000';
    apf.style.color = '#000000';
    tpf.style.color = '#000000';
    ppf.style.color = '#FFFFFF';
    rpf.style.color = '#000000';
    upf.style.color = '#000000';
}

const mostRatedFunc = (msh, ssh, nh) => {
    allPlants.style.maxHeight = nh;
    topPlants.style.maxHeight = nh;
    plantedPlants.style.maxHeight = nh;
    ratedPlants.style.maxHeight = ssh;
    usingPlants.style.maxHeight = nh;
    npf.style.backgroundColor = '#06CD3745';
    apf.style.backgroundColor = '#06CD3745';
    tpf.style.backgroundColor = '#06CD3745';
    ppf.style.backgroundColor = '#06CD3745';
    rpf.style.backgroundColor = '#008001';
    upf.style.backgroundColor = '#06CD3745';
    npf.style.color = '#000000';
    apf.style.color = '#000000';
    tpf.style.color = '#000000';
    ppf.style.color = '#000000';
    rpf.style.color = '#FFFFFF';
    upf.style.color = '#000000';
}

const mostUsingFunc = (msh, ssh, nh) => {
    allPlants.style.maxHeight = nh;
    topPlants.style.maxHeight = nh;
    plantedPlants.style.maxHeight = nh;
    ratedPlants.style.maxHeight = nh;
    usingPlants.style.maxHeight = ssh;
    npf.style.backgroundColor = '#06CD3745';
    apf.style.backgroundColor = '#06CD3745';
    tpf.style.backgroundColor = '#06CD3745';
    ppf.style.backgroundColor = '#06CD3745';
    rpf.style.backgroundColor = '#06CD3745';
    upf.style.backgroundColor = '#008001';
    npf.style.color = '#000000';
    apf.style.color = '#000000';
    tpf.style.color = '#000000';
    ppf.style.color = '#000000';
    rpf.style.color = '#000000';
    upf.style.color = '#FFFFFF';
}

if (screen < 600) {
    npf.onclick = () => noFliterFunc("5000px", "1500px", "0px");
    apf.onclick = () => allPlantsFunc("5000px", "1500px", "0px");
    tpf.onclick = () => topPlantsFunc("5000px", "1500px", "0px");
    ppf.onclick = () => mostPlantedFunc("5000px", "1500px", "0px");
    rpf.onclick = () => mostRatedFunc("5000px", "1500px", "0px");
    upf.onclick = () => mostUsingFunc("5000px", "1500px", "0px");
} else {
    npf.onclick = () => noFliterFunc("1500px", "500px", "0px");
    apf.onclick = () => allPlantsFunc("1500px", "500px", "0px");
    tpf.onclick = () => topPlantsFunc("1500px", "500px", "0px");
    ppf.onclick = () => mostPlantedFunc("1500px", "500px", "0px");
    rpf.onclick = () => mostRatedFunc("1500px", "500px", "0px");
    upf.onclick = () => mostUsingFunc("1500px", "500px", "0px");
}