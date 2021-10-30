import React, { useEffect, useState } from "react";
import './modal.css'
import moment from 'moment'
import 'moment/locale/pl'

export const ShowEvent = props => {


    console.log(props.show)
    console.log(props.eventTemp)

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
                                <div className="event_modal_single_entry">{props.eventTemp.location}
                                </div>
                            </div>
                            <div className="event_modal_footer">
                                <button className="button">Edytuj</button>
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
                                <div className="event_modal_single_entry"><input type='datetime-local' value={moment(props.eventTemp.start).format("YYYY-MM-DDTHH:mm")}>
                                </input>
                                </div>
                                Wybierz nową godzinę zakończenia spotkania:
                                <div className="event_modal_single_entry"><input type='datetime-local' value={moment(props.eventTemp.end).format("YYYY-MM-DDTHH:mm")}>
                                </input>
                                </div>
                                Wybierz nowe miejsce spotkania:
                                <div className="event_modal_single_entry"><input type='text' value={props.eventTemp.location}>
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