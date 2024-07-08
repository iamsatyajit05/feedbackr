import ModalWithAbsoulte from "@/components/examples/modal-with-absoulte";
import ModalWithStatic from "@/components/examples/modal-with-static";

export default function ExamplesPage() {
  return (
      <div className="z-10 max-w-6xl m-auto flex flex-col items-center justify-center gap-10 lg:gap-12 text-center">
        <h1 className="text-center font-extrabold text-3xl md:text-5xl px-8 py-12 lg:py-24">
          Explore Our Feedback Widgets
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 lg:mb-24 px-4">
          <ModalWithStatic />
          <ModalWithAbsoulte />
          <div>
            <div className="rounded-xl bg-gray-50 border p-4 h-full flex justify-center items-center">
              <p>More examples coming soon!</p>
            </div>
          </div>
        </div>
      </div>
  )
}