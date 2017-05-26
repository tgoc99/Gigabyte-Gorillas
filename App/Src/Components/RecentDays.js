import React, { PropTypes } from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native';
import Day from './Day.js';

const RecentDays = ({dates}) => (
  <ScrollView horizontal style={styles.recentDaysContainer}>
    {dates.length ? dates.map((day) => {
      return <Day key={day.id} day={day}/>
    }) : <Text>''</Text>}
  </ScrollView>
)

const styles = StyleSheet.create({
  recentDaysContainer: {
    flexDirection: 'row',
  }
});

export default RecentDays
