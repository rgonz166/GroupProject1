* {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #333;
    color: #fff;
    height: 100vh;
    line-height: 1.6;
    overflow: hidden;
  }
  
  .container {
    width: 100%;
    height: 100%;
    /* CSS Smooth Scroll */
    overflow-y: scroll; 
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }
  
  .lead {
    font-size: 1.5rem;
  }
  
  .navbar {
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 60px;
    background: rgba(0,0,0,0.3);
  }
  
  .navbar ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: center;
  }
  
  .navbar ul li {
    margin: 0 1rem;
    padding: 1rem;
  }
  
  .navbar ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: #f4f4f4;
  }
  
  .navbar ul li a:hover {
    color: skyblue;
  }
  
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
   
    /* Scroll Snap */
    scroll-snap-align: center;
  }
  
  section h1 {
    font-size: 4rem;
  }
  
  /* Section Images */
  section #home {
    background: url('https://images.theconversation.com/files/202745/original/file-20180122-110106-1gruok4.jpg') no-repeat center center/cover;

  }
  
  section #about {
    background: url('https://images.theconversation.com/files/238672/original/file-20181001-195278-1ehvki.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip') no-repeat center center/cover;;
  }
  
  section#service {
    background: url('https://media.mnn.com/assets/images/2016/05/happy-people-drinking-alcohol.jpg.653x0_q80_crop-smart.jpg') no-repeat center center/cover;;
  }
  
  section#contact {
    background: url('https://i.kinja-img.com/gawker-media/image/upload/s--FeSHGslQ--/c_scale,f_auto,fl_progressive,q_80,w_800/wqmqhdutltcih55prkcz.jpg') no-repeat center center/cover;;
  }
  