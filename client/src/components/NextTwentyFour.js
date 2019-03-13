import React from 'react'

const NextTwentyFour = ({ hours }) => {
  return (
    <div className="hourly-block">
      {hours.map((hour, index) => {
        return (
          <div key={index} className="hourly-block-items">
            <h3>{hour.tempInC}&deg;</h3>
            <h3>
              <i className="uil uil-snowflake" />
            </h3>
            <h3>{hour.currentTime}:00</h3>
          </div>
        )
      })}
    </div>
  )
}

export default NextTwentyFour
