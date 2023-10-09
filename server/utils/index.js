function isValidInteger(str) {
  try {
    const num = parseInt(str, 10);
    return !isNaN(num) && str.trim() === num.toString();

  } catch (e) {
    return false;
  }
}

function parseMysql2Response(response) {
  if (!Array.isArray(response) || response.length === 0) {
    return [];
  }

  return response[0];
}


module.exports = {
  isValidInteger,
  parseMysql2Response
};
