function sendResponse(res, statusCode, message, data) {
    let obj;
    if (data) {
      obj = {
        code: statusCode,
        message: message,
        data: data,
      };
    } else {
      obj = {
        code: statusCode,
        message: message,
      };
    }
    return res.status(200).json(obj);
  }
  
  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };
  
  module.exports = {
    sendResponse,
    asyncForEach,
  };
  