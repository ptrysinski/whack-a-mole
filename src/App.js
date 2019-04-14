import React, { Component } from 'react'
import Hole from './Hole'
import Button from '@material-ui/core/Button'

class App extends Component {
  state = {
    holes: [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null]
    ],
    isGameStarted: false,
    score: 0
  }

  render() {
    return (
      <div>
        <h2>WHACK-A-MOLE</h2>
        <div
          className={'board'}
        >
          {
            this.state.holes.map(
              (row, index) => (
                <div
                  key={'row' + index}
                  className={'board-row'}
                >
                  {
                    row.map(
                      (hole, index) => (
                        <Hole
                          key={index}
                        />
                      )
                    )
                  }
                </div>
              )
            )
          }
        </div>
        <Button
		  variant={'contained'}
        >
          START
        </Button>
      </div>
    )
  }
}

export default App