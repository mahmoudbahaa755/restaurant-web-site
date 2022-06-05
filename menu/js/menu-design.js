document.getElementById("icon").addEventListener("click" , () => {
  alert("Your item has added to the cart, cheack the cart please....")
});

function showMore() {
  var ele = document.getElementById("read_more_section");
  var btn = document.getElementById("button-read");
  ele.style.display = "grid";
  btn.style.display = "none";
}
function cardSearch(){
  var menu = document.getElementsByTagName('h3')
  var s= new Array()
  for (var i=0; i<menu.length-1; i++){
    s.push(menu[i].outerText)
  }
 
  console.log(s)
  var searchBox= document.querySelector("#search-box");
  var searchValue= searchBox.value;
  for(let i=1; i<s.length-1 ;i++){
    if(searchValue ==''){
      for(let i=1; i<s.length-1 ;i++){
        let n=document.querySelector('.el-'+(i))
        n.style.display="block";
      }
    }
    let n=document.querySelector('.el-'+(i))
    console.log(n)
    console.log(searchValue)
    console.log(s[i])
    if(searchValue == s[i-1]){
      n.style.display="block";
      // confirm.log("found")
    }
    else{
      n.style.display="none";

    }

  }

}