let name_input = document.querySelector('#website-name');
let url_input = document.querySelector('#website-url');
let submit = document.querySelector('button');
let bockmarked_webs = document.querySelector('.bockmarked-websites');
// function to creat the bockmark
function creatBockmark(){
    if(name_input.value !=''){
        if(url_input.value!=''){
let saved_websites = `
     <div class="saved-website">
                <h2 calss = "thewebsite" id ="${new Date}">${name_input.value}</h2>
                <a href="${url_input.value}" class="visit" >visit</a>
                <div  class="delete">delete</div>
            </div>
`
        bockmarked_webs.style.display = 'block' ;
        bockmarked_webs.innerHTML += saved_websites;
        name_input.value = '';
        url_input.value = '';
        function deleteitem(){
         //remeve the item
            let websitestoremove = this.closest('.saved-website');
               websitestoremove.remove()
        }
        let deletebtns = document.querySelectorAll('.delete');
        deletebtns.forEach(btn=>{
            btn.addEventListener('click', deleteitem)
        })
        }else{
            window.alert('invalid url')
        }
        

    }else{
        window.alert('invalid name')
    }
    
}

