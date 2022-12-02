interface ILogger {
  log(...args: any[]): void

  error(...args: any[]): void
}

class Logger implements ILogger {
  log(...args: any[]): void {

    console.log(args);
  }

  error(...args: any[]): void {

    throw new Error('ошибка')

  }

}


const logg = new Logger()


logg.log(1, 'asd', true)
logg.error(1, 'asd', true)
