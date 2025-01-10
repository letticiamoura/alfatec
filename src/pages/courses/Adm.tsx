import CourseLayout from "../../components/CourseLayout";

import adm from "../../assets/adm.jpg";

export default function Adm() {
    return(
        <div className="h-screen">
            <CourseLayout img={adm} title="Administração" />
        </div>
    )
}