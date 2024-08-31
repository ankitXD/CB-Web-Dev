/*
useRef -> ref -> DOM ELEMETS
    .current -> store 
    * -> val of useref persisits across all renders but hanging it does not trigger a re
    render 
*/
function My(){
  const myref=useRef(initialVal);
  console.log(myref.current); // val of useref 
}
// common usage 
//1 directly manipulating / accessing DOM 
function Input(){
  const inputref=useref(null);
  const handleclick=()=>{
      inputref.current.focus()
  }
  <div>
      <input ref={inputref}>INPUT</input>
      <button onclick={handleclick}> Focus </button>
  </div>
}
// persisting vals without re render 
function Timer(){
  const count= useref(0);
  const incrementcounter=()=>{
      count.current++;
      console.log(count.current);
  }
  return(
      <button onclick={incrementcounter}>
          COUNT
      </button>
  )
}
//3 storing prev state vals
function previousval({value}){
  const prevvalref=useref();
  useEffect(() => {     
     previousval.current=value;
  }, [value]);
}
return (
  <div>
      Current Value : {value}, prev value : {previousval.current}
  </div>
)
//4 css around 
function effect(){
  const elemref=useref();
  useEffect(()=>{
      const elem=elemref.current;
      elem.style.opacity=0.1
      elem.style.transition='opacity 0.2s'
      setTimeout(() => {
          elem.style.opacity=1;
      }, 1000);

  })
}return(
  <div ref={elemref}>

  </div>
)