var p = MindFusion.Scheduling;
var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.render();
calendar.theme = "light";

calendar.monthRangeSettings.headerStyle = p.MainHeaderStyle.Title;
//Object.defineProperty(MonthRangeSettings.prototype, "headerStyle", { value: MainHeaderStyle });

function change_day(){
  calendar.currentView = p.CalendarView.Timetable;
  calendar.timetableSettings.headerStyle = p.MainHeaderStyle.Title;
  calendar.timetableSettings.orientation = p.Orientation.Vertical;
  calendar.timetableSettings.titleFormat = calendar.formatInfo.dateFormats.longDate;
  calendar.timetableSettings.cellSize = 60;
}

function change_week(){
  calendar.currentView = p.CalendarView.WeekRange;
  calendar.weekRangeSettings.weekStyle = p.WeekRangeViewStyle.SingleWeek;
  calendar.weekRangeSettings.headerStyle = p.HorizontalHeaderStyle;
  calendar.weekRangeSettings.visibleRows = 1;
  calendar.weekRangeSettings.dayOfWeekFormat = p.DayOfWeekFormat.SingleLetter;
}

function change_month(){
  calendar.monthRangeSettings.headerStyle = p.MainHeaderStyle.Title;
}
