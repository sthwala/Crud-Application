import Member from './Member';
import "../index.css"
const Members = ({ members, onDelete, onEdit }) => {
  return (
    <>
      {
        members.map((member) => (
          <Member key={member.id} member={member} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </>
    )
}
export default Members;