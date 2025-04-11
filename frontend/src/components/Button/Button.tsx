
type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void
}
const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="cursor-pointer w-[120px] h-[45px] border-black border-solid border-2 rounded-2xl text-white bg-[#7a7a7a] hover:bg-white hover:text-[#7a7a7a]"
      type="submit"
      onClick={onClick}
    >{children}
    </button>
  )
}

export default Button