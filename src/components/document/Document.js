import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileWord, faFilePowerpoint, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const Doc = ({file, title}) => {
    const extension = file.split(".").pop();
    const icon =
        extension === "doc" || extension === "docx"
            ? faFileWord
        : extension === "ppt" || extension === "pptx"
            ? faFilePowerpoint
            : faFilePdf;

    const extClassName =
        extension === "doc" || extension === "docx"
            ? ""
            : extension === "ppt" || extension === "pptx"
                ? "file__icon--ppt"
                : "file__icon--pdf";
    return (
        <Link href={file}>
            <div className="file">
                <FontAwesomeIcon
                    className={`file__icon ${extClassName} `}
                    width={30} height={30}
                    icon={icon}/>
                <div className="file__title">{title}</div>
            </div>
        </Link>
    );
};

export default Doc;
