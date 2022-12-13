const fs = require('node:fs')

const { recognize } = require('tesseract.js')

const ELEMENTS = ['rubriques', 'postes', 'comptes', 'sous_comptes']

const identifyElement = (nbRef) => {
  switch (nbRef.length) {
    case 2:
      return ELEMENTS[0]
    case 3:
      return ELEMENTS[1]
    case 4:
      return ELEMENTS[2]
    case 5:
      return ELEMENTS[3]
    default:
      return new Error('Something went wrong')
  }
}

const recognizeOCR = async (path) => {
  try {
    await recognize(path, 'fra', {
      logger: (debug) => console.log(debug)
    }).then(({ data }) => rubriqueReader(data.lines))
  } catch (error) {
    console.log(error)
  }
}

const CODE = {
  rubriques: [],
  postes: [],
  comptes: [],
  sous_comptes: []
}

const rubriqueReader = (lines) => {
  const currentLines = [...lines]

  currentLines.forEach((line) => {
    const textLine = line.text.trim()
    const numberRef = textLine.match(/\d+.*\d+/)
    const lineIndex = currentLines.indexOf(line)

    let nextLine = null
    if (currentLines[lineIndex + 1] != null) {
      nextLine =
        currentLines[lineIndex + 1].text.trim().match(/\d+.*\d+/) == null
          ? textLine.concat(` ${currentLines[lineIndex + 1].text.trim()}`)
          : textLine
    }

    // Identifying references
    let instance = null
    if (numberRef != null) {
      instance = identifyElement(numberRef[0].split('/')[0])
    } else return null

    switch (instance) {
      case ELEMENTS[1]:
        return CODE.rubriques.push({ title: nextLine, numero: numberRef })
      case ELEMENTS[2]:
        return CODE.postes.push({ title: nextLine, numero: numberRef })
      case ELEMENTS[3]:
        return CODE.comptes.push({ title: nextLine, numero: numberRef })
      case ELEMENTS[4]:
        return CODE.sous_comptes.push({ title: nextLine, numero: numberRef })
      default:
        throw new Error('Something went wrong')
    }
  })
}

const writeCODE = async () => {
  await recognizeOCR('../../public/OCR.png')

  fs.appendFile('OUTPUT.json', `${JSON.stringify(CODE)}`, (err) => {
    if (err) throw new Error('Something went wrong')
    console.log('Appended!')
  })
}

writeCODE()
