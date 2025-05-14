const Header = (props) => <h1>{props.course}</h1>

const Content = ({ parts }) => (
  <div>
    {parts.map(part => 
      <Part key={part.id} part={part} />
    )}
  </div>
)


const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({ total }) => {
  const totalExercises = total.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      total of exercises {totalExercises}
    </p>
  )
}

const Course = ({course}) => {
  return <>
  <Header course={course.name}/>
  <Content parts={course.parts}/>
  <Total total={course.parts}/>
  
  </>

}
  export default Course  