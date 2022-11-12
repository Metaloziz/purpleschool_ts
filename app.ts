function fooo(arg: string | number[]) {
  if (typeof arg === 'string') {

    arg.toLocaleLowerCase()

  } else {

    arg.pop()
  }
}

