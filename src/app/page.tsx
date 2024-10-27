import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Hero from "@/components/Hero"

const page = () => {
  return (
    <div className="bg-stone-400	">
       <Header></Header>
        <h1 className="text-6xl text-center	pt-10 pb-10 ">Introduction</h1>
        <main><Hero></Hero></main>
      <Footer></Footer>     
    </div>
  )
}

export default page
