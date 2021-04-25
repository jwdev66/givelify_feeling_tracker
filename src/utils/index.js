import moment from "moment";

export const FeelingColors = [
  "#CCCCCC", // default_color
  "#353A4B", // feeling1_color
  "#5563AA", // feeling2_color
  "#7184E7", // feeling3_color
  "#C788E6", // feeling4_color
  "#F7678A", // feeling5_color
];

export const FeelingBGColors = [
  "linear-gradient(180deg, #B0B4BA 0%, #C6C6C8 34.03%, #CDC9C9 44.97%, #CCC1C1 62.15%, #C1B7BB 74.13%, #ABADB7 86.11%, #9AA4AC 99.13%)", // default_bg
  "linear-gradient(180deg, #35394A 0%, #3B4057 47.16%, #1F202D 100%)", // feeling1_bg
  "linear-gradient(180deg, #5563A9 0%, #5B669B 44.56%, #242B4C 100%)", // feeling2_bg
  "linear-gradient(180deg, #7184E7 0%, #9CAFF6 49.77%, #8897C9 100%)", // feeling3_bg
  "linear-gradient(180deg, #9984D5 0%, #E39DB2 49.25%, #E687A4 100%)", // feeling4_bg
  "linear-gradient(180deg, #F57694 0%, #F7B189 62.67%, #FFD28F 99.65%)", // feeling5_bg
];

export const getFooterTitle = () => {
  return moment().format("MMMM YYYY");
};

export function getDays() {
  const startDate = moment(new Date());
  const days = Math.abs(
    moment(`${moment().year()}-01-01`).diff(startDate, "days")
  );
  return days;
}

export function getCalendarData() {
  let startDate = moment(new Date());
  let calendarData = [];
  const days = getDays();

  for (let i = days; i >= 0; i--) {
    calendarData.push({
      index: i,
      date:
        i === days
          ? "Today"
          : i === days - 1
          ? "Yesterday"
          : moment(startDate).format("MMM DD"),
      feelingValue: 0,
      feelingContent: "",
    });
    startDate.subtract(1, "days");
  }

  return calendarData.reverse();
}
