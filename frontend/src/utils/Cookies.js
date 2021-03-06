export const setCookie = (name, value, daysToLive) => {
  // Encode value in order to escape semicolons, commas, and whitespace
  var cookie = name + '=' + encodeURIComponent(value);

  if (typeof daysToLive === 'number') {
    /* Sets the max-age attribute so that the cookie expires
        after the specified number of days */
    cookie += '; max-age=' + daysToLive * 24 * 60 * 60;

    document.cookie = cookie;
  }
};

export const getCookie = name => {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(';');

  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split('=');

    /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
    if (name === cookiePair[0].trim()) {
      // Decode the cookie value and return
      return JSON.parse(decodeURIComponent(cookiePair[1]));
    }
  }

  // Return null if not found
  return null;
};

export const checkExpired = name => {
  try {
    const cookie = getCookie(name);

    if (cookie !== null) {
      const dateNow = new Date()
        .getDate()
        .toLocaleString('es-ES', { timeZone: 'America/El_Salvador' });
      const datexpired = new Date(
        `${cookie.dateExpired.split('/')[2]}-${cookie.dateExpired.split('/')[1]}-${
          cookie.dateExpired.split('/')[0]
        }`
      )
        .getDate()
        .toLocaleString('es-ES', { timeZone: 'America/El_Salvador' });

      if (datexpired < dateNow) return true;
      else return false;
    }
    return true;
  } catch (error) {
    return true;
  }
};
