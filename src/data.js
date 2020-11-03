import React from 'react';
import { db ,auth } from './Firebase/firebaseConfig';


class DataFound extends React.Component{
    state = {
        contacts: null
    }

    componentDidMount(){
        console.log('mounted')
        db.collection('contacts')
         .get()
         .then( snapshot => {
             const contacts = []
             snapshot.forEach(
                 doc => {
                     const data = doc.data()
                     contacts.push(data)

                 }
             )
             this.setState({ contacts: contacts})
         } )
         .catch(error => console.log(error))
    }
    render(){
        return(
            <div className='Client'>
            <p className='P1'> Clients</p>
            {
                this.state.contacts &&
                this.state.contacts.map(
                    contacts => {
                        return (
                            <div>
                                <p>{contacts.fName}</p>
                                <p>{contacts.email}</p>
                                <p>{contacts.cNumber}</p>
                                <p>{contacts.fromDate}</p>
                                <p>{contacts.toDate}</p>
                            </div>
                        )
                    }
                )
            }
            </div>
        )
    }
}
 export default DataFound
