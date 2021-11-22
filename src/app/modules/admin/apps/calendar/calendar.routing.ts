import { Route } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { CalendarCalendarsResolver, CalendarSettingsResolver, CalendarWeekdaysResolver } from './calendar.resolvers';
import { CalendarSettingsComponent } from './settings/settings.component';


export const calendarRoutes: Route[] = [
    {
        path: '',
        component: CalendarComponent,
        resolve: {
            calendars: CalendarCalendarsResolver,
            settings: CalendarSettingsResolver,
            weekdays: CalendarWeekdaysResolver
        }
    },
    {
        path: 'Settings',
        component: CalendarSettingsComponent,
        resolve: {
            settings: CalendarSettingsResolver
        }
    }
]
