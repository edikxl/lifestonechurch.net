import { DateTime } from 'luxon';

export const formatDate = date => DateTime.fromISO(date).toLocaleString();

export const longFormatDate = date =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);

export const shortFormatDate = date => DateTime.fromISO(date).toFormat('LLL d');

export const getMonthNumber = date =>
  Number(DateTime.fromISO(date).toFormat('L'));

export const getMonthName = date => DateTime.fromISO(date).toFormat('LLLL');

export const getDayOfWeek = date => DateTime.fromISO(date).toFormat('cccc');

export const getFirstStartDate = dates =>
  dates.reduce(
    (firstDate, current) =>
      !firstDate
        ? current.startDate
        : new Date(current.startDate) < new Date(firstDate)
          ? current.startDate
          : firstDate,
    null
  );

export const getLastEndDate = dates =>
  dates.reduce(
    (lastDate, current) =>
      !lastDate
        ? current.endDate
        : new Date(current.endDate) > new Date(lastDate)
          ? current.endDate
          : lastDate,
    null
  );

export const getFutureEvents = events => {
  const q = new Date();
  const m = q.getMonth();
  const d = q.getDate();
  const y = q.getFullYear();

  const today = new Date(y, m, d);

  return events
    .filter(
      ({ node }) =>
        node.endDate
          ? new Date(`${node.endDate}T00:00:00`) >= today
          : node.startDate
            ? new Date(`${node.startDate}T00:00:00`) >= today
            : node.dateAndRegistration &&
              new Date(`${getLastEndDate(node.dateAndRegistration)}T00:00:00`) >=
                today
    )
    .map(({ node }) => ({
      ...node,
      startDate: node.startDate || getFirstStartDate(node.dateAndRegistration),
      slug: node.fields.slug,
    }))
    .sort((a, b) => new Date(a.startDate) > new Date(b.startDate));
};

export default formatDate;
