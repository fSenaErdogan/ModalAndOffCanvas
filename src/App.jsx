import { useState } from "react"
import Modal from "./components/Modal"
import {OffCanvasStart, OffCanvasEnd, OffCanvasTop, OffCanvasBottom} from "./components/OffCanvas"


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
        <Modal title="Modal Title" open={openModal} setOpen={setOpenModal} >
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
        <OffCanvasStart open={openOffCanvasStart} setOpen={setOpenOffCanvasStart} title="OffCanvasStart Title" >
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
        <OffCanvasEnd open={openOffCanvasEnd} setOpen={setOpenOffCanvasEnd} title="OffCanvasEnd Title" >
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
        <OffCanvasTop open={openOffCanvasTop} setOpen={setOpenOffCanvasTop} title="OffCanvasTop Title" >
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
<OffCanvasBottom headerColor="bg-purple-100" open={openOffCanvasBottom} setOpen={setOpenOffCanvasBottom} title="OffCanvasBottom Title" >
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
