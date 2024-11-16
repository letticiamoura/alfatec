import Layout from "../../components/Layout";

import enf from "../../assets/enf.jpg";

export default function Enfer() {
    return(
        <Layout>
            <div>
                <h1>Técnico em Enfermagem</h1>
                <div>
                    <img src={enf} alt="Enfermagem" />
                </div>
            </div>
        </Layout>
    )
}