import React from 'react'

const InformationPage = (props) => {

    const displayPhoneBookData = props.phoneBookData.map((entry) =>
        <div className="phonebook-container">
            <div className="phonebook">
                <h3 key={entry.phone}>{entry.firstName}</h3>
            </div>
            <div className="phonebook">
                <h3>{entry.lastName}</h3>
            </div>
            <div className="phonebook">
                <h3>{entry.phone}</h3>
            </div>
        </div>
    )

    return (
        <div className="info-container">
            <div className="phonebook-headers">
                <h3>First Name:</h3>
                <h3>Last Name:</h3>
                <h3>Phone#:</h3>
            </div>
            {displayPhoneBookData}
        </div>
    )
}

export default InformationPage