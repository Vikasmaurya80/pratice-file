




function Search() {


    let input = document.getElementById('input').value.toUpperCase()
    let AllproductList = document.getElementById('allProduct-container')
    let productName = document.getElementsByTagName('h2')
    let product = document.querySelectorAll('.product')





for (let i = 0; i < productName.length; i++) {

     let match = product[i].getElementsByTagName('h2')[0];
     console.log(match.textContent) 
     if(match){
        let title = match.textContent || match.innerHTML

        if(title.toUpperCase().indexOf(input)> -1){
            product[i].style.display = ''
        }else{
            product[i].style.display = 'none'
        }
     }
}
    
}