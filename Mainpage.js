import React, { Component } from 'react';
import image from "../meme.png"

export default class Mainpage extends Component {
  render() {
    return  <div className='container-xxl bg-primary mt-2'>

              <div className="row justify-content-md-center">
                <div className="col-auto bg-danger">
                  <h1>
                  TESTTESTTESTTESTTESTTESTTESTTESTTES
                  </h1>
                </div>
              </div> 

              <div className="row">
                <div className="col bg-warning">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero est, feugiat vel ultricies in, blandit a est. Nam ullamcorper ex a erat hendrerit auctor. Vestibulum tincidunt eu nibh et mattis. Aliquam posuere libero vitae nisl rutrum semper. Ut dictum sapien quis maximus interdum. Donec sed imperdiet quam, a tristique metus. Donec hendrerit semper finibus. Ut lorem leo, tincidunt pellentesque maximus ornare, mattis id risus. Quisque finibus felis eget venenatis placerat. Etiam dapibus odio nec turpis feugiat mattis. Suspendisse potenti. Nullam laoreet tellus at facilisis pulvinar. Integer at velit eu orci dignissim sodales convallis quis neque. Cras consectetur at lacus at pretium. Sed dignissim lorem ut nisi dignissim, sit amet pulvinar felis tempus.
                  </p>
                </div>
              </div>
                <div className="container px-4 mt-2">
                  <div className="row gx-5">
                    <div className="col">
                      <div className="p-3 border bg-light">Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.</div>
                    </div>
                    <div className="col mb-2">
                      <div className="p-3 border bg-light">Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. Hokey religions and ancient weapons are no match for a good blaster at your side, kid. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me.</div>
                    </div>
                  </div>
                </div>
              <div className="clearfix">
                <img src={image} className="col-md-6 float-md-end mb-3 ms-md-3" alt="..."></img>  
                <p>
                A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
                </p>

                <p>
                As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
                </p>

                <p>
                And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
                </p>
              </div>
              <div className="container">

                <div className="row">
                  <div className="col">
                  <li><strong> Benefits of telling the truth to your Professors </strong></li>
                    <ul>
                      <li>none</li>
                      <li>not a single benefit</li>

                    </ul>
                  </div>
                  <div className="col order-5">
                  <li><strong> Benefits of lying to your Professors </strong></li>
                    <ul>
                      <li>Higher grades</li>
                      <li>Resting days</li>
                      <li>A Good life without any academic personnel</li>
                      <li>Being Social</li>
                    </ul>
                  </div>
                  <div className="col order-1">
                  <li><strong> WHY you should lie to your Professors </strong></li>
                    <ul>
                      <li>They are annoying</li>
                      <li>They are VERY annoying</li>
                      <li>Free waffles</li>
                    </ul>

                  </div>
                </div>
              </div>
                

              </div>

             



 
    ;
  }  
}
