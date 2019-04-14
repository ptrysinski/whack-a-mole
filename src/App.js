import React, { Component } from 'react'
import Hole from './Hole'
import Button from '@material-ui/core/Button'

class App extends Component {
  state = {
    holes: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ],
    isGameStarted: false,
    randomHole: null,
    score: 0
  }

  randomHole = () => {
		const randomRowIndex = Math.floor(Math.random() * this.state.holes.length)
		const randomRowArray = this.state.holes[randomRowIndex]
		const randomHoleIndex = Math.floor(Math.random() * randomRowArray.length)
		const randomHole = this.state.holes[randomRowIndex][randomHoleIndex]
		if (randomHole === this.state.randomHole) {
			return this.randomHole()
		}
		this.setState({ randomHole: randomHole })
  }
  
  startGame = () => {
		if (this.state.isGameStarted) return
		this.setState({ isGameStarted: true })
		this.showMole()
  }
  
  showMole = () => {
		const showMole = setInterval(
			this.randomHole,
			1000
		)
		this.endGame(showMole)
  }
  
  endGame = (showMole) => {
		setTimeout(
			() => {
				clearInterval(showMole)
				this.setState({ isGameStarted: false, randomHole: null })
			},
			120000
		)
	}

  render() {
		console.log(this.state.isGameStarted)
		return (
			<div>
				<h2>WHACK A MOLE</h2>
				<div
					className={'board'}
				>
					{
						this.state.holes.map(
							(row, rowIndex, array) => (
								<div
									key={'row' + rowIndex}
									className={'board-row'}
								>
									{
										row.map(
											(hole, holeIndex) => (
												<Hole
													key={holeIndex}
													className={
														this.state.randomHole === array[rowIndex][holeIndex] ?
															'hole active'
															:
															'hole'
													}
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
					onClick={this.startGame}
				>
					START
        </Button>
			</div>
		)
  }
}

export default App