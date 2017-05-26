import React, { PropTypes } from 'react'
import { View, Text } from 'react-native';
import HabitBlock from './HabitBlock.js'

const HabitsList = ({habits}) => (
  <View>
    {habits ? habits.map(habit => {
      return <HabitBlock key={habit.id} habit={habit}/>
    }):<Text>''</Text>}
  </View>
)

export default HabitsList
