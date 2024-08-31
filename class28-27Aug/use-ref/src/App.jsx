function App() {
  const [ref, isFocused] = useFocus()
  return <div>
    <input ref={ref}/>
    {isFocused && <p>focused</p>}
  </div>
}

export default App

