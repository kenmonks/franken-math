// need to distinguish between the two peggy 'parse' exports
import { parse as toCAS } from './src/parsers/cas.js'
import { parse as toTeX } from './src/parsers/tex.js'
self.toTeX = toTeX
self.toCAS = toCAS

const textarea = document.getElementById('mathInput')
const texDiv = document.getElementById('tex-output')
const casDiv = document.getElementById('cas-output')

const updateOutput = () => {
  const input = textarea.value.trim()

  try {
    const latex = toTeX(input)
    // const cas = toCAS(input)
    const cas = input

    textarea.classList.remove('error')
    texDiv.classList.add('success')
    casDiv.classList.add('success')
    
    texDiv.innerHTML = `\\(\\displaystyle{${latex}}\\)`
    casDiv.textContent = cas
    MathJax.typesetPromise([texDiv])
  } catch (err) {
    textarea.classList.add('error')
    texDiv.classList.remove('success')
    casDiv.classList.remove('success')
  }
}

textarea.addEventListener('input', updateOutput)
