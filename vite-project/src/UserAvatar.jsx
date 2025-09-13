function UserAvatar
({
   Person
  }
)

{
  return(
    <div className="container">
      <p className="name">NAME:{Person.namee}</p>
      <p className="course">course:{Person.course}</p>
      <p className="roll">Roll No:{Person.roll}</p>
      <p className="dob">DOB:{Person.DOB}</p>
    </div>
  )

}

export default UserAvatar