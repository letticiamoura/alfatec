export default function Contact() {
    return(
        <div className="p-5 h-auto bg-orange-500">

            <h1 className="p-5 text-4xl text-center text-white font-extrabold">Entre em Contato</h1>

            <form action="post" className="text-white">

                <div className="flex flex-col gap-5">

                    <label htmlFor="name" className="text-2xl font-medium text-orange-300">Nome <br />
                        <input 
                            type="text"  
                            className="p-3 w-full rounded-xl outline-none"/>
                    </label>

                    <label htmlFor="name" className="text-2xl font-medium text-orange-300">Curso de Interesse<br />
                        <select name="curso" id="curso" className="text-orange-300 p-3 rounded-xl w-full font-normal outline-none">
                            <option value="null" disabled>-------</option>
                            <option value="administracao">Administração</option>
                            <option value="eletrotecnica">Eletrotécnica</option>
                            <option value="enfermagem">Enfermagem</option>
                            <option value="logistica">Logística</option>
                            <option value="segT">Segurança do Trabalho</option>
                        </select>
                    </label>

                    <label htmlFor="name" className="text-2xl font-medium text-orange-300">Horário<br />
                        <div>
                            <input 
                                type="radio" 
                                name="horario" 
                                id="manha" 
                                checked
                                className="w-10 h-4"
                                />
                            <label htmlFor="manha" className="text-white font-normal">Manhã</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="horario" 
                                id="tarde" 
                                className="w-10 h-4"
                            />
                            <label htmlFor="tarde" className="text-white font-normal">Tarde</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="horario" 
                                id="noite" 
                                className="w-10 h-4"
                                />
                            <label htmlFor="noite" className="text-white font-normal">Noite</label>
                        </div>
                    </label>

                    <label htmlFor="message" className="text-2xl font-medium text-orange-300">Faça sua pergunta <br />
                        <textarea name="mesage" id="message" className=" h-56 w-full rounded-xl outline-none"></textarea>
                    </label>

                </div>

                <input type="button" value="Enviar" className="p-2 border rounded-xl text-center m-auto text-2xl"/>
            </form>
        </div>
    )
}