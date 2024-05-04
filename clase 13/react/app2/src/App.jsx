import './App.css'
import Button from './components/Button';
import Card from './components/Card';
import List from './components/List';

function App() {
  let nombre = "Camila";
  const items = ["Demon Slayer", "One Piece", "Jujutsu Kaisen", "Fruits Basket", "Death Note"];

  return(
    <div className='app'>
      <h1>Hola {nombre}</h1>
      <List items={items}/>
      <Card title="titulo de la card">
        <h3>Subtitulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam quisquam cumque iusto aliquam, perferendis tempore earum ipsum voluptatum dignissimos officiis quidem. Assumenda voluptates consequuntur in. Voluptatibus deleniti accusamus expedita.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam quisquam cumque iusto aliquam, perferendis tempore earum ipsum voluptatum dignissimos officiis quidem. Assumenda voluptates consequuntur in. Voluptatibus deleniti accusamus expedita.</p>
      </Card>
      <Card title="titulo de la card">
        <h3>Subtitulo 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam quisquam cumque iusto aliquam, perferendis tempore earum ipsum voluptatum dignissimos officiis quidem. Assumenda voluptates consequuntur in. Voluptatibus deleniti accusamus expedita.</p>
        <h3>Subtitulo 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magnam quisquam cumque iusto aliquam, perferendis tempore earum ipsum voluptatum dignissimos officiis quidem. Assumenda voluptates consequuntur in. Voluptatibus deleniti accusamus expedita.</p>
      </Card>
      <Button 
          text="Boton 1" 
          color="blue" 
          style={{backgroundColor: 'blue', color: 'white'}}
          onClick={() => console.log("hola")}
      />
      <Button 
          text="Boton 2" 
          color="pink" 
          style={{backgroundColor: 'pink', color: 'purple'}}
          onClick={() => console.log("hola 2")}
      />
    </div>
  )

}

export default App
