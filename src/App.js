import React from 'react'
import Question1 from './logical ques/Question1'
import Question2 from './logical ques/Question2'
import Question3 from './logical ques/Question3'
import Question5 from './logical ques/Question5'
import Todo from './TodoList/Todo'
import './App.css'

function App() {
	return (
		<div className='tc'>
			<Question1/>
			<Question2/>
			<Question3/>
			<Question5/>
			<div>
				<Todo/>
			</div>
		</div>
	)
}

export default App
