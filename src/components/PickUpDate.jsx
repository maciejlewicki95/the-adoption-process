import React, {useState, useEffect} from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pl'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './modal.css'

const localizer = momentLocalizer(moment)
let allViews = Object.keys(Views).map(k => Views[k])

for (let i=0; i < allViews.length; i++) {
  if (allViews[i] == "agenda" || allViews[i] == "work_week") {
    allViews.splice(i, 1);
  }
}

// const ShowEvent = props => {

//   const [dateStartChange, setDateStartChange] = useState(null)
//   const [dateEndChange, setDateEndChange] = useState(null)
//   const [locationChange, setLocationChange] = useState(null)

//   useEffect(() => {
      
//       if (dateStartChange == null && dateEndChange == null && locationChange == null) {
//         if (props.eventTemp != null) {
//           console.log("jestem tutaj");
//         setDateStartChange(moment(props.eventTemp.start).format("YYYY-MM-DDTHH:mm"))
//         setDateEndChange(moment(props.eventTemp.end).format("YYYY-MM-DDTHH:mm"))
//         setLocationChange(props.eventTemp.location)
//     }}
      

//   })

//   function test() {
//     const single_event = {}
//     single_event["id"] = props.eventTemp.id
//     single_event["title"] = props.eventTemp.title
//     single_event["start"] = dateStartChange
//     single_event["end"] = dateEndChange
//     single_event["location"] = locationChange
//     console.log(dateStartChange)
//     return single_event;
//   }

//   if (!props.show) return null

//   if (props.show && !props.editMode) {
//       return (
//           <>
//               <div className="container">
//                   <div className="event_modal" onClick={props.onClose}>
//                       <div className="event_modal_content" onClick={e => e.stopPropagation()}>
//                           <div className="event_modal_header">
//                               <h4 className="event_modal_title">{props.eventTemp.title}</h4>
//                           </div>
//                           <div className="event_modal_body">
//                               Data rozpoczęcia spotkania:
//                               <div className="event_modal_single_entry">{moment(dateStartChange).format("YYYY-MM-DD HH:mm")}
//                               </div>
//                               Data zakończenia spotkania:
//                               <div className="event_modal_single_entry">{moment(dateEndChange).format("YYYY-MM-DD HH:mm")}
//                               </div>
//                               Miejsce spotkania:
//                               <div className="event_modal_single_entry">{locationChange}
//                               </div>
//                           </div>
//                           <div className="event_modal_footer">
//                               <button onClick={props.onEnable} className="button">Edytuj</button>
//                               <button onClick={props.onClose} className="button">Zamknij</button>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </>
//       )
//   }

//   if (props.show && props.editMode) {
//       return (
//           <>
//               <div className="container">
//                   <div className="event_modal">
//                       <div className="event_modal_content">
//                           <div className="event_modal_header">
//                               <h4 className="event_modal_title">{props.eventTemp.title}</h4>
//                           </div>
//                           <div className="event_modal_body">
//                               Wybierz nową godzinę rozpoczęcia spotkania:
//                               <div className="event_modal_single_entry"><input type='datetime-local' defaultValue={dateStartChange} onChange={event => (setDateStartChange(event.target.value))}>
//                               </input>
//                               </div>
//                               Wybierz nową godzinę zakończenia spotkania:
//                               <div className="event_modal_single_entry"><input type='datetime-local' defaultValue={dateEndChange} onChange={(event) => {setDateEndChange(event.target.value); console.log(dateEndChange)}}>
//                               </input>
//                               </div>
//                               Wybierz nowe miejsce spotkania:
//                               <div className="event_modal_single_entry"><input type='text' defaultValue={locationChange} onChange={event => setLocationChange(event.target.value)}>
//                               </input>
//                               </div>
//                           </div>
//                           <div className="event_modal_footer">
//                               <button onClick={() => props.onConfirm(test())} className="button">Zatwierdź zmiany</button>
//                               <button onClick={props.onDisable} className="button">Odrzuć zmiany</button>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </>
//       )
//   }
// }

export const PickUpDate = () => {

  const [timeSlots, setTimeSlots] = useState([{
    id: 0,
    title: 'Wolny termin',
    start: new Date(2021, 10, 15, 12, 0, 0),
    end: new Date(2021, 10, 15, 13, 0, 0),
    location: 'Warszawa'
  },
  {
    id: 1,
    title: 'Wolny termin',
    start: new Date(2021, 10, 15, 13, 0, 0),
    end: new Date(2021, 10, 15, 14, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 2,
    title: 'Wolny termin',
    start: new Date(2021, 10, 15, 14, 0, 0),
    end: new Date(2021, 10, 15, 15, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 3,
    title: 'Wolny termin',
    start: new Date(2021, 10, 16, 11, 0, 0),
    end: new Date(2021, 10, 16, 12, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 4,
    title: 'Wolny termin',
    start: new Date(2021, 10, 16, 13, 0, 0),
    end: new Date(2021, 10, 16, 14, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 5,
    title: 'Wolny termin',
    start: new Date(2021, 10, 17, 10, 0, 0),
    end: new Date(2021, 10, 17, 11, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 6,
    title: 'Wolny termin',
    start: new Date(2021, 10, 17, 15, 0, 0),
    end: new Date(2021, 10, 17, 16, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 7,
    title: 'Wolny termin',
    start: new Date(2021, 10, 18, 11, 0, 0),
    end: new Date(2021, 10, 18, 12, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 8,
    title: 'Wolny termin',
    start: new Date(2021, 10, 18, 13, 0, 0),
    end: new Date(2021, 10, 18, 14, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 9,
    title: 'Wolny termin',
    start: new Date(2021, 10, 19, 10, 0, 0),
    end: new Date(2021, 10, 19, 11, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 10,
    title: 'Wolny termin',
    start: new Date(2021, 10, 19, 11, 0, 0),
    end: new Date(2021, 10, 19, 12, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 11,
    title: 'Wolny termin',
    start: new Date(2021, 10, 19, 13, 0, 0),
    end: new Date(2021, 10, 19, 14, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 12,
    title: 'Wolny termin',
    start: new Date(2021, 10, 20, 13, 0, 0),
    end: new Date(2021, 10, 20, 14, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 13,
    title: 'Wolny termin',
    start: new Date(2021, 10, 20, 15, 0, 0),
    end: new Date(2021, 10, 20, 16, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 14,
    title: 'Wolny termin',
    start: new Date(2021, 10, 21, 9, 0, 0),
    end: new Date(2021, 10, 21, 10, 0, 0),
    location: 'Warszawa'
  },

  {
    id: 15,
    title: 'Wolny termin',
    start: new Date(2021, 10, 21, 11, 0, 0),
    end: new Date(2021, 10, 21, 12, 0, 0),
    location: 'Warszawa'
  },
])

  const [showCalendar, setShowCalendar] = useState(false)
  const [eventTemp, setEventTemp] = useState(null)
  const [editMode, setEditMode] = useState(false)
  // const [id, setId] = useState(null)
  // const [newMeetingDateStart, setNewMeetingDateStart] = useState(null)
  // const [newMeetingDateEnd, setNewMeetingDateEnd] = useState(null)
  // const [newMeetingLocation, setNewMeetingLocation] = useState(null)

  function updateMeetingData(single_event) {
    console.log("jestem tutaj")
    console.log(single_event)
    var temp_events = [];
    for (let i=0; i < events.length; i++) {
      if (events[i].id === single_event.id) {
        const event = {}
        event["id"] = single_event.id
        event["title"] = single_event.title
        event["start"] = new Date(single_event.start)
        event["end"] = new Date(single_event.end)
        event["location"] = single_event.location
        console.log(event)
        temp_events.push(event)
      }
      else {
        temp_events.push(events[i])
      }
      
    }
    console.log(temp_events);
    test3(temp_events)
  }

  function test3(temp_events) {
    console.log(events);
    setEvents(temp_events);
    setEditMode(false);
  }
  
  return(
    <>
      <br/>
      <div className="container">
      <ShowEvent onConfirm={(event) => updateMeetingData(event)} onEnable={() => setEditMode(true)} onDisable={() => setEditMode(false)} onClose={() => setShow(false)} show={show} eventTemp={eventTemp} editMode={editMode} />
      <Calendar
        timeslots={2}
        views={allViews}
        events={events}
        showMultiDayTimes
        onSelectEvent = {event => (setShow(true), setEventTemp(event))}
        defaultDate={new Date()}
        components={{

        }}
        localizer={localizer}
        style={{height: 500}}
        messages={{
            next: "Następny",
            previous: "Poprzedni",
            today: "Aktualny",
            month: "Miesiąc",
            week: "Tydzień",
            day: "Dzień",
            work_week: "Tydzień pracy",
            noEventsInRange: "Nie ma żadnego wydarzenia w wybranym zakresie."
          }}
      />
      </div>
    </>
  )}