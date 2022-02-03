import React, { Component } from 'react';
import Image from "../Grey.png"


export default class Events extends Component {
  render() {
    return  <div className='container'>


                <div>
                    <h1 className='text-center display-1'>
                        ETKİNLİKLER
                        <hr/>
                    </h1>
                </div>

                <div className='row gx-5 justify-content-center'>
                    <div className='col my-5 mx-2 col-md-6 col-lg-4'>

                            <div className="card">
                                <img src={Image} className="card-img-top" alt="..."></img>
                                <div className="card-body">

                                    <h1>
                                        ETKİNLİK ADI
                                    </h1>
                                    
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#demo1" role="button" aria-expanded="false" aria-controls="demo1">
                                        ETKİNLİK DETAY
                                    
                                    </a>


                                    

                                    <div id="demo1" className="collapse">
                                        <hr/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl justo, malesuada at tortor et, fringilla fringilla mauris. 
                                        Duis a tellus ac lacus tempus lacinia vitae nec ante. Vivamus ex ipsum, semper et venenatis eget, gravida et nunc.
                                        Curabitur vulputate magna nunc, et feugiat ex ultricies in. Quisque eget est elementum, pharetra massa quis, commodo massa
                                    </div>  
                                    
                                    
                                    
                                    
                                </div>
                            </div>



                    </div>
                    <div className='col-4 my-5 mx-2 col-md-6 col-lg-4'>
                            
                            <div className="card">
                                <img src={Image} className="card-img-top" alt="..."></img>
                                <div className="card-body">

                                    <h1>
                                            ETKİNLİK ADI
                                    </h1>
                                    
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#demo2" role="button" aria-expanded="false" aria-controls="demo2">
                                        ETKİNLİK DETAY
                                    
                                    </a>


                                    

                                    <div id="demo2" className="collapse">
                                        <hr/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl justo, malesuada at tortor et, fringilla fringilla mauris. 
                                        Duis a tellus ac lacus tempus lacinia vitae nec ante. Vivamus ex ipsum, semper et venenatis eget, gravida et nunc.
                                        Curabitur vulputate magna nunc, et feugiat ex ultricies in. Quisque eget est elementum, pharetra massa quis, commodo massa
                                    </div>  
                                    
                                    
                                    
                                    
                                </div>
                            </div>


                        
                    </div>
                    <div className='col-4 my-5 mx-2 col-md-6 col-lg-4'>

                            <div className="card">
                                <img src={Image} className="card-img-top" alt="..."></img>
                                <div className="card-body">

                                    <h1>
                                            ETKİNLİK ADI
                                    </h1>
                                    
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#demo3" role="button" aria-expanded="false" aria-controls="demo3">
                                        ETKİNLİK DETAY
                                    
                                    </a>


                                    

                                    <div id="demo3" className="collapse">
                                        <hr/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl justo, malesuada at tortor et, fringilla fringilla mauris. 
                                        Duis a tellus ac lacus tempus lacinia vitae nec ante. Vivamus ex ipsum, semper et venenatis eget, gravida et nunc.
                                        Curabitur vulputate magna nunc, et feugiat ex ultricies in. Quisque eget est elementum, pharetra massa quis, commodo massa
                                    </div>  
                                    
                                    
                                    
                                    
                                </div>
                            </div>

                        
                    </div>
                    <div className='col-4 my-5 mx-2 col-md-6 col-lg-4'>

                            <div className="card">
                                <img src={Image} className="card-img-top" alt="..."></img>
                                <div className="card-body">

                                    <h1>
                                            ETKİNLİK ADI
                                    </h1>
                                        
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#demo4" role="button" aria-expanded="false" aria-controls="demo4">
                                        ETKİNLİK DETAY
                                        
                                    </a>


                                    

                                    <div id="demo4" className="collapse">
                                        <hr/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl justo, malesuada at tortor et, fringilla fringilla mauris. 
                                        Duis a tellus ac lacus tempus lacinia vitae nec ante. Vivamus ex ipsum, semper et venenatis eget, gravida et nunc.
                                        Curabitur vulputate magna nunc, et feugiat ex ultricies in. Quisque eget est elementum, pharetra massa quis, commodo massa
                                    </div>  
                                    
                                    
                                    
                                    
                                </div>
                            </div>

                        
                    </div>


                    <div className='col-4 my-5 mx-2 col-md-6 col-lg-4'>

                            <div className="card">
                                <img src={Image} className="card-img-top" alt="..."></img>
                                <div className="card-body">

                                <h1>
                                        ETKİNLİK ADI
                                </h1>
                                    
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#demo5" role="button" aria-expanded="false" aria-controls="demo5">
                                    ETKİNLİK DETAY
                                    
                                </a>


                                    

                                    <div id="demo5" className="collapse">
                                        <hr/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl justo, malesuada at tortor et, fringilla fringilla mauris. 
                                        Duis a tellus ac lacus tempus lacinia vitae nec ante. Vivamus ex ipsum, semper et venenatis eget, gravida et nunc.
                                        Curabitur vulputate magna nunc, et feugiat ex ultricies in. Quisque eget est elementum, pharetra massa quis, commodo massa
                                    </div>  
                                    
                                    
                                    
                                    
                                </div>
                            </div>

                            
                    </div>

                </div> 

           
        </div>


            

    ;
  }
}
