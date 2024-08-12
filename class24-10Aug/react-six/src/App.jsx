import {useState} from "react"
const App = () => {
  const [formData, setFormData] = useState({
    name:'', email:'',password:''
  })
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, [id]: value,
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({name:'',email:'',password:''})
  }
  // id -> name ---> {name:value} id-->email -->{email:value}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={formData.name}
            onChange={handleChange} required />
        </div>
         <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={formData.email}
            onChange={handleChange} required />
        </div>
         <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" value={formData.password}
            onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>    
</form>
    </div>
  );
}

export default App;