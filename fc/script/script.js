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

        console.log(B_options_stor)

        for(let i = 0; i<data.length;i++){
            if(data[i]===data[0]){
                h_stor= `<h3>${data[i].head}</h3>`
                for(let j = 0; j <data[i].body.length;j++){
                A_options_stor+=`
                    <div class="A_options-card">
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
      // ____________________________Payment contaionr Area end___________
    })
        
   } fetchfile()

}