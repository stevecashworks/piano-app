document.addEventListener("DOMContentLoaded",()=>{
    let is_On=true
    const volumeInp=document.getElementById('volume')
    let  volume=volumeInp.value
    const powerBtn=document.querySelector('.power')

    const togglePower=()=>{
        if(is_On){

    is_On=false
    powerBtn.textContent="off"
    powerBtn.style.backgroundColor='red'
    volumeInp.setAttribute('disabled',true)
 }
 else{
    is_On=true
    volumeInp.removeAttribute('disabled');
    powerBtn.style.backgroundColor="green"
    powerBtn.textContent='on'
 }
    }
    powerBtn.addEventListener('click',()=>{togglePower()})
const sounds={
    a: new Audio('./sounds/A.ogg'),
    a_sharp: new Audio('./sounds/A-sharp.ogg'),
    b:new Audio('./sounds/B.ogg'),
    c:new Audio('./sounds/C.ogg'),
    c_sharp:new Audio('./sounds/C-sharp.ogg'),
    d:new Audio('./sounds/D.ogg'),
    d_sharp:new Audio('./sounds/D-sharp.ogg'),
    e:new Audio('./sounds/E.ogg'),
    f:new Audio('./sounds/F.ogg'),
    f_sharp:new Audio('./sounds/F-sharp.ogg'),
    g:new Audio('./sounds/G.ogg'),
    g_sharp:new Audio('./sounds/G-sharp.ogg'),
    high_c:new Audio('./sounds/High-c.ogg')
    

}
const volumeVal= document.querySelector('.volume-val');
const volumeEl=document.getElementById('volume');
const allKeys=document.querySelectorAll('.key')
allKeys.forEach(x=>{
    x.addEventListener('click',()=>{
        if(is_On){
            
            const audio=sounds[x.id]
            audio.volume=volume/100
            audio.play()
        }
        
    })
})


volumeVal.textContent=volumeEl.value
const logVal=(el)=>{
    volume=el.value
    volumeVal.innerHTML=volume
}
console.log(volumeEl)
volumeEl.onchange=()=>{
    logVal(volumeEl)
}
})