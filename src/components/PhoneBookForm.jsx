import React from 'react'

const PhoneBookForm = (props) => {

    return (
        <>
            <form onSubmit={(e) => props.updatePhoneBook(e)}>
                <label>
                    First Name
                    <input type="text" value={props.firstName} onChange={e => props.setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name
                    <input type="text" value={props.lastName} onChange={e => props.setLastName(e.target.value)} />
                </label>
                <label>
                    Phone Number
                    <input type="text" value={props.userPhone} onChange={e => props.setUserPhone(e.target.value)} />
                </label>
                <input type="submit" value="submit" />
            </form>
        </>
    )
}

export default PhoneBookForm