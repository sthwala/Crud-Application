import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
const Member = ({ member, onDelete, onEdit }) => {
    return (
      <div>
        
        <div className="Member">
          <div>
            <p className="Name">
              <span className="textBold">Full Names:</span> {member.text}
            </p>
        <p className="Title">
          <span className="textBold">Job Title:</span>{member.text1}
            </p>
            <p className="Image">
          <span className="textBold"></span>{member.file}
          </p>
            </div>
            <div>
            <p><FaTimes onClick={() => onDelete(member.id)} className="delIcon" /></p>
          <p><FaPencilAlt onClick={() => onEdit(member.id)} className="editIcon" /></p>
          </div>
        </div>
      </div>
    )
}
export default Member;