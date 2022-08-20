
   function saveTolocal(event){
    event.preventDefault();
    //console.log(1);
    let names=event.target.name.value;

   // console.log(nam);
    let emails=event.target.email.value;
    //console.log(ema);
    let ages=event.target.age.value;
    //console.log(ag);
    localStorage.setItem('name',names)
    localStorage.setItem('email',emails)
    localStorage.setItem('age',ages)
     console.log(localStorage);
     let myObj={
    names,
    emails,
    ages
};
      let myObj_serialized=JSON.stringify(myObj);
      localStorage.setItem('myObj',myObj_serialized);
      console.log(localStorage);
      let myObj_deserialized=JSON.parse(localStorage.getItem('myObj'));
      console.log(myObj_deserialized);
}

//let myObj={
    //name:'roshan',
    //age:55,
    //email:'r@gmail.com'
//};
//localStorage.setItem('myObj',myObj);
//console.log(localStorage);
//let myObj_serialized=JSON.stringify(myObj);
//localStorage.setItem('myObj',myObj_serialized);
//console.log(localStorage);
