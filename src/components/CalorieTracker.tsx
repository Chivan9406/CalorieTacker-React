import type { Activity } from '../types'
import { useMemo } from 'react'
import CalorieDisplay from './CalorieDisplay'

interface CalorieTrackerProps {
  activities: Activity[]
}

function CalorieTracker({ activities }: CalorieTrackerProps) {
  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1
      ? total + activity.calories
      : total, 0),
    [activities])

  const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2
      ? total + activity.calories
      : total, 0),
    [activities])

  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities])

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de calorías
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5">
        <CalorieDisplay
          calories={caloriesConsumed}
          text="Consumidas"
          color="text-orange-500"
        />
        <CalorieDisplay
          calories={caloriesBurned}
          text="Quemadas"
          color="text-lime-500"
        />
        <CalorieDisplay
          calories={netCalories}
          text="Diferencia"
          color="text-white"
        />
      </div>
    </>
  )
}

export default CalorieTracker
