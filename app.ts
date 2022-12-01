const isNumber = (X: number | string): boolean => {

  if (typeof X === 'string') {
    return true
  } else if (typeof X === 'number') {
    return false
  }

  // Исчерпывающая проверка. Без неё есть ещё один return undefined
  throw new Error('Ты передал что-то не то')

}
