let count=3;
function deleteRow(){
    const table=document.getElementById("table");
    const length=document.getElementById("table").rows.length;
    table.deleteRow(length-1);
    count-=1;
}
function addRow(){
    const table=document.getElementById("table");
    const length=document.getElementById("table").rows.length;
    const row=table.insertRow(length);
    const cell=row.insertCell(0);
    cell.innerHTML="Cell "+count;
    count+=1;
}
function changeCSS(){
    let css=document.getElementById("table");
    if(css.style.backgroundColor === "grey"){
        css.style.backgroundColor="white";
    }
    else{
        css.style.backgroundColor="grey";
    }
    if(css.style.color === "white"){
        css.style.color="black";
    }
    else{
        css.style.color="white";
    }
    
}