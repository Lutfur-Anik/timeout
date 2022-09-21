const waring=()=>{
    alert('plz accept you')
}
const question=()=>{
   const response= confirm("plz touch")
   if(response===true){
       console.log('plz pay fee');
   }
   else{
       console.log('not accept')
    }
}
const info=()=>{
    const name=prompt('plz type')
    if(name===true){
        console.log('done')
    }
    else{
        console.log('empty')
    }
    
}
const refresh=()=>{
    location.reload()
}
const visit=()=>{
    location.assign('https://www.youtube.com/')
}