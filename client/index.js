import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import styled from 'styled-components'

import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const Container = styled.div`
  display: flex;
  flex: 1;
`

render(
  <Provider store={store}>
    <Container>
      holi
    </Container>
  </Provider>,
  document.getElementById('root')
)
