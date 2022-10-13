import { useFormData } from "../utilities/useFormData";
import { useNavigate } from "react-router-dom";
import { useDbUpdate } from "../utilities/firebase";
import { useEffect } from "react";

const validateCourseData = (key, val) => {
  switch (key) {
    case 'title':
      console.log("title");
      return val.length > 1 ? '' : 'Title must be at least 2 characters';
    case 'meets':
      // must contain days and start-end, e.g., MWF 12:00-13:20
      if (val === '') return '';
      else{
        var message = 'Must contain days and start-end, e.g., MWF 12:00-13:20'
        return /^(M|Tu|W|Th|F)(M|Tu|W|Th|F)?(M|Tu|W|Th|F)? (([01]?[0-9]|2[0-3]):[0-5][0-9])-(([01]?[0-9]|2[0-3]):[0-5][0-9])$/.test(val) ? '' : message;
      }
      
    default: return '';
  }
};

const InputField = ({title, hint, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={title} className="form-label">{text}</label>
    <input className="form-control" id={title} name={title} 
      defaultValue={hint} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[title]}</div>
  </div>
);

const ButtonBar = ({message, disabled}) => {
  const navigate = useNavigate();
  const goback = (time) =>setTimeout(() => {
        navigate('/');
      }, time*1000);
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled} onClick={() => goback(1)}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const CourseEditor = ({courseId, courseTitle, courseMeets}) => {
  const [update, result] = useDbUpdate(`courses/${courseId}`);
  const [state, change] = useFormData(validateCourseData, {courseId});
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <div className="container">
        <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
        <InputField name="title" text="Title" id={courseId} title="title" hint={courseTitle} state={state} change={change} />
        <InputField name="meets" text="Meeting Times" id={courseId} title="meets" hint={courseMeets} state={state} change={change} />
        <ButtonBar message={result?.message}/>
        </form>
    </div>
  )
};

export default CourseEditor;