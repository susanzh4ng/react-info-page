function TestMainContent(){

  //following code is a JS practive to learn about props in JSX
  /*const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  if (hours<12) {
      timeOfDay = "morning"
  } else if (hours>=12 && hours<17){
      timeOfDay = "afternoon"
  } else {
      timeOfDay = "night"
  }*/
  //end of JS practice

  return(
    <main className="mainContent"> 
      <h1 className="mainTitle">Fun Facts about React</h1>
      <ul className="mainFacts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
        {/*<li>Good {timeOfDay}!</li>*/}
      </ul>
    </main>
  )
}

export default TestMainContent