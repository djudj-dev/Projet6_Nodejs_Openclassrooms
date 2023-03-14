/**
 * @file manage the function for check types & regex 
 * @typeVerificator verify the type of entries of objects
 * @param {
 *    entrieName : {
 *      type: string,
 *      regex?: Regex
 *    }
 *  } typeGuardObject is the object of comparison
 * @param { Object } ObjectToVerify, is the object to check 
 * @returns { boolean }; true if all entries are the same
**/

export const typeVerificator = (typeGuardObject, ObjectToVerify) => (
  Object.entries(typeGuardObject).every(([key, value]) => typeof(ObjectToVerify[key]) === value.type)
)

/**
 @regexVerificator verify the type of entries of objects
 * @param {
 *    entrieName : {
 *      regex: Regex
 *      type?: string
 *    }
 *  } typeGuardObject is the object of comparison 
 * wich need regex properties on entries you need to test
 * @param { Object } ObjectToVerify, is the object to check 
 * @returns { boolean }; true if all regex are tested
**/

export const regexVerificator = (typeGuardObject, ObjectToVerify) => (
  Object.entries(typeGuardObject).every(([key, value]) => {
    if (value.regex) {
      return value.regex.test(ObjectToVerify[key])
    }

    return true;
  })
)