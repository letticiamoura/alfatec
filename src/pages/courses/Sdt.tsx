import CourseLayout from "../../components/CourseLayout";

import sdt from "../../assets/sdt.jpg";

export default function Sdt() {
    return(
        <div className="h-screen">
            <CourseLayout img={sdt} title="Segurança do Trabalho" />
        </div>
    )
}