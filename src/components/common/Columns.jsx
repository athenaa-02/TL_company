
function Columns() {
  return (
   <>
         <picture className="block w-full ">
        <source
          media="(min-width: 1200px)"
          srcSet="/columns/columns-big-desktop.png"
        />
        <source
          media="(min-width: 425px)"
          srcSet="/columns/columns-desktop.png"
        />
        <img
          src="/columns/columns-mobile.png"
          alt="Our practice areas"
          className="block h-auto w-full m-auto max-h-130 lg:max-h-150 lg:max-w-500"
        />
      </picture>
   </>
  )
}

export default Columns