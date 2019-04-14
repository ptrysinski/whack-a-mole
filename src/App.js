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
    score: 0,
    currentCount: 20,
    isLevel2: false
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
		this.setState({
			isGameStarted: true,
			isGameFinished: false,
			score: 0,
		})
    this.startLevel1()
    this.state.currentCount = 20
    this.timeCounter()
		this.endGame()
  }
  
  startLevel1 = () => {
		const showMole = setInterval(
			() => {
				this.checkLevel()
				this.randomHole()
			},
			1200
		)
		this.setState({ interval: showMole })
	}

	checkLevel = () => {
		if (this.state.score >= 10) {
			clearInterval(this.state.interval)
			this.startLevel2()
		}
	}

	startLevel2 = () => {
		const showMole = setInterval(
			this.randomHole,
			700
		)
		this.setState({ interval: showMole })
	}
  
  endGame = () => {
		setTimeout(
			() => {
				clearInterval(this.state.interval)
				this.setState({
					isGameFinished: true,
					isGameStarted: false,
					randomHole: null,
				})
			},
			20000
		)
	}
  
  countScores = (userHole) => {
		if (this.state.randomHole === userHole) {
			this.setState({score: this.state.score + 1})
		}
  }

  timer = () => {
    var newCount = this.state.currentCount - 1;
    if(newCount >= 0) { 
        this.setState({ currentCount: newCount });
    } else {
        clearInterval(this.state.intervalId);
    }
 }
  
  timeCounter = () => {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId})
  }

  render() {
		return (
			<div>
				<h2>WHACK A MOLE</h2>
        <h2>your score: {this.state.score}</h2>
        <h2>time left: {this.state.currentCount}</h2>
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
                          countScores={() => this.countScores(hole)}  
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