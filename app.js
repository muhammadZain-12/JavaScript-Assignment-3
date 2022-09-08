let mobiles = [

    {
        companyName : "iphone",
        model : {
            x10:{
                ram :2,
                rom :16,
                price:12000,
            },
            x11:{
                ram :4,
                rom :32,
                price:16000,
            },
            x12:{
                ram :6,
                rom :64,
                price:22000,
            },
            x13:{
                ram :8,
                rom :112,
                price:30000,
            }
        }
    },
        {
    
        companyName : "samsung",
        model : {
            s1:{
                ram :2,
                rom :16,
                price:8000,
            },
            s2:{
                ram :4,
                rom :32,
                price:16000,
            },
            s3:{
                ram :8,
                rom :64,
                price:19000,
            },
            s4:{
                ram :16,
                rom :112,
                price:29000,
            }
        }
    }
    ]

let MobileNamesToDisplay = document.getElementById("mobileNames")
let modelNames = document.getElementById("modelNames")
 mobiles.filter(function(e,i){
        
    MobileNamesToDisplay.innerHTML += `<option value = ${e.companyName}>${e.companyName}</option>`
 })

function modelNameToDisplay() {
    modelNames.disabled = false
    modelNames.innerHTML = "" 
    if(MobileNamesToDisplay.value == "iphone"){
        mobiles.find(function(e,i){
        if(e.companyName === "iphone"){
            let a = e.model
            let b = Object.keys(a)
            b.map(function(e,i){
            modelNames.innerHTML += `<option value = ${e}>${e}</option>`
            })
        }
        
            }     
        )
        }
 
        if(MobileNamesToDisplay.value == "samsung"){
            mobiles.find(function(e,i){
            if(e.companyName === "samsung"){
                let a = e.model
                let b = Object.keys(a)
                   b.map(function(e,i){
                    modelNames.innerHTML += `<option value = ${e}>${e}</option>`
                })
            }
            
                }     
            )
            }
    }

let unorder = document.getElementById("unorder")
function resultToDisplay() {
    unorder.innerHTML = ""
    let values;
    if(MobileNamesToDisplay.value==="iphone"){
    mobiles.filter(function(e,i){
        if(e.companyName==="iphone"){
        values = e.model[modelNames.value] 
        
               }
    
    })
    let res = Object.keys(values)
    let res1 = Object.values(values)
    res.map(function(e,i){
        unorder.innerHTML += `<li>${res[i]} : ${res1[i]}</li>`
    })
}
    
if(MobileNamesToDisplay.value==="samsung"){
    mobiles.filter(function(e,i){
        if(e.companyName==="samsung"){
        values = e.model[modelNames.value] 
        
               }
    
    })
    let res = Object.keys(values)
    let res1 = Object.values(values)
    res.map(function(e,i){
        unorder.innerHTML += `<li>${res[i]} : ${res1[i]}</li>`
    })
}
 
} 