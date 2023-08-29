export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-16 bg-red-500 text-white absolute bottom-0 left-0 w-full gap-1 text-sm">
      <span>This project has been deprecated. Please visit the</span>
      <a
        className="font-bold underline cursor-pointer z-50"
        href="https://alexmaldonado.dev/"
      >
        New Site
      </a>
    </div>
  )
}
