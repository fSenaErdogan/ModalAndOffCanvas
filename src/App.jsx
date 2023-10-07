import { useState } from "react"
import Modal from "./components/Modal"
import { OffCanvasStart, OffCanvasEnd, OffCanvasTop, OffCanvasBottom } from "./components/OffCanvas"


function App() {

  const [openModal, setOpenModal] = useState(false)
  const [openOffCanvasStart, setOpenOffCanvasStart] = useState(false)
  const [openOffCanvasEnd, setOpenOffCanvasEnd] = useState(false)
  const [openOffCanvasTop, setOpenOffCanvasTop] = useState(false)
  const [openOffCanvasBottom, setOpenOffCanvasBottom] = useState(false)

  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="flex items-center gap-4 w-full">

        <button
          onClick={() => setOpenModal(true)}
          className="bg-orange-500 hover:bg-orange-600 transition-all px-4 h-11 text-xl text-white rounded-md" >
          Modal Ac
        </button>
        <Modal headerColor="bg-orange-100" shadowColor="bg-orange-800/60" title="Modal Title" open={openModal} setOpen={setOpenModal} >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
        </Modal>


        <button
          onClick={() => setOpenOffCanvasStart(true)}
          className="bg-red-500 hover:bg-red-600 transition-all px-4 h-11 text-xl text-white rounded-md" >
          OffCanvasStart Ac
        </button>
        <OffCanvasStart headerColor="bg-red-100" shadowColor="bg-red-800/60" title="OffCanvasStart Title" open={openOffCanvasStart} setOpen={setOpenOffCanvasStart} >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
        </OffCanvasStart>


        <button
          onClick={() => setOpenOffCanvasEnd(true)}
          className="bg-green-500 hover:bg-green-600 transition-all px-4 h-11 text-xl text-white rounded-md" >
          OffCanvasEnd Ac
        </button>
        <OffCanvasEnd headerColor="bg-green-100" shadowColor="bg-green-800/60" title="OffCanvasEnd Title" open={openOffCanvasEnd} setOpen={setOpenOffCanvasEnd} >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
        </OffCanvasEnd>


        <button
          onClick={() => setOpenOffCanvasTop(true)}
          className="bg-blue-500 hover:bg-blue-600 transition-all px-4 h-11 text-xl text-white rounded-md" >
          OffCanvasTop Ac
        </button>
        <OffCanvasTop headerColor="bg-blue-100" shadowColor="bg-blue-800/60" title="OffCanvasTop Title" open={openOffCanvasTop} setOpen={setOpenOffCanvasTop} >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
        </OffCanvasTop>


        <button
          onClick={() => setOpenOffCanvasBottom(true)}
          className="bg-purple-500 hover:bg-purple-600 transition-all px-4 h-11 text-xl text-white rounded-md" >
          OffCanvasBottom Ac
        </button>
        <OffCanvasBottom headerColor="bg-purple-100" shadowColor="bg-purple-800/60" title="OffCanvasBottom Title" open={openOffCanvasBottom} setOpen={setOpenOffCanvasBottom}  >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quas, mollitia inventore eligendi distinctio, ad perspiciatis id saepe officiis laudantium adipisci, quisquam nihil voluptates repellendus odit asperiores porro voluptas obcaecati.
          </p>
        </OffCanvasBottom>

      </div>
    </div>
  )
}

export default App
