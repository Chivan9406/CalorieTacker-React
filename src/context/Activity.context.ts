import { createContext, type Dispatch } from 'react'

import type { Activity } from '../types'
import type { ActivityActions, ActivityState } from '../reducers/activity-reducer'

type ActivityContextProps = {
  state: ActivityState
  dispatch: Dispatch<ActivityActions>
  caloriesConsumed: number
  caloriesBurned: number
  netCalories: number,
  categoryName: (category: Activity["category"]) => string[]
  isEmptyActivities: boolean
}

export const ActivityContext = createContext<ActivityContextProps>(null!)
