import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Component} from 'raect'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeGenerator,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
