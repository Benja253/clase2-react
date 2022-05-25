import './App.css'
import Card from './components/Card'
import PersonalInformation from './components/PersonalInformation'

function App() {

  const person = {
    name: "Benjamin",
    age: 30,
    favoriteMovie: "Forest Gump",
    favoriteMusic: "Rock" 
  }

  const titles = ['hobbies', 'Mi comida favorita']

  const hobbies = [
    'Música', 
    'Ir a la playa',
    'VideoJuegos',
    'Películas'
  ]

  const favoriteFood = [
    'Porotos con riendas',
    'Cazuela',
    'Fideos con salsa',
    'Completo o As'
  ]

  return (
    <div className="App">
      <PersonalInformation 
        person={person} 
        title='Personal Information' 
      />
      <Card 
        array={hobbies} 
        title={titles[0]}
        color='red'
      />
      <Card 
        array={favoriteFood} 
        title={titles[1]}
        color='blue'
      />
    </div>
  )
}

export default App
