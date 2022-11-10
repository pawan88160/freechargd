window.onload=()=>{









    let log_btn = document.getElementById('log_cont');
    let login_sec = document.getElementById('log_r');
    let log_remove = document.getElementById('log_remove');
    
    log_btn.addEventListener('click',()=>{
        if(login_sec.style.display==="block"){
            login_sec.style.display="none";
        }else{
            login_sec.style.display="block";
        }
    })
    log_remove.addEventListener('click',()=>{
        login_sec.style.display="none";
    })

    let hamburger = document.getElementById('hamburger');
    let resCont = document.getElementById('resCont');
    let navresp = document.getElementById('nav-resp')
   hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('chamge')
    resCont.classList.toggle('res-nav');
    navresp.classList.toggle('res-navc');
   })

// ________________________________
//______________lone input area_____________

let lone_input =document.getElementById('loneinput')
let lone_value =document.getElementById('change_input_value')
let lone_inputt =document.getElementById('loneinputt')
let lone_valuet =document.getElementById('change_input_valuet')
let lone_inputtt =document.getElementById('loneinputtt')
let lone_valuett =document.getElementById('change_input_valuett')
let m_Y_max_value =document.getElementById('m_Y-max_value')
let selectatg = document.getElementById('selectatg')
let lone_value_right_side =document.getElementById('change_input_value-right')

let total_intrast_amount_value =document.getElementById('total_intrast_amount-value')
let total_intrast_amount = document.getElementById('total_intrast_amount')
let month_emi = document.getElementById('month_emi')

let lone_amount = parseFloat(lone_input.value)
let lone_rate = parseFloat(lone_inputt.value)
let lone_tenure = parseFloat(lone_inputtt.value)
let interest = lone_rate/12/100

function calclate(){
    let emi = lone_amount * interest * (Math.pow(1+interest,lone_tenure)) / (Math.pow(1+interest,lone_tenure) - 1)
    return emi
}

selectatg.addEventListener('change',(e)=>{
    if(selectatg.value=='In Years'){
        lone_inputtt.value="5"
        lone_inputtt.min="1"
        lone_inputtt.max="10"
        lone_valuett.innerText=5
        m_Y_max_value.innerText=10
    }else{
        lone_inputtt.value="1"
        lone_inputtt.min="1"
        lone_inputtt.max="120"
        lone_valuett.innerText=60
        m_Y_max_value.innerText=120
    }
})



lone_input.addEventListener('input',()=>{
    let value = parseInt(lone_input.value)
    lone_value.innerText=value
    lone_value_right_side.innerText=value
    let total_intrast_A = total_intrast_amount_value.innerText=Math.round(value * interest * (Math.pow(1+interest,lone_tenure)) / (Math.pow(1+interest,lone_tenure) - 1))
    total_intrast_amount.innerText= value -total_intrast_A
    month_emi.innerText=total_intrast_A

})
lone_inputt.addEventListener('input',()=>{
    let value = parseFloat(lone_inputt.value)
    lone_valuet.innerText=value
})

    lone_inputtt.addEventListener('input',(e)=>{
        let value = parseFloat(lone_inputtt.value)
        lone_valuett.innerText=value
    
    })



        // ______________lone input tabs________________________


let lone_list = document.querySelectorAll('.lone-list-d')
//lone_list.classList.remove('lone-list-active')
for(let i = 0; i <lone_list.length; i++){
    lone_list[i].classList.remove('lone-list-active')
    lone_list[i].addEventListener('click',(e)=>{
        
        if( lone_list[i] == lone_list[0]){
            lone_list[i].classList.add('lone-list-active')
        }
        if( lone_list[i] == lone_list[1]){
            lone_list[i].classList.add('lone-list-active')
        }
        if( lone_list[i] == lone_list[2]){
            lone_list[i].classList.add('lone-list-active')
        }
        if( lone_list[i] == lone_list[3]){
            lone_list[i].classList.add('lone-list-active')
        }
    })
}

//{
 //   lone_list[i].addEventListener('click',(e)=>{



    //    if( lone_list[i]== lone_list[0]){
           
    //    }
    //    if( lone_list[i]== lone_list[1]){
       
    //         lone_input.value="1500000"

    //         change_input_value.innerText=1000000

    //         // ______________

    //         lone_inputt.value="8"
    //         change_input_valuet.innerText=8

    //         // _________________
            

    //    }
    //    if( lone_list[i]== lone_list[2]){
    //     console.log('click2')
    //    }
    //    if( lone_list[i]== lone_list[3]){
    //     console.log('click3')
    //    }

   // })
//}





//______________lone input end_____________







   function fetchfile(){
    fetch ('files/home.txt')
    .then(res=>res.json())
    .then(data=>{
        let A_options = document.getElementById('A_options');
        let A_row_H = document.getElementById('A-row-H');
        let B_options = document.getElementById('B-options');
        let B_row_H = document.getElementById('B-row-H');
        let C_options = document.getElementById('C-options');
        let C_row_H = document.getElementById('C-row-H');
        let D_options = document.getElementById('D-options');
        let D_row_H = document.getElementById('D-row-H');
        let E_options = document.getElementById('E-options');
        let E_row_H = document.getElementById('E-row-H');
        let F_options = document.getElementById('F-options');
        let F_row_H = document.getElementById('F-row-H');
        let readmore = document.getElementById('readmore')
        let readmorearea = document.getElementById('readmorearea')

        let A_options_C = document.getElementById('A_options').children
        
        let h_stor='';
        let A_options_stor ='';

        let B_stor='';
        let B_options_stor ='';
        
        let C_stor='';
        let C_options_stor ='';

        let D_stor='';
        let D_options_stor ='';

        let E_stor='';
        let E_options_stor ='';
        
        let F_stor='';
        let F_options_stor ='';


        for(let i = 0; i<data.length;i++){
            if(data[i]===data[0]){
                h_stor= `<h3>${data[i].head}</h3>`
                for(let j = 0; j <data[i].body.length;j++){
                A_options_stor+=`
                    <div class="A_options-card sideBarvvutn">
                        <div>
                            <img src="${data[i].body[j].img}">
                        </div>
                        <div>
                            <p>${data[i].body[j].name}</p>
                            <p>${data[i].body[j].cashback}</p>
                        </div>
                    </div>
                `
                }
            } if(data[i]===data[1]){
                B_stor= `<h3>${data[i].head}</h3>`
                for(let j = 0; j <data[i].body.length;j++){
                    B_options_stor+=`
                        <div class="B-options-inner">
                            <div class="B-options-top">
                                <span><img src="${data[i].body[j].img}"></span>
                                <span>${data[i].body[j].name}</span>
                            </div>
                            <div class="B-options-bottom"> 
                                <span>${data[i].body[j].cashback}</span>
                                <button>${data[i].body[j].btn}</button>
                            </div>
                        </div>
                    `
                }
            }
            if(data[i]===data[2]){
                C_stor= `<h3>${data[i].head}</h3>`
                for(let j = 0; j <data[i].body.length;j++){
                    C_options_stor+=`
                            <div class="A_options-card C_options-card">
                            <div>
                                <img src="${data[i].body[j].img}">
                            </div>
                            <div>
                                <p>${data[i].body[j].name}</p>
                            </div>
                        </div>
                    `
                }
            }
            if(data[i]===data[3]){
                D_stor= `<h3>${data[i].head}</h3>`
                for(let j = 0; j <data[i].body.length;j++){
                    D_options_stor+=`
                            <div>
                                <img src="${data[i].body[j]}">
                            </div>
                    `
                }
            }
            if(data[i]===data[4]){
                E_stor= `<h3>${data[i].head}</h3>`
                for(let j = 0; j <data[i].body.length;j++){
                    E_options_stor+=`
                            <div>
                                <img src="${data[i].body[j]}">
                            </div>
                    `
                }
            }
            if(data[i]===data[5]){
                F_stor= `<h3>${data[i].head}</h3>`
                for(let j = 0; j <data[i].body.length;j++){
                    F_options_stor+=`
                            <div>
                                <img src="${data[i].body[j]}">
                            </div>
                    `
                }
            }
        }

        A_row_H.innerHTML=h_stor
        A_options.innerHTML=A_options_stor
        B_row_H.innerHTML=B_stor
        B_options.innerHTML=B_options_stor
        C_row_H.innerHTML=C_stor
        C_options.innerHTML=C_options_stor
        D_row_H.innerHTML=D_stor
        D_options.innerHTML=D_options_stor
        E_row_H.innerHTML=E_stor
        E_options.innerHTML=E_options_stor
        F_row_H.innerHTML=F_stor
        F_options.innerHTML=F_options_stor
        
        // ________________slider contionr area__________________
        let next = document.getElementById('next')
        let prv = document.getElementById('prv')
        let B_option = document.getElementsByClassName('B-options-inner')
        let flag = 1;

        
            function nextbtn(){
                next.addEventListener('click',()=>{
                    sliders(flag)
                    flag++
                    if(flag>1){
                        prv.style.opacity='1'
                    }
                })    
            }nextbtn()
            prv.style.opacity='0'
           
            function prebtn(){
                prv.addEventListener('click',()=>{
                    sliders(flag)
                    flag--
                })    
            }prebtn()

            function sliders(num){
               B_options.style.transform=`translatex(-${num * 220}px)`
               if(num > B_option.length-4){
                flag=1
                num=1
               }if(num < 0){
                flag=B_option.length-4

               }
            }
       

        // ________________slider contionr area end__________________
        // ____________________________Payment contaionr Area___________


        let hide_cards =[];
        for(let k=0;k<A_options_C.length;k++){
            let arr = [A_options_C[10],A_options_C[11],A_options_C[12],A_options_C[13],A_options_C[14],A_options_C[15],A_options_C[16],A_options_C[17],A_options_C[18],A_options_C[19],A_options_C[20],A_options_C[21]]
            for(let l=0;l<arr.length;l++){
                let stor_cards = arr[l];
                hide_cards.push(arr[l])
                stor_cards.classList.add('log_r')
            };
            A_options_C[9].addEventListener('click',()=>{
                hide_cards.forEach(i=>{
                    i.classList.remove('log_r')
                })
                A_options_C[9].classList.add('log_r')
            })
            hide_cards[11].addEventListener('click',()=>{
                hide_cards.forEach(i=>{
                    i.classList.add('log_r')
                })
                A_options_C[9].classList.remove('log_r')
            })
            let text_node = document.createTextNode('>')
            let text_node2 = document.createTextNode('>')
            let span_e =document.createElement('span')
            let span_e2 =document.createElement('span')
            let h4_e =document.createElement('h4')
            let h4_e2 =document.createElement('h4')
            let ddiv =A_options_C[9].children
            let ddiv2 = hide_cards[11].children
            ddiv2[0].appendChild(span_e2)
            ddiv[0].appendChild(span_e)
            span_e.appendChild(h4_e)
            span_e2.appendChild(h4_e2)
            h4_e.appendChild(text_node)
            h4_e2.appendChild(text_node2)
            break
        }
        readmore.addEventListener('click',()=>{
            readmorearea.style.display="block"
            readmore.style.display="none"
        })




            //  ___________function side btn start______


        function sidebarbtn(){
            let page_containor = document.querySelectorAll('.page-containor')
           
            let home_sidebar_btn = document.querySelectorAll('.sideBarvvutn')
            let img_act = document.querySelectorAll('.img_act');
            let img_not = document.querySelectorAll('.img_not');
         console.log(home_sidebar_btn)
             home_sidebar_btn.forEach((item,i)=>{
                 item.addEventListener('click',()=>{
                     page_containor.forEach((item,i)=>{
                         item.classList.add('containor_active')
                     })
                     page_containor[i].classList.remove('containor_active')
         
                     home_sidebar_btn.forEach(it=>{
                         it.classList.remove('activcolor')
                     })
                     home_sidebar_btn[i].classList.add('activcolor')
         
                     // img_act.forEach((item,i)=>{
                     //    item.classList.remove('img_actt')
                     // })
                     // img_act[i].classList.add('img_actt')
         
                 })
                 
             })
         }
         sidebarbtn()

        //  ___________function side btn______
      // ____________________________Payment contaionr Area end___________
    })
        
   } fetchfile()

}