import menu from "../../assets/menu.svg"
const Navbar= () => {
  return (
    <div className="w-[90%] mx-auto mt-5 flex justify-between items-center">
        <div>
            <img src="/logo1.svg" alt="" className="h-12"/>
        </div>
        <div>
            <img src={menu} alt="navbar icon" className="h-6 w-6 md:h-9 md:w-9"/>
        </div>
    </div>
  )
}
export default Navbar