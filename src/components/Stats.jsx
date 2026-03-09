function Stats({ statRef }) {

  return (

    <div className="flex gap-12">

      <div
        ref={el => statRef.current[0] = el}
        className="opacity-0 translate-y-6"
      >
        <h2 className="text-4xl font-bold">120%</h2>
        <p>Growth</p>
      </div>

      <div
        ref={el => statRef.current[1] = el}
        className="opacity-0 translate-y-6"
      >
        <h2 className="text-4xl font-bold">85%</h2>
        <p>Satisfaction</p>
      </div>

      <div
        ref={el => statRef.current[2] = el}
        className="opacity-0 translate-y-6"
      >
        <h2 className="text-4xl font-bold">50K</h2>
        <p>Users</p>
      </div>

    </div>

  )

}

export default Stats