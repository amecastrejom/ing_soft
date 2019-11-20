var p = MindFusion.Scheduling;
var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.render();
calendar.theme = "light";

calendar.monthRangeSettings.headerStyle = p.MainHeaderStyle.Title;
//Object.defineProperty(MonthRangeSettings.prototype, "headerStyle", { value: MainHeaderStyle });
