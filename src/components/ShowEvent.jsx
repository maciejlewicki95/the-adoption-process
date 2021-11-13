import React, { useEffect, useState } from "react";
import './modal.css'
import moment from 'moment'
import 'moment/locale/pl'

export const ShowEvent = props => {

    const [dateStartChange, setDateStartChange] = useState(null)
    const [dateEndChange, setDateEndChange] = useState(null)
    const [locationChange, setLocationChange] = useState(null)

    useEffect(() => {
        if (props.eventTemp != null) {
            setDateStartChange(moment(props.eventTemp.start).format("YYYY-MM-DDTHH:mm"))
            setDateEndChange(moment(props.eventTemp.end).format("YYYY-MM-DDTHH:mm"))
            setLocationChange(props.eventTemp.location)
        }
    })

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
                                <div className="event_modal_single_entry">{moment(props.eventTemp.start).format("YYYY-MM-DD HH:mm")}
                                </div>
                                Data zakończenia spotkania:
                                <div className="event_modal_single_entry">{moment(props.eventTemp.end).format("YYYY-MM-DD HH:mm")}
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
                                <div className="event_modal_single_entry"><input type='datetime-local' defaultValue={dateEndChange} onChange={event => setDateEndChange(event.target.value)}>
                                </input>
                                </div>
                                Wybierz nowe miejsce spotkania:
                                <div className="event_modal_single_entry"><input type='text' defaultValue={locationChange} onChange={event => setLocationChange(event.target.value)}>
                                </input>
                                </div>
                            </div>
                            <div className="event_modal_footer">
                                <button className="button">Zatwierdź zmiany</button>
                                <button onClick={props.onDisable} className="button">Odrzuć zmiany</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}