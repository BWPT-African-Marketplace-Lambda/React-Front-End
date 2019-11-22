import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteItems } from '../actions/deleteItems';
import api from '../utils/api';

function DeleteItems(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        api()
            .get("/items")
            .then(res => {
                setItems(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

        const deletedItem = (item, id) => {
            const itemDeleted = items.find((item) => item.id === id)

            setItems(items.filter((item) => item.id !== id))

            props.deleteItems(item, id)
        }
    

    return <button onClick={deletedItem}>X</button>
}

function mapStateToProps(state) {
    return {
        deletedItem: state.deleteItem.deletedItem
    }
}

const mapDispatchToProps = {
    deleteItems
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(deleteItems);