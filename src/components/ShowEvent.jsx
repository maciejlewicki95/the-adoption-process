import React, { useEffect, useState } from "react";
import './modal.css'

export const ShowEvent = props => {

    return (
        <>
            <div class="event_modal">
                <div class="event_modal_content">
                    <div class="event_modal_header">
                        <h4 class="event_modal_title">Modal title</h4>
                        <div class="event_modal_body">
                            This is modal content
                            <div class="event_modal_footer">
                                <button class="button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}