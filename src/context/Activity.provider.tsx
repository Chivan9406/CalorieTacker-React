import { type ReactNode, useMemo, useReducer } from 'react'

import type { Activity } from '../types'
import { ActivityContext } from './Activity.context'
import { activityReducer, initialState } from '../reducers/activity-reducer'
import { categories } from '../data/categories'

type ActivityProviderProps = {
  children: ReactNode
}

function ActivityProvider({ children }: ActivityProviderProps) {
  const [ state, dispatch ] = useReducer(activityReducer, initialState)
  const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) => activity.category === 1
      ? total + activity.calories
      : total, 0),
    [ state.activities ])

  const caloriesBurned = useMemo(() => state.activities.reduce((total, activity) => activity.category === 2
      ? total + activity.calories
      : total, 0),
    [ state.activities ])

  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [ state.activities ])

  const categoryName = useMemo(() =>
      (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''),
    [ state.activities ])

  const isEmptyActivities = useMemo(() => state.activities.length === 0, [ state.activities ])

  return (
    <ActivityContext.Provider
      value={ {
        state,
        dispatch,
        caloriesConsumed,
        caloriesBurned,
        netCalories,
        categoryName,
        isEmptyActivities
      } }
    >
      { children }
    </ActivityContext.Provider>
  )
}

export default ActivityProvider
