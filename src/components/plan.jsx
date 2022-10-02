const Plan = ({selected, courses}) => (
  <div className="cart">
    {
      selected.length === 0
      ? ( <div className="empty-schedule text-center">
            <h2>You didn't select any courses yet!</h2>
            <h3>Click on a course to add it to your schedule</h3>
          </div>)
      : (<table className="table table-hover ">
          <thead>
          <tr>
            <th scope="col">Course #</th>
            <th scope="col">Title</th>
            <th scope="col">Meeting time</th>
          </tr>
          </thead>
          <tbody>
            {Object.entries(courses).filter(([id, course]) => selected.includes(id)).map(([id, course]) => (
                <tr key={id}>
                  <th scope="row">{course.term} {course.number}</th>
                  <td className='w-50'>{course.title}</td>
                  <td className='w-25'>{course.meets}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )
    }
  </div>
);

export default Plan;