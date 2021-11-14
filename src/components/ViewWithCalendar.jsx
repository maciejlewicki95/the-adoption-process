// import React, { useEffect, useState } from "react";
// import { Calendar, momentLocalizer, Views } from 'react-big-calendar' 
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment'
// const localizer = momentLocalizer(moment)
// let allViews = Object.keys(Views).map(k => Views[k])
// var myEventsList = [{
//     'title': 'Conference',
//     'start': new Date(2017, 3, 11),
//     'end': new Date(2017, 3, 13),
//     desc: 'Big conference for important people'
// },
//     {
//         'title': 'Meeting',
//         'start': new Date(2017, 3, 12, 10, 30, 0, 0),
//         'end': new Date(2017, 3, 12, 12, 30, 0, 0),
//         desc: 'Pre-meeting meeting, to prepare for the meeting'
//     },
//     {
//         'title': 'Lunch',
//         'start':new Date(2017, 3, 12, 12, 0, 0, 0),
//         'end': new Date(2017, 3, 12, 13, 0, 0, 0),
//         desc: 'Power lunch'
//     }]

// function Event({ event }) {
//     return (
//         <span>
//       <strong>
//       {event.title}
//       </strong>
//             { event.desc && (':  ' + event.desc)}
//     </span>
//     )
// }

// function EventAgenda({ event }) {
//     return <span>
//     <em style={{ color: 'magenta'}}>{event.title}</em>
//     <p>{ event.desc }</p>
//   </span>
// }

// function onSlotChange(slotInfo) {
//     var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
//     var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
//     console.log('startTime', startDate); //shows the start time chosen
//     console.log('endTime', endDate); //shows the end time chosen
// }

// function onEventClick(event) {
//     console.log(event) //Shows the event details provided while booking
// }

// export const ViewWithCalendar = () => {

//     return (
//         <>
//             <Calendar
//                 selectable
//                 onSelectEvent={event => onEventClick(event)}
//                 onSelectSlot={(slotInfo) => onSlotChange(slotInfo) }
//                 events={myEventsList}
//                 views={allViews}
//                 step={30}
//                 timeslots={2}
//                 defaultView='week'
//                 defaultDate={new Date()}
//                 components={{
//                              event: Event,
//                              agenda: {
//                                      event: EventAgenda
//                              }}}
//               />

//         </>
//     )
// }

// import { Calendar, momentLocalizer } from 'react-big-calendar'
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment'

// const localizer = momentLocalizer(moment)

// import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
// import format from 'date-fns/format'
// import parse from 'date-fns/parse'
// import startOfWeek from 'date-fns/startOfWeek'
// import getDay from 'date-fns/getDay'
// import { pl } from 'date-fns/locale'

// const locales = {
//   'PL': pl,
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })

// export const ViewWithCalendar = () => {
//     return (
//         <div>
//         <Calendar
//         localizer={localizer}
//         //   events={myEventsList}
//         startAccessor="start"
//         endAccessor="end"
//         defaultView='week'
//         style={{ height: 500 }}
//         />
//     </div>
//     )
// }

import React, {useState, useEffect} from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pl'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './modal.css'
import ProgressBar from './ProgressBar'
// import { ShowEvent } from './ShowEvent';

const localizer = momentLocalizer(moment)
let allViews = Object.keys(Views).map(k => Views[k])

for (let i=0; i < allViews.length; i++) {
  if (allViews[i] == "agenda" || allViews[i] == "work_week") {
    allViews.splice(i, 1);
  }
}

const ShowEvent = props => {

  const [dateStartChange, setDateStartChange] = useState(null)
  const [dateEndChange, setDateEndChange] = useState(null)
  const [locationChange, setLocationChange] = useState(null)

  useEffect(() => {
      
      if (dateStartChange == null && dateEndChange == null && locationChange == null) {
        if (props.eventTemp != null) {
          console.log("jestem tutaj");
        setDateStartChange(moment(props.eventTemp.start).format("YYYY-MM-DDTHH:mm"))
        setDateEndChange(moment(props.eventTemp.end).format("YYYY-MM-DDTHH:mm"))
        setLocationChange(props.eventTemp.location)
    }}
      

  })

  function test() {
    const single_event = {}
    single_event["id"] = props.eventTemp.id
    single_event["title"] = props.eventTemp.title
    single_event["start"] = dateStartChange
    single_event["end"] = dateEndChange
    single_event["location"] = locationChange
    console.log(dateStartChange)
    return single_event;
  }

  if (!props.show) return null

  if (props.show && !props.editMode) {
      return (
          <>
              <div className="container">
                  <div className="event_modal" onClick={props.onClose}>
                      <div className="event_modal_content" onClick={e => e.stopPropagation()}>
                          <div className="event_modal_header">
                              <h4 className="event_modal_title">{props.eventTemp.title}</h4>
                          </div>
                          <div className="event_modal_body">
                              Data rozpoczęcia spotkania:
                              <div className="event_modal_single_entry">{moment(dateStartChange).format("YYYY-MM-DD HH:mm")}
                              </div>
                              Data zakończenia spotkania:
                              <div className="event_modal_single_entry">{moment(dateEndChange).format("YYYY-MM-DD HH:mm")}
                              </div>
                              Miejsce spotkania:
                              <div className="event_modal_single_entry">{locationChange}
                              </div>
                          </div>
                          <div className="event_modal_footer">
                              <button onClick={props.onEnable} className="button">Edytuj</button>
                              <button onClick={props.onClose} className="button">Zamknij</button>
                          </div>
                      </div>
                  </div>
              </div>
          </>
      )
  }

  if (props.show && props.editMode) {
      return (
          <>
              <div className="container">
                  <div className="event_modal">
                      <div className="event_modal_content">
                          <div className="event_modal_header">
                              <h4 className="event_modal_title">{props.eventTemp.title}</h4>
                          </div>
                          <div className="event_modal_body">
                              Wybierz nową godzinę rozpoczęcia spotkania:
                              <div className="event_modal_single_entry"><input type='datetime-local' defaultValue={dateStartChange} onChange={event => (setDateStartChange(event.target.value))}>
                              </input>
                              </div>
                              Wybierz nową godzinę zakończenia spotkania:
                              <div className="event_modal_single_entry"><input type='datetime-local' defaultValue={dateEndChange} onChange={(event) => {setDateEndChange(event.target.value); console.log(dateEndChange)}}>
                              </input>
                              </div>
                              Wybierz nowe miejsce spotkania:
                              <div className="event_modal_single_entry"><input type='text' defaultValue={locationChange} onChange={event => setLocationChange(event.target.value)}>
                              </input>
                              </div>
                          </div>
                          <div className="event_modal_footer">
                              <button onClick={() => props.onConfirm(test())} className="button">Zatwierdź zmiany</button>
                              <button onClick={props.onDisable} className="button">Odrzuć zmiany</button>
                          </div>
                      </div>
                  </div>
              </div>
          </>
      )
  }
}

export const ViewWithCalendar = () => {

  const [events, setEvents] = useState([{
    id: 0,
    title: 'All Day Event very long title',
    start: new Date(2021, 9, 28, 17, 0, 0),
    end: new Date(2021, 9, 28, 17, 40, 0),
    location: 'Warszawa'
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2021, 9, 28, 17, 30, 0),
    end: new Date(2021, 9, 28, 18, 0, 0),
    location: 'Poznań'
  },

])

  const [show, setShow] = useState(false)
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
      <ProgressBar step={2}></ProgressBar>
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
            noEventsInRange: "Nie ma żadnego wydarzenia w wybranym zakresie."
          }}
      />
      </div>
    </>
  )}