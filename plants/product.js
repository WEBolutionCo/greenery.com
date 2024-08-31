const mainPic = document.getElementById('mainPic');
const smPic1 = document.getElementById('smPic1');
const smPic2 = document.getElementById('smPic2');
const smPic3 = document.getElementById('smPic3');
const smPic4 = document.getElementById('smPic4');
const smPic5 = document.getElementById('smPic5');

smPic1.style.boxShadow = '0 0 4px #00000099';
smPic1.style.transform = 'scale(1.05)';
smPic1.style.border = 'solid 2px #008001';
smPic2.style.border = 'solid 2px transparent';
smPic3.style.border = 'solid 2px transparent';
smPic4.style.border = 'solid 2px transparent';
smPic5.style.border = 'solid 2px transparent';

const changePic1 = (src) => {
    mainPic.src = src;
    smPic1.style.boxShadow = '0 0 4px #00000099'
    smPic1.style.transform = 'scale(1.05)'
    smPic1.style.border = 'solid 2px #008001'
    smPic2.style.boxShadow = 'none'
    smPic2.style.transform = 'scale(1)'
    smPic2.style.border = 'solid 2px transparent'
    smPic3.style.boxShadow = 'none'
    smPic3.style.transform = 'scale(1)'
    smPic3.style.border = 'solid 2px transparent'
    smPic4.style.boxShadow = 'none'
    smPic4.style.transform = 'scale(1)'
    smPic4.style.border = 'solid 2px transparent'
    smPic5.style.boxShadow = 'none'
    smPic5.style.transform = 'scale(1)'
    smPic5.style.border = 'solid 2px transparent'
}

const changePic2 = (src) => {
    mainPic.src = src;
    smPic2.style.boxShadow = '0 0 4px #00000099'
    smPic2.style.transform = 'scale(1.05)'
    smPic2.style.border = 'solid 2px #008001'
    smPic1.style.boxShadow = 'none'
    smPic1.style.transform = 'scale(1)'
    smPic1.style.border = 'solid 2px transparent'
    smPic3.style.boxShadow = 'none'
    smPic3.style.transform = 'scale(1)'
    smPic3.style.border = 'solid 2px transparent'
    smPic4.style.boxShadow = 'none'
    smPic4.style.transform = 'scale(1)'
    smPic4.style.border = 'solid 2px transparent'
    smPic5.style.boxShadow = 'none'
    smPic5.style.transform = 'scale(1)'
    smPic5.style.border = 'solid 2px transparent'
}

const changePic3 = (src) => {
    mainPic.src = src;
    smPic3.style.boxShadow = '0 0 4px #00000099'
    smPic3.style.transform = 'scale(1.05)'
    smPic3.style.border = 'solid 2px #008001'
    smPic2.style.boxShadow = 'none'
    smPic2.style.transform = 'scale(1)'
    smPic2.style.border = 'solid 2px transparent'
    smPic1.style.boxShadow = 'none'
    smPic1.style.transform = 'scale(1)'
    smPic1.style.border = 'solid 2px transparent'
    smPic4.style.boxShadow = 'none'
    smPic4.style.transform = 'scale(1)'
    smPic4.style.border = 'solid 2px transparent'
    smPic5.style.boxShadow = 'none'
    smPic5.style.transform = 'scale(1)'
    smPic5.style.border = 'solid 2px transparent'
}

const changePic4 = (src) => {
    mainPic.src = src;
    smPic4.style.boxShadow = '0 0 4px #00000099'
    smPic4.style.transform = 'scale(1.05)'
    smPic4.style.border = 'solid 2px #008001'
    smPic2.style.boxShadow = 'none'
    smPic2.style.transform = 'scale(1)'
    smPic2.style.border = 'solid 2px transparent'
    smPic3.style.boxShadow = 'none'
    smPic3.style.transform = 'scale(1)'
    smPic3.style.border = 'solid 2px transparent'
    smPic1.style.boxShadow = 'none'
    smPic1.style.transform = 'scale(1)'
    smPic1.style.border = 'solid 2px transparent'
    smPic5.style.boxShadow = 'none'
    smPic5.style.transform = 'scale(1)'
    smPic5.style.border = 'solid 2px transparent'
}

const changePic5 = (src) => {
    mainPic.src = src;
    smPic5.style.boxShadow = '0 0 4px #00000099'
    smPic5.style.transform = 'scale(1.05)'
    smPic5.style.border = 'solid 2px #008001'
    smPic2.style.boxShadow = 'none'
    smPic2.style.transform = 'scale(1)'
    smPic2.style.border = 'solid 2px transparent'
    smPic3.style.boxShadow = 'none'
    smPic3.style.transform = 'scale(1)'
    smPic3.style.border = 'solid 2px transparent'
    smPic4.style.boxShadow = 'none'
    smPic4.style.transform = 'scale(1)'
    smPic4.style.border = 'solid 2px transparent'
    smPic1.style.boxShadow = 'none'
    smPic1.style.transform = 'scale(1)'
    smPic1.style.border = 'solid 2px transparent'
}

const duCont1 = document.getElementById('duCont1');
const duCont2 = document.getElementById('duCont2');
const duPrice1 = document.getElementById('duPrice1');
const duPrice2 = document.getElementById('duPrice2');
const pprice = document.getElementById('pprice'); 
console.log(duPrice1);

duCont1.style.backgroundColor = '#06CD3745';
duCont2.style.transform = 'scale(1.02)';
duCont2.style.boxShadow = '0 0 5px #00000066';
duPrice1.style.color = '#008001';
duCont2.style.backgroundColor = '#fff';
duCont1.style.transform = 'scale(1)';
duCont1.style.boxShadow = 'none';
duPrice2.style.color = '#000';

const duChange1 = (price) => {
    pprice.innerHTML = price;
    duCont1.style.backgroundColor = '#06CD3745';
    duCont2.style.transform = 'scale(1.02)';
    duCont2.style.boxShadow = '0 0 5px #00000066';
    duPrice1.style.color = '#008001';
    duCont2.style.backgroundColor = '#fff';
    duCont1.style.transform = 'scale(1)';
    duCont1.style.boxShadow = 'none';
    duPrice2.style.color = '#000';
};

const duChange2 = (price) => {
    pprice.innerHTML = price;
    duCont2.style.backgroundColor = '#06CD3745';
    duCont1.style.transform = 'scale(1.02)';
    duCont1.style.boxShadow = '0 0 5px #00000066';
    duPrice2.style.color = '#008001';
    duCont1.style.backgroundColor = '#fff';
    duCont2.style.transform = 'scale(1)';
    duCont2.style.boxShadow = 'none';
    duPrice1.style.color = '#000';
}

