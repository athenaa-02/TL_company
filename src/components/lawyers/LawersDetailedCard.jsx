

function LawersDetailedCard() {
  return (
     <section className="bg-white px-6 py-16 sm:px-10 md:py-24">
      <article className="mx-auto flex w-full max-w-[1020px] flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
        <div className="order-2 flex-1 space-y-6 md:order-1">
          <div>
            <h3 className="font-volkhov text-2xl font-bold uppercase leading-tight text-heading sm:text-[28px]">
              Giorgi Bjhalava
            </h3>
            <p className="mt-5 text-xs leading-[1.8] text-text-basic sm:text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium consequuntur voluptate earum numquam labore deserunt
              distinctio, harum tempora ducimus ullam, nemo eos ratione vel
              corporis, eius eligendi voluptates possimus mollitia!
            </p>
            <p className="mt-2 text-xs leading-[1.8] text-text-basic sm:text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium consequuntur voluptate earum numquam labore deserunt
              distinctio, harum tempora ducimus ullam, nemo eos ratione vel
              corporis, eius eligendi voluptates possimus mollitia!
            </p>
          </div>
          <div>
            <h4 className="font-volkhov text-xl font-bold leading-tight text-accent sm:text-2xl">
              Family law
            </h4>
            <p className="mt-3 text-xs leading-[1.8] text-text-basic sm:text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium consequuntur voluptate earum numquam labore deserunt
              distinctio, harum tempora ducimus ullam, nemo eos ratione vel
              corporis, eius eligendi voluptates possimus mollitia!
            </p>
          </div>
        </div>
        <div className="order-1 mx-auto aspect-[3/4] w-full max-w-[460px] overflow-hidden md:order-2 md:mx-0 md:w-[44%] md:flex-none">
          <img
            src="/homepage/giorgi.jpg"
            alt="Giorgi Bjhalava"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </article>
    </section>
  )
}

export default LawersDetailedCard