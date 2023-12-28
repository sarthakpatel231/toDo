    let todoList=[
  {
    item:"Buy milk",
  date:"12/08/233"
}
  ,{
    item:"go to college",
  date:"23/21/233"
}
];
 displayItems();
 function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  
  let todoItem=inputElement.value;
  let todoDate=dateElement.value;
   todoList.push({item:todoItem,date:todoDate});
    
   console.log(todoList)
    inputElement.value='';
    inputElement.date='';
    displayItems();
 }
 function displayItems(){
  let  containerElement=document.querySelector('.todo-container')
  let newHTML='';
   
  for(let i=0; i<todoList.length;i++){
    // let item=todoList[i].item;
    // let Date=todoList[i].date;
    let {item,date}=todoList[i];
    newHTML+=` 
    <span>
    ${item}
    </span>
    <span>
    ${date}
    </span>

    <button class='btn-delete' onclick="todoList.splice(${i},1),displayItems();">
    delete</button>
    
    `
    
  }
  containerElement.innerHTML=newHTML;
  
 }