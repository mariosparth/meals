import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addRecipe, removeFromCalendar } from '../actions'

class App extends Component {

  dothing = () => {
    // Classic way: Directly from components props
    //this.props.dispatch(addRecipe({}))

    // With the use mapDispatchToProps

    this.props.selectRecipe({})

  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        Hello world
      </div>

    )
  }
}

function mapStateToProps({calendar, food}){

  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]

  return {
    calendar: dayOrder.map((day) => ({
        day,
        meals: Object.keys(calendar[day]).reduce((meals, meal) => {
          meals[meal] = calendar[day][meal]
          ? food[calendar[day][meal]] // Get the food item not only the ID/Name: calendar[day][meal]
          : null

          return meals
        }, {})
    }))
  }
}

function mapDispatchToProps(dispatch) {
  return{
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
