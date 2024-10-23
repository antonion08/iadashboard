document.addEventListener('DOMContentLoaded', function () {

  let request_calendar = "./events.json";

  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',

    events: function (info, successCallback, failureCallback)   
 {
      fetch(request_calendar)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let events = data.events.map(function (event) {
            return {
              title: event.eventTitle,
              start: new Date(event.eventStartDate),
              end: new Date(event.eventEndDate),
              url: event.eventUrl,
              timeStart: event.eventStartTime,
              timeEnd: event.eventEndTime,
            };
          });
          successCallback(events);
        })
        .catch(function (error) {
          failureCallback(error);
        });
    },

    eventContent: function (info) {
      return {
        html: `
          <div style="overflow: hidden; font-size: 12px; position: relative; cursor: pointer; font-family: 'Inter', sans-serif;">
            <div style="color: white;"><strong>${info.event.title}</strong></div>
          </div>
        `,
      };
    },

    eventMouseEnter: function (mouseEnterInfo) {
      console.log(mouseEnterInfo);
      let el = mouseEnterInfo.el;
      el.classList.add("relative");

      let newEl = document.createElement("div");
      let newElTitle   
 = mouseEnterInfo.event.title;
      let newElLocation = mouseEnterInfo.event.extendedProps.location;   

      newEl.innerHTML = `
        <div
          class="fc-hoverable-event"
          style="position: absolute; bottom: 100%; left: 0; width: 300px; height: auto; background-color: white; z-index: 50; border: 1px solid #e2e8f0; border-radius: 0.375rem; padding: 0.75rem; font-size: 14px; font-family: 'Inter', sans-serif; cursor: pointer;"
        >
          <strong>${newElTitle}</strong>
          <div>Location: ${newElLocation}</div>   

        </div>
      `;
      el.after(newEl);
    },

    eventMouseLeave: function () {
      document.querySelector(".fc-hoverable-event").remove();
    },

    // crear una nueva funcion
    dateClick: function (clickInfo) {
      // click donde se guarda en que celda se guarda  del calendario
      console.log("Clicked on a date:", clickInfo.dateStr);

      // promt donde se añade los eventos al calendario
      let eventTitle = prompt("Nombre del evento");
      let startTime = prompt("Hora de inicio (HH:MM):");
      let endTime = prompt("Hora de cierre (HH:MM):");

      if (eventTitle && startTime && endTime) {
        // crear nuevo objeto
        let newEvent = {
          title: eventTitle,
          start: new Date(clickInfo.dateStr + " " + startTime),
          end: new Date(clickInfo.dateStr + " " + endTime),
        };

        // añadir evento al calendario
        calendar.addEvent(newEvent);
      } else {
        alert("Please enter valid event details.");
      }
    },
  });

  calendar.render();
});