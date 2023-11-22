import './App.css'

function App() {
  let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
  let itemList=[];
  items.forEach((item,index)=>{
  itemList.push( <div key={index}>{item}</div>)
})

  return (
    <>
    <h2>Type</h2>
      <div className="grid-container">
        {itemList}
      </div>

    </>
  )
}

export default App
