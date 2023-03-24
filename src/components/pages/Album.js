import React from 'react';
import './Album.css';
import { Link } from 'react-router-dom';

const Album = () => {
  return (
    <div>
      <section className="album">
		    <div className="main">
          <img src="images/dep-diss.jpg" alt="Dissociation ALbum" />
            <div className="album-text">
            <h2>Dissociation</h2>
            <h5>New Album <span>by The Dillinger Escape Plan</span></h5>
            <p>Track listing
All tracks are written by Greg Puciato and Ben Weinman. <br/> <br/>

No.	Title	Length <br /> <br />
1.	"Limerent Death"	4:06 <br />
2.	"Symptom of Terminal Illness"	4:03 <br />
3.	"Wanting Not So Much to as To"	5:23 <br />
4.	"FUGUE"	3:49 <br />
5.	"Low Feels Blvd"	4:05 <br />
6.	"Surrogate"	5:05 <br />
7.	"Honeysuckle"	4:22 <br />
8.	"Manufacturing Discontent"	4:22 <br />
9.	"Apologies Not Included"	3:23 <br />
10.	"Nothing to Forget"	5:15 <br />
11.	"Dissociation"	6:14 <br /> <br /> 
Dissociation personnel according to liner notes. <br />  <br /> 

The Dillinger Escape Plan <br /> <br /> 
Greg Puciato – vocals <br /> 
Ben Weinman – lead guitar <br /> 
Kevin Antreassian – rhythm guitar <br /> 
Liam Wilson – bass <br /> 
Billy Rymer – drums, percussion <br /> 
</p>
          <Link to="/SignUp">
            <button type="button">Buy Now</button>
          </Link>  
          </div>
		    </div>
	    </section>
    </div>
  )
}

export default Album