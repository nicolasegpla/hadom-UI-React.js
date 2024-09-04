/* eslint-disable react/prop-types */
import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline"
import dayjs from "dayjs"
import isBetween from 'dayjs/plugin/isBetween'; // Importa el plugin isBetween
import 'dayjs/locale/es'
import './calendar.css'

function Calendar({eventsList, multiEventProp}) {

    dayjs.locale('es')
    dayjs.extend(isBetween); // Registra el plugin isBetween

    const [ currentMonth, setCurrentMonth ] = useState(dayjs()) //en este estado inicial almacenamos el dia actual
    const [ events, setEvents ] = useState(eventsList)
    const [ multiEvent, setMultiEvent ] = useState(multiEventProp)

    

    const startDay = currentMonth.startOf('month').startOf('week');
    const endDay = currentMonth.endOf('month').endOf('week');

    const days = [];
    let day = startDay;

    while (day <= endDay) {
    days.push(day);
    day = day.add(1, 'day');
    }

    
    const handlePrevMonth = () => {
        setCurrentMonth(currentMonth.subtract(1, 'month'));
      };
    
      const handleNextMonth = () => {
        setCurrentMonth(currentMonth.add(1, 'month'));
      };

      const today = dayjs();
    
      const isDisplayingRealCurrentMonth = currentMonth.isSame(currentMonth, 'month');
      const isDisplayingRealCurrentDay = currentMonth.isSame(currentMonth, 'month');
        

      const getEventsForDate = (date) => {
        return events.filter((event) => {
            const eventStart = dayjs(event.startDate);
            const eventEnd = dayjs(event.endDate);
            return date.isBetween(eventStart, eventEnd, 'day', '[]'); // Compara si la fecha está dentro del rango del evento
          });
      };
      function viewEvents(date) {
        const eventsForDate = getEventsForDate(date);
        console.log(eventsForDate);
      }
    
      function totalEventsPerDay(date) {
        const totalEvents = getEventsForDate(date);
        if(totalEvents.length > 5) {
            return 'event-hard'
        }else if(totalEvents.length > 3) {
            return 'event-normal'
        }else if(totalEvents.length > 0 ) {
            return 'event-slow'
        }else if(totalEvents.length === 0) {
            return ''
        }
      }

      const isMultiDayEvent = (date) => {
        return getEventsForDate(date).some((event) => {
          const eventStart = dayjs(event.startDate);
          const eventEnd = dayjs(event.endDate);
          return eventEnd.isAfter(eventStart, 'day'); // Si la fecha de fin es después de la fecha de inicio, es un evento de varios días
        });
      };
      

      const isWithinEventRange = (date) => {
        return events.some((event) => {
          const eventStart = dayjs(event.startDate);
          const eventEnd = dayjs(event.endDate);
          return eventEnd.isAfter(eventStart, 'day') && date.isBetween(eventStart, eventEnd, 'day', '[]');
        });
      };

    return(
        <>
            <div className="calendar">
                <header className="calendar__header">
                    <button className="calendar__header__button--left" onClick={handlePrevMonth}><ChevronLeftIcon className="calendar__header__button--left__icon" /></button>
                    <h2 className="calendar__header__h2" >{currentMonth.format('MMMM')}</h2>
                    <button className="calendar__header__button--right" onClick={handleNextMonth}><ChevronRightIcon className="calendar__header__button--right__icon" /></button>
                </header>
                <div className="weekdays">
                    {['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'].map((day) => (
                    <div key={day} className="weekday">
                        {day}
                    </div>
                    ))}
                </div>
                <div className="days">
                {days.map((day) => (
                    <div
                        onClick={() => viewEvents(day)}
                        key={day.format('DD-MM-YYYY')}
                        className={`day ${
                        !day.isSame(currentMonth, 'month') ? 'other-month' : ''
                        } ${
                            isDisplayingRealCurrentMonth && day.isSame(today, 'week')
                            ? 'current-week'
                            : ''
                        } ${multiEvent && isWithinEventRange(day) ? 'multi-day-event' : '' }`}
                    >
                        <div className={`sub-container-day ${
                            isDisplayingRealCurrentDay && day.isSame(today, 'day')
                            ? 'current-day'
                            : ''
                        } ${totalEventsPerDay(day)}`}>
                            {day.format('D')}
                        </div>
                        
                    </div>
                ))}
                </div>
                <div className="calendar-more-events">
                    <button className="calendar-more-events__button">
                        <PlusIcon className="calendar-more-events__button__icon" />
                        <p className="calendar-more-events__button__p">Agregar Evento</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export { Calendar }