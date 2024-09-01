import './App.css'
import { Calendar } from './Components/Organisms/Calendar'
function App() {

  const initialValueEvents = [
    {id: 1, date: '2024-09-03', title: 'Reunión con el equipo', text: 'hola mundo' },
    {id: 2, date: '2024-09-15', title: 'Lanzamiento de producto', text: 'hola mundo' },
    {id: 3, date: '2024-09-20', title: 'Cumpleaños de María', text: 'hola mundo' },
    {id: 4, date: '2024-09-20', title: 'Cumpleaños de María', text: 'hola mundo' },
    {id: 5, date: '2024-09-20', title: 'Cumpleaños de María', text: 'hola mundo' },
    {id: 6, date: '2024-09-20', title: 'Cumpleaños de María', text: 'hola mundo' },
    {id: 7, date: '2024-09-20', title: 'Cumpleaños de María', text: 'hola mundo' },
    {id: 8, date: '2024-09-20', title: 'Cumpleaños de María', text: 'hola mundo' },
    {id: 9, date: '2024-09-03', title: 'Reunión con el equipo', text: 'hola mundo' },
    {id: 10, date: '2024-09-03', title: 'Reunión con el equipo', text: 'hola mundo' },
    {id: 11, date: '2024-09-03', title: 'Reunión con el equipo', text: 'hola mundo' },
    
  ];
  const events = [
    { id: 1, startDate: '2024-09-03', endDate: '2024-09-03', title: 'Reunión con el equipo' },
    { id: 2, startDate: '2024-09-15', endDate: '2024-09-15', title: 'Lanzamiento de producto' }, // Evento de 3 días
    { id: 3, startDate: '2024-09-20', endDate: '2024-09-20', title: 'Cumpleaños de María' },
    { id: 4, startDate: '2024-09-20', endDate: '2024-09-20', title: 'Otra reunión' },
    { id: 5, startDate: '2024-09-22', endDate: '2024-09-22', title: 'Charla con cliente' }, // Evento de 2 días
    { id: 6, startDate: '2024-09-25', endDate: '2024-09-25', title: 'Cena de trabajo' },
    { id: 7, startDate: '2024-09-25', endDate: '2024-09-25', title: 'Cumpleaños de Juan' },
    { id: 8, startDate: '2024-09-03', endDate: '2024-09-03', title: 'Reunión con el equipo' },
    { id: 9, startDate: '2024-09-03', endDate: '2024-09-03', title: 'Reunión con el equipo' },
    { id: 10, startDate: '2024-09-03', endDate: '2024-09-03', title: 'Reunión con el equipo' },
    { id: 11, startDate: '2024-09-03', endDate: '2024-09-03', title: 'Reunión con el equipo' },
    { id: 12, startDate: '2024-09-03', endDate: '2024-09-03', title: 'Reunión con el equipo' },
  ];

  return (
    <>
      <Calendar eventsList={events} multiEventProp={false} />
    </>
  )
}

export default App
