import { useParams } from 'react-router-dom';

function Navbar() {
  const myParam = JSON.parse(localStorage.getItem('myParam'))
   console.log("myParam in nav",myParam, typeof(myParam));
   var orders="/orders/"+myParam
   var confirmation="/confirmation/"+myParam
   var home="/"+myParam
  function onLinkClick(e) {
  //  e.preventDefault();
   // further processing happens here
}
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={home}onClick={onLinkClick}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={confirmation} onClick={onLinkClick}>Confirmation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={orders}>Orders</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;