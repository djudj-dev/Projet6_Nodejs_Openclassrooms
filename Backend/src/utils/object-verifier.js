export const typeVerificator = (typeGuardObject, ObjectToVerify) => (
  Object.entries(typeGuardObject).every(([key, value]) => typeof(ObjectToVerify[key]) === value.type)
)

export const regexVerificator = (typeGuardObject, ObjectToVerify) => (
  Object.entries(typeGuardObject).every(([key, value]) => {
    if (value.regex) {
      return value.regex.test(ObjectToVerify[key])
    }

    return true;
  })
)

export const checkTypeAndFormat = (typeGuardObject, ObjectToVerify) => {
  isTypegood = typeVerificator(typeGuardObject, ObjectToVerify);
  isFormatGood = regexVerificator(typeGuardObject, ObjectToVerify)
  return (isFormatGood && isTypegood);
}