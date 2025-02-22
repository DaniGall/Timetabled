import React from "react";
import Event from './Event';


const Calendar = () => {
    return (
      <div className="Calendar">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="time">8 am</td>
              <Event event='Breakfast🍳' location='Café Nin' color ='pink' />
              <td></td>
              <td></td>
              <Event event='Breakfast🍳' location='Madre Café' color ='pink' />
              <td></td>
              <Event event='Day Trip - Hot Springs💧' location='Grutas Tolantongo' color ='blue' />
              <td></td>
            </tr>

            <tr>
              <td className="time">9 am</td>
              <td></td>
              <Event event='Breakfast🍳' location='Churrería El Moro' color ='pink' />
              <Event event='Breakfast🍳' location='Sonāmbulo Café' color ='pink' />
              <td></td>
              <Event event='Breakfast🍳' location='Almanegra' color ='pink' />
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="time">10 am</td>
              <Event event='Flea Market👛' location='Jardín Dr.Ignacio Chávez Park' color ='green' />
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="time">11 am</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="time">12 pm</td>
              <Event event='Lunch🥙' location='' color ='pink' />
              <Event event='Lunch🥙' location='' color ='pink' />
              <Event event='Guided Museum Tour ⌂' location='Casa Orgánica' color ='green' />
              <Event event='Lunch🥙' location='' color ='pink' />
              <Event event='Guided Museum Tour ⌂' location='Casa Gilardi' color ='green' />
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="time">1 pm</td>
              <Event event='Guided Museum Tour ⌂' location='Casa Estudeio Diego Rivera & Frida Kahlo' color ='green' />
              <Event event='Guided Museum Tour ⌂' location='Casa Luis Barragán' color ='green' />
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="time">2 pm</td>
              <td></td>
              <td></td>
              <Event event='Lunch🥙' location='' color ='pink' />
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="time">3 pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="time">4 pm</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="time">5 pm</td>
              <Event event='Dinner Reservations🍽️' location='Huset' color ='pink' />
              <Event event='Dinner Reservations🍽️' location='La Güera Vegana' color ='pink' />
              <td></td>
              <Event event='Dinner Reservations🍽️' location='Contramar' color ='pink' />
              <Event event='Dinner Reservations🍽️' location='El Parnita' color ='pink' />
              <td></td>
              <td></td>
            </tr>
          </tbody>


        </table>
      </div>
    ); 
 
}; 
export default Calendar;