import React from 'react'

function Nav() {
  return (
    <main>
        <div className="navbar">
            <div className="details">
                <img className='profile-pic' src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1700116548~exp=1700117148~hmac=6c52253751be59913a52904d41b6ef0ca50a38c4451294a71c46d979be72f0c1' alt="profile" />
              
                <div className='detail'>
                <p><strong>Suresh Khanna</strong></p>
                <p>Admin</p>
                <p><strong>VP-Technology</strong></p>
                </div>
            </div>
            <h2><img src='./KAIWA.png'/>
            <p>Conservational AI</p></h2>
        </div>
    </main>
  )
}

export default Nav