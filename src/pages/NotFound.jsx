

import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-5">
      <h1 className="text-6xl font-bold bg-white">404</h1>
      <p className="text-3xl">Afsuski bunday sahifa mavjud emas!!!</p>
      <button className="btn btn-outline btn-primary">
        <NavLink to={"/"} className={"text-[#000000]"}>
          Asosiy sahifaga qaytish
        </NavLink>
      </button>
    </div>
  );
}

export default NotFound;
