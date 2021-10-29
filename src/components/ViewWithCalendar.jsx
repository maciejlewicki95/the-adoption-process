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

import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pl'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './modal.css'
import { ShowEvent } from './ShowEvent';

const localizer = momentLocalizer(moment)
let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })
const events = [{
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

]




export const ViewWithCalendar = () => {

  return(
    <>
      <ShowEvent />
      <Calendar
        timeslots={2}
        views={allViews}
        events={events}
        showMultiDayTimes
        onSelectEvent = {event => alert(event.location)}
        defaultDate={new Date()}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper,
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
            agenda: "Terminarz",
            noEventsInRange: "Nie ma żadnego wydarzenia w wybranym zakresie."
          }}
      />
    </>
  )}
