import React from 'react'

function Circles({ w = 920, h = 540 }) {
    return (
        <div className=''>
            <svg id="visual" viewBox="0 0 960 540" width={w} height={h} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="none"></rect><g fill="#CCCCCC"><circle r="43" cx="138" cy="472"></circle><circle r="8" cx="410" cy="32"></circle><circle r="14" cx="874" cy="73"></circle><circle r="36" cx="441" cy="252"></circle><circle r="19" cx="684" cy="203"></circle><circle r="35" cx="731" cy="493"></circle><circle r="36" cx="446" cy="516"></circle><circle r="27" cx="3" cy="254"></circle><circle r="23" cx="871" cy="469"></circle><circle r="24" cx="471" cy="345"></circle><circle r="34" cx="333" cy="249"></circle><circle r="35" cx="220" cy="178"></circle><circle r="15" cx="282" cy="525"></circle><circle r="23" cx="580" cy="1"></circle><circle r="14" cx="1" cy="529"></circle><circle r="19" cx="894" cy="247"></circle><circle r="15" cx="769" cy="366"></circle><circle r="19" cx="301" cy="425"></circle><circle r="31" cx="772" cy="140"></circle><circle r="24" cx="234" cy="273"></circle><circle r="22" cx="524" cy="411"></circle><circle r="40" cx="292" cy="110"></circle></g></svg>
        </div>
    )
}

export default Circles;