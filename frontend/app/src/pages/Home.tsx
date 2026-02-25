export default function Home() {

  function testAPI() {
    fetch("/testAPI").then((data) => {
      console.log(data)
    })
  }

  return (
    <>
      <div className="bg-black text-white m-auto">
        <button className="bg-amber-900" onClick={testAPI}>click me!</button>
      </div>
    </>

  )
}
