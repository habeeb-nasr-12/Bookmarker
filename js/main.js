var siteName =document.querySelector(".Bookmark-name")
var siteUrl = document.querySelector(".Bookmark-url")


var  sites=[]
var myindex;



if (localStorage.getItem("sitesinf") != null) {

    sites = JSON.parse(localStorage.getItem("sitesinf"))
    display()
  }

document.querySelector(".submit-btn").addEventListener("click",addSite)

function addSite(){
    if (document.querySelector(".submit-btn").innerHTML == "submit" ){
        var stiesdata = {
    
            name:siteName.value,
            url:siteUrl.value
        }
    
        sites.push(stiesdata)
        localStorage.setItem("sitesinf",JSON.stringify(sites))
        display()
        clear()
        
    
      }
    else{
 
         sites[myindex].name= siteName.value 
         sites[myindex].url  = siteUrl.value
    
         document.querySelector(".submit-btn").innerHTML = "submit"
    clear()
    display()
    localStorage.setItem("sitesinf",JSON.stringify(sites))
        
    }
}


function  updateElement(index){
    myindex=index
  
     siteName.value = sites[index].name
    siteUrl.value = sites[index].url



    document.querySelector(".submit-btn").innerHTML="UPDATE"
    display()



}




function display (){
var container = ""
    for (var i =0 ;i < sites.length;i++){
        container+=` <tr>

        <td class="text-center">${sites[i].name}</td>
        <td class="text-center"> <a  target="_blank" href="${sites[i].url}"  class="btn visit btn-primary">visit </a></td>
        <td class="text-center"> <button  class="btn btn-info" onclick=updateElement(${i})>Update </button></td>
        <td class="text-center"> <button onclick=deleteElement(${i}) class="btn  btn-dark ">Delete </button></td>





        </tr>`


    }
   

document.querySelector(".tbody").innerHTML= container

}



function deleteElement(index){

    sites.splice(index,1)
   
    localStorage.setItem("sitesinf",JSON.stringify(sites))
    display()
   
    
}
        
       


function clear(){
siteName.value=""
siteUrl.value=""

}


document.querySelector(".search").addEventListener("keyup",function(){
    search(this.value)
})


function search(term){
    var container = ""
for (var i=0 ;i <sites.length;i++){

    if (sites[i].name.toLowerCase().trim().includes(term.toLowerCase())){

        container+=` <tr>

        <td class="text-center" > ${sites[i].name}</td>
        <td  class="text-center"> <a   target="_blank" href="${sites[i].url}" class="btn visit btn-primary">visit </a></td>
        <td class="text-center"> <button  class="btn btn-info" onclick=updateElement(${i})>Update </button></td>
        <td class="text-center"> <button onclick=deleteElement(${i}) class="btn btn-dark ">Delete </button></td>





        </tr>`
    }
}
document.querySelector(".tbody").innerHTML= container

}
















