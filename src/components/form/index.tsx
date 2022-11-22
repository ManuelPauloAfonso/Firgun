import { Forms } from "./style"


export default function Form() {
    return (
            <Forms>
                <form>
                    <div>
                        <label htmlFor="">Nome:</label>
                        <input type="text" name="" id="" />
                        <label>Sobrenome:</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Email</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Telefone</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Celular</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Data de Nascimento</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">CEP</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Estado</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Cidade</label>
                        <input type="text" name="" id="" />
                    </div>
                    <button>entrar</button>
                </form>
            </Forms>
           
    )
}