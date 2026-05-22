const Navbar = () => {
  return (
    <div className="py-4 border-b border-black/5 flex items-center gap-4 justify-between">
      <h3 className="text-2xl font-bold text-red-500">The Dojo Blog</h3>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span>Home</span>
        <button>New Blog</button>
      </div>
    </div>
  )
}

export default Navbar