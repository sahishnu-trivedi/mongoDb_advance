import React from 'react'

const Home = () => {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)]">
        <form className="w-full grid grid-cols-5 gap-3 my-4">
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Book Name</label>
                <input type="text" placeholder="Book Name" className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2"/>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Book Title</label>
                <input type="text" placeholder="Book Title" className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2" />
            </div>
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Author</label>
                <input type="text" placeholder="Author" className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2"/>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Selling Price</label>
                <input type="text" placeholder="Selling Price" className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2"/>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Publish Date</label>
                <input type="date" placeholder="Selling Price" className="w-full border-2 border-gray-300 text-gray-800  rounded-sm outline-none p-2"/>
            </div>
        </form>
        <div className="w-full flex justify-end">
          <button type='button' className="bg-gray-700 text-white h-9 w-22 rounded-md"> SUBMIT </button>
        </div>

        <div className="w-full mt-10">
            <table className="w-full bg-white divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book Name</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book Title</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Selling Price</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Publish Date</th>
                        <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-200">
                        <td className="px-6 py-3 whitespace-nowrap">Name</td>
                        <td className="px-6 py-3 whitespace-nowrap">Name</td>
                        <td className="px-6 py-3 whitespace-nowrap">Name</td>
                        <td className="px-6 py-3 whitespace-nowrap">Name</td>
                        <td className="px-6 py-3 whitespace-nowrap">Name</td>
                        <td className="px-6 py-3 whitespace-nowrap">Name</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
  )
}

export default Home