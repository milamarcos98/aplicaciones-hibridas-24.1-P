import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useState } from 'react'

function App() {
  const  [events, setEvents] = useState([
    { id: '1', title: 'Event 1', start: '2024-06-18' },
    { id: '2', title: 'Event 2', start: '2024-06-23' }
])
  // const  [selectEvent, setSelectEvent] = useState(null)

  // const handleDateClick = (arg) => {
  //   console.log(arg)
  //   setSelectEvent(arg.event)
  //   // if(confirm('delete?')){
  //   //   setEvents(events.filter(ev => ev.id !== ev.id))
  //   // }
  //   const title = prompt('title')
  //   const desc = prompt('desc')

  //   if(title){
  //     const newEvent = {
  //       id: events.length + 1,
  //       title: title,
  //       desc: desc,
  //       start: arg.date,
  //       allDay: arg.allDay
  //     }
  //     console.log(newEvent)
  //     setEvents([...events, newEvent])
  //   }
  // }

  // const eventMouseEnter = (info) => {
  //   console.log(info)
  //   const tooltip = document.createElement('div')
  //   tooltip.className = 'custom-tooltip'
  //   tooltip.innerHTML = `<strong>${info.event.title}</strong> <br> ${info.event.extendedProps.description}`

  //   info.el.appendChild(tooltip)
  // }

  // const eventMouseLeave = (info) => {
  //   const tooltips = info.el.getElementsByClassName('custom-tooltip')
  //   if(tooltips.length > 0){
  //     tooltips[0].parentNode.removeChild(tooltips[0])
  //   }
  // }

  // const events = [
  //   {
  //     title: 'Evento',
  //     start: '2024-06-18T08:30:00',
  //     description: 'Evento 1',
  //     customClassName: 'custom-event',
  //     backgroundColor: 'lightpink',
  //     borderColor: 'black',
  //     textColor: 'black'
  //   },
  //   {
  //     title: 'Evento',
  //     start: '2024-06-21T12:00:00',
  //     description: 'Evento 2',
  //     customClassName: 'custom-event',
  //     backgroundColor: 'lightblue',
  //     borderColor: 'black',
  //     textColor: 'black'
  //   }
  // ];

  const handleEventDrop = (info) => {
    const updatedEvent = {
      ...info.event.toPlanObject(),
      start: info.event.startSt,
      end: info.event.endSt
    }
    setEvents(events.map(event => event.id == updatedEvent.id ? updatedEvent :event))
  }


  return (
    <>
    {/* {
      selectEvent && (
        <div>
          <h2>{selectEvent.title}</h2>
          <p>{selectEvent.extendedProps.description}</p>
        </div>
      )
    } */}
     <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
     events={events}
    //  dateClick={handleDateClick}
    editable={true}
    eventDrop={handleEventDrop}
     headerToolbar={{
      left: 'today prev,next',
      center: 'title',
      right: 'dayGridMonth, timeGridWeek, timeGridDay',
     }}
    //  slotDuration="00:15:00"
    //  eventColor="pink"
    //  eventTextColor="black"
    //  eventClassNames={({event}) => event.extendedProps.customClassName}
    //  eventContent={renderEventContent}
    //  events={[
    //   {id: 1, title: 'event 1', date: '2024-06-18', extendedProps: {description : "zfvzsdgvsvb"}},
    //   {id: 2, title: 'event 2', date: '2024-06-20', extendedProps: {description : "zfvzsdgvsvb"}}
    //  ]} 
    //  eventMouseEnter={eventMouseEnter}
    //  eventMouseLeave={eventMouseLeave}
     />
    </>
  )
}

export default App


// const renderEventContent = (eventInfo) => {
//   // console.log(eventInfo)
//   return(
//     <div style={{backgroundColor: eventInfo.event.backgroundColor, color: eventInfo.event.textColor}}>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//       <p>{eventInfo.event.extendedProps.description}</p>
//     </div>
//   )
// }
