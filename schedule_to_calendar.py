import datetime
import os.path
import json

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

tasks_data = {
     "monday": {
        "0:00": [
            {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
        ],
        "6:00": [
            {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
            {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
        ],
        "7:00": [
            {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "8:00": [
            {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
            {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
        ],
        "9:00": [
            {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
            {"title": "CV WEB", "type": "project", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "11:00": [
            {"title": "Curso SQL", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "13:00": [
            {"title": "CUCEI MART", "type": "project", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "14:00": [
            {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
            {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
        ],
        "15:00": [
            {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "17:00": [
            {"title": "Innovación y Tecnología", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "19:00": [
            {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "21:00": [
            {"title": "Alonso Restaurantes", "type": "leisure", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "23:00": [
            {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
        ]
    },
    "tuesday": {
        "0:00": [
            {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
        ],
        "6:00": [
            {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
            {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
        ],
        "7:00": [
            {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "8:00": [
            {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
            {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
        ],
        "9:00": [
            {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
            {"title": "NEXCODE", "type": "project", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "11:00": [
            {"title": "Curso SQL", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "13:00": [
            {"title": "NEXCODE", "type": "project", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "14:00": [
            {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
            {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
        ],
        "15:00": [
            {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "17:00": [
            {"title": "Sistemas Digitales", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "19:00": [
            {"title": "Programación Orientada a Objetos", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "21:00": [
            {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "23:00": [
            {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
        ]
    },
    "wednesday": {
        "0:00": [
            {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
        ],
        "6:00": [
            {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
            {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
        ],
        "7:00": [
            {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "8:00": [
            {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
            {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
        ],
        "9:00": [
            {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
            {"title": "CUCEI MART", "type": "project", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "11:00": [
            {"title": "Curso SQL", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "13:00": [
            {"title": "CUCEI MART", "type": "project", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "14:00": [
            {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
            {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
        ],
        "15:00": [
            {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "17:00": [
            {"title": "Innovación y Tecnología", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "19:00": [
            {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "21:00": [
            {"title": "Composición", "type": "leisure", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "23:00": [
            {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
        ]
    },
    "thursday": {
        "0:00": [
            {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
        ],
        "6:00": [
            {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
            {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
        ],
        "7:00": [
            {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "8:00": [
            {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
            {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
        ],
        "9:00": [
            {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
            {"title": "NEXCODE", "type": "project", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "11:00": [
            {"title": "Curso SQL", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "13:00": [
            {"title": "NEXCODE", "type": "project", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "14:00": [
            {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
            {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
        ],
        "15:00": [
            {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "17:00": [
            {"title": "Sistemas Digitales", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "19:00": [
            {"title": "Programación Orientada a Objetos", "type": "university", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "21:00": [
            {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "23:00": [
            {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
        ]
    },
    "friday": {
        "0:00": [
            {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
        ],
        "6:00": [
            {"title": "Pasear perros", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Desayunar", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 20},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 25},
            {"title": "Meditar", "type": "leisure", "duration_minutes": 30, "start_offset_minutes": 30}
        ],
        "7:00": [
            {"title": "Gym", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "8:00": [
            {"title": "Ducharme", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Hacer del baño", "type": "important", "duration_minutes": 15, "start_offset_minutes": 15},
            {"title": "Hacer rachas", "type": "important", "duration_minutes": 10, "start_offset_minutes": 5}
        ],
        "9:00": [
            {"title": "Derevo", "type": "work", "duration_minutes": 180, "start_offset_minutes": 0},
            {"title": "Youtube", "type": "project", "duration_minutes": 180, "start_offset_minutes": 0}
        ],
        "14:00": [
            {"title": "Comer", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavar trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 15},
            {"title": "Pasear perritos", "type": "leisure", "duration_minutes": 15, "start_offset_minutes": 25}
        ],
        "15:00": [
            {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "17:00": [
            {"title": "Circuitos Electrónicos y Electromagnetismo", "type": "university", "duration_minutes": 240, "start_offset_minutes": 0}
        ],
        "21:00": [
            {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "23:00": [
            {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
        ]
    },
    "saturday": {
        "0:00": [
            {"title": "Dormir", "type": "important", "duration_minutes": 300, "start_offset_minutes": 0}
        ],
        "5:00": [
            {"title": "Desayunar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0}
        ],
        "6:00": [
            {"title": "Traslado a universidad (camión)", "type": "important", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "7:00": [
            {"title": "Ingeniería de Software", "type": "university", "duration_minutes": 240, "start_offset_minutes": 0}
        ],
        "11:00": [
            {"title": "Regreso de universidad (camión)", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "21:00": [
            {"title": "Alonso Restaurantes", "type": "leisure", "duration_minutes": 180, "start_offset_minutes": 0}
        ],
        "23:00": [
            {"title": "Cenar", "type": "important", "duration_minutes": 15, "start_offset_minutes": 0},
            {"title": "Lavarme los dientes", "type": "important", "duration_minutes": 5, "start_offset_minutes": 15},
            {"title": "Lavar los trastes", "type": "important", "duration_minutes": 10, "start_offset_minutes": 20}
        ]
    },
    "sunday": {
        "0:00": [
            {"title": "Dormir", "type": "important", "duration_minutes": 360, "start_offset_minutes": 0}
        ],
        "10:00": [
            {"title": "Clase Canto Dery", "type": "important", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "12:00": [
            {"title": "Clase Programación Paulo", "type": "important", "duration_minutes": 120, "start_offset_minutes": 0}
        ],
        "14:00": [
            {"title": "Espacio libre", "type": "leisure", "duration_minutes": 60, "start_offset_minutes": 0}
        ],
        "15:00": [
            {"title": "Más actividades o descanso", "type": "leisure", "duration_minutes": 540, "start_offset_minutes": 0}
        ]
    }
}
# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/calendar"]

# Diccionario para almacenar los IDs de los calendarios creados
CALENDAR_IDS = {}

def authenticate_google_calendar():
    """Shows user how to authenticate with Google Calendar API."""
    creds = None
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                "credentials.json", SCOPES
            )
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open("token.json", "w") as token:
            token.write(creds.to_json())
    return creds

def get_google_calendar_service():
    """Authenticates and returns a Google Calendar API service object."""
    creds = authenticate_google_calendar()
    try:
        service = build("calendar", "v3", credentials=creds)
        return service
    except HttpError as error:
        print(f"An error occurred: {error}")
        return None

def create_or_get_calendar_ids(service):
    """
    Checks if specific calendars exist and creates them if not.
    Stores their IDs in the global CALENDAR_IDS dictionary.
    """
    print("Checking for existing calendars or creating new ones...")
    calendar_list = service.calendarList().list().execute().get('items', [])
    
    display_names = {
        "work": "Horario - Trabajo",
        "university": "Horario - Universidad",
        "important": "Horario - Importante",
        "project": "Horario - Proyectos",
        "leisure": "Horario - Ocio",
    }

    for task_type, display_name in display_names.items():
        found = False
        for calendar_item in calendar_list:
            if calendar_item.get('summary') == display_name:
                CALENDAR_IDS[task_type] = calendar_item['id']
                print(f"Found existing calendar '{display_name}': {calendar_item['id']}")
                found = True
                break
        
        if not found:
            calendar_body = {
                'summary': display_name,
                'timeZone': 'America/Mexico_City',
            }
            try:
                created_calendar = service.calendars().insert(body=calendar_body).execute()
                CALENDAR_IDS[task_type] = created_calendar['id']
                print(f"Created new calendar '{display_name}': {created_calendar['id']}")
            except HttpError as error:
                print(f"Error creating calendar '{display_name}': {error}")
                CALENDAR_IDS[task_type] = None

def add_event_to_calendar(service, calendar_id, summary, start_time, end_time, description=""):
    """Adds an event to a specified Google Calendar with reminders."""
    if not calendar_id:
        print(f"Skipping event '{summary}': No valid calendar ID provided.")
        return

    event = {
        'summary': summary,
        'description': description,
        'start': {
            'dateTime': start_time.isoformat(),
            'timeZone': 'America/Mexico_City',
        },
        'end': {
            'dateTime': end_time.isoformat(),
            'timeZone': 'America/Mexico_City',
        },
        'reminders': {
            'useDefault': False,
            'overrides': [
                {'method': 'popup', 'minutes': 0},  # Pop-up notification exactly at the start time
            ],
        },
    }

    try:
        event = service.events().insert(calendarId=calendar_id, body=event).execute()
        print(f"Event created in calendar '{calendar_id}': {event.get('htmlLink')}")
    except HttpError as error:
        print(f"An error occurred while creating event '{summary}' in calendar '{calendar_id}': {error}")

def get_next_weekday(d, weekday):
    """
    Get the next occurrence of a specific weekday.
    weekday: 0 for Monday, 1 for Tuesday, ..., 6 for Sunday.
    """
    days_until = (weekday - d.weekday() + 7) % 7
    return d + datetime.timedelta(days=days_until)

def populate_calendar_from_schedule(service, schedule_data, start_date, num_weeks=4):
    """
    Populates Google Calendar with events based on the provided schedule data for a given number of weeks.
    """
    day_map = {
        "monday": 0, "tuesday": 1, "wednesday": 2, "thursday": 3,
        "friday": 4, "saturday": 5, "sunday": 6
    }
    
    for week_offset in range(num_weeks):
        for day_name, day_schedule in schedule_data.items():
            if not day_schedule:
                continue

            target_weekday_int = day_map[day_name]
            
            first_occurrence = get_next_weekday(start_date, target_weekday_int)
            current_scheduled_date = first_occurrence + datetime.timedelta(weeks=week_offset)
            
            if current_scheduled_date.date() < start_date.date():
                continue

            for time_str, tasks in day_schedule.items():
                base_hour, base_minute = map(int, time_str.split(':'))

                for task in tasks:
                    summary = task["title"]
                    description = f"Type: {task['type']}"
                    duration_minutes = task.get("duration_minutes", 60)
                    start_offset_minutes = task.get("start_offset_minutes", 0)

                    event_start_datetime = datetime.datetime(
                        current_scheduled_date.year,
                        current_scheduled_date.month,
                        current_scheduled_date.day,
                        base_hour,
                        base_minute,
                        0,
                        tzinfo=datetime.timezone(datetime.timedelta(hours=-6), name='America/Mexico_City') # UTC-6 for CST
                    )
                    event_start_datetime += datetime.timedelta(minutes=start_offset_minutes)
                    event_end_datetime = event_start_datetime + datetime.timedelta(minutes=duration_minutes)

                    calendar_id_for_event = CALENDAR_IDS.get(task["type"])

                    if not calendar_id_for_event:
                        print(f"Warning: No calendar found for type '{task['type']}'. Skipping event '{summary}'.")
                        continue

                    events_result = service.events().list(
                        calendarId=calendar_id_for_event,
                        timeMin=event_start_datetime.isoformat(),
                        timeMax=event_end_datetime.isoformat(),
                        q=summary,
                        singleEvents=True,
                        orderBy='startTime'
                    ).execute()
                    events = events_result.get('items', [])

                    event_exists = False
                    for existing_event in events:
                        existing_start_dt = datetime.datetime.fromisoformat(existing_event['start']['dateTime'])
                        existing_end_dt = datetime.datetime.fromisoformat(existing_event['end']['dateTime'])
                        
                        if (existing_event['summary'] == summary and
                            existing_start_dt == event_start_datetime and
                            existing_end_dt == event_end_datetime):
                            print(f"Skipping duplicate event: '{summary}' in '{task['type']}' calendar at {event_start_datetime.strftime('%Y-%m-%d %H:%M')}")
                            event_exists = True
                            break
                    
                    if not event_exists:
                        add_event_to_calendar(service, calendar_id_for_event, summary, event_start_datetime, event_end_datetime, description)


# --- Main Execution ---
if __name__ == "__main__":
    service = get_google_calendar_service()
    if service:
        create_or_get_calendar_ids(service)

        if all(calendar_id is not None for calendar_id in CALENDAR_IDS.values()):
            start_date_for_scheduling = datetime.datetime(2025, 8, 11, 0, 0, 0)
            weeks_to_schedule = 20


            print(f"Starting to populate Google Calendar from {start_date_for_scheduling.strftime('%Y-%m-%d')} for {weeks_to_schedule} weeks...")
            populate_calendar_from_schedule(service, tasks_data, start_date_for_scheduling, weeks_to_schedule)
            print("Calendar population complete.")
        else:
            print("Could not create all necessary calendars. Aborting event population.")


