const storedata={
    Firstname: "",
    Lastname: "",
    Address:"",
    pincode:"",
    Gender: "",
    Foodtype: [],
    state:"",
    country:""
    

}

function result(element){
    if(element.type==('radio'))
    {
    storedata[element.name] =element.id
    }

else if(element.type==('checkbox'))
{
    if(storedata[element.name].includes(element.id))
    {
       storedata[element.name]= storedata[element.name].filter((r)=> r!=element.id)
    }


    else{
    storedata[element.name].push(element.id)
    }
}

else{
    storedata[element.id]=element.value;
}
//console.log(element.id,element.name,element.value)
//console.log(storedata)

}
function savedatastorage(value={})
{            try{      
   const tharun = JSON.parse(localStorage.getItem("robot"))? JSON.parse(localStorage.getItem("robot")): [];
   // const tharun=[];
    console.log(tharun)
    tharun.push(value)
    console.log(tharun);
   localStorage.setItem("robot",JSON.stringify(tharun))
   renderrows(tharun)
   
}
catch(error){
    console.log(error)
}
//window.location.reload();
}


function savechanges(){
    if(storedata.Foodtype.length>=2)
    {
        savedatastorage(storedata)
        console.log(storedata)
       
    }
    else{
        throw new Error("Food type shpuld be atleast two")
    }
}

function renderrows(tharun=[])
{  const brown =[];
    if(tharun.length>0){
        let uma = document.getElementById('tr')
        uma.innerHTML='';
        uma.innerHTML=  `<tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Food Type</th>
        <th scope="col">Address</th>
        <th scope="col">Pincode</th>
        <th scope="col">State</th>
        <th scope="col">Country</th>
      </tr>`
        
      
        tharun.forEach((e)=>{
          let ram =document.createElement('tr')
            ram.innerHTML=`
             <tr>
            <td scope="row">${e.Firstname}</td>
            <td>${e.Lastname}</td>
            <td>${e.Address}</td>
            <td>${e.pincode}</td>
            <td>${e.Gender}</td>
            <td>${e.Foodtype}</td>
            <td>${e.state}</td>
            <td>${e.country}</td>
            <tr>
          `
          brown.push(ram);
          console.log("rrr");
          console.log(brown)
        })
        uma.append(...brown);
        
    
    }
    









































    
}