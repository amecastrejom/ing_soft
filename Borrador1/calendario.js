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
  var date = p.DateTime.today();
  calendar.TimetableSettings.dates = date;

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
calendar.currentView= p.CalendarView.SingleMonth;
}

calendar.itemSettings.size = 64;
calendar.itemSettings.showCues = false;

//calendar.itemModifying.addEventListener(handleItemModifying);
//calendar.itemModified.addEventListener(handleItemModified);
//calendar.selectionStart.addEventListener(handleSelectionStart);

//ocument.addEventListener("keypress", handleKeyPress);

calendar.render();

var subjects = ["Examen Gráficas", "Proyecto Circuitos", "Entrevista Microsoft", "Recoger Saco", "Entrega Ensayo"];
var item;

// add some items to the schedule items collection
for (var i = 0; i < 5; i++)
{
	item = new p.Item();
	item.subject = subjects[i];
	item.startTime = calendar.itemsStartTime.clone().addDays(Math.floor(Math.random() * 30));
	item.endTime = item.startTime.clone().addDays(1);
	calendar.schedule.items.add(item);
}
var ini = p.DateTime.fromDateString('November 21,2019 20:30:00');
var fin = p.DateTime.fromDateString('November 21,2019 23:30:00');
it2 = new p.Item();
it2.subject = "Cena con Cecilia";
it2.startTime = ini;
it2.endTime = fin;
calendar.schedule.items.add(it2);
