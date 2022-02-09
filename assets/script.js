
let yourName = "Alex Myers" 


let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const credit = document.querySelector('#credit')



credit.textContent = `Created by ${yourName}`

let tot = document.body.querySelector('#qty-total')
let gquant = document.body.querySelector('#qty-gb')
let ccquant = document.body.querySelector('#qty-cc')
let sugarquant = document.body.querySelector('#qty-sugar')

const gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function() {
    gb++
    gquant.textContent = `${gb}`
    tot.textContent = `${gb + cc +sugar}`

})

const gbMinusBtn = document.body.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function(){
    if(gb<=0){gb=0} else {
        gb--
        gquant.textContent = `${gb}`
        tot.textContent = `${gb + cc +sugar}`
    }
})

const ccPlusBtn = document.body.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function(){
    cc++
    ccquant.textContent = `${cc}`
    tot.textContent = `${gb + cc +sugar}`
})

const ccMinusBtn = document.body.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function(){
    if(cc<=0){cc=0} else {
        cc--
        ccquant.textContent = `${cc}`
        tot.textContent = `${gb + cc +sugar}`
    }
})

const sugarPlusBtn = document.body.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function(){
    sugar++
    sugarquant.textContent = `${sugar}`
    tot.textContent = `${gb + cc +sugar}`
})

const sugarMinusBtn = document.body.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function(){
    if(sugar<=0){sugar=0} else {
        sugar--
        sugarquant.textContent = `${sugar}`
        tot.textContent = `${gb + cc +sugar}`
    }
})

