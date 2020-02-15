/*Time Conversion


Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Sample Input:  
07:05:45PM

Sample Output:
19:05:45
*/

function timeConversion(s) {
      const a = s.substring(8);
  let hours = parseInt(s.substring(0, 2));
  let minutes = s.substring(3, 5);
  let seconds = s.substring(6, 8);

  if (a === 'PM') {
    if (hours === 12) {
      hours -= 12;
    }
    hours += 12;
  } else {
    if (hours === 12) {
      hours -= 12;
    }
  }
  return `${hours > 9 ? hours : '0' + hours}:${minutes}:${seconds}`;

}