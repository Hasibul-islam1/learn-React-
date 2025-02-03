const Loop=()=>{
    const city=["Tokyo", "Paris", "New York City", "Mumbai", "Sydney", "Cairo", "Rio de Janeiro", "Moscow", "Cape Town", "Toronto"];
   return(
   <div>
        <ul>
          {
              city.map((itme,i)=>{
                return <li key={i}>{itme}</li>
            })
          }
        </ul>
    </div>
    )
}

export default Loop;