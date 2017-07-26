import React from 'react';

const CourseAddForm = (props) => (
    <div>
        <form onSubmit={props.onAddCourse}>
            <input type="text" placeholder="Nombre del curso" name="name" />
            <input type="text" placeholder="Profesor" name="teacher" />
            <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
            <input type="submit" value="Guardar" />
        </form>        
    </div>
)

export default CourseAddForm;