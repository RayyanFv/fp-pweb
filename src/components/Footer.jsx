import React from 'react'


function Footer() {
    return (
        <>
    <div className='Footer mt-4 mb-10 mx-44'>
            <div className='Footer1 flex flex-row mb-2'>
                <div className='font-bold mr-4'>Follow Us</div>
                <div className='font-bold mx-2'>Foto Instagram</div>
                <div className='font-bold mx-2'>Foto Github</div>
            </div>
            <div className='border-b-2 my-4 w-au'></div>
            <input class="border-2 border-white py-3 px-4 w-full" placeholder="Send to us an email" name="send" type="text" required></input>
            <div className='mr-4 my-3' style={{ fontSize: '12px' }}>I accept Google's Terms and Conditions and acknowledge that my information will be used in accordance with Google's Privacy Policy.</div>
            <div className='border-b-2 my-4 w-au'></div>
            <div className='Footer1 flex flex-row mb-2'>
                <div className='font-bold mr-4'>Z-Sharp</div>
                <div className='font-light mx-2'>Privacy</div>
                <div className='font-light mx-2'>Terms</div>
            </div>
    </div>
        </>
      
    )
  }
  
  export default Footer