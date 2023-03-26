import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileWord, faFilePowerpoint, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const Doc = ({file, title, type}) => {
    return (
        <Link href={file}>
            <div className="file">
                <FontAwesomeIcon className={`file__icon ${type === "ppt" ? "file__icon--ppt" : type === "pdf" ? "file__icon--pdf" : ""} `}
                                 width={30} height={30}
                                 icon={type === "doc" ? faFileWord : type === "pdf" ? faFilePdf : faFilePowerpoint}/>
                <div className="file__title">{title}</div>
            </div>
        </Link>
    );
};

export default Doc;
