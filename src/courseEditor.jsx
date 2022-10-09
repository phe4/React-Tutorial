import { useFormData } from "./utilities/useFormData";
import { useNavigate } from "react-router-dom";

const validateUserData = (key, val) => {
  switch (key) {
    case 'title':
      return val.length > 0 ? '' : 'Title is required';
    case 'meets':
      return val.length > 0 ? '' : 'Meeting times are required';
    default: return '';
  }
};

const InputField = ({title, hint, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={title} className="form-label">{text}</label>
    {/* <input className="form-control" id={title} name={title} 
      defaultValue={state.values?.[title]} onChange={change} /> */}
    <input className="form-control" id={title} name={title} 
      defaultValue={hint} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[title]}</div>
  </div>
);

const ButtonBar = ({disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      {/* <span className="p-2">{message}</span> */}
    </div>
  );
};

const CourseEditor = ({courseId, courseTitle, courseMeets}) => {
//   const [update, result] = useDbUpdate(`/users/${user.id}`);
  const [state, change] = useFormData(validateUserData, courseId);
  const submit = (evt) => {
  };

  return (
    <div className="container">
        <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
        <InputField name="title" text="Title" title={courseId} hint={courseTitle} state={state} change={change} />
        <InputField name="meets" text="Meeting Times" title={courseId} hint={courseMeets} state={state} change={change} />
        <ButtonBar />
        </form>
    </div>
  )
};

export default CourseEditor;