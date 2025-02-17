import NavLists from "../components/NavLists";
export default function Ozbekiston() {
  return (
    <div className="container">
      <NavLists />
      <h2 className="font-bold text-9xsl justify-center ml-8 ">
        O'zbekiston yangiliklari
      </h2>
    
      <img
        className="ml-8 pb-4"
        src="https://storage.kun.uz/source/11/lnA-pmNybyiBXRCFjz4z718ypUX--hR5.jpg"
        alt=""
        width={"600px"}
        height={"100px"}
      ></img>
      <p className="font-bold gap-5 ml-8  ">
      Sirdaryoda o‘qituvchiga qo‘l ko‘targan ayol ruhiy kasalliklar shifoxonasiga joylashtirildi
      </p>
    </div>
  );
}
