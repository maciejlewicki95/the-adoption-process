import React, { useState, useEffect } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pl'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './modal.css'
import ProgressBar from './ProgressBar'

const localizer = momentLocalizer(moment)
let allViews = Object.keys(Views).map(k => Views[k])

for (let i = 0; i < allViews.length; i++) {
  if (allViews[i] == "agenda" || allViews[i] == "work_week") {
    allViews.splice(i, 1);
  }
}

const ShowModalConfirmation = props => {

  const [dateStart, setDateStart] = useState(null)
  const [dateEnd, setDateEnd] = useState(null)
  const [location, setLocation] = useState(null)

  useEffect(() => {

    if (dateStart == null && dateEnd == null && location == null) {
      if (props.eventTemp != null) {
        console.log("jestem tutaj");
        setDateStart(moment(props.eventTemp.start).format("YYYY-MM-DDTHH:mm"))
        setDateEnd(moment(props.eventTemp.end).format("YYYY-MM-DDTHH:mm"))
        setLocation(props.eventTemp.location)
      }
    }


  })

  if (!props.showModalConfirmation) return null

  if (props.showModalConfirmation) {
    return (
      <>
        <div className="container">
          <div className="event_modal" onClick={props.onClose}>
            <div className="event_modal_content" onClick={e => e.stopPropagation()}>
              <div className="event_modal_header">
                <h4 className="event_modal_title">Czy potwierdzasz poniższy termin wizyty?</h4>
              </div>
              <div className="event_modal_body">
                Data rozpoczęcia spotkania:
                <div className="event_modal_single_entry">{moment(dateStart).format("YYYY-MM-DD HH:mm")}
                </div>
                Data zakończenia spotkania:
                <div className="event_modal_single_entry">{moment(dateEnd).format("YYYY-MM-DD HH:mm")}
                </div>
                Miejsce spotkania:
                <div className="event_modal_single_entry">{location}
                </div>
              </div>
              <div className="event_modal_footer">
                <button onClick={() => props.onConfirm(props.eventTemp)} className="button">Tak</button>
                <button onClick={props.onClose} className="button">Nie</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export const PickUpDate = () => {

  useEffect(() => {
    const button = document.getElementById("choose_slot_for_visitation")
    const textToHide = document.getElementById("1")
    button.addEventListener("click", () => {
      setShowCalendar(true);
      textToHide.style.display = "none"
    })
  })

  const [reservedSlot, setReservedSlot] = useState(null)

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
  const [showModalConfirmation, setShowModalConfirmation] = useState(false)
  const [eventTemp, setEventTemp] = useState(null)
  const [meetingScheduled, setMeetingScheduled] = useState(false)
  const [canceledMeeting, setCanceledMeeting] = useState(false)
  const [rescheduledMeeting, setRescheduledMeeting] = useState(false)

  function slotsManager(slotPicked) {
    var slotsListAfterPickASlot = []

    for (let i = 0; i < timeSlots.length; i++) {
      if (timeSlots[i].id === slotPicked.id) {
        console.log(slotPicked)
        setReservedSlot(slotPicked)
        console.log(reservedSlot)
      }
      else {
        slotsListAfterPickASlot.push(timeSlots[i])
      }
    }
    setCanceledMeeting(false)
    setTimeSlots(slotsListAfterPickASlot)
    setShowModalConfirmation(false);
    setShowCalendar(false);
    setMeetingScheduled(true)
    setEventTemp(null)
    console.log(eventTemp)
  }

  function cancelMeeting() {
    var emptySlots = timeSlots
    emptySlots.push(reservedSlot)
    setTimeSlots(emptySlots)
    setReservedSlot(null)
    setMeetingScheduled(false)
    setCanceledMeeting(true)
    setEventTemp(null)
  }

  function rescheduleMeeting(slot) {
    var oldDateMeeting = reservedSlot
    console.log(reservedSlot)
    setReservedSlot(slot)
    timeSlots.push(oldDateMeeting)
    setRescheduledMeeting(false)
    setShowModalConfirmation(false)
    setShowCalendar(false)
    setMeetingScheduled(true)
    setEventTemp(null)
    console.log(moment(reservedSlot.start).format("HH:mm"))
  }
  
  console.log(reservedSlot)

  return (
    <>
      <br />
      <div className="container">
      <ProgressBar step={2}></ProgressBar>
        <p id="1">Twój wniosek o adopcję został zatwierdzony. <span id="choose_slot_for_visitation">Umów wizytę w schronisku już teraz!</span></p>
        {meetingScheduled && !canceledMeeting && !rescheduledMeeting && (<>
          Twoja wizyta jest zaplanowana na {moment(reservedSlot.start).format("DD-MM-YYYY")} r. w godz. {moment(reservedSlot.start).format("HH:mm")} - {moment(reservedSlot.end).format("HH:mm")}. Miejsce wizyty: {reservedSlot.location} <br/>
          Jeśli chcesz odwołać swoją wizytę <span onClick={event => cancelMeeting()} id="change_meeting">kliknij tutaj</span>
          <br/>
          Jeśli chcesz zmienić termin swojej wizyty <span onClick={event => {setMeetingScheduled(false); setRescheduledMeeting(true); setShowCalendar(true)}} id="change_meeting">kliknij tutaj</span>
        </>)}
        {canceledMeeting && !showCalendar && (<>
        Odwołałeś swoją wizytę. Jeśli chcesz wybrać nową datę <span id="change_meeting" onClick={event => setShowCalendar(true)}>kliknij tutaj</span></>)}
        {showCalendar && (<>
          {(canceledMeeting || !canceledMeeting || !rescheduledMeeting) && (<ShowModalConfirmation onConfirm={(event) => slotsManager(event)} onClose={() => setShowModalConfirmation(false)} eventTemp={eventTemp} showModalConfirmation={showModalConfirmation} />)}
          {rescheduledMeeting && (<ShowModalConfirmation onConfirm={(event) => rescheduleMeeting(event)} onClose={() => setShowModalConfirmation(false)} eventTemp={eventTemp} showModalConfirmation={showModalConfirmation} />)}
          <div>W kalendarzu są widoczne wolne terminy wizyt tylko na najbliższy tydzień. W celu umówienia wizyty na późniejszy termin prosimy o kontakt telefoniczy pod numerem 600-600-600 lub mailowy pod adresem adoptme@info.pl</div>
          <br />
          <Calendar
            timeslots={2}
            views={allViews}
            events={timeSlots}
            showMultiDayTimes
            onSelectEvent={event => {setEventTemp(event); setShowModalConfirmation(true);}}
            defaultDate={new Date()}
            components={{

            }}
            localizer={localizer}
            style={{ height: 700 }}
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
        </>)}

      </div>
    </>
  )
}