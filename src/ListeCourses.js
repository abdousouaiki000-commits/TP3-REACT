function ListeCourses({ courses }) {
  return (
    <ul>
      {courses.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    
  );
}

export default ListeCourses;