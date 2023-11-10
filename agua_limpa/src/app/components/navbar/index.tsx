export const Navbar = () => {
  return (
    <div className="md: flex  justify-between  bg-slate-100  p-6 md:p-8 light:bg-slate-800 shadow-lg">
      <div className="flex justify-start">
        <image src="public/next.svg" alt="logo agua limpa" srcSet="" />
      </div>
      <div className="flex justify-end">
        <div>
          <button className="text-blue-700  p-4">Home</button>
        </div>
        <div>
          <button className="text-blue-700  p-4">Ações</button>
        </div>
        <div>
          <button className="text-blue-700  p-4">Técnicas</button>
        </div>
        <div>
          <button className="text-blue-700  p-4">Parceiros</button>
        </div>
        <div>
          <button
            className="bg-blue-400 box-border h-13 w-28 p-4 text-white-700 rounded peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white justify-stretch 
"
          >
            Pesquisar 
          </button>
        </div>
      </div>
    </div>
  );
};