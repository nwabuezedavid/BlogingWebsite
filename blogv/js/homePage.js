
const slide_center_div_text  = document.querySelectorAll('.hideSlidtext')
const slide_center_div_img  = document.querySelectorAll('.hideSlid')
const leftconbtn  = document.querySelector('.left-con')
const rghtconbtn  = document.querySelector('.rght-con')
const imgCon  = document.querySelector('.slicActiobn')
const bar_click = document.querySelector('.bar__top')
const bar_con  = document.querySelector('.hids__nav')

bar_click.addEventListener('click',()=>{
    bar_con.classList.toggle('hids__nav__show')
    // if (bar_con.classList ='hids__nav__show') {
           
    //     } else {
            
    //         bar_con.classList.add('hids__nav__show')
    //    }
})










var initalCount = 0
leftconbtn.addEventListener('click',()=>{
    slid()
    clearInterval(clearibnter)

})
rghtconbtn.addEventListener('click',()=>{
    slidRighr()
    clearInterval(clearibnter)
})


function slidRighr() {
    initalCount++
    console.log(initalCount);
    imgCon.style.display ='flex-reverse'
    slide_center_div_text.forEach((ec, vals)=>{
    slide_center_div_img.forEach((e, val)=>{
       
if (vals == initalCount ){
    ec.classList.add('showSlidtext')
    
    
} 
else{
    ec.classList.remove('showSlidtext')
    

}
if (val == initalCount ){
    e.classList.add('showSlid')
    
    
} else if(initalCount == slide_center_div_img.length){
    e.classList.add('showSlid')
    initalCount = 0

    
}
// else if(initalCount >= slide_center_div_img.length){
//     e.classList.add('showSlid')
//     initalCount = Number(slide_center_div_img.length)
// }
else{
    e.classList.remove('showSlid')
    

}
    })
    })
   
}



function slid() {
    initalCount++
    slide_center_div_text.forEach((ec, vals)=>{
    slide_center_div_img.forEach((e, val)=>{
       
if (vals == initalCount ){
    ec.classList.add('showSlidtext')
    
    
} 
else{
    ec.classList.remove('showSlidtext')
    

}
if (val == initalCount ){
    e.classList.add('showSlid')
    
    
} else if(initalCount == slide_center_div_img.length){
    e.classList.add('showSlid')
    initalCount = 0
}
else{
    e.classList.remove('showSlid')
    

}
    })
    })
}
 let clearibnter = setInterval(() => {
    
    slid()
}, 5000);

let video__hd = document.querySelector('.VIDE__si')










// api
// const rghtconbtn  = document.querySelector('.rght-con')
let information_list  = document.querySelector('.sec-left-main-one')
let information_list_adver  = document.querySelectorAll('.recent__container')
let Sone_Sport  = document.querySelector('.sec-left-main-one_Sport')

let url = 'http://127.0.0.1:8000'
let item = ""
let ItemimageArr = []
let sportItem = ""


let Sone_IMG = []
let vodeoCon = ""  
let Sone_IMGhs ;
function fetchApi() {
    fetch(url,{
        'method':'GET',
        'content-type':'application/json'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.length ); 
      
        data.forEach((e,vask) => {

           
let video__con_hol = document.querySelector('.VIDE__si')
if (video__con_hol.children = 9) {
    
            let Eacgh = []
            let am = Sone_IMG.concat(e.files)
            let lengam = am[0].length
            let formatsd = am[0][lengam - 3]+am[0][lengam - 2]+am[0][lengam - 1]
            console.log(formatsd);
            if (formatsd != 'mp4' ){
                
                console.log(e.files);
         
                vodeoCon += `
                <div class="last-sd" >
                <div class="lastchild">
                    <img src="${url + e.files}" alt="" style="max-height:300px; height:100%;">
                    <span>
                        <h4>${e.bodyText}
                            </h4>
                        <a href="" class="btn-lastsh"> READ MORE   >>></a>
                        <small>12,05,2022.</small>
                    </span>
                    <header class="view-sign">
                        <i class="bi bi-eye"></i>
                        <p style="font:1em ">${e.viewCount}</p>
                    </header>
                </div>
            </div>

                `
                
                video__con_hol.innerHTML += vodeoCon
             


               
            }
            else if (formatsd == 'mp4'){
                
               
         
                vodeoCon += `
                <div class="lvideo">
                <div class="videoLAst">
                    <video class="videoPost" src="${url + e.files}"   poster="${url + e.img}" alt="" style="max-height:300px; ">
                    </div>
                    <a href="" class="watcxh">watch now >>></a>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, ducimus! Sunt ipsam totam fuga?</p>
                    <small class="date__sa">12,05,2022.</small>
                    <i class="bi bi-play-fill play"></i>
                </div>

                `
                
                video__con_hol.innerHTML = vodeoCon
             
                    const play_btnn  = video__con_hol.children.item(1)
            
                    const video_con  = document.querySelectorAll('.videoPost')
                console.log(play_btnn);
                    
                
                    video_con.audio
         
                
                


               
            }
            
            
            else if (e.categories == "tw" ) {
                
                
                
                item +=     `
                <div class="information" >
           
                <a href="" class="main-infor">
               
                <img src="${url + String(e.files)  }" alt="" class='imgs_dport' >
                <span>
                    <h4>${e.title} </h4>
                    <b>
    
                        <strong>(${e.viewCount})views</strong>
                        <small>${e.created}</small>
                      </b>
                </span>
                </a >
                </div>
              
                // `
                // let counTview  = document.querySelector('.viewCount').matche('sksk')
                // let Aherf  = document.querySelector('.main-infor')
                
                
                console.log();
                // Aherf
                // counTview.innerHTML = e.viewCount + 'K views' 
                // counTview.innerHTML = 'K 234views' 
                information_list.innerHTML = item

        } 
            else if (e.categories == "sp") {
             
                sportItem += `
            <div class="information" >
           
            <a href="" class="main-infor">
           
            <img src="${url + String(e.files)  }" alt="" class='imgs_dport' >
            <span>
                <h4>${e.title} </h4>
                <b>

                    <strong>(${e.viewCount})views</strong>
                    <small>${e.created}</small>
                  </b>
            </span>
            </a >
            </div>

            `
            Sone_Sport.innerHTML = sportItem
        }

}else{
    video__con_hol.innerHTML = ''
}
        
    
    });
    })

}

fetchApi()
