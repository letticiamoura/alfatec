import Layout from "../components/Layout";

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css/effect-fade';

import 'swiper/swiper-bundle.css'; 

import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
    const students = [
        { id: 1, img: a1, title: "Alunos 1" },
        { id: 2, img: a2, title: "Alunos 2" },
        { id: 3, img: a3, title: "Alunos 3" },
    ];
    return (
        <Layout>
            <section className="bg-zinc-100">
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation, Pagination, EffectFade]}
                    pagination={{ clickable: true }}
                    navigation
                    effect="fade"
                    className="h-[70vh] rounded-br-[50%] md:rounded-br-[30%]"
                >
                    {
                        students.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
            <section>
                <Courses />
            </section>
            <section className="">
                <About/>
            </section>
            <section className="">
                <Contact/>
            </section>
        </Layout>
    );
}
