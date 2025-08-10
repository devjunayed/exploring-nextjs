import Counter from "@/components/Counter/Counter"

export const metadata = {
  title: "Home Page"
}

const HomePage = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center dark:text-white bg-slate-800 p-10 absolute top-[4rem] w-full">Welcome to Next js</h1>
      <Counter />
    </div>
  )
}

export default HomePage