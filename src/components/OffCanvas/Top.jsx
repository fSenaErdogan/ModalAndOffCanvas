
import { AiOutlineClose } from "react-icons/ai"

const OffCanvasTop = ({
    open,
    setOpen,
    children,
    title,
    headerColor = "bg-gray-100",
    shadowColor="bg-black/50"
}) => {


    return (
        <>
            <div
                style={{
                    transition: "opacity .5s ease-in"
                }}
                className={`fixed top-0 left-0  ${shadowColor} w-full h-screen opacity-${!open ? "0" : "50"} ${!open && "hidden"}`}
            ></div>



            <div className={`w-full h-screen transition-all fixed top-0 right-0 delay-500 translate-x- ${!open ? " -translate-y-[100%]" : "-translate-y-0"}`}>
                <div className="h-[20rem] w-full bg-white rounded-b-xl overflow-hidden ms-auto">
                    <div className={`${headerColor} p-4 flex items-center`}>
                        <h1 className="text-xl">
                            {title}
                        </h1>
                        <button className="ms-auto hover:rotate-180 transition-all duration-400" onClick={() => setOpen(false)} >
                            <AiOutlineClose size={20} />
                        </button>
                    </div>
                    <div className="p-4 h-[35dvh] overflow-y-auto my-3">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}


export default OffCanvasTop