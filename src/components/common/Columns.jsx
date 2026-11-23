
function Columns() {
  return (
   <>
       <picture className="block w-full ">
        <source
          media="(min-width: 1200px)"
          srcSet="/columns/columns-big-desktop.webp"
        />
        <source
          media="(min-width: 425px)"
          srcSet="/columns/columns-desktop.webp"
        />
        <img
          src="/columns/columns-mobile.webp"
          alt="Our practice areas"
          className="block h-auto w-full m-auto max-h-130 lg:max-h-150 lg:max-w-500"
        />
      </picture>
   </>
  )
}

export default Columns