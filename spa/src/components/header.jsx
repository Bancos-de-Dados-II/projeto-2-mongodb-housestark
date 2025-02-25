import { Link } from "react-router";
export function Header() {
    return (
      <>
        <div className='bg-slate-300 p-8 '>
          <main className='bg-slate-50 p-4 rounded-xl flex justify-between pl-10 pr-10'>
            <div>
                <h1>GreenTech</h1>
            </div>
            <nav className="flex">
                <ul className="flex gap-20" >
                    <li><Link to={'/'} >Home</Link></li>
                    <li><Link to={'/registrar'} >Cadastro</Link></li>
                    <li><Link to={'/agricultores'} >Lista</Link></li>
                    <li><Link to={'/sobre'} >Sobre</Link></li>
                </ul>
            </nav>
          </main>
        </div>
      </>
    );
}  

