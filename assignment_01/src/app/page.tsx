export default function Home() {
  return (
    <div className="top pt-8"  >
      <div className="flex justify-between mx-10">
        <div className="font-bold text-3xl hover:outline rounded md p-2" id="logo">iceCola</div>
        <ul className="flex ">
          <li id="li" className="mx-4 mt-3 font-bold text-2l hover:outline rounded md p-2">Home</li>
          <li id="li" className="mx-4 mt-3 font-bold text-2l hover:outline rounded md p-2">About </li>
          <li id="li" className="mx-4 mt-3 font-bold text-2l hover:outline rounded md p-2">Menu</li>
          <li id="li" className="mx-4 mt-3 font-bold text-2l hover:outline rounded md p-2">Contact </li>
        </ul>
        <button id="btn" className="text-2l font-bold outline rounded md p-2">Explore more</button>
      </div>
      <div className="gape">
        <h1 className="font-bold text-5xl text-center mt-20 pt-24 ">Sweet Delights: Endless Smiles</h1>
        <p className="text-center  w-3/4 mx-auto"><br />Join the Ice Cream Revolution.Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches.It's a sweet, creamy, and rich dessert that can be enjoyed any time of the year. Ice cream is also versatile, and can be used in many different recipes and dishes. Some of the reasons why people love ice cream include its great flavor and ability to cool down on hot summer days.</p>
      </div>
      <div className="hero_section">
        <div className="box flex-block ">
          <div className="box1 mx-8 text-center py-8 my-3 ">Creamy</div>
          <div className="box2 mx-8 text-center py-8  my-3">Crunchy</div>
        </div>
      </div>
    </div>
  );
}
