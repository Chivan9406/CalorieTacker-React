import CalorieDisplay from './CalorieDisplay'
import { useActivity } from '../hooks/useActivity'

function CalorieTracker() {
  const { caloriesConsumed, caloriesBurned, netCalories } = useActivity()

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de calorías
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5">
        <CalorieDisplay
          calories={ caloriesConsumed }
          text="Consumidas"
          color="text-orange-500"
        />
        <CalorieDisplay
          calories={ caloriesBurned }
          text="Quemadas"
          color="text-lime-500"
        />
        <CalorieDisplay
          calories={ netCalories }
          text="Diferencia"
          color="text-white"
        />
      </div>
    </>
  )
}

export default CalorieTracker
