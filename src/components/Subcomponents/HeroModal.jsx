import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import GIFImage from "../../assets/ezgif-3-019449de0c.webp";
import PropTypes from "prop-types";
import CrossIcon from "../../utils/CrossIcon";

export default function HeroModal({ isOpen, setIsOpen }) {
  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none "
          onClose={close}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-6xl rounded-xl bg-white/5 p-0 backdrop-blur-2xl">
                  <img className="w-full h-auto" src={GIFImage} alt="" />
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <CrossIcon color="text-black" />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

HeroModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
