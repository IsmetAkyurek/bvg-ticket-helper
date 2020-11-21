/**
 * Updates session data using localStorage
 * @param {any} value 
 */
export const updateStorage = (value) => {
  if (value) {
    localStorage.setItem('session', JSON.stringify(value));
  } else {
    localStorage.removeItem('session');
  }
};

/**
 * Parses given days into years / months / weeks / remainder days
 * @param {number} days 
 */
export const parseDays = (days) => {
  let year, month, week, day;

  year = days >= 365 ? Math.floor(days / 365) : 0;
  days = year ? days - (year * 365) : days;

  month = days >= 30 ? Math.floor((days % 365) / 30) : 0;
  days = month ? days - (month * 30) : days;

  week = days >= 7 ? Math.floor((days % 365) / 7) : 0;
  days = week ? days - (week * 7) : days;

  day = days < 7 ? Math.floor((days % 365) % 7) : 0;

  return { year, month, week, day };
};

/**
 * Returns appropriate tickets for the given data.
 * @param {any} data 
 */
export const getResult = (data) => {
  const peopleCount = data.isAlone ? 1 : data.howMany + 1;
  const groupCount = parseInt(peopleCount / 5), groupRemainder = peopleCount % 5;
  const bikesCount = data.bikesCount || 0;
  const isStudent = data.isStudent;
  const { year, month, week, day } = parseDays(data.howLong);

  let daily = 0, weekly = 0, monthly = 0, annual = 0, bikeDaily = 0, bikeMonthly = 0, studentMonthly = 0, groupDaily = 0;

  /**
   * Calculate people ticket count
   */
  if (peopleCount < 3) {
    if (isStudent) {
      if (day < 7) {
        daily += day;
      } else {
        studentMonthly += year * 12;
        studentMonthly += month;
        if (week > 0) {
          studentMonthly += 1;
        }
      }
    } else {
      annual += year * peopleCount;
      if (month > 9) {
        annual += 1 * peopleCount;
      } else {
        monthly += month * peopleCount;
      }
      if (week > 2) {
        monthly += 1 * peopleCount;
      } else {
        weekly += week * peopleCount;
      }
      if (day > 3) {
        weekly += peopleCount;
      } else {
        daily += day * peopleCount;
      }
    }
  } else {
    groupDaily = groupCount * day;
    if (groupRemainder > 2) {
      groupDaily += day;
    } else {
      daily += day;
    }
  }

  /**
   * Calculate Bike Ticket Count
   */
  if (bikesCount > 0) {
    if (month > 0) {
      bikeMonthly = month * bikesCount;
    }
    if (week > 0 || day > 2) {
      bikeMonthly += bikesCount;
    } else {
      bikeDaily += bikesCount * day;
    }
  }

  /**
   * Prepare the data as an array to render in a single loop
   */
  const result = [
    { count: annual, unitPrice: 840, text: 'Annual Ticket' },
    { count: monthly, unitPrice: 84, text: 'Monthly Ticket' },
    { count: weekly, unitPrice: 34, text: 'Weekly Ticket' },
    { count: daily, unitPrice: 8.6, text: 'Daily Ticket' },
    { count: groupDaily, unitPrice: 23.5, text: 'Group Ticket' },
    { count: studentMonthly, unitPrice: 57, text: 'Monthly Student Ticket' },
    { count: bikeDaily, unitPrice: 4.9, text: 'Daily Bike Ticket' },
    { count: bikeMonthly, unitPrice: 10.5, text: 'Monthly Bike Ticket' },
  ];

  return result.filter(x => x.count > 0);
};