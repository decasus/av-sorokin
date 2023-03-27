import PageHeader from "@/components/page-header/PageHeader";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDumbbell, faWeightHanging} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const Complexes = () => {
    return (
        <>
            <PageHeader>Комплексы упражнений</PageHeader>
            <div className="container">
                <div className="complexes">
                    <Link href="https://goodlooker.ru/silovaya-programma-muzchiny-fullbody.html" target="_blank">
                        <div className="complex">
                            <div className="complex__image"><FontAwesomeIcon className="complex__icon" width={100} height={100} icon={faDumbbell}
                                                                             style={{transform: "rotate(45deg)"}}/>
                            </div>
                            <div className="complex__title">Комплексы с гантелями</div>
                        </div>
                    </Link>
                    <Link href="https://fitnavigator.ru/trenirovki/massa-i-sila/uprazhnenija-so-shtangoj.html" target="_blank">
                        <div className="complex">
                            <div className="complex__image"><FontAwesomeIcon className="complex__icon" width={100} height={100}
                                                                             icon={faDumbbell}/></div>
                            <div className="complex__title">Комплексы со штангой</div>
                        </div>
                    </Link>
                    <Link href="https://fitseven.ru/programmy/trenirovki-crossfit-dlya-novichkov" target="_blank">
                        <div className="complex">
                            <div className="complex__image"><FontAwesomeIcon className="complex__icon" width={100} height={100}
                                                                             icon={faWeightHanging}/></div>
                            <div className="complex__title">Кроссфит для начинающих</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Complexes;
