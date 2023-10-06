
import { AiOutlineClose } from "react-icons/ai"

const Modal = ({
    open,
    setOpen,
    children,
    title
}) => {


    return (
        <>
            <div
                style={{
                    transition: "opacity .5s ease-in"
                }}
                className={`fixed top-0 left-0 bg-black/50 w-full h-screen opacity-${!open ? "0" : "50"} ${!open && "hidden"}`}
            ></div>
            <div className={`w-full h-screen transition-all fixed top-0 left-0 grid place-content-center delay-500 translate-x- ${!open ? " -translate-y-[100%]" : "translate-y-0"}`}>
                <div className="w-[40rem] bg-white rounded-xl overflow-hidden">
                    <div className="bg-gray-100 p-4 flex items-center">
                        <h1 className="text-xl">
                            {title}
                        </h1>
                        <button className="ms-auto hover:rotate-180 transition-all duration-400" onClick={() => setOpen(false)} >
                            <AiOutlineClose size={20} />
                        </button>
                    </div>
                    <div className="p-4 h-[50dvh] overflow-y-auto my-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Modal