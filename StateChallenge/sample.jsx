let BaseCount = (BasicComponent)=> class extends React.Component{
  render(){
    return(
      <div className='container'>
        <BasicComponent/>
      </div>
      )
  }
}

const Button = () => {
  return(
    <button className="btn blue-btn">I am a button </button>
    )
}

let ExtendedButton = BaseCount(Button)

ReactDOM.render(
  < ExtendedButton/>,
  document.getElementById('app')

  );