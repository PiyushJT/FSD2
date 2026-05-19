function comp1() {
    const name = "react";
  return (
    <>
      {/* 1. return single root element */}
      <h1>Hii</h1>
      <p>This is a paragraph.</p>
      {/* 2. close all tags */}
      <img src="image.jpg"/>
      <input type="submit" name="username" />
      {/* 3. use camelCase attribute names */}
      <h1 className="pqr">hii</h1>
      {/* 4. passing js expressions */}
        <h1>{name}</h1>
      {/* 5. JSX styling */}
        <h1 style={{color:"red"}}>hii</h1>
      {/* 6. comments */}
    </>
  );
}
export default comp1;