import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const MyItem = ({ text, updatingInInput, deleteItem}) => {
    return(
        <div className="raw">
            <p>{text}</p>
            <CiEdit onClick={updatingInInput}/>
            <AiOutlineDelete onClick={deleteItem}/>
        </div>
    )
}

export default MyItem;