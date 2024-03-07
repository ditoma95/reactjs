/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
export default function TechnoList(props) {
  const {technos} = props;
  return (
    <section className="text-gray-600 body-font">
        <h1 className="mt-6 text-2xl text-center text-black">LISTES DES TOUTES LES TECHNOLOGIES AJOUTER</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4" >
        {
          technos.map(item => (
            <div className="p-4 xl:w-1/3 md:w-1/2" key={item.technoname}>
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-green-500 bg-green-100 rounded-full">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">{item.technoname}</h2>
                <p className="text-base leading-relaxed">{item.technocategory}</p>
              </div>
            </div>
          ))
        }
        </div>
    </div>
  </section>
  )
}

