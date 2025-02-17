import NavLists from "../components/NavLists";

// function Jahon() {
//   return (
//     <div className="container">
//       <NavLists />
//     </div>
//   );
// }
// export default Jahon;
     
export default function Jahon() {
  return (
    <div className="container">
      <NavLists />
      <h2 className="font-bold text-9xsl justify-center ml-8 ">
        Jahon yangiliklari
      </h2>
    
      <img
        className="ml-8 pb-4"
        src="https://storage.kun.uz/source/11/F5VPyVON434-Psx5R3i32SY54Z2rBGAA.jpg"
        alt=""
        width={"600px"}
        height={"100px"}
      ></img>
      <p className="font-bold gap-5 ml-8  ">
      Ukraina tabiiy resurslardan foydalanish borasida AQSh bilan bahslashmoqda
      </p>
    </div>
  );
}
