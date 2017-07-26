import React, { Component, PropTypes } from 'react'
import CoursesList from './CoursesList'
import CourseAddForm from './CourseAddForm'

class App extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            courses: [
                { id: 1, name: 'React desde cero', teacher: 'Pancho1' },
                { id: 2, name: 'Drupal 8 desde cero', teacher: 'Pancho2' },
            ]
        }

        // this.handleOnAddCourse = this.handleOnAddCourse.bind(this);
    }

    handleOnAddCourse = (e) => {
        e.preventDefault()
        let form = e.target,
            course = {
                id: form.id.value,
                name: (form.name.value) ? form.name.value : App.defaultProps.name,
                teacher: (form.teacher.value) ? form.teacher.value : App.defaultProps.teacher
            }
        this.setState({
            courses: this.state.courses.concat([course])
        })
        form.reset()
    };

    render() {
        return (
            <div>
                <CourseAddForm
                    onAddCourse={this.handleOnAddCourse}
                />
                <CoursesList
                    courses={this.state.courses}
                />
            </div>
        )
    }
}

App.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired
}
App.defaultProps = {
    name: 'Curso desconocido',
    teacher: 'Profesor no asignado'
}

export default App
