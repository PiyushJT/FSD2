// n= lju
    // output -> lju
    //          "Lju"
    //          {n}
    //           n
    //           lju test
    //           LJU
function Comp4() {
    const n = "lju";
  return (
   <>
    <h1>{n}</h1>
    <h1>"{n[0].toUpperCase() + n[1]+n[2]}"</h1>
    <h1>{"{n}"}</h1>
    <h1>{"n"}</h1>
    <h1>{n + " test"}</h1>
    <h1>{n.toUpperCase()}</h1>
    <h1>{[1,2,3]}</h1>
    <h1>{[1,2,3].join(",")}</h1>
   </>
  )
}
export default Comp4;